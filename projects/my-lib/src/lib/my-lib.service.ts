import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyLibService {
  constructor() {}

  public getNameService(): string {
    return 'Library service';
  }
}
