import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabmainComponent } from './components/tabmain/tabmain.component';
import { TablistComponent } from './components/tablist/tablist.component';
import { TabContainerComponent } from './components/tab-container/tab-container.component';
import { StoreModule } from '@ngrx/store';
import { TabState } from './models/tabstate.model';
import {
  tabListReducer,
  tabSelectorReducer
} from './store/reducers/tab.reducers';
import { TabFeatures } from './enums/feature.enums';
import { TabModel } from '../shareable/models/tab.model';
import { OmniModule } from '../omni/omni.module';
import { ModelingModule } from '../modeling/modeling.module';

@NgModule({
  imports: [
    CommonModule,
    OmniModule,
    ModelingModule,
    StoreModule.forFeature<TabState<TabModel>>(TabFeatures.TAB_FEATURE, {
      tabs: tabListReducer,
      currentTab: tabSelectorReducer
    })
  ],
  declarations: [TabmainComponent, TablistComponent, TabContainerComponent],
  exports: [TabmainComponent]
})
export class TabModule {}
