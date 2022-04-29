programa
{
	inteiro numero[10], posi = 0
	funcao inicio()
	{
		para(inteiro i=0; i < 10; i++)
		{
			escreva("digite um numero:")
			leia(numero[i])
			numero[i] = numero[i] * numero[i] * numero[i]
			posi++			

		}
		para(inteiro i=0; i < 10; i++)
		{
			escreva("\n||", numero[i],"||")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 273; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */