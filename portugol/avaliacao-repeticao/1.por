programa
{
	inteiro contador=1, tel	
	real Va, VaTo =0.0
	cadeia nome

	funcao inicio()
	{
		enquanto(contador <= 5)
		{
			escreva("Digite o valor: ")
			leia(Va)
			
			VaTo += Va
		
		contador += 1
		}
		
			VaTo -= 54000
			se(VaTo>54000)
			{
				escreva("O faturamento da loja foi superior ao da loja B!\n")
				escreva("O faturamento superou em R$", VaTo)
			}

			senao
			{
			escreva("O faturamento não superou o da loja B!")
			}

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 235; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */