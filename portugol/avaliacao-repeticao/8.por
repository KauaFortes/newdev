programa
{
	inteiro contador = 1, idade=0, idade15=0, idade16=0, idade31=0, idade46=0, idade61=0, PorP, PorU
	
	funcao inicio()
	{
		enquanto(contador <=10)
		{
			escreva("digite a idade da pessoa: ")
			leia(idade)
		se(idade <= 15)
		{
			idade15 += 1
		}
		se(idade >= 16 e idade <= 30)
		{
			idade16 += 1
		}
		se(idade >= 31 e idade <= 45)
		{
			idade31 += 1
		}
		se(idade >= 46 e idade <= 60)
		{
			idade46 += 1
		}
		se(idade >= 61)
		{
			idade61 += 1
		}
		 contador += 1		
		}
		PorP= (idade15 * 100) / contador  
		PorU= (idade61 * 100) / contador
		escreva("na faixa etaria de até 15 anos é de:", idade15)
		escreva("\nna faixa etaria de 16 a 30 anos é de:", idade16)
		escreva("\nna faixa etaria de 31 a 45 anos é de:", idade31)
		escreva("\nna faixa etaria de 46 a 60 anos é de:", idade46)
		escreva("\nna faixa etaria acimade 61 anos é de:", idade61)
		escreva("\na porcentagem de pessoas na primerio faixa etaria é de: ", PorP, "%")
		escreva("\na porcentagem de pessoas na ultima faixa etaria é de: ", PorU, "%")
	}
	
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1033; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */