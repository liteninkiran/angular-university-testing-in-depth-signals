import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, beforeEach, expect } from 'vitest';
import { TabsComponent } from './tabs';
import { TabData } from './tabs.model';
import { MOCK_TABS } from '../testing/testing-data';
import { By } from '@angular/platform-browser';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;
  let de: DebugElement;

  const mockTabs: TabData[] = MOCK_TABS;

  const createComponent = async () => {
    const moduleDef = { imports: [TabsComponent] };
    await TestBed.configureTestingModule(moduleDef).compileComponents();
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('tabs', mockTabs);
    de = fixture.debugElement;
    fixture.detectChanges();
  };

  const itShouldCreateTheComponent = () => {
    expect(component).toBeDefined();
  };

  const itShouldRenderCorrectNumberOfTabs = () => {
    const buttons = de.queryAll(By.css('.tab-link'));
    expect(buttons.length).toBe(2);
    expect(buttons[0].nativeElement.textContent.trim()).toBe('Beginner');
    expect(buttons[1].nativeElement.textContent.trim()).toBe('Advanced');
  };

  const itShouldApplyTheActiveClass = () => {
    fixture.componentRef.setInput('activeTab', 'advanced');
    fixture.detectChanges();
    const button = de.query(By.css('.tab-link:last-child'));
    expect(button.nativeElement.classList).toContain('active');
  };

  const itShouldEmitWhenTabIsClicked = () => {
    const button = de.query(By.css('.tab-link:last-child'));
    button.nativeElement.click();
    fixture.detectChanges();
    expect(component.activeTab()).toBe('advanced');
  };

  beforeEach(createComponent);

  it('should create the tabs component', itShouldCreateTheComponent);
  it('should render the correct number of tab buttons', itShouldRenderCorrectNumberOfTabs);
  it('should apply the active class to the selected tab', itShouldApplyTheActiveClass);
  it('should emit activeTab when a tab is clicked', itShouldEmitWhenTabIsClicked);
});
