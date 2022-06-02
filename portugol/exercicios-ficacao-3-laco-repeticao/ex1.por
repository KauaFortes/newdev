programa
{
	inteiro numero, resto=1, mult
	
	funcao inicio()
	{
		escreva("digite um numero: ")
		leia(numero)

		escreva("\n||mult de ", numero)
		para(inteiro i=0; i < 11; i++)
		{
			
			resto = numero * i
			
			 escreva("\n||",numero, " X ", i, "=", resto)
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 178; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */