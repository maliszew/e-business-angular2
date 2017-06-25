/**
 * Created by osboxes on 25/06/17.
 */

import {Http, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import {getJsonHeaders, getCookie, addAuthHeader} from "../helpers";

@Injectable()
export class OAuthService {

  constructor(private http: Http) { }

  oauthSignIn() {
    let headers = getJsonHeaders();
    const value = getCookie('token');
    console.log("token: ", value);
    const options = new RequestOptions({headers: addAuthHeader(headers, value)});
    return this.http.get('http://localhost:9000/oauthSignIn', options);
  }

  user() {
    return this.http.get('http://localhost:9000/user', getJsonHeaders());
  }

}
