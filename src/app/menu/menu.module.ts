import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { StripeModule } from "stripe-angular"
import { NzInputModule } from 'ng-zorro-antd/input';
import { AgmDirectionModule } from 'agm-direction';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzCardModule,
    NzTabsModule,
    NzIconModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzListModule,
    NzAvatarModule,
    NzGridModule,
    NzModalModule,
    NzRadioModule,
    NzStatisticModule,
    NzDropDownModule,
    NzButtonModule,
    StripeModule.forRoot("pk_live_51GwwqJJpV9cXOdRhw2mJFANLPJbH5XwafRmdIDPAjfbMBW7Y3tjaOr4jXtMwQknbbdaCO1aTMa0r4GaeqYd8YCvf00Rpo2xypa"),
    NzSpinModule,
    NzInputModule,
    AgmDirectionModule
  ],
  exports:[
    NzCardModule,
    NzTabsModule,
    NzIconModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzListModule,
    NzAvatarModule,
    NzGridModule,
    NzModalModule,
    NzRadioModule,
    NzStatisticModule,
    NzDropDownModule,
    NzButtonModule,
    NzSpinModule,
    NzInputModule,
    AgmDirectionModule
  ]
})
export class MenuModule { }
