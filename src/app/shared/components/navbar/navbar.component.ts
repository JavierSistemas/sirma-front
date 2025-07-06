import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  logout(){
    // Aquí luego se usará AuthService.logout() y redirigimis
    console.log('Sessión cerrada.');
  }
}
