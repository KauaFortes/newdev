programa
{
	real  salaliq, sala
	
	funcao inicio()
	{
		escreva("||-------------------||\n")
		escreva("||digite seu salario ||\n")
		escreva("||-------------------||\n")
		escreva("||R$:")
		leia(sala)
		limpa()

		se (sala < 2000)
			{
			salaliq = sala * 0.1
			salaliq = sala - salaliq
			escreva("||--------------------------||\n")
		 	escreva("||seu salario liquido é R$:", salaliq)
		 	escreva("\n||--------------------------||")
		 	
			}
		senao
			{
			salaliq = sala * 0.2
			salaliq = sala - salaliq
			escreva("||--------------------------||\n")
			escreva("||seu salario liquido é R$:",salaliq)
			escreva("\n||--------------------------||")
			}	
	
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 465; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */