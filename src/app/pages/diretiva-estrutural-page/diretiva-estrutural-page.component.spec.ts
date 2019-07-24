import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaEstruturalPageComponent } from './diretiva-estrutural-page.component';

describe('DiretivaEstruturalPageComponent', () => {
  let component: DiretivaEstruturalPageComponent;
  let fixture: ComponentFixture<DiretivaEstruturalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivaEstruturalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaEstruturalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
