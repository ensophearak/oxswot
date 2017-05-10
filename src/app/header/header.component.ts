import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']

})
export class HeaderComponent implements OnInit {

  opensidebar: boolean;
  opensearch: boolean;

  constructor() {
    this.opensidebar = false;
    this.opensearch = false;
  }
  toggleopensidebar() {
    this.opensidebar = !this.opensidebar;
    if (this.opensidebar) {
      $('body').addClass('sidebar_open');
      $('.sidebar').addClass('sidebar_show');
    } else {
      $('body').removeClass('sidebar_open');
      $('.sidebar').removeClass('sidebar_show');
      $('.oxswot_toggle_menu').removeClass('active');
    }
  }
  togglesearch() {
    this.opensearch = !this.opensearch;
    if (this.opensearch) {
      $('body').addClass('search_open');
    } else {
      $('body').removeClass('search_open');
      $('.search_wrapper').removeClass('active');
    }
  }

  ngOnInit() {
  }

}
