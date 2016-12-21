import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../spotify.service";
import {Artist} from "../business-objects/Artist";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  searchStr:string;
  searchRes:Artist[];

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit() {
  }

  searchMusic(){
    this.spotifyService.searchMusic(this.searchStr).subscribe(
      res => {
        this.searchRes=res.artists.items;
        console.log(this.searchRes);
      }
    );
  }

}
