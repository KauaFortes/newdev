programa
{
	inclua biblioteca Texto
	
	
	cadeia usuario
	cadeia senha
	inteiro opcao
	cadeia senhadigitada
	cadeia continuar
	
	funcao inicio()
	{
		limpa()
		escreva("#############################################\n")
		escreva("# escolha uma opção:                        #\n")
		escreva("#                                           #\n")
		escreva("# 1 - colocar nome de usuario               #\n")
		escreva("# 2 - colocar sua senha                     #\n")
		escreva("# 3 - sair do sistema                       #\n")
		escreva("#############################################\n")
		escreva("opcão:")
		leia(opcao)
		limpa()

		escolha(opcao)
		{
			caso 1:
			{
				//para ler o usuario
				usuariocont()
			}

			caso 2:
			{
				//para ler a senha
				senhacont()
			}

		
		}
		
		
	}
	
	funcao usuariocont()
	{
		limpa()
		escreva("digite seu nome de usuario: \n")
		leia(usuario)
		inicio()
	}

	funcao senhacont()
	{
		limpa()
		senha = "portugol"
		escreva("digite sua senha: \n")
		leia(senhadigitada)
			se (senhadigitada == senha)
			{
				escreva("você entrou na sua conta")
				escreva("\nPressione a tecla [enter] para continuar: ")
				leia(continuar)
				inicio()
			}
			senao
			{			
				escreva("senha incorreta tente novamente")
				escreva("\nPressione a tecla [enter] para continuar: ")
				leia(continuar)
				senhacont()
				
			}	
			
	}

	
	
	
}	
	
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 606; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */