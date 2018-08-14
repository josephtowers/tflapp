import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TweenMax, Circ } from 'gsap';
import * as $ from 'jquery';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {



  ngOnInit() {
    //TweenMax.staggerFrom('.list-item', 2, { opacity: 0, y: '200vh', delay: 1 }, 0.2);
    
  }
  constructor(public router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        TweenMax.from('.input-group, .text-container', 1, { opacity: 0, x: '-1000vw',  ease: Circ.easeOut});
        TweenMax.staggerFrom('.list-item', 1, { opacity: 0, x: '-1000vw',  ease: Circ.easeOut}, 0.2);
        TweenMax.staggerFrom('.featured-item', 2, {opacity: 0, x: '1000vw',  ease: Circ.easeOut}, 0.2);
        $(document).ready(function() {
          $('.list-item').click(function(){
            $('html, body').css({
              overflow: 'hidden',
              height: '100%'
          });
            TweenMax.to('.first-column ', 1, { opacity: 0, x: '-1000vw', ease: Circ.easeIn});
            TweenMax.to('.featured-item', 1, {opacity: 0, x: '1000vw', ease: Circ.easeIn,
            onComplete: () => {
              $('a.getskin')[0].click()
             }});
          })
        })
      }
    })
  }
}
