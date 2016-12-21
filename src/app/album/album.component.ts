import { Component, OnInit } from '@angular/core';
import {Album} from "../business-objects/Album";
import {SpotifyService} from "../spotify.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id:string;
  album:Album;

  constructor(private _spotifyService:SpotifyService,
  private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params
      .map(params => params['id'])
      .subscribe(id => {
        this._spotifyService.getAlbum(id).subscribe(
          album => this.album=album
        );
      });
  }

}
