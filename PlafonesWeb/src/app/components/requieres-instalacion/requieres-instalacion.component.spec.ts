import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequieresInstalacionComponent } from './requieres-instalacion.component';

describe('RequieresInstalacionComponent', () => {
  let component: RequieresInstalacionComponent;
  let fixture: ComponentFixture<RequieresInstalacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequieresInstalacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequieresInstalacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
