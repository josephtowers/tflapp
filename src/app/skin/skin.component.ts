import { Component, OnInit } from '@angular/core';
import { TweenMax, TimelineLite, Power4, Circ } from 'gsap';
import * as $ from 'jquery';

@Component({
  selector: 'app-skin',
  templateUrl: './skin.component.html',
  styleUrls: ['./skin.component.css']
})
export class SkinComponent implements OnInit {

  constructor() {
    this.canAnimate = false
  }
  canAnimate = false
  ngOnInit() {
    let t1 = new TimelineLite();
    t1.from('.title-header', 1, { y: '-1000vh', ease: Circ.easeOut })
      .from('.selected-skin', 0.7, { x: '-1000vw', ease: Circ.easeOut })
      .from('.skin-desc', 0.7, { y: '1000vh', ease: Circ.easeOut })
      .staggerFrom('.idunno', 0.7, { x: '1000vw', ease: Circ.easeOut, onComplete: () => this.canAnimate = true }, 0.2);

  }

  parallaxIt(e, target, movement) {
    var $this = $(".title-header");
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement,
      y: (relY - $this.height() / 2) / $this.height() * movement
    });
  }

}
