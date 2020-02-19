import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GammeComposantComponent } from './gamme-composant.component';

describe('GammeComposantComponent', () => {
  let component: GammeComposantComponent;
  let fixture: ComponentFixture<GammeComposantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GammeComposantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GammeComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
