import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { CargarScriptsService } from 'src/app/cargar-scripts.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public user = ''
  public pass = ''
  constructor(
    private _CargarScripts: CargarScriptsService,
    public router: Router,
  ) {
    _CargarScripts.carga(['login'])
  }

  ngOnInit(): void {}
  login() {
    if ((document.getElementById('idUsername') as HTMLInputElement).value ==='manager' && (document.getElementById('idPassword') as HTMLInputElement).value==='sa' ){
      this.router.navigate(['./form'])
      console.log('hi')
    } else{
      alert('Credenciales incorrectas')
    }
  }
  
}
