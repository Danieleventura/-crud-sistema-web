import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { UnidadesSaudeComponent }from '../../unidades-saude/unidades-saude.component';
import { MapsComponent } from '../../maps/maps.component';
import { EditUnidadeSaudeComponent } from 'app/edit-unidade-saude/edit-unidade-saude.component';
import { CreateUnidadeSaudeComponent } from 'app/create-unidade-saude/create-unidade-saude.component';
import { ViewUnidadeSaudeComponent } from 'app/view-unidade-saude/view-unidade-saude.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'home',           component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'unidade',        component: UnidadesSaudeComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'create',         component: CreateUnidadeSaudeComponent },
    { path: 'view/:id',       component: ViewUnidadeSaudeComponent },
    { path: 'edit/:id',       component: EditUnidadeSaudeComponent },
];
