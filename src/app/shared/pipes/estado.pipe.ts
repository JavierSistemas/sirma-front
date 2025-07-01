import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estado',
  standalone: true
})
export class EstadoPipe implements PipeTransform {

  transform(value:string): string {
    switch(value){
      case 'R': return 'Registrado';
      case 'O': return 'Observado';
      case 'A': return 'Aprobado';
      case 'X': return 'Rechazado';
      default : return 'Desconocido';
    }
  }

}
