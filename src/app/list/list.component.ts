import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TweenMax } from 'gsap';
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
        TweenMax.staggerFrom('.list-item', 2, { opacity: 0, y: '200vh'}, 0.2);
        TweenMax.staggerFrom('.featured-item', 2, {opacity: 0, x: '200vw'}, 0.2);
        $(document).ready(function() {
          $('.list-item').click(function(){
            $('html, body').css({
              overflow: 'hidden',
              height: '100%'
          });
            TweenMax.to('.first-column ', 1, { opacity: 0, x: '-200vw'});
            TweenMax.to('.featured-item', 1, {opacity: 0, x: '200vw',
            onComplete: () => {
              $('a.getskin')[0].click()
             }});
          })
        })
      }
    })
  }
}
