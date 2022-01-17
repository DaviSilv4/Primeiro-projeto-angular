import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoPaginaComponent } from './produto-pagina.component';

describe('ProdutoPaginaComponent', () => {
  let component: ProdutoPaginaComponent;
  let fixture: ComponentFixture<ProdutoPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoPaginaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
