import axios from 'axios'

export const fetchJsonplaceholder = async () => {
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )

    // Usar reduce para obtener los primeros 10 elementos con userId únicos
    const result = data.reduce((acc, item) => {
      // Verificar si ya tenemos 10 elementos únicos
      if (acc.length < 10 && !acc.some(obj => obj.userId === item.userId)) {
        acc.push(item) // Agregar el elemento al acumulador
      }
      return acc // Retornar el acumulador
    }, []) // Inicializar el acumulador como un arreglo vacío

    return result
  } catch (error) {
    console.log(error.message)
  }
}
