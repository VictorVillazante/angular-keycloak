import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private keycloakService:KeycloakService) { }

  ngOnInit(): void {
  }
  logout(){
    this.keycloakService.logout();
  }
}
