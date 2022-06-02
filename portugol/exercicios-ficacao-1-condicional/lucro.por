programa
{
	real lucro, produto
	
	funcao inicio()
	{
		escreva("digite o valor do produto R$: ")
		leia(produto)

		se(produto < 200)
			{
				lucro = produto / 2
				escreva("seu lucro é de R$: ", produto + lucro)
			}

		senao
			{
				lucro = produto * 0.3
				escreva("seu lucro é de R$ :", produto + lucro)
			}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 213; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */