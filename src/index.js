import axios from 'axios'; //axios es similar a request
import Game from './Game'
import './styles/main.scss';

const inicio = document.querySelector('.botonInicio')

inicio.addEventListener('click', function(){

        var element1 =  document.getElementById('category')
        var category = element1.value
        var element2 = document.getElementById('Difficulty')
        var difficulty = element2.value

        //aqui hacemos la llmada a la API por los datos

        axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
        .then((response) => {
            // aqui ya obtengo mis preguntas
            console.log(response.status) //status code de la peticion
            console.log(response.data.results) //data es donde vienen las preguntas que busco
            const game = new Game(response.data.results)

            
            game.multipleQuestions()
        })
        .catch((error) => {
            console.log("Error: ", error.response.status)
            //aqui paso un error al tratar de traer mis preguntas
        })

})
    //aqui hacemos la llmada a la API por los datos



