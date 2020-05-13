export const state = () => ({
  products: {
    maseczka: {
      ref: '00001',
      name: 'Maseczka',
      price: '25',
      discountedPrice: '20',
      image: require('../assets/cover.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non est ligula. Nunc varius et augue sit amet porta. Nulla a metus non est blandit rhoncus. Curabitur arcu tellus, aliquam eget pharetra vel, molestie in dolor. Integer in porta nunc. Nam suscipit dui vitae ex commodo varius. Praesent cursus turpis sit amet volutpat dapibus. Nullam tempus, odio eget imperdiet ullamcorper, felis urna suscipit risus, vitae aliquet elit velit eget eros. Nunc ultricies tristique mauris et scelerisque. Morbi gravida urna non purus facilisis, sed dapibus ante lacinia. Vestibulum semper urna vitae pretium imperdiet.',
      featured: true
    },
    plyn: {
      ref: '00002',
      name: 'Płyn do dezynfekcji',
      price: '20',
      discountedPrice: null,
      image: require('../assets/cover.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non est ligula. Nunc varius et augue sit amet porta. Nulla a metus non est blandit rhoncus. Curabitur arcu tellus, aliquam eget pharetra vel, molestie in dolor. Integer in porta nunc. Nam suscipit dui vitae ex commodo varius. Praesent cursus turpis sit amet volutpat dapibus. Nullam tempus, odio eget imperdiet ullamcorper, felis urna suscipit risus, vitae aliquet elit velit eget eros. Nunc ultricies tristique mauris et scelerisque. Morbi gravida urna non purus facilisis, sed dapibus ante lacinia. Vestibulum semper urna vitae pretium imperdiet.',
      featured: true
    },
    kombinezon: {
      ref: '00003',
      name: 'Kombinezon ochronny',
      price: '75',
      discountedPrice: '50',
      image: require('../assets/cover.png'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non est ligula. Nunc varius et augue sit amet porta. Nulla a metus non est blandit rhoncus. Curabitur arcu tellus, aliquam eget pharetra vel, molestie in dolor. Integer in porta nunc. Nam suscipit dui vitae ex commodo varius. Praesent cursus turpis sit amet volutpat dapibus. Nullam tempus, odio eget imperdiet ullamcorper, felis urna suscipit risus, vitae aliquet elit velit eget eros. Nunc ultricies tristique mauris et scelerisque. Morbi gravida urna non purus facilisis, sed dapibus ante lacinia. Vestibulum semper urna vitae pretium imperdiet.',
      featured: false
    }
  },

  comments: [
    {
      product: 'plyn',
      content: 'Lorem ipsum123',
      date: '5 maja 2020',
      rating: 'https://scontent.fwaw3-2.fna.fbcdn.net/v/t1.15752-9/96250264_663439484203833_2593554183948861440_n.png?_nc_cat=110&_nc_sid=b96e70&_nc_ohc=bpC_FuXPOeEAX_mT8nB&_nc_ht=scontent.fwaw3-2.fna&oh=e5a4226db9b6ee34bba5034c9aea10cd&oe=5EDB90E5',
      nick: 'Janusz'
    },
    {
      product: 'maseczka',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      date: '11 kwietnia 2020',
      rating: 'https://scontent.fwaw3-2.fna.fbcdn.net/v/t1.15752-9/96250264_663439484203833_2593554183948861440_n.png?_nc_cat=110&_nc_sid=b96e70&_nc_ohc=bpC_FuXPOeEAX_mT8nB&_nc_ht=scontent.fwaw3-2.fna&oh=e5a4226db9b6ee34bba5034c9aea10cd&oe=5EDB90E5',
      nick: 'Tomasz'
    },
    {
      product: 'maseczka',
      content: 'Lorem ipsum dolor sit amet',
      date: '14 kwietnia 2020',
      rating: 'https://scontent.fwaw3-2.fna.fbcdn.net/v/t1.15752-9/96446645_1086332895083251_6078182243501604864_n.png?_nc_cat=111&_nc_sid=b96e70&_nc_ohc=bl9obZNToNAAX_0NfYy&_nc_ht=scontent.fwaw3-2.fna&oh=cc308a67de9ff60fcbc3246a5f88a815&oe=5EDF1509',
      nick: 'Aneta'
    },
    {
      product: 'maseczka',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      date: '13 maja 2020',
      rating: 'https://scontent.fwaw3-2.fna.fbcdn.net/v/t1.15752-9/96250264_663439484203833_2593554183948861440_n.png?_nc_cat=110&_nc_sid=b96e70&_nc_ohc=bpC_FuXPOeEAX_mT8nB&_nc_ht=scontent.fwaw3-2.fna&oh=e5a4226db9b6ee34bba5034c9aea10cd&oe=5EDB90E5',
      nick: 'Marik1234'
    }
  ],

  cart: [
    // {
    //   slug: 'maseczka',
    //   amount: 5
    // },
    // {
    //   slug: 'plyn',
    //   amount: 1
    // }
  ]
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
  }
}

export const actions = {
  addToCart ({ commit, state }, slug) {
    if (!state.cart.filter(v => v.slug === slug).length > 0) {
      commit('addToCart', slug)
    }
  }
}
