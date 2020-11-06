export const data = [
  {
    id: 0,
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
        name: 'Нова',
        exclude: [],
        type: 'with-img',
        img: '/img/order/form/1.png',
        selected: false,
      },
      {
        id: 2,
        name: 'По відбитку',
        exclude: ['Оберіть дизайн печатки'],
        type: 'with-img',
        img: '/img/order/form/2.png',
        selected: false,
      }
    ],
  },
  {
    id: 1,
    parents: ['Нова', 'По відбитку'],
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
        exclude: [],
        type: '',
        img: '',
        selected: false,
      },
      {
        id: 2,
        name: '1 день',
        exclude: ['Оберіть організаційно-правову форму діяльності'],
        type: '',
        img: '',
        selected: false,
      },
    ],
  },
  {
    id: 2,
    parents: ['1 година', '1 день'],
    title: 'Оберіть організаційно-правову форму діяльності',
    inputsCount: 4,
    unique: true,
    visible: false,
    exists: true,
    excludes: [],
    content: 'download-screen',
    items: [
      {
        id: 1,
        name: 'ФОП',
        exclude: [],
        type: '',
        img: '',
        selected: false,
      },
      {
        id: 2,
        name: 'ТОВ',
        exclude: [],
        type: '',
        img: '',
        selected: false,
      },
      {
        id: 3,
        name: 'Нотаріус/адвокат',
        exclude: [],
        type: '',
        img: '',
        selected: false,
      },
      {
        id: 4,
        name: 'Лікар',
        exclude: [],
        type: '',
        img: '',
        selected: false,
      },
    ],
  },
  {
    id: 3,
    parents: ['ФОП', 'ТОВ'],
    title: 'Оберіть дизайн печатки',
    inputsCount: 4,
    unique: true,
    visible: false,
    exists: true,
    excludes: [],
    items: [
      {
        id: 1,
        name: 'Дизайн 1',
        exclude: [],
        type: 'with-img',
        img: '/img/order/form/1.png',
        selected: false,
      },
      {
        id: 2,
        name: 'Дизайн 2',
        exclude: [],
        type: 'with-img',
        img: '/img/order/form/1.png',
        selected: false,
      },
      {
        id: 3,
        name: 'Дизайн 3',
        exclude: [],
        type: 'with-img',
        img: '/img/order/form/1.png',
        selected: false,
      },
      {
        id: 4,
        name: 'Дизайн 4',
        exclude: [],
        type: 'with-img',
        img: '/img/order/form/1.png',
        selected: false,
      },
    ],
  },
  {
    id: 4,
    parents: ['ФОП', 'ТОВ', 'Дизайн 1', 'Дизайн 2'],
    title: 'Оберіть тип оснастки',
    inputsCount: 3,
    unique: true,
    visible: false,
    excludes: [],
    exists: true,
    items: [
      {
        id: 1,
        name: 'COLOP MOUSE',
        exclude: [],
        type: 'card',
        img: '/img/order/form/SM-1.png',
        selected: false,
        price: '236 грн'
      },
      {
        id: 2,
        name: 'COLOP R41',
        exclude: [],
        type: 'card',
        img: '/img/order/form/SM-1.png',
        selected: false,
        price: '236 грн'
      },
      {
        id: 3,
        name: 'TRODAT 400R',
        exclude: [],
        type: 'card',
        img: '/img/order/form/SM-1.png',
        selected: false,
        price: '236 грн'
      },
      {
        id: 4,
        name: 'COLOP R40',
        exclude: [],
        type: 'card',
        img: '/img/order/form/SM-1.png',
        selected: false,
        price: '236 грн'
      },
    ],
  },
]