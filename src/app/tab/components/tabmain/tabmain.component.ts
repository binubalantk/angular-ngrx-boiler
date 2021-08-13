import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store/src';
import { TabModel } from '../../models/tab.model';
import { TabState } from '../../models/tabstate.model';
import { getCurrentTab } from '../../store/selectors/tab.selector';

@Component({
  selector: 'app-tabmain',
  templateUrl: './tabmain.component.html',
  styleUrls: ['./tabmain.component.scss']
})
export class TabmainComponent implements OnInit {
  currentTab?: TabModel;
  constructor(private tabStore: Store<TabState>) {
    tabStore.select(getCurrentTab).subscribe(tab => {
      this.currentTab = tab;
    });
  }

  ngOnInit() {}
}
