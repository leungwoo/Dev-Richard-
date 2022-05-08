import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-work',
  templateUrl: './project-work.component.html',
  styleUrls: ['./project-work.component.css'],
})
export class ProjectWorkComponent implements OnInit {
  @Input() projectWork: any = [];
  constructor() {}

  ngOnInit(): void {}
}
