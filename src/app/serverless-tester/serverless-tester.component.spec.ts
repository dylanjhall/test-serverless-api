import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerlessTesterComponent } from './serverless-tester.component';

describe('ServerlessTesterComponent', () => {
  let component: ServerlessTesterComponent;
  let fixture: ComponentFixture<ServerlessTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerlessTesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerlessTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
