import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-recipes',
  template: `
  <div class="w-full">
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [
  ]
})
export class SubRecipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
