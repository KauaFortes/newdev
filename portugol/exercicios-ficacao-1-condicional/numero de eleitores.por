programa
{
	inteiro Abi, Ele, Vot
	cadeia Muni
	
	funcao inicio()
	{
		escreva("digite o nome do município\n")
		leia(Muni)

		escreva("digite o nomero de abitantes\n")
		leia(Abi)

		escreva("digite o numero de elitores\n")
		leia(Ele)

		escreva("digite o numero do candidato mais votado\n")
		leia(Vot)

		se(Vot>Ele)
		{
			escreva("erro")
		}
		senao{
			se(Ele>=20)
			{
			se(Vot>Ele/2)
			{
				escreva("não tera segundo turno")
			}
			senao
				escreva("tera segundo turno")	
			}
			senao
			escreva("não tera segundo turno")
		}
			
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 536; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */