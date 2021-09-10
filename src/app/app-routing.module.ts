import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'digestorio',
    loadChildren: () => import('./digestorio/digestorio.module').then( m => m.DigestorioPageModule)
  },
  {
    path: 'reprodutor',
    loadChildren: () => import('./reprodutor/reprodutor.module').then( m => m.ReprodutorPageModule)
  },
  {
    path: 'respiratorio',
    loadChildren: () => import('./respiratorio/respiratorio.module').then( m => m.RespiratorioPageModule)
  },
  {
    path: 'urinario',
    loadChildren: () => import('./urinario/urinario.module').then( m => m.UrinarioPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'circulatorio',
    loadChildren: () => import('./circulatorio/circulatorio.module').then( m => m.CirculatorioPageModule)
  },
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'distrito-sanguineo',
    loadChildren: () => import('./distrito-sanguineo/distrito-sanguineo.module').then( m => m.DistritoSanguineoPageModule)
  },
  {
    path: 'distrito-linfatico',
    loadChildren: () => import('./distrito-linfatico/distrito-linfatico.module').then( m => m.DistritoLinfaticoPageModule)
  },
  {
    path: 'defesas-corpo',
    loadChildren: () => import('./defesas-corpo/defesas-corpo.module').then( m => m.DefesasCorpoPageModule)
  },
  {
    path: 'questao-multipla-escolha',
    loadChildren: () => import('./questao-multipla-escolha/questao-multipla-escolha.module').then( m => m.QuestaoMultiplaEscolhaPageModule)
  },
  {
    path: 'questao-par',
    loadChildren: () => import('./questao-par/questao-par.module').then( m => m.QuestaoParPageModule)
  },  {
    path: 'sistema-reprodutor-feminino',
    loadChildren: () => import('./sistema-reprodutor-feminino/sistema-reprodutor-feminino.module').then( m => m.SistemaReprodutorFemininoPageModule)
  },
  {
    path: 'sistema-reprodutor-masculino',
    loadChildren: () => import('./sistema-reprodutor-masculino/sistema-reprodutor-masculino.module').then( m => m.SistemaReprodutorMasculinoPageModule)
  },
  {
    path: 'fecundacao-contracepcao',
    loadChildren: () => import('./fecundacao-contracepcao/fecundacao-contracepcao.module').then( m => m.FecundacaoContracepcaoPageModule)
  },
  {
    path: 'sistem-muscular',
    loadChildren: () => import('./sistem-muscular/sistem-muscular.module').then( m => m.SistemMuscularPageModule)
  },
  {
    path: 'sistema-endocrino',
    loadChildren: () => import('./sistema-endocrino/sistema-endocrino.module').then( m => m.SistemaEndocrinoPageModule)
  },
  {
    path: 'feedbacknew',
    loadChildren: () => import('./feedbacknew/feedbacknew.module').then( m => m.FeedbacknewPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
