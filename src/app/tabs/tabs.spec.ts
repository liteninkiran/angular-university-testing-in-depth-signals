import { ComponentFixture, TestBed } from '@angular/core/testing';
import { describe, it, beforeEach, expect } from 'vitest';
import { TabsComponent } from './tabs';
import { TabData } from './tabs.model';
import { MOCK_TABS } from '../testing/testing-data';

describe('TabsComponent', () => {
  let component: TabsComponent;
  let fixture: ComponentFixture<TabsComponent>;
  const mockTabs: TabData[] = MOCK_TABS;

  beforeEach(async () => {
    const moduleDef = { imports: [TabsComponent] };
    await TestBed.configureTestingModule(moduleDef).compileComponents();
    fixture = TestBed.createComponent(TabsComponent);
    fixture.componentRef.setInput('tabs', mockTabs);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should create the tabs component', () => {
    expect(component).toBeDefined();
  });
});
