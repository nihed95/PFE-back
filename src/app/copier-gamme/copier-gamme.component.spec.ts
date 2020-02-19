import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopierGammeComponent } from './copier-gamme.component';

describe('CopierGammeComponent', () => {
  let component: CopierGammeComponent;
  let fixture: ComponentFixture<CopierGammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopierGammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopierGammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
