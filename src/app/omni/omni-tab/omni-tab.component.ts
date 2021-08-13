import { Component, OnInit } from '@angular/core';
import { TabBaseComponent } from '../../shareable/components/tab-base/tabbase.component';

@Component({
  selector: 'app-omni-tab',
  templateUrl: './omni-tab.component.html',
  styleUrls: ['./omni-tab.component.css']
})
export class OmniTabComponent extends TabBaseComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
