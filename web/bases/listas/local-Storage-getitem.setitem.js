const storage = localStorage;

document.getElementById('btn').addEventListener('click', () => {
  const value = document.getElementById('name').value;

  let namesKey = storage.getItem('names');

  namesKey = JSON.parse(namesKey);

  if (namesKey?.length) {
    namesKey.push(value);
    storage.setItem('names', JSON.stringify(namesKey));
  } else {
    const nameInitial= [];
    nameInitial.push(value);
    storage.setItem('names', JSON.stringify(nameInitial));
  }

  document.getElementById('name').value = '';
})