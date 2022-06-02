programa
{
	const inteiro quant = 200
	inteiro opcao, posicao = 0, n
	cadeia veic[quant], enter, preco[quant]
	funcao inicio()
	{
		limpa()
		escreva("||-------------------------||\n")
		escreva("||Escolha oque deseja fazer||\n")
		escreva("||1- adicionar produto     ||\n")
		escreva("||2- listar estoque        ||\n")
		escreva("||3- Vender veiculo        ||\n")
		escreva("||4- substituir veiculo    ||\n")
		escreva("||5- desligar              ||\n")
		escreva("||-------------------------||\n")
		escreva("opcao: ")
		leia(opcao)
		limpa()

		escolha(opcao)
		{
			caso 1:
			// ele ira levar o usuario para um função para adicionar um produto
			addProduto()

			caso 2:
			// ele ira levar o usuario para um função para listar todos os produtos do estoque
			listarEstoque()

			caso 3:
			// ele ira levar o usuario para retirar um produto do estoque
			retirarEstoque()

			caso 4:
			// ele ira levar o usuario para substituir um produto do estoque por outro
			substituir()

			caso 5:
			//ele ira fechar o programa
			sair()
		}
	}
	funcao addProduto()
	{
		escreva("||-------------------------||\n")
		escreva("||digite o nome do produto ||\n")
		leia(veic[posicao])
		limpa()
		escreva("||-------------------------||\n")
		escreva("||digite o valor do produto||\n")
		leia(preco[posicao])
		limpa()
		escreva("\nPressione a tecla [enter] para continuar: ")
		leia(enter)
		inicio()
		
		
	}
	funcao listarEstoque()
	{
		se(posicao == 0)
		{
			escreva("não há produtos no estoque para serem litados")
		}
		para(n=0; n < posicao; n++)
		{
			escreva("||codigo de produto: ", n, "||veiculo: ",veic[n])
		}
	}
	funcao retirarEstoque()
	{
		
	}
	funcao substituir()
	{
		
	}
	funcao sair()
	{
		
	}

}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1622; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {veic, 5, 8, 4}-{preco, 5, 28, 5};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */