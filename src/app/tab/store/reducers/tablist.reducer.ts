import { createReducer, on } from '@ngrx/store';
import { TabModel } from '../../models/tab.model';
import { setTabsAction } from '../actions/setTabs.action';
import { addTabAction } from '../actions/tab.actions';

const initialState: TabModel[] = [];

export const tabListReducer = createReducer<TabModel[]>(
  initialState,
  on(setTabsAction, (_state, { tabs }) => tabs),
  on(addTabAction, (state, tab) => [...state, tab])
);
