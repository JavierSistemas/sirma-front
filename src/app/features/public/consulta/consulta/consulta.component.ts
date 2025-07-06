import { Component } from '@angular/core';
import { EstadoPipe } from '../../../../shared/pipes/estado.pipe';
import { NgFor } from '@angular/common';

interface Solicitud {
  numero: string;
  fecha: string;
  tipo: string;
  estado:string;
}


@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [EstadoPipe],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.scss'
})
export class ConsultaComponent {
   solicitud: Solicitud[] = [
      {numero:'001', fecha:'2025-06-25', tipo: 'Licencia', estado: 'R'},
      {numero:'002', fecha:'2025-06-26', tipo: 'Permiso', estado: 'A'},
      {numero:'003', fecha:'2025-06-27', tipo: 'Licencia', estado: 'O'}

   ];
}
