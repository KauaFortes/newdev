programa
{
	inteiro numero, contador = 0
	funcao inicio()
	{
		escreva("digite um numero: ")
		leia(numero)

		contador = numero
		enquanto(contador > 1)
		{
		
		 	contador = contador - 1
		 	escreva("||", numero, "X", contador, "||\n")
		 	numero = numero * contador
		 	
	
			
			
		}
			
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 243; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */