import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SistemaEndocrinoPage } from './sistema-endocrino.page';

describe('SistemaEndocrinoPage', () => {
  let component: SistemaEndocrinoPage;
  let fixture: ComponentFixture<SistemaEndocrinoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SistemaEndocrinoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SistemaEndocrinoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
