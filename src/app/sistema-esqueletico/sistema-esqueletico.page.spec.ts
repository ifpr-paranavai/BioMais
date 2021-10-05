import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SistemaEsqueleticoPage } from './sistema-esqueletico.page';

describe('SistemaEsqueleticoPage', () => {
  let component: SistemaEsqueleticoPage;
  let fixture: ComponentFixture<SistemaEsqueleticoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaEsqueleticoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SistemaEsqueleticoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
