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
// app.get('/todo-list', function (req, res) {
//     var temp=[];
//     var temp2=[];
//     var the_result=undefined;
//         let sql = "SELECT * FROM housework"
//         connection.query(sql, function (err, result, fields) {
//             if (err) throw err;
//             for(let i=0; i<result.length; i++){
//             temp2.push(result[i].id_family_member)
//             }
//             the_result=result;
//         })
//         setTimeout(function(){
//         for(let i=0; i<temp2.length; i++){
//         let sql1 = "SELECT `name` FROM `family-members` WHERE id = " + temp2[i]
//         connection.query(sql1, function (err, result2, fields) {
//             if (err) throw err;
//             temp.push(result2) 
//         }) 
//     }
//     setTimeout(function(){
//     for(let i=0; i<temp.length; i++){
//     the_result[i].id_family_member = temp[i][0].name;
//     }
//     res.send(the_result);
//     }, 100);
//     }, 50);
//     });
    
    
//     app.post('/add-todo', function (req, res) {
//         let sql1 = "SELECT `id` FROM `family-members` WHERE name ='"+ req.body.id_family_member +"'"
//         connection.query(sql1, function (err, result3, fields) {
//             if (err) throw err;
//             console.log(result3)
//            req.body.id_family_member=result3[0].id;
//            console.log(req.body)
//         })
//         setTimeout(function(){
//         let sql = "INSERT INTO housework SET?"
//         connection.query(sql, req.body, function (err, result) {
//             if (err) throw err;
//             res.json("ok");
    
//         })
//     }, 200);
//     })


app.listen(PORT, function () {
    console.log('server started at port' + PORT)
})




