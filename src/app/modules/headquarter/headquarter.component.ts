import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headquarter',
  template: `
<div class="w-full">
<router-outlet></router-outlet>
</div>
  `,
  styles: [
  ]
})
export class HeadquarterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
