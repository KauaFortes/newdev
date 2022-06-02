programa
{
	inteiro i
	cadeia usuario[10], p[10]
	funcao inicio()
	{
		para(i=0; i < 10; i++)
		{
		escreva("\ndigite um nome de usuario: ")
		leia(usuario[i])
		}
		procura()
	}	
	funcao procura()
	{
		para(i=0; i <2; i++)
		{
		escreva("\ndigite o nome que esta procurando: ")
		leia(p[i])
			se(p[i] == usuario[i])
			{
				escreva("ACHEI")
			}
			senao
			{
				escreva("\nNÃO ACHEI")
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 223; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {usuario, 4, 9, 7};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */