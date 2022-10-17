import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  /* Servicio inyectado en el componente */
  constructor(private datos:PortfolioService) { }


  ngOnInit(): void {
    /* Acceso al servicio */
    this.datos.obtenerDatos();
  }

  login =  false;
}
