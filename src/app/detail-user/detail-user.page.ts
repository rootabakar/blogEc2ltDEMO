import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.page.html',
  styleUrls: ['./detail-user.page.scss'],
})
export class DetailUserPage implements OnInit {

  name : string = "";
  img : string = "";
  description : string = "";

  constructor() { }

  ngOnInit() {
  }

}
