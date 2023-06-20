import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LocationComponent } from './shared/components/location/location.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseListComponent } from './pages/courses/course-list/course-list.component';
import { CourseItemComponent } from './pages/courses/course-list/course-item/course-item.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LogoComponent } from './shared/components/header/logo/logo.component';
import { SearchComponent } from './pages/courses/search/search.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { InputComponent } from './shared/components/input/input.component';

describe('AppComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatIconModule, FormsModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        LocationComponent,
        FooterComponent,
        CoursesComponent,
        SearchComponent,
        CourseListComponent,
        CourseItemComponent,
        LogoComponent,
        ButtonComponent,
        InputComponent,
      ],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Video Courses'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Video Courses');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain(app.title);
  });
});
