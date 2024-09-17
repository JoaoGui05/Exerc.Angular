import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteCadastroComponent } from './cliente-cadastro.component';
import { FormsModule } from '@angular/forms'; // Adicionar FormsModule para o ngModel funcionar corretamente

describe('ClienteCadastroComponent', () => {
  let component: ClienteCadastroComponent;
  let fixture: ComponentFixture<ClienteCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteCadastroComponent], // Declare o componente aqui
      imports: [FormsModule]  // Adicione FormsModule aqui para que ngModel funcione no teste
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
