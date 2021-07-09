import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DistritoSanguineoPage } from './distrito-sanguineo.page';

describe('DistritoSanguineoPage', () => {
  let component: DistritoSanguineoPage;
  let fixture: ComponentFixture<DistritoSanguineoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DistritoSanguineoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DistritoSanguineoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
