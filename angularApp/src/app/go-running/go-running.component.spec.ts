import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoRunningComponent } from './go-running.component';

describe('GoRunningComponent', () => {
  let component: GoRunningComponent;
  let fixture: ComponentFixture<GoRunningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoRunningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoRunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
