import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TweenMax} from "gsap";
import {TimelineMax} from "gsap";
import * as $ from 'jquery';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public router : Router) {
    this.router = router;
   }

  ngOnInit() {
    let _router = this.router;
      $(document).ready(function(){
        var t1 = new TimelineMax();
        var isScrolling = false;
        t1.from(".navbar", 1, {opacity: 0, y: -500})
        .from(".firstone", 1, {opacity: 0, x: -500});
        $('body').on('mousewheel', function(e){
       if(e.originalEvent.wheelDelta <= 0 && !isScrolling) {
         isScrolling = true;
         console.log("bitch");
         TweenMax.to('.landing-container', 1.5, {y: "-100%", onComplete: () => {_router.navigateByUrl("/list", { skipLocationChange: true })}})

       }
   });
        }
      })
  }

}
