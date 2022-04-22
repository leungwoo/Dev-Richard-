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
      center: [-61.165999, 10.375999], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
// mapboxgl.accessToken =
//   "pk.eyJ1IjoibGV1bmd3b28iLCJhIjoiY2wyOWc5d25jMDRzcjNjazBvb24wdGRudCJ9.JV6KJEYp1qXABO14BaFNhw";
// const map = new mapboxgl.Map({
//   container: "map", // container ID
//   style: "mapbox://styles/mapbox/streets-v11", // style URL
//   center: [-74.5, 40], // starting position [lng, lat]
//   zoom: 9, // starting zoom
// });
