import { Component ,OnInit} from '@angular/core';
import { Router, NavigationEnd, Event as NavigationEvent } from '@angular/router'
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
 

})
export class AppComponent implements OnInit {
  title = 'app works!';
  task: any;
  constructor(private router: Router) {
    router.events.forEach((event: NavigationEvent) => {
      // if (event instanceof NavigationEnd) {
      //   this.task = event.urlAfterRedirects;
      //   if ((this.task === '/createcompany')) {
      //     $('.page_wrapper').addClass('bg_g');          
      //     $('.page_wrapper ').removeClass('has_side_feed');
      //   } else {
      //     $('.page_wrapper').addClass('has_side_feed');
      //     $('.page_wrapper').removeClass('bg_g');          
          
      //   }
      // }
    });
  }
  ngOnInit() {
  }
}
