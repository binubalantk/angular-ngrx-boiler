import { createAction, props } from '@ngrx/store';
import { TabActions } from '../../enums/tab.action.enum';

export const selectTabAction = createAction(
  TabActions.SELECT_TAB,
  props<{ tabId: string }>()
);
