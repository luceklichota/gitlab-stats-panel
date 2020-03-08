import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public key;

  constructor(private authenticationService: AuthenticationService) { }

  public addKey() {
    this.authenticationService.setAccessToken(this.key);
  }

  ngOnInit() {
    this.key = this.authenticationService.getAccessToken()
  }

}
