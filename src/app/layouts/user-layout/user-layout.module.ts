import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NguiMapModule} from '@ngui/map';
import { AdminLayoutRoutes } from './user-layout.routing';
import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { UnidadesSaudeComponent } from '../../unidades-saude/unidades-saude.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY'})
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    UnidadesSaudeComponent,
    IconsComponent,
    MapsComponent
  ]
})

export class UserLayoutModule {}
