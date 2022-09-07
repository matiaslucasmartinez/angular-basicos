import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { ContadorComponet } from './contador/contador.component';


@NgModule({
    declarations: [
        ContadorComponet
    ],
    exports: [
        ContadorComponet
    ],
    imports: [
        CommonModule
    ]
})

export class ContadorModule{

}