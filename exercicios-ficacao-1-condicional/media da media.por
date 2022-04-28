programa
{

real nota1, nota2, nota3, nota4, media1, media2, notafinal
inteiro opcao
cadeia nome, pesquisa
cadeia enter = ("a")

funcao inicio(){
	
	faca{

		escreva("||-------------------------------||\n")
		escreva("||digite uma opção:              ||\n")
		escreva("||1 - cadastro de novo aluno     ||\n")
		escreva("||2 - listar alunos cadastrados  ||\n")
		escreva("||3 - sair                       ||\n")
		escreva("||-------------------------------||\n")
		leia(opcao)
		limpa()

		escolha(opcao)
			{
			caso 1:
				{
				
					escreva ("||---------------------------||\n")
					escreva ("||informe o nome do aluno(a):||\n")
					escreva ("||---------------------------||\n")
					leia(nome)
					limpa()

					escreva ("||--------------------------------------------||\n")
					escreva ("||Informe a nota da p1 do aluno(a) ", nome, ":||\n")
					escreva ("||--------------------------------------------||\n")
					leia(nota1)
					limpa()

					escreva ("||--------------------------------------------||\n")
					escreva("Informe a nota da p2 do aluno(a) ", nome, ":   ||\n")
					escreva ("||--------------------------------------------||\n")
					leia(nota2)
					limpa()

					escreva ("||--------------------------------------------||\n")
					escreva("Informe a nota da p3 do aluno(a) ", nome, ":   ||\n")
					escreva ("||--------------------------------------------||\n")
					leia(nota3)
					limpa()
					
					escreva ("||--------------------------------------------||\n")
					escreva("Informe a nota da p4 do aluno(a) ", nome, ":   ||\n")
					escreva ("||--------------------------------------------||\n")
					leia(nota4)
					limpa()


					
				pare
				}//fim do caso 1
			caso 2:
				{
					media1 = (nota1 + nota2) / 2
					media2 = (nota3 + nota4) / 2
					notafinal = (media1 + media2) / 2

					se (notafinal > 7.0)
						{
						escreva ("||--------------------------------------------||\n")
						escreva ("||media do aluno ", nome, " é de:             ||\n", notafinal  )
						escreva ("||aprovado                                    ||\n")
						escreva ("||aperta qualquer tecla para voltar ao menu   ||\n") 
						escreva ("||--------------------------------------------||\n")
						leia(enter)
						limpa()
						}

					se (notafinal < 7.0 e notafinal >=3) 

						escreva ("||--------------------------------------------||\n")
						escreva ("||media do aluno ", nome, " é de:             ||\n", notafinal  )
						escreva ("||Atenção!! o aluno esta na porva final       ||\n")
						escreva ("||aperta qualquer tecla para voltar ao menu   ||\n") 
						escreva ("||--------------------------------------------||\n")
						leia(enter)
						limpa()
						
					
					se (notafinal < 3.0)
						{
						escreva ("||--------------------------------------------||\n")
						escreva ("||media do aluno ", nome, " é de:             ||\n", notafinal  )
						escreva ("||reprovado                                   ||\n")
						escreva ("||aperta qualquer tecla para voltar ao menu   ||\n") 
						escreva ("||--------------------------------------------||\n")
						leia(enter)
						limpa()
						}
					
				}
			
					
				
			}
		}
enquanto(opcao != 3)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 2936; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */