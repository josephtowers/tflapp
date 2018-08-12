import { Component, OnInit } from '@angular/core';
import { TweenMax } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tflapp';

  ngOnInit() {
    TweenMax.from('.navbar', 1, {opacity: 0, y: -500});
  }
}
