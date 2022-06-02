programa
{
	const inteiro  quant=200
	inteiro opcao, posicao=0, repeticao, estoque[quant],  
		   retirada, previsao, subtotal = 0, total = 200
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
		escreva("||5- Saldo total no estoque ||\n")
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
			escreva("||codigo de produto: ", p, "||veiculo: ",veic[p], "||quantidade: ", estoque[p],"||\n")
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
			escreva("||codigo de produto: ", i, "||veiculo: ",veic[i], "||quantidade: ", estoque[i],"||\n")
		}
		para(inteiro i=0; i < repeticao; i++)
		{
			escreva("digite o codigo do produto que deseja adicionar\n")
			leia(i)
			
			escreva("||---------------------------------||\n")
			escreva("||digite a quantidade desse produto||\n")
			escreva("||---------------------------------||\n")
			leia(previsao)	
			se(subtotal + previsao > total)
			{
				escreva("não há mais suficiente no estoque")
				escreva("\nPressione a tecla [enter] para continuar: ")
				leia(enter)
				estoque[i] -= estoque[i]
				inicio()
			}
			senao
			{
				estoque[i] += previsao
				subtotal += previsao			
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
			escreva("||codigo de produto: ", i, "||veiculo: ",veic[i], "||quantidade: ", estoque[i],"||\n")
		}
		para(inteiro i=0; i < repeticao; i++)
		{
			escreva("digite o codigo do produto que deseja retirar\n")
			leia(i)
			escreva("||---------------------------------------------------||\n")
			escreva("||digite a quantidade que desse retirar desse produto||\n")
			escreva("||---------------------------------------------------||\n")
			leia(retirada)
			se(estoque[i] - retirada < 0)
			{
				escreva("||------------------------------------------------||\n")
				escreva("\no valor informado é maior que o valor no estoque||")
				escreva("\nPressione a tecla [enter] para continuar:       ||")
				escreva("||------------------------------------------------||\n")
				leia(enter)
				retirada -= retirada
				inicio()
			}
			senao
			{
				estoque[i] -= retirada
				subtotal = subtotal - retirada
			}
			
		}
		escreva("\nproduto/s adicionados no estoque")
		escreva("\nPressione a tecla [enter] para continuar: ")
		leia(enter)
		inicio()
	}
	
	funcao saldo()
	{
		escreva("||--------------------------------------||")
		escreva("\n||o saldo de produtos no estoque é de: ", subtotal, "||")
		escreva("\n||Pressione a tecla [enter] para continuar: ||")
		escreva("||--------------------------------------||")
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
 * @POSICAO-CURSOR = 3684; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {repeticao, 4, 27, 9}-{estoque, 4, 38, 7}-{retirada, 5, 5, 8}-{previsao, 5, 15, 8}-{subtotal, 5, 25, 8}-{veic, 6, 8, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */