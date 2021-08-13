import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TabModel } from '../../../shareable/models/tab.model';
import { TabFeatures } from '../../enums/feature.enums';
import { TabState } from '../../models/tabstate.model';

const tabStateSelector = createFeatureSelector<TabState<TabModel>>(
  TabFeatures.TAB_FEATURE
);

export const getTabs = createSelector(
  tabStateSelector,
  state => state.tabs
);

export const getCurrentTab = createSelector(
  tabStateSelector,
  state =>
    state.currentTab && state.tabs.find(tab => tab.id === state.currentTab)
);
