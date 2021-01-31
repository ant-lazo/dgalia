import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programation',
  template: `
<div class="w-full">
<router-outlet></router-outlet>
</div>

  `,
  styles: [
  ]
})
export class ProgramationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
