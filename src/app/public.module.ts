import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatGridListModule, MatIconModule, MatInputModule, MatSnackBarModule,
  MatTableModule, MatToolbarModule, MatTooltipModule, NoConflictStyleCompatibilityMode
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';

export const publicModules = [
  NoConflictStyleCompatibilityMode,
  NoopAnimationsModule,
  BrowserAnimationsModule,
  HttpClientModule,
  CommonModule,
  RouterModule,
  FormsModule,
  MatToolbarModule,
  MatCardModule,
  MatTableModule,
  MatButtonModule,
  MatInputModule,
  MatGridListModule,
  MatIconModule,
  MatTooltipModule,
  MatDialogModule,
  MatSnackBarModule,
  FlexLayoutModule
];

@NgModule({
    imports: publicModules,
    exports: publicModules
})
export class PublicModule { }
