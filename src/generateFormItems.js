import { keysGenerator } from './utils/keysGenerator'

export const generateItems = (forms, formData) => {
  formData.forEach((item, k) => {
    item.items.forEach(el => {
      let formData = forms[k][el.id]
  
      el.items.forEach((data, j) => {
        formData.items[j] = {
          id: j + 1,
          key: '',
          exclude: [],
          name: '',
          img: '',
          selected: false,
          exists: true
        }
  
        const fields = ['name', 'img', 'price', 'type']
        
        fields.forEach(item => {
          data[item] && (formData.items[j][item] = data[item])
        })

        formData.items[j].key = keysGenerator(10)

        if (data.org) {
          const orgs = data.org.split('-')
          const orgField = forms[0][2]
          
          const orgTypes = ['fop', 'tov', 'lawyer', 'doctor']
          

          orgTypes.forEach((orgType, i) => {
            if (!orgs.includes(orgType)) {
              if (!orgField.items[i].exclude.includes(formData.items[j].key)) {
                orgField.items[i].exclude.push(formData.items[j].key)
              }
            }
          })
        }

        if (data.size) {
          const sizesDb = data.size
          const sizeField = forms[1][2]
          const sizes = ['47x18', '58x22', '60x40', 'Інший розмір']

          sizes.forEach((size, i) => {
            if (size !== sizesDb) {
              if(!sizeField.items[i].exclude.includes(formData.items[j].key)) {
                sizeField.items[i].exclude.push(formData.items[j].key)
              }
            }
          })
        }
      })
    })
  })
}