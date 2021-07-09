import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IntestinoGrossoPage } from './intestino-grosso.page';

describe('IntestinoGrossoPage', () => {
  let component: IntestinoGrossoPage;
  let fixture: ComponentFixture<IntestinoGrossoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IntestinoGrossoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IntestinoGrossoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
