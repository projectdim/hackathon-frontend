import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";

const exportableComponents = [
    
];

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        BrowserModule,
        TranslateModule.forChild()
    ],
    exports: [
        NgbModule,
        BrowserModule,
    ],
})
export class SharedModule { }
