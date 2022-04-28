programa
{
	
	funcao inicio()
	{
		inteiro numero=0, soma=0, media=0, nlidos=0
		
		enquanto(numero >= 0)
		{
		
			escreva("||----------------||\n")
			escreva("||digite um numero||\n")
			escreva("||----------------||\n")
			leia (numero)

			se(numero >= 0)
			{
				nlidos = nlidos + 1
				soma = soma + numero
				media = (media + numero) / nlidos
			}
			
		}
		escreva("||---------------------------------------||\n")
		escreva("\n A soma dos valores é: ", soma)
		escreva("\n A media os valores é: ", media)
		escreva("\n o total de numeros lidos foram: \n", nlidos)
		escreva("\n||---------------------------------------||\n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 588; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */