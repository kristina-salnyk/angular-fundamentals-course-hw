import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from '../../shared/shared.module';
import { CoursesComponent } from './courses.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-list/course-item/course-item.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseListComponent,
    CourseItemComponent,
    SearchComponent,
  ],
  imports: [CommonModule, SharedModule, MatIconModule],
  exports: [CoursesComponent],
})
export class CoursesModule {}
