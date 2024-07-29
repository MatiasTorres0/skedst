import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProtectedPage } from './protected.page';

describe('ProtectedPage', () => {
  let component: ProtectedPage;
  let fixture: ComponentFixture<ProtectedPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
