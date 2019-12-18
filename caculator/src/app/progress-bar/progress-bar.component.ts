import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() backgroundColor = 'aqua';
  @Input() progressColor = 'green';
  @Input() width = 50;
  constructor() { }

  ngOnInit() {
  }

}
