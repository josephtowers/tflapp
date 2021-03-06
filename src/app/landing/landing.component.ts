import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweenMax } from 'gsap';
import { TimelineMax, Circ } from 'gsap';
import * as $ from 'jquery';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public router: Router) {
    this.router = router;
  }

  ngOnInit() {
    const _router = this.router;
    $(document).ready(function () {
      const t1 = new TimelineMax();
      let isScrolling = false;
      t1.from('.firstone', 1, { opacity: 0, x: '-1000vw', ease: Circ.easeOut });
      TweenMax.from('img', 1, { opacity: 0, x: '1000vw', ease: Circ.easeOut });
      $('body').on('mousewheel', function (e) {
        if ((<any>e).originalEvent.wheelDelta <= 0 && !isScrolling) {
          isScrolling = true;
          TweenMax.to('.landing-container', 1, {
            y: '-100%',
            ease: Circ.easeInOut,
            onComplete: () => {
              console.log('happening');
              $('a.please')[0].click()
            }
          });
        }
      });
    });
  }
}

