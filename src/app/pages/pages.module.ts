import { NgModule } from '@angular/core';

import { CoursesComponent } from './courses/courses.component';
import { SearchComponent } from './courses/search/search.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseItemComponent } from './courses/course-list/course-item/course-item.component';
import { SharedModule } from '../shared/shared.module';
import { NgForOf } from '@angular/common';

@NgModule({
  declarations: [
    CoursesComponent,
    SearchComponent,
    CourseListComponent,
    CourseItemComponent,
  ],
  exports: [CoursesComponent],
  imports: [SharedModule, NgForOf],
})
export class PagesModule {}
