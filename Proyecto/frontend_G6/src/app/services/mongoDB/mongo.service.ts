
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MongoService {

  

  constructor(private http: HttpClient) { }
  private MyUrlBackend = 'http://localhost:4000/api/mongo';

  
}