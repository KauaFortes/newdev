let countRow = 0;
let lineEditingInMoment = null;
let indexRow;

function onClickEdit (lineEditing) {
  lineEditingInMoment = lineEditing;

  const [model, brand, year] = lineEditing.childNodes;
  document.getElementById('model')
    .value = model.innerHTML;

  document.getElementById('brand')
    .value = brand.innerHTML;

  document.getElementById('year')
    .value = year.innerHTML;
}

document.getElementById('addButton')
  .addEventListener('click', function(event) {
    event.preventDefault()
    const model = document
      .getElementById('model').value;
    const brand = document
      .getElementById('brand').value;
    const year = document
      .getElementById('year').value;

      if (!model.length) { 
        alert('O remetente deve ser informado')
        return;
      }
      
      if (!brand.length) { 
        alert('O destinatário deve ser informado')
        return;
      }
      
      if (!year.length) { 
        alert('A mensagem deve ser informada')
        return;
      }

      const message = { model, brand, year};

      document.getElementById('form-registration').reset();

      const tbody = document
      .getElementById('tbody-messages')

      const tr = document
      .createElement('tr');

      // primeira coluna
      const tdFrom = document.createElement('td')
      tdFrom.innerHTML = message.from
      // segunda coluna
      const tdTo = document.createElement('td')
      tdTo.innerHTML = message.to
      // terceira coluna
      const tdMessage = document.createElement('td')
      tdMessage.innerHTML = message.message;

      tr.appendChild(tdFrom);
      tr.appendChild(tdTo);
      tr.appendChild(tdMessage);

      const tdButtons =
        document.createElement('td')
      const iconEdit =
        document.createElement('i')
      iconEdit.setAttribute('class', 'fas fa-edit');
      iconEdit.setAttribute('title', 'Editar');
      iconEdit.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;');
      tdButtons.appendChild(iconEdit)

      
      tr.appendChild(tdButtons);

      // Precisamos IDENTIFICAR a linha
      tr.setAttribute('id', `line${countRow}`);
      countRow += 1;
      
      iconEdit.setAttribute('onclick', `onClickEdit(${tdButtons.parentElement.id});`);
      iconRemove.setAttribute('onclick', `onClickRemove(${tdButtons.parentElement.id});`)

      iconArrowUp.setAttribute('onclick', `moveUp(${tdButtons.parentElement.id});`)
      iconArrowDown.setAttribute('onclick', `moveDown(${tdButtons.parentElement.id});`)

      if (lineEditingInMoment) {
        const [fromToUpdate, toToUpdate, messageToUpdate] = 
          lineEditingInMoment.childNodes;
        
        fromToUpdate.innerHTML = message.from;
        toToUpdate.innerHTML = message.to;
        messageToUpdate.innerHTML = message.message;

        lineEditingInMoment = null;
      } else {
        tbody.appendChild(tr);
      }
  });