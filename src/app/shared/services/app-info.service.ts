import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return '江苏国信溧阳抽水蓄能有限公司大坝运行安全应急预案';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
