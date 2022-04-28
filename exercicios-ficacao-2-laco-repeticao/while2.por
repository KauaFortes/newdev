programa
{
	
	funcao inicio()
	{
		real H = 0.0,  MH = 0.0, MnH = 0.0
		inteiro contador = 0
		
		enquanto(contador < 15)
			{
		
				escreva("digite seu tamanho\n")
				leia(H)
	
				se(H > MH)
				{
					MH = H
				}
				se(H < MH)
				{
					MnH = H
				}

			contador = contador + 1
			}
			
			escreva("\na maior altura do grupo é: ", MH)
			escreva("\na menor altura do grupo é: ", MnH)
			
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 120; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */