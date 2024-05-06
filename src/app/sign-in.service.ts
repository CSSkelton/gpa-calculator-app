/**
 * title: sign-in.service.ts
 * author: Cody Skelton
 * date created: 05.05.2024
 * Code sourced from WEB 425 exercise requirements
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds = [
      1007,
      1008,
      1009,
      1010,
      1011,
      1012
    ];
  }

  validate(studentId: number) {
    return this.studentIds.some(id => id === studentId);
  }
}
