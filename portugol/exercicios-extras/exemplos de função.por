programa
{
	//exemplos de funções
	funcao inicio()
	{
		escreva(numerointeiro(3,6),"\n") 						//função que retonar com tipo inteiro;
		escreva(numeroreal(2.5, 7.89),"\n")					//função que retonar com tipo real;
		escreva(texto("Salve", "irmão\n"))						//função que retonar com tipo cadeia;
		manobraw()										//função que serve para "abreviar" o codigo;
	}

	funcao inteiro numerointeiro(								//função que retonar com tipo inteiro, onde
		  inteiro numero,									//recebe parametros inteiros da linha 6 e 
		  inteiro numero2)									//retorna o produto deles;
		{
		retorne numero * numero2
		}

	funcao real numeroreal(									//função que retonar com tipo real, onde
		  real numeroreal1,									//recebe parametros reais da linha 7 e
		  real numeroreal2)									//retorna a sombra;
		{
		  retorne numeroreal1 + numeroreal2
		}

	funcao cadeia texto(									//função que retonar com tipo cadeia, onde
		  cadeia texto1,									//recebe parametros reais da linha 8 e
		  cadeia texto2)									//retorna a junção dos textos;
		{
			retorne texto1 + texto2
		}

	funcao manobraw()										//função que serve para "abreviar" o codigo, onde
		{												//n recebe nenhum parametro nem real, nem inteiro ou
			escreva("SALVE PROFESSOR, TUDO SUSSE")				//cadeia, apenas executa alguma coisa dentro da função
		}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1340; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */