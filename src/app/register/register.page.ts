import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  rememberMeVisible: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
