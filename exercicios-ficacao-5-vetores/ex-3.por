programa
{
	
cadeia enter = ""
	inteiro resto[100]
	funcao inicio()
	{
		escreva("precione enter para começar")
		leia(enter)
		para(inteiro i=1; i < 100; i++)
		{
			resto[i] = resto[i-1]+1
			se(resto[i] % 2 != 0)
			{
				escreva("\n||",resto[i])
			}
		}

	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 211; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */