import { Component, OnInit, enableProdMode } from '@angular/core';
import { TweenMax, Circ } from 'gsap';
enableProdMode();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'thefortnitelist';

  ngOnInit() {
    TweenMax.from('.navbar', 0.5, {opacity: 0, y: -500, ease: Circ.easeOut});
  }
}
