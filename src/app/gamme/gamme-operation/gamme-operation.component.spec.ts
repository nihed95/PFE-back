import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GammeOperationComponent } from './gamme-operation.component';

describe('GammeOperationComponent', () => {
  let component: GammeOperationComponent;
  let fixture: ComponentFixture<GammeOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GammeOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GammeOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
