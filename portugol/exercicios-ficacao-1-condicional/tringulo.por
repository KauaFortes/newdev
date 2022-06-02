programa
{
	real L1, L2, L3
	funcao inicio()
	{
		escreva("digite lado 1: ")
		leia(L1)

		escreva("digite lado 2: ")
		leia(L2)

		escreva("digite lado 3: ")
		leia(L3)
	
	se (L2 == L1 e L1 == L3)
		{	
			escreva("o tringlo é equilatero")
			
		}
	senao{
		se (L1 == L2 ou L1 == L3 ou L3 == L2)
		
		escreva("o tringulo é isósceles\n")
		
		senao
		
		escreva("trinagulo é escaleno\n")
		}
	
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 396; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */