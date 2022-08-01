import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Solicitud } from '../models/solicitud'
import{HistorialComentarios}from'../models/historialComentarios'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  constructor(private http: HttpClient) {}

  //urlSolicitud:string="http://172.16.200.62:8085/api/Solicitud";
  //urlHistorialComenta:string=""
  urlSolicitud:string="http://172.16.200.79:8085/api/Solicitud";  //para la solicitud
  urlHistorialComenta:string="http://172.16.200.79:8085/api/historial";  //para el historial
  urlVigilance: string = "http://172.16.200.79:8085/Api/Vigilance";  //para vigilancia
  //url:string="http://https://172.16.200.24:44347/api/Solicitud";
  getSolicitud() {
    return this.http.get(this.urlSolicitud)
  }
  GetVigilance() {
    return this.http.get(this.urlVigilance)
  }
  addSolicitud(solicitud: Solicitud): Observable<Solicitud> {
    return this.http.post<Solicitud>(this.urlSolicitud, solicitud)
  }

  updateSolicitud( id_Solicitud: number, solicitud: Solicitud,): Observable<Solicitud> {
    return this.http.put<Solicitud>(this.urlSolicitud + `/${id_Solicitud}`, solicitud)
  }
  deleteSolicitud(id_Solicitud: number) {
    return this.http.delete(this.urlSolicitud + `/${id_Solicitud}`)
  }
  getByIdSolicitud(id_Solicitud: string): Observable<Solicitud> {
    return this.http.get<Solicitud>(this.urlSolicitud + `/${id_Solicitud}`)
  }

  getComentarios() {
    return this.http.get(this.urlHistorialComenta)
  }
  
  getByIdHistorial(id_Solicitud: string): Observable<HistorialComentarios> {
    return this.http.get<HistorialComentarios>(this.urlHistorialComenta + `/${id_Solicitud}`)
  }
}

