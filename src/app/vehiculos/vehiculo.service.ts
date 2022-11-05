import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
getVehiculos() {
  throw new Error('Method not implemented.');
}

constructor(private http:HttpClient) { }

}
