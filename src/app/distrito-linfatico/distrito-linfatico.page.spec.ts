import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistritoLinfaticoPage } from './distrito-linfatico.page';

describe('DistritoLinfaticoPage', () => {
  let component: DistritoLinfaticoPage;
  let fixture: ComponentFixture<DistritoLinfaticoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DistritoLinfaticoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistritoLinfaticoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
