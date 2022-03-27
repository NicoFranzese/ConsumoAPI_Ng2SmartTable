import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EntidadesComponent } from './componentes/entidades/entidades.component';

import { ToastNoAnimationModule  } from 'ngx-toastr';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { RouterModule, Routes } from '@angular/router';
import { IntroduccionComponent } from './componentes/introduccion/introduccion.component';

const appRoutes: Routes = [
  { path: 'introduccion', component: IntroduccionComponent },
  { path: 'entidades', component: EntidadesComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EntidadesComponent,
    IntroduccionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    Ng2SmartTableModule,
    ToastNoAnimationModule.forRoot({
      timeOut : 3000,
      maxOpened: 1,
      positionClass : "toast-top-center",
      preventDuplicates: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
