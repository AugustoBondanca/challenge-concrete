import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PesquisaGithubComponent } from './pesquisa-github.component';

describe('PesquisaGithubComponent', () => {
  let component: PesquisaGithubComponent;
  let fixture: ComponentFixture<PesquisaGithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PesquisaGithubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PesquisaGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
