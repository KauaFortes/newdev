programa
{
	
	inteiro numero, resto
	

	
	funcao inicio()
	{
		
		escreva("digite um numero\n")
		leia(numero)

		resto = numero % 2

		se(resto == 0)
			{
				
				escreva("||", numero + 5 ,"||")
				
			}
		senao
			{
				
				escreva("||", numero + 8, "||")
				
			}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 253; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */