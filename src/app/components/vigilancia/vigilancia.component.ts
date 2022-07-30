import { Component, OnInit } from '@angular/core'
import { CargarScriptsService } from 'src/app/cargar-scripts.service'
import { Solicitud } from 'src/app/models/solicitud'
import { SolicitudService } from 'src/app/services/solicitud.service'
@Component({
  selector: 'app-vigilancia',
  templateUrl: './vigilancia.component.html',
  styleUrls: ['./vigilancia.component.css'],
})
export class VigilanciaComponent implements OnInit {
  solicitud: Solicitud = new Solicitud()
  datatable: any = []
  title: any = ''

  constructor(
    private solicitudService: SolicitudService,
    private _CargarScripts: CargarScriptsService,
  ) {
    _CargarScripts.carga(['tabla_filtros'])
  }

  ngOnInit(): void {
    this.onDataTable()
  }
  onDataTable() {
    this.solicitudService.getSolicitud().subscribe((res) => {
      this.datatable = res
      console.log(res)
    })
  }

  onSetData1(select: any) {
    this.solicitud.id_solicitud = select.id_solicitud
    this.solicitud.solicitante = select.solicitante
    this.solicitud.correoSolicitante = select.correoSolicitante
    this.solicitud.fechaSolicitud = select.fechaSolicitud
    this.solicitud.tipoTicket = select.tipoTicket
    this.solicitud.provedor = select.provedor
    this.solicitud.motivo = select.motivo
    this.solicitud.area = select.area
    this.solicitud.descripcion = select.descripcion
    this.solicitud.observaciones = select.observaciones
    this.solicitud.regresa = select.regresa
    this.solicitud.autorizador = select.autorizador
    this.solicitud.statusAprobacion = select.statusAprobacion
    this.solicitud.comentariosAutorizador = select.comentariosAutorizador //
    this.solicitud.fechaSalida = select.fechaSalida
    this.solicitud.nombreProvedor = select.nombreProvedor
    this.solicitud.validarSalida = 'true'
    this.solicitud.fechaCompromiso = select.fechaCompromiso
    this.solicitud.comentariosCompras = select.comentariosCompras
    this.solicitud.fechaRegreso = select.fechaRegreso
    this.solicitud.comentariosRegreso = select.comentariosRegreso
    this.solicitud.status2 = select.status2
    this.solicitud.emailSent = select.emailSent
    this.solicitud.historialCompras = select.historialCompras

    this.solicitud.id_solicitud = select.id_solicitud
    this.solicitud.fechaSolicitud = select.fechaSolicitud
    this.solicitud.motivo = select.motivo
    this.solicitud.tipoTicket = select.tipoTicket
    this.solicitud.area = select.area
    this.solicitud.descripcion = select.descripcion
    this.solicitud.observaciones = select.observaciones
    this.solicitud.autorizador = select.autorizador
    this.solicitud.statusAprobacion = select.statusAprobacion
    this.solicitud.comentariosAutorizador = select.comentariosAutorizador
    this.solicitud.fechaSalida = select.fechaSalida
    this.solicitud.nombreProvedor = select.nombreProvedor //
    this.solicitud.comentariosCompras = select.comentariosCompras
    this.solicitud.fechaRegreso = select.fechaRegreso
    this.solicitud.status2 = select.status2
    this.solicitud.fechaCompromiso = select.fechaCompromiso
    this.solicitud.comentariosRegreso = select.comentariosRegreso
    this.solicitud.correoSolicitante = select.correoSolicitante
    this.solicitud.emailSent = select.emailSent
  }

  onUpdateSalida(solicitud: Solicitud): void {
    this.solicitudService
      .updateSolicitud(solicitud.id_solicitud, solicitud)
      .subscribe((res) => {
        if (res) {
          alert('Datos guardados!, los datos han sido guardados con exito.')

          this.onDataTable()
        } else {
          alert('Error! :(')
        }
      })
  }
}
