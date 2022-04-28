programa
{
	inteiro KM, conts 
	cadeia A= "A", B= "B", C= "C", tipoinfo
			
	funcao inicio()
	{
		escreva("informe o tipo de seu carro(A, B, C): \n")
		leia(tipoinfo)
		

		se(tipoinfo == A ou tipoinfo == B ou tipoinfo == C)
		{
			escreva("informe quantos KM foi percorrido: \n")
			leia(KM)
			
	
			
			 
		 	se(tipoinfo == A)
		 		{
		 			conts = KM/8
		 			escreva("o consumo estimado da viagem foi: ", conts, " por KM")
			 	}
			 se(tipoinfo == B)
		 		{
		 			conts = KM/9
		 			escreva("o consumo estimado da viagem foi: ", conts, " por KM")
				 }
			 se(tipoinfo == C)
			 	{
		 			conts = KM/12
		 			escreva("o consumo estimado da viagem foi: ", conts, " por KM")
		 		}
		} 
	 	senao
	 	escreva("erro")
	 
		 
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 172; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */