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


@NgModule({
    imports: [DragDropModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatTabsModule, BrowserAnimationsModule, MatPaginatorModule, MatTableModule, MatFormFieldModule, MatIconModule],
    exports: [DragDropModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatTabsModule, BrowserAnimationsModule, MatPaginatorModule, MatTableModule, MatFormFieldModule, MatIconModule]
})

export class MaterialModule {}