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

  beforeEach(async () => {
    const moduleDef = { imports: [TabsComponent] };
    await TestBed.configureTestingModule(moduleDef).compileComponents();
    fixture = TestBed.createComponent(TabsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('tabs', mockTabs);
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the tabs component', () => {
    expect(component).toBeDefined();
  });

  it('should render the correct number of tab buttons', () => {
    const buttons = de.queryAll(By.css('.tab-link'));
    expect(buttons.length).toBe(2);
    expect(buttons[0].nativeElement.textContent.trim()).toBe('Beginner');
    expect(buttons[1].nativeElement.textContent.trim()).toBe('Advanced');
  });
});
