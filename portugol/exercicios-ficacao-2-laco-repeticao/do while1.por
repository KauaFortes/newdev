programa
{
	inteiro numero = 233
	cadeia enter = "a"
	
	funcao inicio()
	{
		escreva("para iniciar contagem de 233 a 456 precione enter")
		leia (enter)

		enquanto(numero<=456)
		{
		escreva("||", numero, "||\n")
		numero = numero + 5

				enquanto(numero<400)
				{
					escreva("||", numero, "||\n")
					numero = numero + 3	
				}
				enquanto(numero == 455)
				{
					escreva("||", numero, "||\n")
					numero = numero + 1
				}
				
			}
		
		}
	
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 367; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */