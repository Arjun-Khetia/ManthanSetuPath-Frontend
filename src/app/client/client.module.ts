import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientComponent } from './client.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ContentComponent } from './component/content/content.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [ClientComponent, HeaderComponent, FooterComponent, ContentComponent],
  imports: [
    CommonModule,
    TranslateModule
  ]
})
export class ClientModule { }
