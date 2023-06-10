import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an h1 element with the correct title', () => {
    const h1Element = fixture.nativeElement.querySelector('h1');
    expect(h1Element).toBeTruthy();
    expect(h1Element.textContent).toBe(component.title);
  });

  it('should contain an unordered list (ul) element', () => {
    const ulElement = fixture.nativeElement.querySelector('ul');
    expect(ulElement).toBeTruthy();
  });

  it('should contain the correct number of list item (li) elements', () => {
    const liElements = fixture.nativeElement.querySelectorAll('li');
    expect(liElements.length).toBe(component.items.length);
  });

  it('should contain an input element with placeholder text', () => {
    const inputElement = fixture.nativeElement.querySelector('input');
    expect(inputElement).toBeTruthy();
    expect(inputElement.placeholder).toBe('Enter a value');
  });
});
