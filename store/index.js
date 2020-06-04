export const state = () => ({
  products: {
    maseczka: {
      ref: '00001',
      name: 'Maseczka',
      price: '25',
      discountedPrice: '20',
      image: require('../assets/cover.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non est ligula. Nunc varius et augue sit amet porta. Nulla a metus non est blandit rhoncus. Curabitur arcu tellus, aliquam eget pharetra vel, molestie in dolor. Integer in porta nunc. Nam suscipit dui vitae ex commodo varius. Praesent cursus turpis sit amet volutpat dapibus. Nullam tempus, odio eget imperdiet ullamcorper, felis urna suscipit risus, vitae aliquet elit velit eget eros. Nunc ultricies tristique mauris et scelerisque. Morbi gravida urna non purus facilisis, sed dapibus ante lacinia. Vestibulum semper urna vitae pretium imperdiet.',
      quantity: '5000',
      featured: true,
      available: true
    },
    plyn: {
      ref: '00002',
      name: 'Płyn do dezynfekcji',
      price: '20',
      discountedPrice: null,
      image: require('../assets/cover.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non est ligula. Nunc varius et augue sit amet porta. Nulla a metus non est blandit rhoncus. Curabitur arcu tellus, aliquam eget pharetra vel, molestie in dolor. Integer in porta nunc. Nam suscipit dui vitae ex commodo varius. Praesent cursus turpis sit amet volutpat dapibus. Nullam tempus, odio eget imperdiet ullamcorper, felis urna suscipit risus, vitae aliquet elit velit eget eros. Nunc ultricies tristique mauris et scelerisque. Morbi gravida urna non purus facilisis, sed dapibus ante lacinia. Vestibulum semper urna vitae pretium imperdiet.',
      quantity: '4567',
      featured: true,
      available: true
    },
    kombinezon: {
      ref: '00003',
      name: 'Kombinezon ochronny',
      price: '75',
      discountedPrice: '50',
      image: require('../assets/cover.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non est ligula. Nunc varius et augue sit amet porta. Nulla a metus non est blandit rhoncus. Curabitur arcu tellus, aliquam eget pharetra vel, molestie in dolor. Integer in porta nunc. Nam suscipit dui vitae ex commodo varius. Praesent cursus turpis sit amet volutpat dapibus. Nullam tempus, odio eget imperdiet ullamcorper, felis urna suscipit risus, vitae aliquet elit velit eget eros. Nunc ultricies tristique mauris et scelerisque. Morbi gravida urna non purus facilisis, sed dapibus ante lacinia. Vestibulum semper urna vitae pretium imperdiet.',
      quantity: '2000',
      featured: false,
      available: false
    }
  },

  comments: [
    {
      ref: '00002',
      content: 'Lorem ipsum123',
      date: '5 maja 2020',
      rating: '★ ★ ★ ★ ★',
      nick: 'Janusz'
    },
    {
      ref: '00001',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '11 kwietnia 2020',
      rating: '★ ★ ★ ★ ☆',
      nick: 'Tomasz'
    },
    {
      ref: '00001',
      content: 'Lorem ipsum dolor sit amet',
      date: '14 kwietnia 2020',
      rating: '★ ★ ★ ☆ ☆',
      nick: 'Aneta'
    },
    {
      ref: '00001',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '13 maja 2020',
      rating: '★ ★ ☆ ☆ ☆',
      nick: 'Marik1234'
    }
  ],

  users: [
    {
      stanowisko: 'sprzedawca',
      imie: 'Janusz',
      nazwisko: 'Polak',
      dataUrodzenia: '04.11.1990',
      email: 'janusz.polak@example,com',
      nrTelefonu: '+48111222333'
    },
    {
      stanowisko: 'magazynier',
      imie: 'Grażyna',
      nazwisko: 'Widłowa',
      dataUrodzenia: '11.04.1993',
      email: 'grazyna.widlowa@example.com',
      nrTelefonu: '+48222333444'

    },
    {
      stanowisko: 'marketer',
      imie: 'Bogdan',
      nazwisko: 'Złotoryjski',
      dataUrodzenia: '21.11.1969',
      email: 'bogdan.zlotoryjski@example.com',
      nrTelefonu: '+48333444555'

    },
    {
      stanowisko: 'administrator',
      imie: 'Jan',
      nazwisko: 'Sobieski',
      dataUrodzenia: '01.02.2001',
      email: 'jan.sobieski@example.com',
      nrTelefonu: '+48444555666'
    }

  ],

  orders: [
    {
      id: '00001',
      imie: 'Artur',
      nazwisko: 'Borubar',
      adres: '01-234 Tłuszcz, Akacjowa 12/3',
      email: 'artur.borubar@example.com',
      produkt: 'maseczka\npłyn',
      ilosc: '69\n22',
      data: '11.05.2020',
      dostawa: 'Gołąb',
      stan: 'Złożone'
    },
    {
      id: '00002',
      imie: 'Agata',
      nazwisko: 'Kwiatek',
      adres: '43-210 Zielonka, Grochowa 117',
      email: 'agata.kwiatek@example.com',
      produkt: 'płyn',
      ilosc: '2',
      data: '14.04.2020',
      dostawa: 'Posłaniec',
      stan: 'Nadane'
    }
  ],

  cart: [{ slug: 'maseczka', amount: 4 }, { slug: 'plyn', amount: 2 }]
})

export const mutations = {
  incrementProductAmount (state, slug) {
    state.cart = this.state.cart.map((p) => {
      if (p.slug !== slug) {
        return p
      }

      return {
        ...p,
        amount: p.amount + 1
      }
    })
  },
  decrementProductAmount (state, slug) {
    state.cart = this.state.cart.map((p) => {
      if (p.slug !== slug) {
        return p
      }

      return {
        ...p,
        amount: p.amount - 1
      }
    }).filter(p => p.amount > 0)
  },
  addToCart (state, slug) {
    state.cart.push({
      slug,
      amount: 1
    })
  },
  clear (state) {
    state.cart = []
  }
}

export const actions = {
  addToCart ({ commit, state }, slug) {
    if (!state.cart.filter(v => v.slug === slug).length > 0) {
      commit('addToCart', slug)
    }
  }
}
