programa
{
	inclua biblioteca Matematica --> Mat
	real Sala = 0.00, MedSal = 0.00,TotSal = 0.00, MaiSal = 0.00, PorPes = 0.00, TotPes100 = 0.00
	inteiro Fi = 0, MedFi = 0, TotFi = 0
	const inteiro HAbi = 20
	
	funcao inicio()
	{
		para(inteiro K=1; K<=HAbi; K++)
		{
			escreva("Digite seu salario: ")
			leia(Sala)
			escreva("Digite numeor de filhos: ")
			leia(Fi)

			TotSal = TotSal + Sala
			TotFi = TotFi + Fi
			se(Sala > MaiSal)
			{
				MaiSal = Sala
			}
			se(Sala <= 100)
			{
				TotPes100 = TotPes100 + 1
			}
	
		}
		MedSal = TotSal / HAbi
		MedFi = TotFi / HAbi
		PorPes = (TotPes100 / HAbi) * 100
		

		escreva("\nMedia do salario da população é: R$ ", Mat.arredondar(MedSal, 2))
		escreva("\nMedia de filhos da população é: ", MedFi)
		escreva("\nO maior salario informado é de: R$",MaiSal)
		escreva("\nA porcentagem de pessoas com salario até R$100 é de: ",Mat.arredondar(PorPes, 2))
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 208; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */