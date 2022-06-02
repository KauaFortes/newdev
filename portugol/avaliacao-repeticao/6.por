programa
{
	inteiro contador = 0, Idade, Media, IdadeTo = 0
	funcao inicio()
	{
		enquanto(verdadeiro)
		{
			escreva("digite a idade: ")
			leia(Idade)			
			
			IdadeTo += Idade
		
			se(Idade == 0)
			{				
			pare
			}

			contador = contador + 1
		
		}
		Media = IdadeTo / contador
		escreva("media da idade foi de ", Media)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 163; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */