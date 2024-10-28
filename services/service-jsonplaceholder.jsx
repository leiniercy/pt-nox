import axios from 'axios'

export default class ServiceJsonPlaceholder {
  async getAll () {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      )
      return data
    } catch (error) {
      console.log(error.message)
    }
  }
}
