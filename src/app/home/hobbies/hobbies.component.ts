import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css'],
})
export class HobbiesComponent implements OnInit {
  @Input() hobbies: any = [];
  constructor() {}

  ngOnInit(): void {}
}
