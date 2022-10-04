import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /* Servicio inyectado en el componente */
  constructor(private datos:PortfolioService) { }


  ngOnInit(): void {
    /* Acceso al servicio */
    this.datos.obtenerDatos();
  }

}
