/**
 * title: gpa.component.ts
 * date: 04.29.2024
 * author: Cody Skelton
 * Code sourced from WEB 425 assignment requirements
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number;

  constructor() { }

  ngOnInit(): void {
  }

}
