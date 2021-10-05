import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NervosoPerifericoPage } from './nervoso-periferico.page';

describe('NervosoPerifericoPage', () => {
  let component: NervosoPerifericoPage;
  let fixture: ComponentFixture<NervosoPerifericoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NervosoPerifericoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NervosoPerifericoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
