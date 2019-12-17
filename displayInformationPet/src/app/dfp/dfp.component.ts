import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dfp',
  templateUrl: './dfp.component.html',
  styleUrls: ['./dfp.component.css']
})
export class DFPComponent implements OnInit {

  petName = 'cauvang';
  petImages = 'https://media1.tenor.com/images/932c850dcb5e26ffbf69943cd63df8f1/tenor.gif?itemid=14994992';
  constructor() { }
  updateName(name) {
    this.petName = name;
  }
  updateImage(image) {
    this.petImages = image;
  }
  ngOnInit() {
  }

}
