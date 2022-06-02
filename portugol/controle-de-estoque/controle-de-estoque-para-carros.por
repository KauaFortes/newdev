programa
{
	const inteiro quantmaxima = 200, quant=200
	inteiro opcao, posicao=0, repeticao, quantidade[quant],  
		   estoque[quant], quantidaderetirada[quant], 
		   quantidadeadicionada, soma = 0, somaT = 0
	cadeia veic[quant], enter
	funcao inicio()
	{
		limpa()
		escreva("||--------------------------||\n")
		escreva("||digite a opção que deseja ||\n")
		escreva("||1- registrar produto      ||\n")
		escreva("||2- listar estoque         ||\n")
		escreva("||3- movimentação de entrada||\n")
		escreva("||4- movimentação de saida  ||\n")
		escreva("||5- desligar               ||\n")
		escreva("||--------------------------||\n")
		escreva("opcao: ")
		leia(opcao)
		limpa()

		escolha(opcao)
		{
			caso 1:
			// ele ira levar o usuario para um função para adicionar um produto
			addProduto()
			pare

			caso 2:
			// ele ira levar o usuario para um função para listar todos os produtos do estoque
			listarEstoque()
			pare

			caso 3:
			// ele ira levar o usuario para retirar um produto do estoque
			entrada()
			pare

			caso 4:
			// ele ira levar o usuario para substituir um produto do estoque por outro
			saida()
			pare

			caso 5:
			//ele ira fechar o programa
			sair()
			pare

			caso contrario:
			//o usuario selecionou uma operação que n existe
			escreva("operação invalida")
			pare
		}
	}
	funcao addProduto()
	{
		escreva("||------------------------------------------||\n")
		escreva("||quantos produtos registrar no estoque     ||\n")
		leia(repeticao)
		para(inteiro i=0; i < repeticao; i++)
		{
		escreva("||-------------------------||\n")
		escreva("||digite o nome do produto ||\n")
		leia(veic[posicao])	
		posicao++
		limpa()
		
		}
		escreva("\nproduto/s registrados no estoque")
		escreva("\nPressione a tecla [enter] para continuar: ")
		leia(enter)
		inicio()	
	}
	funcao listarEstoque()
	{
		se(posicao == 0)
		{
			escreva("não há produtos listados no estoque")
		}
		para(inteiro i = 0; i < posicao; i++)
		{
			se(veic[i] == "")
			{
				pare
			}
			escreva("||codigo de produto: ", i, "||veiculo: ",veic[i], "||quantidade: ", quantidade[i],"||\n")
		}
		escreva("\nPressione a tecla [enter] para continuar: ")
		leia(enter)
		inicio()	
		
	}
	funcao entrada()
	{
		se(soma < 200)
		{
		escreva("||------------------------------------------------------------||\n")
		escreva("||quantos produtos diferentes deseja adicionar no estoque     ||\n")
		leia(repeticao)
		limpa()
		para(inteiro i = 0; i < posicao; i++)
		{
			se(veic[i] == "")
			{
				pare
			}
			escreva("||codigo de produto: ", i, "||veiculo: ",veic[i], "||quantidade: ", quantidade[i],"||\n")
		}
		para(inteiro i=0; i < repeticao; i++)
		{
			escreva("digite o codigo do produto que deseja adicionar\n")
			leia(i)
			
			escreva("||---------------------------------||\n")
			escreva("||digite a quantidade desse produto||\n")
			leia(quantidadeadicionada)
			se(soma < 200)
			{
				soma = somaT + quantidade[i]
				quantidade[i] += quantidadeadicionada
			}
			se(soma >= 200)
			{
				escreva("não há mais espaço no estoque")
				escreva("\nPressione a tecla [enter] para continuar: ")
				leia(enter)
				inicio()
			}
		}
		escreva("\nproduto/s adicionados no estoque")
		escreva("\nPressione a tecla [enter] para continuar: ")
		leia(enter)
		inicio()
		}
		senao
		{
			escreva("não há mais espaço no estoque")
			escreva("\nPressione a tecla [enter] para continuar: ")
			leia(enter)
			inicio()
		}
		
	}
	funcao saida()
	{
		escreva("||------------------------------------------------------------||\n")
		escreva("||quantos produtos diferentes deseja adicionar no estoque     ||\n")
		leia(repeticao)
		limpa()
		para(inteiro i = 0; i < posicao; i++)
		{
			se(veic[i] == "")
			{
				pare
			}
			escreva("||codigo de produto: ", i, "||veiculo: ",veic[i], "||quantidade: ", quantidade[i],"||\n")
		}
		para(inteiro i=0; i < repeticao; i++)
		{
			escreva("digite o codigo do produto que deseja adicionar\n")
			leia(i)
			escreva("||---------------------------------||\n")
			escreva("||digite a quantidade que desse retirar desse produto||\n")
			leia(quantidaderetirada[i])
			quantidade[i] -= quantidaderetirada[i]
			
		}
		escreva("\nproduto/s adicionados no estoque")
		escreva("\nPressione a tecla [enter] para continuar: ")
		leia(enter)
		inicio()
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
 * @POSICAO-CURSOR = 3279; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {quantidade, 4, 38, 10}-{soma, 6, 27, 4}-{somaT, 6, 37, 5};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */