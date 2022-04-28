programa
{
	real N1, N2, N3, NM = 0
	funcao inicio()
	{
		escreva("digite numero 1: ")
		leia(N1)

		escreva("digite numero 2: ")
		leia(N2)

		escreva("digite numero 3: ")
		leia(N3)

		se(N1 == N2 e N1 == N3)
		{
			escreva("os numeros são identicos")
		}
		senao
		{
			se(N1 > NM)
			{
				NM = N1
			}
			se(N2 > NM)
			{
				NM = N2
			}
			se(N3 > NM)
			{
				NM = N3
			}
			escreva(" o numeor maior é: ", NM)
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 424; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */