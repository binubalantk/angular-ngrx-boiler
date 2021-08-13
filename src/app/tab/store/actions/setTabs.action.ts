import { createAction, props } from '@ngrx/store';
import { TabActions } from '../../enums/tab.action.enum';
import { TabModel } from '../../models/tab.model';

export const setTabsAction = createAction(
  TabActions.SET_TABS,
  props<{ tabs: TabModel[] }>()
);
