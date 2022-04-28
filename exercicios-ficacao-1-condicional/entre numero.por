programa
{
	
	cadeia continuar
	real numero
	funcao inicio()
	{
		limpa()
		escreva("||----------------------------------||\n")
		escreva("||escreva um numero entre 100 e 500 ||\n")
		escreva("||----------------------------------||\n")
		leia(numero)
		limpa()

		se (numero > 100 e numero < 500)
			{
				limpa()
				escreva ("boa")
			}
			
		senao
			{
				limpa()
				escreva("tu é borro?")
				escreva("\nPressione a tecla [enter] para continuar: ")
				leia(continuar)
				inicio()
				
			}
			
			
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 182; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */