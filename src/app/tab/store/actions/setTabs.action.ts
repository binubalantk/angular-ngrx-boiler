import { createAction, props } from '@ngrx/store';
import { TabModel } from '../../../shareable/models/tab.model';
import { TabActions } from '../../enums/tab.action.enum';

export const setTabsAction = createAction(
  TabActions.SET_TABS,
  props<{ tabs: TabModel[] }>()
);
