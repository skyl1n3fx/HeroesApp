import { NgModule } from '@angular/core';
// SIDENAV
import {MatSidenavModule} from '@angular/material/sidenav';

// Toolbar
import {MatToolbarModule} from '@angular/material/toolbar';

//Button
import {MatButtonModule} from '@angular/material/button';

// Icons Material
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ]
})
export class MaterialModule { }
