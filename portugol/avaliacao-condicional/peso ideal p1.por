programa
{
	
	real H, peso
	inteiro opcao
	cadeia nome
	
	
	funcao inicio()
	{
		escreva("||-----------------------||\n")
		escreva("||calculando o peso ideal||\n")
		escreva("||-----------------------||\n")
		escreva("\n")
		escreva("||-----------------------||\n")
		escreva("||escolha seu sexo       ||\n")
		escreva("|| 1 homem               ||\n")
		escreva("|| 2 mulher              ||\n")
		escreva("||-----------------------||\n")
		leia(opcao)
		limpa()
		
		escolha(opcao)
			{
			caso 1:
				{
					escreva("||---------------------------||\n")
					escreva("||digite sua altura em metros||\n")
					escreva("||---------------------------||\n")
					leia(H)
					limpa()
					
					peso = (72.7 * H) -58
					escreva("||-----------------------||\n")
					escreva("|| seu peso ideal é      ||\n")
					escreva("||", peso, "\n")
					escreva("||-----------------------||\n")
					pare
					
				}
			caso 2:
				{
					escreva("||---------------------------||\n")
					escreva("||digite sua altura em metros||\n")
					escreva("||---------------------------||\n")
					leia(H)
					limpa()

					peso = (62.1 * H) -44.7
					escreva("||-----------------------||\n")
					escreva("|| seu peso ideal é      ||\n")
					escreva("||", peso, "\n")
					escreva("||-----------------------||\n")
					pare
					
				}
			}


	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 828; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */