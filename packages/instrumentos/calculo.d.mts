export declare const SEMANAS_POR_MES: number;
export declare const JORNADA_MENSAL: number;

export type IdCampo = "pessoas" | "horas" | "custo";
export type Entrada = Record<IdCampo, string>;

export interface Campo {
  id: IdCampo;
  piso?: number;
  teto?: number;
  faltando: string;
  zero: string;
  abaixoDoPiso?: string;
  acimaDoTeto?: string;
}

export interface Resultado {
  pessoas: number;
  horas: number;
  custo: number;
  horasMes: number;
  erosaoAno: number;
  postos: number;
}

export interface Problema {
  campo: IdCampo;
  mensagem: string;
}

export interface ParametrosMalha {
  camadas: number;
  desalinho: number;
  proporcaoVeto: number;
  semente: number;
}

export declare const CAMPOS: Campo[];
export declare function paraNumero(texto: string): number;
export declare function validar(entrada: Entrada): Problema | null;
export declare function calcular(entrada: Entrada): Resultado;
export declare const formatar: { horas(n: number): string; dinheiro(n: number): string };
export declare function leituraHumana(r: Resultado): string;
export declare function parametrosDaMalha(r: Resultado): ParametrosMalha;
export declare function geradorDeterministico(semente: number): () => number;
export declare function descreverMalha(p: ParametrosMalha): string;
export declare const TEXTO_MALHA_INICIAL: string;
export declare const TEXTO_LEITURA_INICIAL: string;
