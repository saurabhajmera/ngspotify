import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchStr:string;

  constructor() { }

  ngOnInit() {
  }

  searchMusic(){
    console.log(this.searchStr);
  }

}
