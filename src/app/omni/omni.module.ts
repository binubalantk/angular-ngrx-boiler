import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OmniTabComponent } from './omni-tab/omni-tab.component';
import { TabNameSpace } from './omnitab.namespace';

@NgModule({
  imports: [CommonModule],
  declarations: [OmniTabComponent],
  export: [TabNameSpace]
})
export class OmniModule {}
