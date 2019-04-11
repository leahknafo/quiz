import { Observable } from 'rxjs';
export interface MainService {
    set<T>(q: T): Observable<T>;
}