import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Selection } from './selection';

describe('Selection', () => {
  let component: Selection;
  let fixture: ComponentFixture<Selection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selection],
    }).compileComponents();

    fixture = TestBed.createComponent(Selection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
