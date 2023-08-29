

const  url = 'https://api.themoviedb.org/3/movie/550?api_key=8fa8fe67b5f6b84aedfe04b2350639db'
/*Se define la URL de la API que se va a consultar,
 incluyendo la clave de API necesaria para autenticar la solicitud.*/
const options = {method: 'GET', headers: { accept: 'application/json'}}
/*Se crea un objeto options que especifica cómo se realizará la solicitud. En este caso,
 se usará el método GET y se establecerá la cabecera accept para indicar que se espera una respuesta en formato JSON.*/



fetch (url, options)
/*Se utiliza la función fetch para hacer una solicitud a la URL de la API utilizando las opciones definidas.
 La función fetch devuelve una Promise que se resuelve en la respuesta de la solicitud.*/

    .then (res => res.json()) // convierte la respuesta en formato JSON utilizando el método .json().
    .then(json => {   /*maneja los datos JSON ya convertidos. 
                     Aquí se extraen datos específicos del objeto JSON, como el título, la descripción general (overview) y la ruta del póster (poster_path).*/

        const title = json.title
        const overview = json.overview
        const posterPath = json.poster_path

        /*Se crean elementos HTML para mostrar los datos obtenidos. Se crea un encabezado h1 para el título,
         un párrafo p para la descripción general y una imagen img para el póster.*/
        const titleElement = document.createElement ('h1')
        titleElement.textContent = title

        const overviewElement = document.createElement('p')
        overviewElement.textContent = overview

        const posterElement = document.createElement ('img')
        posterElement.src = 'https://image.tmdb.org/t/p/w500' + posterPath


        //se añaden los elementos creados al cuerpo (body) del documento HTML utilizando appendChild.
        document.body.appendChild(titleElement)
        document.body.appendChild(overviewElement)
        document.body.appendChild(posterElement)

    })
    /*Si ocurre algún error durante la solicitud o el procesamiento de los datos,
     se captura y se muestra un mensaje de error utilizando el método .catch().*/
    .catch(err => console.error('error: ' + err))
