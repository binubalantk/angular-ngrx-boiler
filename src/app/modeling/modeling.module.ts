import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelingTabComponent } from './modeling-tab/modeling-tab.component';
import { TabNameSpace } from './tab.namespace';

@NgModule({
  imports: [CommonModule],
  declarations: [ModelingTabComponent],
  export: [TabNameSpace]
})
export class ModelingModule {}
