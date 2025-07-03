import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormPesananPage } from './form-pesanan.page';

describe('FormPesananPage', () => {
  let component: FormPesananPage;
  let fixture: ComponentFixture<FormPesananPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPesananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
