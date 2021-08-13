import { Component, Input, OnInit } from '@angular/core';
import { TabModel } from '../../../shareable/models/tab.model';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent implements OnInit {
  @Input() currentTab?: TabModel;
  constructor() {}

  ngOnInit() {}
}
