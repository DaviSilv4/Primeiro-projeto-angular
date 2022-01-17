import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoNaoEncotradoComponent } from './produto-nao-encotrado.component';

describe('ProdutoNaoEncotradoComponent', () => {
  let component: ProdutoNaoEncotradoComponent;
  let fixture: ComponentFixture<ProdutoNaoEncotradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoNaoEncotradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoNaoEncotradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
