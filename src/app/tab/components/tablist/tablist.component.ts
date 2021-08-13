import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TabModel } from '../../models/tab.model';
import { TabState } from '../../models/tabstate.model';
import { addTabAction, selectTabAction } from '../../store/actions/tab.actions';
import { getTabs } from '../../store/selectors/tab.selector';

@Component({
  selector: 'app-tablist',
  templateUrl: './tablist.component.html',
  styleUrls: ['./tablist.component.scss']
})
export class TablistComponent implements OnInit {
  @Input() currentTab?: TabModel;
  tabs: Observable<TabModel[]>;
  constructor(private tabStore: Store<TabState>) {
    this.tabs = tabStore.select(getTabs);
  }

  ngOnInit() {}

  onNewTab() {
    //create a new tab and add to store
    this.tabStore.dispatch(
      addTabAction({
        id: '' + new Date().getUTCMilliseconds().toString(),
        order: 0,
        title: 'New Tab'
      })
    );
  }

  onTabSelect(tab: TabModel) {
    this.tabStore.dispatch(selectTabAction({ tabId: tab.id }));
  }
}
