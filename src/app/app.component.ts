import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {OAuthService} from "./oauth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = '.';
  user_data: any;

  constructor(private oauthService: OAuthService, private route: ActivatedRoute) { }

  ngOnInit(){
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
      error => {}
    );*/
  }

}
