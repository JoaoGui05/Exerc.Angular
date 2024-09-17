import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc1Component } from './exerc1.component';

describe('Exerc1Component', () => {
  let component: Exerc1Component;
  let fixture: ComponentFixture<Exerc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exerc1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exerc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
