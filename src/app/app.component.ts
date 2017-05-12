import {Component, OnInit} from '@angular/core';
import { Authentication, AdalConfig } from 'adal-ts';
import { TitleService }               from "./title/title.service";
import { AppStateService }            from "./appstate/app-state.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ADAL TypeScript example'
  user: any;
  disableLogout = false;
  disableLogin = false;

  constructor(public appState: AppStateService, public titleService: TitleService) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
  }

  login() {
    console.log('login');

    const context = Authentication.getContext(this.createConfig());
    this.disableLogin = context.getUser() != null;

    if(this.disableLogin === false) {
      context.login();
    }

  }

  logout() {
    console.log('logout');

    const context = Authentication.getContext(this.createConfig());
    const loggedInUser = context.getUser();
    this.disableLogout = loggedInUser == null;

    if(this.disableLogout === false) {
      context.logout();
    }

  }

  getUser() :void {
    console.log('logout');

    const context = Authentication.getContext(this.createConfig());
    this.user = context.getUser();

  }

  private createConfig(): AdalConfig {

    const config: AdalConfig = {
      tenant: 'hneu70532.onmicrosoft.com',
      clientId: '61bdbb45-a004-48e3-98d9-e4f1740661c8',
      postLogoutRedirectUrl: window.location.origin + '/',
      redirectUri: window.location.origin + '/',
      responseType: '',
      extraQueryParameter: '',
      resource: ''
    };
    return config;
  }
}
