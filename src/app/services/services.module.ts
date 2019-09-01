import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';
import { ShomeComponent } from './shome/shome.component';
import { AppdevComponent } from './appdev/appdev.component';
import { WebdevComponent } from './webdev/webdev.component';


@NgModule({
    declarations: [
        ServicesComponent,
    ShomeComponent,
    WebdevComponent,
    AppdevComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: "",
                component: ServicesComponent,
                children: [
                  {
                    path: "",
                    component: ShomeComponent
                  },
                  {
                    path: "appdev",
                    component: AppdevComponent
                  },
                  {
                    path: "webdev",
                    component: WebdevComponent
                  }
                ]
              }
        ])
    ]
})
export class ServicesModule {

}