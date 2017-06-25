/**
 * Created by osboxes on 25/06/17.
 */
import {Injectable} from "@angular/core";
import {Http, RequestOptions} from "@angular/http";
import {getJsonHeaders} from "../../helpers";

@Injectable()
export class LogInService {

  constructor(private http: Http) { }

  authBy(provider) {
    window.location.href = 'http://localhost:9000/authenticate/' + provider;
  }
}
