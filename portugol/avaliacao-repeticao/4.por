programa
{//4.  Uma loja utiliza o código V para transação à vista e P para transação a prazo. Faça um programa que receba código e valor de 5 transações. Calcule e mostre:
//●	O valor total das compras à vista
//●	O valor total das compras a prazo sabendo que essas compras possuem 10% de juros sobre o valor total
//●	O valor total das compras efetuadas

	real Vi, Pra, ViTo = 0.0 , PraTo =0.0 , CoTo = 0.0
	cadeia V = "v", P = "p", forma
	inteiro contador = 1
	
	funcao inicio()
	{
		enquanto(contador <= 5)
		{
			
			limpa()
			escreva("se for fazer a vista digite V\n")
			escreva("se for fazer a Prazo digite P\n")
			leia(forma)
	
			se(forma == V)
			{
				escreva("digite seu pagamento: ")
				leia(Vi)
				ViTo += Vi
				contador += 1
			}
			
			se(forma == P)
			{
				escreva("digite seu pagamento: ")
				leia(Pra)
				Pra *= 1.1
				PraTo += Pra
				contador += 1
			}
			
				
			
		}
		CoTo = ViTo + PraTo
		escreva("o valor total a vista foi de: ", ViTo)
		escreva("\no valor total a Prazo foi de: ", PraTo)
		escreva("\no valor total foi de: ", CoTo)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 509; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */