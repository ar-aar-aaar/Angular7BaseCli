import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaPersonasComponent } from './alta-personas.component';

describe('AltaPersonasComponent', () => {
  let component: AltaPersonasComponent;
  let fixture: ComponentFixture<AltaPersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaPersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
