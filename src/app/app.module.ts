import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatDialogModule, MatCardModule, MatInputModule } from "@angular/material";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ChildComponent } from './child/child.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { PhomrComponent } from './products/phomr/phomr.component';
import { SoftwareComponent } from './products/software/software.component';
import { HardwareComponent } from './products/hardware/hardware.component';
import { ShomeComponent } from './services/shome/shome.component';
import { WebdevComponent } from './services/webdev/webdev.component';
import { AppdevComponent } from './services/appdev/appdev.component';
import { ProductsModule } from './products/products.module';
import { ServicesModule } from './services/services.module';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ChildComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: "",
        // component: ContentComponent
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "services",
        loadChildren: "./services/services.module#ServicesModule"
      },
      {
        path: "products",
        loadChildren: "./products/products.module#ProductsModule"
      },
      {
        path: "home",
        component: UserFormComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ContentComponent, ChildComponent]
})
export class AppModule { }
