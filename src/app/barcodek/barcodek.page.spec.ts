import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarcodekPage } from './barcodek.page';

describe('BarcodekPage', () => {
  let component: BarcodekPage;
  let fixture: ComponentFixture<BarcodekPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
