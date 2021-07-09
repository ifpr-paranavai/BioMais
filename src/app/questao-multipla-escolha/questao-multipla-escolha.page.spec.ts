import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuestaoMultiplaEscolhaPage } from './questao-multipla-escolha.page';

describe('QuestaoMultiplaEscolhaPage', () => {
  let component: QuestaoMultiplaEscolhaPage;
  let fixture: ComponentFixture<QuestaoMultiplaEscolhaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestaoMultiplaEscolhaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestaoMultiplaEscolhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
