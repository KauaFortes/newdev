programa
{
	inteiro altura[10], alturamai=0, alturamed, alturasoma = 0
	funcao inicio()
	{
		 para(inteiro i=0; i < 10; i++)
		{
		escreva("digite a altura do atletas em cm: ")
		leia(altura[i])
		alturasoma += altura[i]
		}
		alturamed = alturasoma / 10
		escreva("altura media dos atletas é de: ", alturamed)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 316; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {altura, 3, 10, 6}-{alturamai, 3, 22, 9}-{alturamed, 3, 35, 9}-{alturasoma, 3, 46, 10};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */