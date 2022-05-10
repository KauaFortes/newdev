
{
	const inteiro  quant=200
	inteiro opcao, posicao=0, repeticao, relatorio[3][quant],  
		   subtotal=0,total = 200
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
		escreva("||5- imprimir relatorio     ||\n")
		escreva("||6- desligar               ||\n")
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
			// ele ira levar o usuario para atribuir um produto ao estoque
			entrada()
			pare

			caso 4:
			// ele ira levar o usuario para retirar um produto do estoque
			saida()
			pare

			caso 5:
			// ele ira mostrar para o usuarios quantos corros ele tem no total
			saldo()			
			pare
			
			caso 6:
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
		escreva("||-----------------------------------------------------||\n")
		escreva("||quantos produtos que deseja registrar no estoque     ||\n")
		escreva("||-----------------------------------------------------||\n")
		leia(repeticao)
		limpa()
		
		para(inteiro i=0; i < repeticao; i++)
		{
		escreva("||-------------------------||\n")
		escreva("||digite o nome do produto ||\n")
		escreva("||-------------------------||\n")
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
		para(inteiro p = 0; p < posicao; p++)
		{
			se(veic[p] == "")
			{
				pare
			}
			escreva("||codigo de produto: ", p, "||veiculo: ",veic[p], "||quantidade: ", relatorio[0][p],"||\n")
		}
		escreva("\nPressione a tecla [enter] para continuar: ")
		leia(enter)
		inicio()	
		
	}
	funcao entrada()
	{
		se(subtotal >= total)
			{
				escreva("não há mais espaço no estoque")
				escreva("\nPressione a tecla [enter] para continuar: ")
				leia(enter)
				inicio()
			}
		se(subtotal < total)
		{
		escreva("||------------------------------------------------------------||\n")
		escreva("||quantos produtos diferentes deseja adicionar no estoque     ||\n")
		escreva("||------------------------------------------------------------||\n")
		leia(repeticao)
		limpa()
		para(inteiro i = 0; i < posicao; i++)
		{
			se(veic[i] == "")
			{
				pare
			}
			escreva("||codigo de produto: ", i, "||veiculo: ",veic[i], "||quantidade: ", relatorio[0][i],"||\n")
		}
		para(inteiro i=0; i < repeticao; i++)
		{
			escreva("digite o codigo do produto que deseja adicionar\n")
			leia(i)
			
			escreva("||---------------------------------||\n")
			escreva("||digite a quantidade desse produto||\n")
			escreva("||---------------------------------||\n")
			leia(relatorio[1][i])	
			se(subtotal + relatorio[1][i] > total)
			{
				escreva("não há mais suficiente no estoque")
				escreva("\nPressione a tecla [enter] para continuar: ")
				leia(enter)
				relatorio[1][i] -= relatorio[1][i]
				inicio()
			}
			senao
			{
				relatorio[0][i] += relatorio[1][i]
				subtotal += relatorio[1][i]
						
			}
			
		}
		repeticao -= repeticao
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
		escreva("||quantos produtos diferentes deseja retirar no estoque       ||\n")
		escreva("||------------------------------------------------------------||\n")
		leia(repeticao)
		limpa()
		para(inteiro i = 0; i < posicao; i++)
		{
			se(veic[i] == "")
			{
				pare
			}
			escreva("||codigo de produto: ", i, "||veiculo: ",veic[i], "||quantidade: ", relatorio[0][i],"||\n")
		}
		para(inteiro i=0; i < repeticao; i++)
		{
			escreva("digite o codigo do produto que deseja retirar\n")
			leia(i)
			escreva("||---------------------------------------------------||\n")
			escreva("||digite a quantidade que desse retirar desse produto||\n")
			escreva("||---------------------------------------------------||\n")
			leia(relatorio[2][i])
			se(relatorio[0][i] - relatorio[2][i] < 0)
			{
				escreva("||------------------------------------------------||\n")
				escreva("\no valor informado é maior que o valor no estoque||")
				escreva("\nPressione a tecla [enter] para continuar:       ||")
				escreva("\n||------------------------------------------------||\n")
				leia(enter)
				relatorio[2][i] -= relatorio[2][i]
				inicio()
			}
			senao
			{
				relatorio[0][i] -= relatorio[2][i]
				subtotal -= relatorio[2][i]
			}
			
		}
		repeticao -= repeticao
		escreva("\nproduto/s adicionados no estoque")
		escreva("\nPressione a tecla [enter] para continuar: ")
		leia(enter)
		inicio()
	}
	
	funcao saldo()
	{
		para(inteiro l=0; l < posicao; l++)
		{
			para(inteiro c=0; c < 1; c++)
			{
				se(veic[l] == "")
				{
					pare
				}
				escreva("\n produto: ",veic[l], "||saldo: ", relatorio[0][l], "||entrada: ", relatorio[1][l], "||saida: ", relatorio[2][l])
			}	
		}
		escreva("\n||--------------------------------------------||")
		escreva("\n||o saldo total do estoque é de: ", subtotal,"          ||")
		escreva("\n||Pressione a tecla [enter] para continuar:   ||")
		escreva("\n||--------------------------------------------||")
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
 * @POSICAO-CURSOR = 5216; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {relatorio, 4, 38, 9}-{subtotal, 5, 5, 8}-{veic, 6, 8, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */