import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-crear-factura',
  templateUrl: './crear-factura.component.html',
  styleUrls: ['./crear-factura.component.css']
})
export class CrearFacturaComponent implements OnInit {

  formFra: FormGroup;
  fechaActual = new Date();

  constructor() { }

  ngOnInit() {
    this.formFra = new FormGroup({
      cliente: new FormControl(''),
      fecha: new FormControl(null),
      base: new FormControl(null),
      tipo: new FormControl(0.21),
      iva: new FormControl(null),
      total: new FormControl(null)
    })
  }

}
