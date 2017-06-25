/**
 * Created by osboxes on 25/06/17.
 */
import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {LogInService} from "./login.service";
import {OAuthService} from "../oauth.service"

@Component({
  selector: 'app-signin',
  templateUrl: 'login.component.html'
})
export class LogInComponent implements OnInit{
  user_data: any;

  constructor(private oauthService: OAuthService, private loginService: LogInService, private router: Router){}

  ngOnInit() {
    /*this.oauthService.oauthSignIn().map(res => {
      // If request fails, throw an Error that will be caught
      if(res.status < 200 || res.status >= 300) {
        throw new Error('This request has failed ' + res.status);
      }
      else {
        return res.json();
      }
    }).subscribe(
      data => {
        this.user_data = data;
      },
      error => {
        this.router.navigate(['.']);
      }
    );*/
  }

  authenticate(provider) {
    this.loginService.authBy(provider)
  }
}
