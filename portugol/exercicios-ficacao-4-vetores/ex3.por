programa
{
	inteiro numero[10], resto, numeromult=0, numeroinpa=0
	
	funcao inicio()
	{
		para(inteiro i=0; i < 10; i++)
		{
			escreva("digite numero: ")
			leia(numero[i])

		}
		para(inteiro i=0; i < 10; i++)
		{
			resto = numero[i] % 2

			se(resto == 0)
			{
				para(inteiro n=0; n < 10; n++)
				{
					numeromult *= resto
				}
			}
			senao
			{
				para(inteiro n=0; n < 10; n++)
				{
					numeroinpa += resto
				}
			}
		}
		escreva("a multiplicação foi de: ", numeromult, "e a soma foi de: ", numeroinpa)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 427; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */