import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  fechaActual: Date = new Date();
  logo: string = '../../assets/images/logo.png'; 
  
  constructor() { }

  ngOnInit(): void {
  }

}
