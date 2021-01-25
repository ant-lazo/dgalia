import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  template: `
  <div class="w-full">
    <router-outlet></router-outlet>
  </div>
  `,
  styles: [
  ]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
