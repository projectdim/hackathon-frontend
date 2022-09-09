import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { StatusPanelComponent } from "./components";

const exportableComponents = [
    StatusPanelComponent,
];

@NgModule({
    declarations: [
        ...exportableComponents,
    ],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule.forChild()
    ],
    exports: [
        ...exportableComponents,
    ],
})
export class SharedModule { }
