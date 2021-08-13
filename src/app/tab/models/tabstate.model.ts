import { TabModel } from './tab.model';

export interface TabState {
  tabs: TabModel[];
  currentTab: string;
}
