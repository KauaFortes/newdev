programa
{
	cadeia op
	real numero1, numero2, resul
	funcao inicio()
	{
		escreva("qual operação matematica deseja realizar?")
		escreva("\n1 - adição")
		escreva("\n2 - subtração")
		escreva("\n3 - divisão")
		escreva("\n4 - multiplicação\n")
		leia(op)

		se(op == "1")
		{
			escreva("digite o primeiro numero\n")
			leia(numero1)
			escreva("digite o primeiro numero\n")
			leia(numero2)

			resul = numero1 + numero2
			escreva("o resultado foi: ", resul)
			
		}
		se(op == "2")
		{
			escreva("digite o primeiro numero\n")
			leia(numero1)
			escreva("digite o primeiro numero\n")
			leia(numero2)

			resul = numero1 - numero2
			escreva("o resultado foi: ", resul)
		}
		se(op == "3")
		{
			escreva("digite o primeiro numero\n")
			leia(numero1)
			escreva("digite o primeiro numero\n")
			leia(numero2)

			resul = numero1 / numero2
			escreva("o resultado foi: ", resul)
		}
		se(op == "4")
		{
			escreva("digite o primeiro numero\n")
			leia(numero1)
			escreva("digite o primeiro numero\n")
			leia(numero2)

			resul = numero1 * numero2
			escreva("o resultado foi: ", resul)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1009; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */