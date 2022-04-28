programa
{
	real H, peso, IMC
	cadeia enter = ("a")
	
	funcao inicio()
	{
		escreva("||-----------------------------||\n")
		escreva("||calculando seu IMC           ||\n")
		escreva("||precione enter para continuar||\n")
		escreva("||-----------------------------||\n")
		leia(enter)
		limpa()
		
		
			
					
					escreva("||-----------------------||\n")
					escreva("||digite sua altura      ||\n")
					escreva("||-----------------------||\n")
					leia(H)
					limpa()

					escreva("||-----------------------||\n")
					escreva("|| digite seu peso       ||\n")
					escreva("||-----------------------||\n")
					leia(peso)
					limpa()
					
					IMC = peso / (H * H)
					
						se (IMC == 18.5)
							{
							escreva("||------------------------||\n")
							escreva("|| você esta abixo do peso||\n")
							escreva("||------------------------||\n")
							}
							
						se (IMC > 18.5 e IMC < 25)
							{
							escreva("||------------------------||\n")
							escreva("|| você esta no peso ideal||\n")
							escreva("||------------------------||\n")
							}
							
						se (IMC > 25 e IMC < 30)
							{
							escreva("||------------------------||\n")
							escreva("|| você esta acima do peso||\n")
							escreva("||------------------------||\n")
							}

						se (IMC > 30)
							{
							escreva("||------------------------||\n")
							escreva("|| você esta obeso        ||\n")
							escreva("||------------------------||\n")
							}

					
				
					
				
			
			


	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1474; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */