import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-term',
  template: `
<div class="w-full">
<router-outlet></router-outlet>
</div>
  `,
  styles: [
  ]
})
export class TermComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
