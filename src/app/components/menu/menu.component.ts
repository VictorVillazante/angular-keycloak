import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../service/backend.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private backendService:BackendService) { }

  ngOnInit(): void {
    this.backendService.get('http://localhost:8081/v1/api/account/test-admin').subscribe(
      (success)=>{
        console.log(success);
      },(error)=>{
        console.log(error);
      }
    )
  }

}
