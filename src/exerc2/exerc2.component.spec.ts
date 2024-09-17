import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc2Component } from './exerc2.component';

describe('Exerc2Component', () => {
  let component: Exerc2Component;
  let fixture: ComponentFixture<Exerc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Exerc2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Exerc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
