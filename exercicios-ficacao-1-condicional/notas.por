programa
{

real nota1, nota2, nota3, notafinal
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
				
					escreva ("informe o nome do aluno(a):\n")
					leia(nome)
					limpa()

					escreva("Informe a nota da p1 do aluno(a) ", nome, ":\n")
					leia(nota1)
					limpa()
					
					escreva("Informe a nota da p2 do aluno(a) ", nome, ":\n")
					leia(nota2)
					limpa()
					
					escreva("Informe a nota da p3 do aluno(a) ", nome, ":\n")
					leia(nota3)
					limpa()


					
				pare
				}//fim do caso 1
			caso 2:
				{
					notafinal = (nota1 + nota2 + nota3) / 3 

					se (notafinal > 7.0)
						{
		
						escreva("media do aluno ", nome, "é de: \n", notafinal )
						escreva("\naprovado")
						escreva("\naperta qualquer tecla para voltar ao menu\n") 
						leia(enter)
						limpa()
						}

					senao 
						{
						escreva("media do aluno ", nome, "é de: \n", notafinal )
						escreva("\nreprovado")
						escreva("\naperta qualquer tecla para voltar ao menu\n") 
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
 * @POSICAO-CURSOR = 980; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */