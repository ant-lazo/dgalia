import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'inventory-kardex-values_item',
  templateUrl: './values-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ValuesItemComponent implements OnInit {

  @Input() title: string;
  @Input() value: string;
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}
