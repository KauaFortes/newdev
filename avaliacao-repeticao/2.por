programa
{//2.  Uma loja tem uma política de descontos conforme o valor da compra do cliente.
//●	Os descontos começam acima dos R$500
//●	A cada 100 reais acima dos R$500,00 o cliente ganha 1% de desconto cumulativo até 25%. Por exemplo: R$500 = 1% || R$600,00 = 2% ...
//Faça um programa que exiba essa tabela de descontos no seguinte formato:
//ValorDaCompra — porcentagemDeDesconto — valorFinal

	real Valor = 500.00, ValorFi = 0.00, Desc = 0.01
	inteiro  contador = 1, porcet = 1
	cadeia enter = "a"

	
	funcao inicio()
	{
		escreva("precione enter\n")
		leia(enter)
			enquanto(contador <= 25)
			{
				ValorFi = Valor - (Valor * Desc)
				escreva("\n||", Valor,"|| ", porcet, "%|| ", ValorFi, "||")
				contador +=1
				Valor +=100
				porcet +=1
				Desc += 0.01
				
							
					
			}
			
			




		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 794; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */