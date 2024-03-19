import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FecundacaoContracepcaoPage } from './fecundacao-contracepcao.page';

describe('FecundacaoContracepcaoPage', () => {
  let component: FecundacaoContracepcaoPage;
  let fixture: ComponentFixture<FecundacaoContracepcaoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FecundacaoContracepcaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FecundacaoContracepcaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
