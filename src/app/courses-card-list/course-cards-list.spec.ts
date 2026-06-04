import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MOCK_COURSES } from '../testing/testing-data';
import { describe, expect, it, beforeEach } from 'vitest';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';
import { CoursesCardList } from './courses-card-list';
import { CoursesDialog } from '../courses-dialog/courses-dialog';
import { DebugElement } from '@angular/core';

describe('CoursesCardList', () => {
  let component: CoursesCardList;
  let fixture: ComponentFixture<CoursesCardList>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesCardList, CoursesDialog],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CoursesCardList);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.componentRef.setInput('courses', MOCK_COURSES);
    fixture.detectChanges();
  });

  it('should display the course list', () => {
    const cardTitles = de.queryAll(By.css('.course-card .card-header'));
    expect(cardTitles.length).toBe(2);
    const titleEl = cardTitles[0].nativeElement;
    expect(titleEl.textContent).toBe('Beginner Course');
  });

  it('should display message when no courses', () => {
    fixture.componentRef.setInput('courses', []);
    fixture.detectChanges();
    const divEl = fixture.nativeElement.querySelector('.no-courses') as HTMLDivElement | null;
    expect(divEl).toBeTruthy();
    expect(divEl!.textContent).toContain('No courses found');
  });
});
