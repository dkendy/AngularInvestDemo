import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { TableresultComponent } from './tableresult/tableresult.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [TableresultComponent, FormComponent, HeaderComponent]
})
export class AppComponent {}
