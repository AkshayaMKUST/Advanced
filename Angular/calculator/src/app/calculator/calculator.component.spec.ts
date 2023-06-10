import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let calculator: CalculatorComponent;

  beforeEach(() => {
    calculator = new CalculatorComponent();
  });

  it('should add two numbers correctly', () => {
    const result = calculator.add(3, 4);
    expect(result).toBe(7);
  });

  it('should subtract two numbers correctly', () => {
    const result = calculator.subtract(8, 3);
    expect(result).toBe(5);
  });
});