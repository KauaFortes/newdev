programa
{
	
inteiro numero[4], mediato=0, media=0
	funcao inicio()
	{
		para(inteiro i=0; i < 4; i++)
		{
		escreva("digite um numero para a media")
		leia(numero[i])
		media += numero[i]
		
		}
		mediato = media / 4
		escreva("a media é de: ", mediato)
		
	}
}


/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 254; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {media, 4, 30, 5};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */