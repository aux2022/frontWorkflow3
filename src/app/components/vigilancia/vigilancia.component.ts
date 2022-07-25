import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service'; 
@Component({
  selector: 'app-vigilancia',
  templateUrl: './vigilancia.component.html',
  styleUrls: ['./vigilancia.component.css']
})
export class VigilanciaComponent implements OnInit {
  solicitud:Solicitud = new Solicitud();
  datatable:any=[];
  title:any="";
  constructor(private solicitudService:SolicitudService,private _CargarScripts:CargarScriptsService) {_CargarScripts.carga(["tabla_filtros"]) }

  ngOnInit(): void {
    this.onDataTable();
  }
  onDataTable()
{
this.solicitudService.getSolicitud().subscribe(res=>{
  this.datatable=res;
  console.log(res);
});

}
}