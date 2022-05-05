programa
{
	inteiro P1X, P1Y, P2X, P2Y
	cadeia Jogo[3][3] = {{"-","-","-"}, {"-","-","-"}, {"-","-","-"}}
	funcao inicio()
	{
	para(inteiro l=0; l < 6; l++)
	{
		
	  
		para(inteiro i=0; i < 1; i++)
		{
				escreva("Player1, escolha as cordenadas que deseja colocar o X\n")
				escreva("  0 | 1 | 2\n")
				escreva("0 ",Jogo[0][0]," | ", Jogo[0][1]," | ", Jogo[0][2],"\n")
				escreva("1 ",Jogo[1][0]," | ", Jogo[1][1]," | ", Jogo[1][2],"\n")
				escreva("2 ",Jogo[2][0]," | ", Jogo[2][1]," | ", Jogo[2][2],"\n")
				leia(P1X, P1Y)
				Jogo[P1X][P1Y] = "X"
				
		}
		se(
		Jogo[0][0] == "X" e
		Jogo[0][1] == "X" e
		Jogo[0][2] == "X" ou
		Jogo[1][0] == "X" e
		Jogo[1][1] == "X" e
		Jogo[1][2] == "X" ou
		Jogo[2][0] == "X" e
		Jogo[2][1] == "X" e
		Jogo[2][2] == "X" ou
		
		Jogo[0][0] == "X" e
		Jogo[1][0] == "X" e
		Jogo[2][0] == "X" ou
		Jogo[0][1] == "X" e
		Jogo[1][1] == "X" e
		Jogo[2][1] == "X" ou
		Jogo[0][2] == "X" e
		Jogo[1][2] == "X" e
		Jogo[2][2] == "X" ou
		
		Jogo[0][0] == "X" e
		Jogo[1][1] == "X" e
		Jogo[2][2] == "X" ou

		Jogo[0][2] == "X" e
		Jogo[1][1] == "X" e
		Jogo[2][0] == "X" 
	  )
	  {
	  	limpa()
	  	escreva("Player1 é o vencedor")
	  	pare
	  }  
		
		para(inteiro i=0; i < 1; i++)
		{

				escreva("Player2, escolha as cordenadas que deseja colocar o O\n")
				escreva("  0 | 1 | 2\n")
				escreva("0 ",Jogo[0][0]," | ", Jogo[0][1]," | ", Jogo[0][2],"\n")
				escreva("1 ",Jogo[1][0]," | ", Jogo[1][1]," | ", Jogo[1][2],"\n")
				escreva("2 ",Jogo[2][0]," | ", Jogo[2][1]," | ", Jogo[2][2],"\n")
				leia(P2X, P2Y)
				Jogo[P2X][P2Y] = "O"
				
		}
		se(
		Jogo[0][0] == "O" e
		Jogo[0][1] == "O" e
		Jogo[0][2] == "O" ou
		Jogo[1][0] == "O" e
		Jogo[1][1] == "O" e
		Jogo[1][2] == "O" ou
		Jogo[2][0] == "O" e
		Jogo[2][1] == "O" e
		Jogo[2][2] == "O" ou
		
		Jogo[0][0] == "O" e
		Jogo[1][0] == "O" e
		Jogo[2][0] == "O" ou
		Jogo[0][1] == "O" e
		Jogo[1][1] == "O" e
		Jogo[2][1] == "O" ou
		Jogo[0][2] == "O" e
		Jogo[1][2] == "O" e
		Jogo[2][2] == "O" ou
		
		Jogo[0][0] == "O" e
		Jogo[1][1] == "O" e
		Jogo[2][2] == "O" ou

		Jogo[0][2] == "O" e
		Jogo[1][1] == "O" e
		Jogo[2][0] == "O" 
	  )
	  {
	  	limpa()
	  	escreva("Player2 é o vencedor\n")
	  	pare
	  }
	  	
	}
	escreva("o jogo acabou")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 10; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */