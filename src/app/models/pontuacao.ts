export class Pontuacao {
  private static instance: Pontuacao;

  public quantidadeQuestoesConsecutivas = 0;
  public quantidadePontos = 0;
  public acerto = 0;
  public quantiadePontosRecompensaQuestoesConsecutivas = 0;
  public quantidadeTotalPontos=0;
  public sons=[{som:'som1'}];

  private constructor() { }


  public static getInstance(): Pontuacao {
      if (!Pontuacao.instance) {
        Pontuacao.instance = new Pontuacao();
      }

      return Pontuacao.instance;
  }


  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  public someBusinessLogic() {
      // ...
  }
}
   
