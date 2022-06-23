let countRow = 0;
let lineEditingInMoment = null;
let indexRow;

const carregarHaFazeres = () => {
  const itemsJaArmazenados = localStorage.getItem('listaDeHaFazeres')
  return itemsJaArmazenados ? JSON.parse(itemsJaArmazenados) : []
}

function onClickRemove(lineToRemove) {
  lineToRemove.remove();
}

function onClickEdit (lineEditing) {
  lineEditingInMoment = lineEditing;

  const [fazer] = lineEditing.childNodes;
  document.getElementById('fazer')
    .value = fazer.innerHTML;
}

function moverParaCima(row) {
  const nodes = document.getElementById('tbody-messages').childNodes;

  nodes.forEach((rowItem, index) => {
    if (rowItem.id === row.id) {
      indexRow = index - 1;
    }
  });
        
  moverLinha('up');
}

function marcarQueFoiComcluida(row) {
  const nodes = document.getElementById('tbody-messages').childNodes;

  nodes.forEach((rowItem, index) => {
    if (rowItem.id === row.id) {
      indexRow = index - 1;
    }
  });

  moverLinha('down');

const tr = document.createElement('tr');

const tdMarcarcao =document.createElement('td')
const iconeCheck = document.createElement('i')
iconeCheck.setAttribute('class', 'fa-solid fa-check-double');
iconeCheck.setAttribute('title', 'Check');
tdMarcarcao.appendChild(iconeCheck)

tr.appendChild(tdMarcarcao);

}

function moverLinha(direction) {
  const rows = document.getElementById('tbody-messages').rows;
  
  console.log('-> rows', rows);
  console.log('indexRow', indexRow);
  console.log('rows[indexRow]', rows[indexRow])
  const parent = rows[indexRow].parentNode;

  if (direction === 'up') {
    if (indexRow >= 1) {
      parent.insertBefore(rows[indexRow],rows[indexRow - 1]);

      indexRow--;
    }
  }

  if (direction === 'down') {
    if(indexRow < rows.length){
      if (rows[indexRow + 1]) {
        parent.insertBefore(rows[indexRow + 1],rows[indexRow]);
        indexRow++;
      }
    }
  }
}

document.getElementById('addButton')
  .addEventListener('click', function(event) {
    event.preventDefault()
    const fazer = document.getElementById('fazer').value;
    localStorage.setItem('listaDeHaFazeres', JSON.stringify(fazer))

      if (!fazer.length) { 
        alert('Para adicionar algo para fazer voce primeiro tem que escrever oque voce tem que fazer')
        return;
      }

      const message = {fazer};

      document.getElementById('form-message').reset();

      const tbody = document
      .getElementById('tbody-messages')

      const tr = document
      .createElement('tr');

      // primeira coluna
      const tdfazer = document.createElement('td')
      tdfazer.innerHTML = message.fazer


      tr.appendChild(tdfazer);

      const tdButtons =
        document.createElement('td')
      const iconEdit =
        document.createElement('i')
      iconEdit.setAttribute('class', 'fas fa-edit');
      iconEdit.setAttribute('title', 'Editar');
      iconEdit.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;');
      tdButtons.appendChild(iconEdit)

      
      const iconRemove = document.createElement('i');
      iconRemove.setAttribute('class', 'fas fa-trash');
      iconRemove.setAttribute('title', 'Remover');
      iconRemove.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;');
      tdButtons.appendChild(iconRemove);

      const Concluido = document.createElement('i');
      Concluido.setAttribute('class', 'fa-solid fa-check');
      Concluido.setAttribute('title', 'Mover abaixo');
      Concluido.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;');
      tdButtons.appendChild(Concluido);

      const iconArrowUp = document.createElement('i');
      iconArrowUp.setAttribute('class', 'fa-solid fa-x');
      iconArrowUp.setAttribute('title', 'Mover acima');
      iconArrowUp.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;');
      tdButtons.appendChild(iconArrowUp);

      if (marcarQueFoiComcluida) {
        const tdMarcarcao =document.createElement('td')
        const iconeCheck = document.createElement('i')
        iconeCheck.setAttribute('class', 'fa-solid fa-check-double');
        iconeCheck.setAttribute('title', 'Check');
        tdMarcarcao.appendChild(iconeCheck)

        tr.appendChild(tdMarcarcao);
      }
      
      tr.appendChild(tdButtons);

      // Precisamos IDENTIFICAR a linha
      tr.setAttribute('id', `line${countRow}`);
      countRow += 1;
      
      iconEdit.setAttribute('onclick', `onClickEdit(${tdButtons.parentElement.id});`);
      iconRemove.setAttribute('onclick', `onClickRemove(${tdButtons.parentElement.id});`)

      iconArrowUp.setAttribute('onclick', `moverParaCima(${tdButtons.parentElement.id});`)
      iconArrowDown.setAttribute('onclick', `marcarQueFoiComcluida(${tdButtons.parentElement.id});`)

      if (lineEditingInMoment) {
        const [fazerToUpdate] = 
          lineEditingInMoment.childNodes;
        
        fazerToUpdate.innerHTML = message.fazer;

        lineEditingInMoment = null;
      } else {
        tbody.appendChild(tr);
      }
  });