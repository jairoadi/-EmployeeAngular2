import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template: `<h1>MTC Employees Database</h1>
        <br>
        <p>Welcome to the MTC Employees Database. In this page you will be able to view, edit or delete user's profiles</p>

`,
  styles: [`

`]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
