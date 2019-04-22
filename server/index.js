const express = require('express');
const cors = require('cors');
const PORT = 8888;
const app = express();
var mysql = require('mysql');
const jwt = require('jsonwebtoken');
const JWT_KEY = 'uuuu';
const bodyParser = require('body-parser');

app.use(express.json());

app.use(cors());
app.use(bodyParser());

// app.use(function(req, res, next) {
//     if (req.path === '/login') {
//         next();
//     }
//     else if (!req.headers.authorization) {
//       return res.status(403).json({ error: 'No credentials sent!' });
//     } else {
//         try {
//             const token = jwt.verify(req.headers.authorization.replace('Bearer ', ''), JWT_KEY);
//             next();
//         }
//         catch (ex) {
//             const e = ex;
//             return res.status(401).json({ error: 'Bad credentials' });
//         }
        
//     }
    
//   });
  app.post('/login', function (req, res) {
    const postData = req.body;
    console.log(postData);
    if (postData.username === 'Leah' && postData.password === 'abc123') {
        const token = jwt.sign({ username: 'Leah' }, JWT_KEY);
        res.json(token);
    } else {
        res.status(401).json('go away');
    }
});

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myquiz'
});

connection.connect(function (e, d) {
    if (e) console.log(e);
    console.log('con success');
})


const http = require('http').Server(app);


app.get('/quiz', function (req, res) {
    let sql = "SELECT * FROM quiz"
    connection.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.send(result);
    })
});

app.post('/add', function (req, res) {
    console.log(req.body);
    let sql = "INSERT INTO quiz SET?"
    connection.query(sql, req.body, function (err, result) {
        if (err) throw err;
        res.json("ok");

    })
})


app.listen(PORT, function () {
    console.log('server started at port' + PORT)
})




