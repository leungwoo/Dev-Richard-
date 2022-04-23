import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
})
export class AchievementsComponent implements OnInit {
  public map: Mapboxgl.Map | undefined;
  constructor() {}

  ngOnInit() {
    (Mapboxgl as any).accessToken = environment.maptokenkey;
    const map = new Mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-61.3995, 10.6416], // starting position [lng, lat]
      zoom: 15, // starting zoom
    });
  }
}
