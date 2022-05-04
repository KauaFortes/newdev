programa
{
	
	funcao inicio()
	{
		/*inteiro vetor[4]
		inteiro matriz[2][2]

		//posicionando um numero na matriz
		matriz[0][1] = 10
		matriz[1][1] = 5
		matriz[0][0] = 1
		matriz[1][0] = 2

		//aqui estamos percorrendo as linhas e colunas
		// no primeiro laço de repetição percorremos as linhas
		// no segundo laço de repetição percorremos as colunas
		// lembrar sempre de alterar a variavel incrementar dos laços de repetição
		para(inteiro linha=0; linha < 2; linha++)
		{
			 //percorre colunas
			 para(inteiro coluna=0; coluna < 2; coluna++)
			{
				escreva(",", matriz[linha][coluna])
			}
		}*/
		cadeia alunos[] = {"bruno","joao","maria"}
		real medias[3]
		real notas[3][3] = {{6.1,7.3,1.2}, 
						{6.1,8.9,9.6}, 
						{8.2,5.5,10.0}}
		para(inteiro linha=0; linha < 3; linha++)
		{
			real soma=0.0
			para(inteiro coluna=0; coluna < 3; coluna++)
			{
				soma+= notas[linha][coluna]
			}
			medias[linha] = soma/3
		}
		inteiro numero[2][2], num
		para(inteiro l=0; l < 2; l++)
		{
			para(inteiro c=0; c < 2; c++)
			{
				escreva("digite um numero: ")
				leia(numero[l][c])
			}	
		}
		para(inteiro l=0; l < 2; l++)
		{
			para(inteiro c=0; c < 1; c++)
			{
				escreva(" ", numero[0][l])
			}	
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1211; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {numero, 41, 10, 6}-{num, 41, 24, 3};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */