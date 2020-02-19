import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterGammeComponent } from './ajouter-gamme.component';

describe('AjouterGammeComponent', () => {
  let component: AjouterGammeComponent;
  let fixture: ComponentFixture<AjouterGammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterGammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterGammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
