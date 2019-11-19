import { Component, OnInit } from '@angular/core';
//import { SafeStyle } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //backgroundImage: SafeStyle;
  title = 'Bloom Montessori';

  //constructor(private route: ActivatedRoute) { }
  constructor() { }

  ngOnInit() {
  	//this.backgroundImage = this.route.snapshot.data['background'];
  }

}
