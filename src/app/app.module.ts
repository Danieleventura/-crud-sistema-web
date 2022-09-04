import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { LoginComponent } from './login/login.component';
import { EditUnidadeSaudeComponent } from './edit-unidade-saude/edit-unidade-saude.component';
import { NguiMapModule} from '@ngui/map';
import { CreateUnidadeSaudeComponent } from './create-unidade-saude/create-unidade-saude.component';
import { ViewUnidadeSaudeComponent } from './view-unidade-saude/view-unidade-saude.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    SidebarModule,
    AppRoutingModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY'})
  ],
  declarations: [
    AppComponent,
    UserLayoutComponent,
    LoginComponent,
    EditUnidadeSaudeComponent,
    CreateUnidadeSaudeComponent,
    ViewUnidadeSaudeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
