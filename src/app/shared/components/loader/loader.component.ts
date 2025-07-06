import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [NgIf],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  @Input() visible = false; // control de visibilidad
  @Input() mensaje?: string; // mensaje personalizable
  @Input() duracion = 2000; // duración en ms

  circumference = 2 * Math.PI*25; // radio=25, circunerencia del círculo.
  progressStroke = this.circumference;

  private intervalId: any;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['visible'] && this.visible){
        this.animanteProgress();
    }

    if(changes['visible'] && !this.visible){
      this.resetProgress();
    }
    
  }

  animanteProgress(){
      this.resetProgress();
      const start = Date.now();
      this.intervalId = setInterval(() => {
        const elapsed = Date.now() - start;
        const percent = Math.min(elapsed / this.duracion, 1);
        this.progressStroke = this.circumference*(1-percent);
        if(percent >= 1){
          clearInterval(this.intervalId);
        }
      }, 16);
  }

  resetProgress(){
    this.progressStroke = this.circumference;
    if(this.intervalId){
      clearInterval(this.intervalId);
    }
  }

}

