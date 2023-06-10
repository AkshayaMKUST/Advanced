import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
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
  
    it('should show image not found message when image fails to load', () => {
      const imgElement = fixture.nativeElement.querySelector('img');
      imgElement.dispatchEvent(new Event('error'));
      fixture.detectChanges();
      const errorMessage = fixture.nativeElement.querySelector('p');
      expect(errorMessage.textContent).toContain('Image not found!');
    });
  });
  
