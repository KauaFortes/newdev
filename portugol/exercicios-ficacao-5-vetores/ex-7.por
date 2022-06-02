programa
{
	inteiro numero[10], par[10], impar[10]
	funcao inicio()
	{
		para(inteiro i=0; i < 10; i++)
		{
		escreva("digite um numero: ")
		leia(numero[i])
			se(numero[i] % 2 == 0)
			{
				par[i] = numero[i] / 2
			}
			senao
			{
				impar[i] = numero[i] * 3
			}
		}
		para(inteiro i=0; i < 10; i++)
		{
		escreva("\n||numero: ",numero[i], "||par: ", par[i], "||impar: ", impar[i], "||")

		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 221; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */