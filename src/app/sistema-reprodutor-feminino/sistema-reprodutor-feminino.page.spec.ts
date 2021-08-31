import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SistemaReprodutorFemininoPage } from './sistema-reprodutor-feminino.page';

describe('SistemaReprodutorFemininoPage', () => {
  let component: SistemaReprodutorFemininoPage;
  let fixture: ComponentFixture<SistemaReprodutorFemininoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaReprodutorFemininoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SistemaReprodutorFemininoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
