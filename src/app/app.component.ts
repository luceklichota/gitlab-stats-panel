import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'git-reports';

  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    const token = this.authenticationService.getAccessToken();
    console.log(token);
    if (!token) {
      this.router.navigate(['/login']);
    }
  }
}
