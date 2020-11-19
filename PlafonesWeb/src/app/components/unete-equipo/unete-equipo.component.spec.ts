import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UneteEquipoComponent } from './unete-equipo.component';

describe('UneteEquipoComponent', () => {
  let component: UneteEquipoComponent;
  let fixture: ComponentFixture<UneteEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UneteEquipoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UneteEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
