export default class Calculadora {
  static CalculaMedida(a: number, b: number, c: number): number {
    // a-b
    // c-x
    // x = (b*c)/a
    return ((b * c) / a);
  }

  static CalculaMedidaFormatada(resultado: number): string {
    return resultado.toFixed(2).toString();
  }

  static FormataCalculo(valor: string[]): string {
    var resultado = valor.join(" -> ");
    return resultado;
  }

  static FormatadorFinal(valor: number, resultado: number, nome_medida: string): string {
    return this.FormataCalculo([
      nome_medida,
      valor.toString(),
      resultado.toString(),
      Math.round(resultado).toString()
    ]);
  }
}