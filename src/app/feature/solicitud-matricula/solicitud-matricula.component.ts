import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-solicitud-matricula',
  templateUrl: './solicitud-matricula.component.html',
  styleUrls: ['./solicitud-matricula.component.css']
})
export class SolicitudMatriculaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toppings = new FormControl('');

  toppingList: string[] = ['VE-A-DB Relacionales', 'MA-B-BD Angular', 'MA-A-Trading', 'VE-SP-REACT', 'VESP-AM-VIEW', 'ASP-TOKENS'];
}
