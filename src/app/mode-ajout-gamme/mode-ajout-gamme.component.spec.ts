import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeAjoutGammeComponent } from './mode-ajout-gamme.component';

describe('ModeAjoutGammeComponent', () => {
  let component: ModeAjoutGammeComponent;
  let fixture: ComponentFixture<ModeAjoutGammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeAjoutGammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeAjoutGammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
