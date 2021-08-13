import { createAction, props } from '@ngrx/store';
import { TabModel } from '../../../shareable/models/tab.model';
import { TabActions } from '../../enums/tab.action.enum';

export const addTabAction = createAction(
  TabActions.ADD_TABS,
  props<TabModel>()
);
