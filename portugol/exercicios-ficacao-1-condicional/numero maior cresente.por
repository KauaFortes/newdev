programa
{
	inteiro N1, N2, N3, nM=0, nS=0, nN=0
	funcao inicio()
	{
		escreva("digite numero 1:")
		leia(N1)

		escreva("digite numero 2:")
		leia(N2)

		escreva("digite numero 3:")
		leia(N3)

			se(N1 > nM)
			{
				nM = N1
			}
			se(N2 > nM)
			{
				nM = N2
			}
			se(N3 > nM)
			{
				nM = N3
			}
			se(N1 > nN)
			{
				nN = N1
			}
			se(N2 < nN)
			{
				nN = N2
			}
			se(N3 < nN)
			{
				nN = N3
			}
			se(N1 < nM e N1 > nN)
			{
				nS = N1	
			}
			se(N2 < nM e N2 > nN)
			{
				nS = N2	
			}
			se(N3 < nM e N3 > nN)
			{
				nS = N3	
			}

			escreva("a sequencia é: ", nN," ", nS," ", nM)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 611; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */