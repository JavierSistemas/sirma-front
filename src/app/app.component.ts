import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { ConsultaComponent } from './features/public/consulta/consulta/consulta.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            NavbarComponent, 
            FooterComponent,
            LoaderComponent,
            ConsultaComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sirma-front';
  isLoading = false;
  mostrarLoader(){
    this.isLoading = true;
    setTimeout(() => this.isLoading = false, 4000);
  }
}
