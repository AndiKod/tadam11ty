

// The App itself
const app = Vue.createApp({
  template: `
  <img
    v-bind:src="picture"
    :class="gender"
  />
  <h1>{{firstName}} {{lastName}}</h1>
  <h3>Email: {{email}}</h3>
  <button :class="gender" @click="getUser()">Get Random User</button>

  `,
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
      msg: ''
    }
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()

      // console.log(results)

      this.firstName = results[0].name.first
      this.lastName = results[0].name.last
      this.email = results[0].email
      this.gender = results[0].gender
      this.picture = results[0].picture.large
    },
  },

})


app.mount('.App')
