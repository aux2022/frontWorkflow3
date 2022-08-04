import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
//import { pathToFileURL } from 'url';
import { HomeComponent } from './pages/home/home.component'
import { FormularioComponent } from './components/formulario/formulario.component'
import { AutorizarComponent } from './components/autorizar/autorizar.component'
import { VigilanciaComponent } from './components/vigilancia/vigilancia.component'
import { MonitoreoComprasComponent } from './components/monitoreo-compras/monitoreo-compras.component'
import { ManagerComponent } from './components/manager/manager.component'
import { MonitoreoAlmacenComponent } from './components/monitoreo-almacen/monitoreo-almacen.component'

import { MostrarDatosComponent } from './components/mostrar-datos/mostrar-datos.component'
import { VistaGeneralComponent } from './components/vista-general/vista-general.component'
import { ViewHitoriComComponent } from './components/view-hitori-com/view-hitori-com.component';
import { BloquearAcesoGuard } from './components/guards/bloquear-aceso.guard'

const routes: Routes = [
 //canActivate: [BloquearAcesoGuard] 
  {
    path: 'login',component: HomeComponent
  },
  { path: 'form', component: FormularioComponent },
  { path: 'Administrador/autorizar/:id', component: AutorizarComponent },
  { path: 'vigilancia', component: VigilanciaComponent },
  { path: 'monitoreo-Compras', component: MonitoreoComprasComponent },
  { path: 'Administrador', component: ManagerComponent,canActivate: [BloquearAcesoGuard]},
  { path: 'monitoreo-Almacen', component: MonitoreoAlmacenComponent },
  { path: 'general', component: VistaGeneralComponent },
  { path: 'general/verInfo/:id', component: MostrarDatosComponent },
  { path: 'monitoreo-Compras/Historial-Comentario/:id', component: ViewHitoriComComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
