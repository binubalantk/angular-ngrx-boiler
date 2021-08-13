import { createReducer, on } from '@ngrx/store';
import { selectTabAction } from '../actions/tab.actions';

const initialState: string | undefined = undefined;
export const tabSelectorReducer = createReducer<string>(
  initialState,
  on(selectTabAction, (state, { tabId }) => tabId)
);
