programa
{
	inteiro numero[8], Nm=0,n, posicaoM=0
	funcao inicio()
	{	
		para(inteiro posicao=0; posicao < 8; posicao++)
		{
			escreva("digite um numero ")
			leia(numero[posicao])			
		}

		para(inteiro i=0; i < 8; i++){
			se(numero[i] > Nm) 
			{
				Nm = numero[i]
				posicaoM =  i
			}

		}
		
		escreva("numero: ",Nm ,"||", posicaoM , "\n")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 254; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {numero, 3, 10, 6}-{Nm, 3, 21, 2};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */