// key generator: https://passwordsgenerator.net/

const stampData = [
  {
    id: 0,
    key: 'jLdtVP5x7t',
    parents: [],
    title: 'Оберіть вид виробу',
    inputsCount: 4,
    unique: true,
    visible: true,
    exists: true,
    excludes: [],
    items: [
      {
        id: 1,
        key: '3Gdy25ZGgQ',
        name: 'Новий',
        exclude: [],
        type: 'with-img',
        img: '/img/order/form/1.png',
        selected: false,
        exists: true,
      },
      {
        id: 2,
        key: 'zY43nWwJ3c',
        name: 'По відбитку',
        exclude: [],
        type: 'with-img',
        img: '/img/order/form/2.png',
        selected: false,
        exists: true,
      },
    ],
  },
  {
    id: 1,
    key: '3YhyXK6Nmu',
    parents: ['jLdtVP5x7t'],
    title: 'Оберіть термін виготовлення',
    inputsCount: 4,
    unique: true,
    visible: false,
    exists: true,
    excludes: [],
    items: [
      {
        id: 1,
        name: '1 година',
        key: 'MnAaFds7jN',
        exclude: [],
        type: '',
        img: '',
        selected: false,
        exists: true,
      },
      {
        id: 2,
        name: '1 день',
        key: '25X2JQrSq6',
        exclude: [],
        type: '',
        img: '',
        selected: false,
        exists: true,
      },
    ],
  },
  {
    id: 2,
    key: 'fy7Z63Dh8T',
    parents: ['3YhyXK6Nmu'],
    title: 'Оберіть розмір кліше',
    inputsCount: 4,
    unique: true,
    visible: false,
    exists: true,
    excludes: [],
    content: 'download-screen',
    contentText: 'Завантажте фото або скан-копію витягу з ЕДРПОУ/свідоцтво адвоката/диплом лікаря',
    contentBtn: 'Завантажити документ',
    items: [
      {
        id: 1,
        key: '3MrepEDVTB',
        name: '47 х 18 мм',
        exclude: ['VtDGTgR4ft'],
        type: '',
        img: '',
        selected: false,
        exists: true,
      },
      {
        id: 2,
        key: 'nDuAh6gaCq',
        name: '58 х 22 мм',
        exclude: [],
        type: '',
        img: '',
        selected: false,
        exists: true,
      },
      {
        id: 3,
        key: 'BLq6Z2EEV3',
        name: '60 х 40 мм',
        exclude: [],
        type: '',
        img: '',
        selected: false,
        exists: true,
      },
      {
        id: 4,
        key: 'cgbrYP9mQs',
        name: 'Інший розмір',
        exclude: ['7X3NDca3vz'],
        type: '',
        img: '',
        selected: false,
        exists: true,
      },
    ],
  },
  {
    id: 3,
    key: '7X3NDca3vz',
    parents: ['88EU52GQhx', 'fy7Z63Dh8T'],
    title: 'Оберіть тип оснастки',
    inputsCount: 3,
    unique: true,
    visible: false,
    excludes: [],
    exists: true,
    items: [],
  },
  {
    id: 4,
    key: 'GqH6cnUxyV',
    parents: ['88EU52GQhx', 'fy7Z63Dh8T', '7X3NDca3vz'],
    title: 'Оберіть додаткові аксесуари',
    inputsCount: 3,
    unique: false,
    visible: false,
    excludes: [],
    exists: true,
    items: [],
  },
]

export default stampData