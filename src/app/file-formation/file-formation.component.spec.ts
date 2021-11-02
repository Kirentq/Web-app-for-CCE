import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileFormationComponent } from './file-formation.component';

describe('FileFormationComponent', () => {
  let component: FileFormationComponent;
  let fixture: ComponentFixture<FileFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
