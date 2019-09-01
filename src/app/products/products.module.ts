import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { PhomrComponent } from './phomr/phomr.component';
import { HardwareComponent } from './hardware/hardware.component';
import { SoftwareComponent } from './software/software.component';


@NgModule({
    declarations: [
        ProductsComponent,
        PhomrComponent,
        SoftwareComponent,
        HardwareComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: "",
                component: ProductsComponent,
                children: [
                    {
                        path: "",
                        component: PhomrComponent
                    },
                    {
                        path: "hardware",
                        component: HardwareComponent
                    },
                    {
                        path: "software",
                        component: SoftwareComponent
                    }
                ]
            }
        ])
    ]
})
export class ProductsModule {

}