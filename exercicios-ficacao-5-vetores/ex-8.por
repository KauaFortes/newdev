programa
{funcao inicio()
	{
	inteiro numeroPares[10],
		   numeroImpares[10],
		   numeroDigitado = 0,
		   contaPar=0,
		   contaImpar=0
	/*para(inteiro i=0; i < 10; i++)
		{
			escreva("digite um numero")
			leia(numeroDigitado)
			se(numeroDigitado[i] % 2 ==0)
			{
				numeroPares[i] = numeroDigitado
			}
			senao
			{
				numeroImpares[i] = numeroDigitado
			}
		}*/
		enquanto (contaPar + contaImpar < 10)
		{
			escreva("digite um numero: ")
			leia(numeroDigitado)
			se(numeroDigitado % 2 ==0)
			{
				numeroPares[contaPar] = numeroDigitado
				contaPar++
			}
			senao
			{
				numeroImpares[contaImpar] = numeroDigitado
				contaImpar++
			}
		}
		listaPares(numeroPares,contaPar )
		lsitaImpares(numeroImpares, contaImpar)
		organizar(numeroImpares, numeroPares, contaImpar, contaPar)
		
	}
		funcao listaPares(inteiro numeroPares[], inteiro contaPar)
		{
			inteiro copia, aux[10]
			para(inteiro j=0; j < contaPar; j++)
			{		
				para(inteiro i=0; i < contaPar - 1; i++)
				{
					se(numeroPares[i]<numeroPares[i+1])
					{
						
						copia = numeroPares[i]
						numeroPares[i] = numeroPares[i+1]
						numeroPares[i+1] = copia
										

					}
				
				}
			}

		
		}
		funcao lsitaImpares(inteiro numeroImpares[], inteiro contaImpar)
		{
			inteiro copia, aux[10]
			para(inteiro j=0; j < contaImpar; j++)
			{		
				para(inteiro i=0; i < contaImpar - 1; i++)
				{
					se(numeroImpares[i]>numeroImpares[i+1])
					{
						
						copia = numeroImpares[i]
						numeroImpares[i] = numeroImpares[i+1]
						numeroImpares[i+1] = copia
									

					}
					
				}
				
			}

		
		}
	funcao organizar(inteiro numeroImpares[],inteiro numeroPares[], inteiro contaImpar, inteiro contaPar)
	{	
		inteiro TDosNumeros[10]
		para(inteiro i=0; i < contaImpar+i; i++)
		{
			TDosNumeros[i] = numeroImpares[i]
			contaImpar--
			escreva("\n||IM: ",TDosNumeros[i],"||")
		}
		para(inteiro i=0; i < contaPar+i; i++)
		{
			TDosNumeros[i+contaImpar] = numeroPares[i]
			contaPar--
			escreva("\n||PA: ",TDosNumeros[i],"||")
		}
	}
}



/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1861; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {numeroImpares, 87, 26, 13}-{numeroPares, 87, 50, 11}-{TDosNumeros, 89, 10, 11};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */