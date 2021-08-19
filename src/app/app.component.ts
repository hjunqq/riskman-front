import { Component, HostBinding } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';

import "devextreme/localization/globalize/number";
import "devextreme/localization/globalize/date";
import "devextreme/localization/globalize/currency";
import "devextreme/localization/globalize/message";

import Globalize from 'globalize';
import zhMessages from 'devextreme/localization/messages/zh.json';
import supplemental from 'devextreme-cldr-data/supplemental.json';

import zhCldrData from 'devextreme-cldr-data/zh.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService) {
    Globalize.load(supplemental, zhCldrData);

    Globalize.loadMessages(zhMessages);

    Globalize.locale(navigator.language);
  }

  isAuthenticated() {
    return this.authService.loggedIn;
  }
}
