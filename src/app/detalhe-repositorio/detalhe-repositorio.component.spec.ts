import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheRepositorioComponent } from './detalhe-repositorio.component';

describe('DetalheRepositorioComponent', () => {
  let component: DetalheRepositorioComponent;
  let fixture: ComponentFixture<DetalheRepositorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheRepositorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheRepositorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
