programa
{
	inteiro VC, VP, troco
	inteiro U, D, C


	
	funcao inicio()
	{
		escreva("digite o valor da compra\n")
		leia(VC)

		escreva("digite o valor do pagamento\n")
		leia(VP)

		troco = VP - VC
		C = troco / 100
		D = troco % 100 / 10
		U = troco % 10 /1 

		se(VP>VC)
		{
			escreva("seu troco é R$: ", troco, "\n")
			escreva("em ", C," notas de 100\n")
			escreva("e ", D," notas de 10\n")
			escreva("e ", U," notas de 1\n")
		}

		senao
			escreva("pagamento negado")
			

		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 265; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */