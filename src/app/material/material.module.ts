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

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from "@angular/material/form-field";

import { MatInputModule } from "@angular/material/input";
@NgModule({
  exports:[
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,

  ]
})
export class MaterialModule { }
