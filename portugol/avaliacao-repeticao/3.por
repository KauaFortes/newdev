programa
{//3. Uma companhia de teatro deseja dar uma série de espetáculos. Fatos:
//●	A direção calcula que praticando o preço de R$5,00 serão vendidos 120 ingressos
//●	As despesas são fixas em R$ 200,00.
//●	Ao diminuir R$ 0,50 o preço dos ingressos espera-se que as vendas aumentem em 26 ingressos.
	cadeia enter = "a"
	real Preco = 5.00,  Ingre = 120.0,  Lucro, Des = 200.0, VT
	inteiro contador = 0
	
	funcao inicio()
	{
		escreva("\nprecione enter\n")
		leia(enter)

			enquanto(contador <= 9)
			{
				VT = Preco * Ingre
				Lucro = VT - Des
				escreva("\n|| ", Preco, " || ", Ingre, " || ", Lucro, " ||")
				Preco -= 0.50
				Ingre += 26
				contador += 1
				
				
			}
			

		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 676; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */