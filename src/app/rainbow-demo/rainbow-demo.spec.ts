import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RainbowDemo } from './rainbow-demo';

describe('RainbowDemo', () => {
  let component: RainbowDemo;
  let fixture: ComponentFixture<RainbowDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RainbowDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(RainbowDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
