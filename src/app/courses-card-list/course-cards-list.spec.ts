import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MOCK_COURSES } from '../testing/testing-data';
import { describe, it, beforeEach } from 'vitest';
import { provideRouter } from '@angular/router';
import { CoursesCardList } from './courses-card-list';
import { CoursesDialog } from '../courses-dialog/courses-dialog';

describe('CoursesCardList', () => {
  let component: CoursesCardList;
  let fixture: ComponentFixture<CoursesCardList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesCardList, CoursesDialog],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesCardList);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('courses', MOCK_COURSES);
    fixture.detectChanges();
  });

  it('should display the course list', () => {});
});
