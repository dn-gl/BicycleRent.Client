import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Bicycle } from '../models/bicycle';
import { BicycleType } from '../models/bicycle-type';

@Injectable({
  providedIn: 'root'
})
export class BicycleService {

  constructor(private http: HttpClient) { }

  getAvailable(): Observable<Bicycle[]>{
    return this.http.get<Bicycle[]>(`${environment.apiUrl}/api/bicycle/GetAvailable`);
  }

  getRented(): Observable<Bicycle[]>{
    return this.http.get<Bicycle[]>(`${environment.apiUrl}/api/bicycle/GetRented`);
  }

  delete(id: string){
    return this.http.delete(`${environment.apiUrl}/api/bicycle/`+ id);
  }

  update(bicycle: Bicycle){
    return this.http.post(`${environment.apiUrl}/api/bicycle/UpdateRentalStatus`, bicycle);
  }

  create(bicycle: Bicycle): Observable<Bicycle>{
    return this.http.post<Bicycle>(`${environment.apiUrl}/api/bicycle/Create`, bicycle);
  }

  getTypes(): Observable<BicycleType[]>{
    return this.http.get<BicycleType[]>(`${environment.apiUrl}/api/bicycle/GetTypes`);
  }
}
