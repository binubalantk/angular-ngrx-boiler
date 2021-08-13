import { createAction, props } from '@ngrx/store';
import { TabActions } from '../../enums/tab.action.enum';
import { TabModel } from '../../models/tab.model';

export const addTabAction = createAction(
  TabActions.ADD_TABS,
  props<TabModel>()
);
