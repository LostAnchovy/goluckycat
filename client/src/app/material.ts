import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MatCardModule} from '@angular/material/card'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import { NgModule } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

// imports all the materials modules into one central location and import/exports them into the AppModule.ts file
@NgModule({
    imports: [DragDropModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatTabsModule, BrowserAnimationsModule, MatPaginatorModule, MatTableModule, MatFormFieldModule, MatIconModule, MatButtonToggleModule],
    exports: [DragDropModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatTabsModule, BrowserAnimationsModule, MatPaginatorModule, MatTableModule, MatFormFieldModule, MatIconModule, MatButtonToggleModule]
})

export class MaterialModule {}