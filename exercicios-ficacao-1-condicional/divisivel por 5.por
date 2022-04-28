programa
{
	inteiro numero, resto
	

	
	funcao inicio()
	{
		
		escreva("digite um numero\n")
		leia(numero)

		resto = numero % 5

		se(resto == 0)
			{
				escreva("é dividivel por 5")
			}
		senao
		escreva("indivisivel por 5")

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 230; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */