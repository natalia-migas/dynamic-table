'strict mode';

const data = [
  {
    orderId: 1,
    clientId: 1,
    firstName: 'Thomas',
    lastName: 'Shelby',
    dateOrder: '20180211',
    dateDelivery: '20180214',
    item1: 'shoes',
    item2: 't-shirt'
  },
  {
    orderId: 2,
    clientId: 2,
    firstName: 'Skyler',
    lastName: 'White',
    dateOrder: '20180315',
    dateDelivery: '20180318',
    item1: 'bag',
    item2: 'jacket',
    item3: 'dress'
  },
  {
    orderId: 3,
    clientId: 3,
    firstName: 'Maria',
    lastName: 'LaGuerta',
    dateOrder: '20180316',
    dateDelivery: '20180319',
    item1: 'shoes',
    item2: 'bag'
  },
  {
    orderId: 4,
    clientId: 1,
    firstName: 'Thomas',
    lastName: 'Shelby',
    dateOrder: '20180410',
    dateDelivery: '20180414',
    item1: 'socks',
    item2: 'cap',
    item3: 'shoes',
    item4: 'watch'
  },
  {
    orderId: 5,
    clientId: 4,
    firstName: 'Nico',
    lastName: 'Bellic',
    dateOrder: '20180204',
    dateDelivery: '20180222',
    item1: 'cap',
    item2: 'suit'
  },
  {
    orderId: 6,
    clientId: 5,
    firstName: 'Lara',
    lastName: 'Croft',
    dateOrder: '20180524',
    dateDelivery: '20180525',
    item1: 'shorts',
    comments: 'ASAP please'
  },
  {
    orderId: 7,
    clientId: 6,
    firstName: 'Piper',
    lastName: 'Chapman',
    dateOrder: '20181109',
    item1: 'pants',
    item2: 'earrings'
  }
];

function reformatObjDate(obj, date) {
  if (!obj[date]) return;

  const day = obj[date].slice(-2);
  const month = obj[date].slice(-4, -2);
  const year = obj[date].slice(0, 4);
  const reformatedDate = `${day}-${month}-${year}`;
  obj[date] = reformatedDate;
}

data.forEach(obj => {
  reformatObjDate(obj, 'dateOrder');
  reformatObjDate(obj, 'dateDelivery');
});

(function createTable() {
  const tableWrapper = document.querySelector('#tableWrapper');

  const table = document.createElement('table');
  tableWrapper.appendChild(table);
  table.setAttribute('class', 'table table-striped table-bordered');

  const thead = document.createElement('thead');
  table.appendChild(thead);

  const trHead = thead.insertRow();

  const keys = [];

  data.forEach(obj => {
    for (var key in obj) {
      if (!keys.includes(key)) {
        keys.push(key);
      }
    }
  });

  keys.forEach(key => {
    const th = document.createElement('th');
    trHead.appendChild(th);
    th.innerHTML = key;
  });

  const tbody = document.createElement('tbody');
  table.appendChild(tbody);

  data.forEach(elem => {
    const trBody = tbody.insertRow();
    keys.forEach(key => {
      const td = trBody.insertCell();
      typeof elem[key] === 'undefined'
        ? (td.innerHTML = '–')
        : (td.innerHTML = elem[key]);
    });
  });
})();
