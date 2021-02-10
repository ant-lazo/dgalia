import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  template: `
<div class="w-full">
<router-outlet></router-outlet>
</div>
  `,
  styles: [
  ]
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
