import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminPageEmptyComponent } from './admin-page-empty.component';



describe('AdminPageComponent', () => {
  let component: AdminPageEmptyComponent;
  let fixture: ComponentFixture<AdminPageEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPageEmptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPageEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
