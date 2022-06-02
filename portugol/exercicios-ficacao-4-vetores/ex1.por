programa
{
	
	funcao inicio()
	{
		inteiro numero[5], primo[5]
		
		para(inteiro i=0; i < 5; i++)
		{
			escreva("digite um numero: ")
			leia(numero[i])
		}
		para(inteiro i=0; i < 5; i++)
		{

			se(numero[i] % 2 != 0 e numero[i] % 3 != 0 e numero[i] % 4 != 0 e numero[i] % 5 != 0 e numero[i] % 6 != 0 e numero[i] % 7 != 0 e numero[i] % 8 != 0 e numero[i] % 9 != 0)
			{
				primo[i] = numero[i]
				
			}
			escreva("||", primo[i])
		}
		
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 201; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */