import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KokiPage } from './koki.page';

describe('KokiPage', () => {
  let component: KokiPage;
  let fixture: ComponentFixture<KokiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KokiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
