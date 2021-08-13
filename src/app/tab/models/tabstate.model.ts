import { TabModel } from '../../shareable/models/tab.model';

export interface TabState<TAB_MODEL extends TabModel> {
  tabs: TAB_MODEL[];
  currentTab: string;
}
