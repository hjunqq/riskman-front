import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return '兴安盟超标准洪水水库应急调度';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
