import { NgModule } from '@angular/core';
import { DatePipe, NgClass, NgForOf, NgIf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { CoursesComponent } from './courses/courses.component';
import { SearchComponent } from './courses/search/search.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseItemComponent } from './courses/course-list/course-item/course-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CoursesComponent,
    SearchComponent,
    CourseListComponent,
    CourseItemComponent,
  ],
  exports: [CoursesComponent],
  imports: [SharedModule, NgForOf, MatIconModule, NgIf, NgClass, DatePipe],
})
export class PagesModule {}
