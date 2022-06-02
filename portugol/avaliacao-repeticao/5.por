programa
{
	inteiro numero, contador = 1, numeroEM = 0
	funcao inicio()
	{
		enquanto(contador <=3)
		{
			escreva("digite um numero\n")
			leia(numero)
			contador +=1
		
			se(numero >= 30 e numero <= 90)
				numeroEM = numeroEM + 1
		}		
		escreva("ha ", numeroEM, " entre 30 e 90")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 187; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */