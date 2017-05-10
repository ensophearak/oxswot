import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  crstore: boolean;

  user: any;
  constructor(private auth: AuthService) {
    this.user = auth.currentUser();
    this.crstore = false;
  }
  togglecrstore() {
    $('body').addClass('crstore_open');
  }
  closecrstore() {
    $('body').removeClass('crstore_open');
    $('.create_cs_box').removeClass('active');
  }
  ngOnInit() {

  }

}
