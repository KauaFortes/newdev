programa
{
	cadeia enter = ""
	inteiro fn = 0, fn1 = 1, fn2 = 0, resu[41]
	
	funcao inicio()
	{
		escreva("precione enter para começar")
		leia(enter)

		para(inteiro i=0; i < 40; i++)
		{
			
			fn = fn1 + fn2
			fn1 = fn2
			fn2 = fn
			resu[i] = i
			escreva("\n||", fn, "||", resu[i])	
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 184; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {resu, 4, 35, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */