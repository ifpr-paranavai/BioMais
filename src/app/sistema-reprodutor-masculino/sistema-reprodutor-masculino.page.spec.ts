import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SistemaReprodutorMasculinoPage } from './sistema-reprodutor-masculino.page';

describe('SistemaReprodutorMasculinoPage', () => {
  let component: SistemaReprodutorMasculinoPage;
  let fixture: ComponentFixture<SistemaReprodutorMasculinoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaReprodutorMasculinoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SistemaReprodutorMasculinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
