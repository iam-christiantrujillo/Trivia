import axios from 'axios'; //axios es similar a request
import Game from './Game'
import Game2 from './Game2'
import './styles/main.scss';

const inicio = document.querySelector('.botonInicio')

inicio.addEventListener('click', function(){

        var element1 =  document.getElementById('category')
        var category = element1.value
        var element2 = document.getElementById('Difficulty')
        var difficulty = element2.value
        var element3 = document.getElementById('type')
        var type = element3.value

        //aqui hacemos la llmada a la API por los datos

        if(type === 'multiple'){
            axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${type}`)
            .then((response) => {
                // aqui ya obtengo mis preguntas
                console.log(response.status) //status code de la peticion
                console.log(response.data.results) //data es donde vienen las preguntas que busco
                const game = new Game(response.data.results)

                
                game.multipleQuestions()
            })
            .catch((error) => {
                console.log("Error: ", error.data.status)
                //aqui paso un error al tratar de traer mis preguntas
            })

        }else if(type === 'boolean'){
            axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${type}`)
            .then((response) => {
                // aqui ya obtengo mis preguntas
                 //status code de la peticion
                console.log(response.data.results) //data es donde vienen las preguntas que busco
                const game = new Game2(response.data.results)

                
                game.trueOrFalse()
            })
            .catch((error) => {
                console.log("Error: ", error.data.status)
                //aqui paso un error al tratar de traer mis preguntas
            })

        }

})
    //aqui hacemos la llmada a la API por los datos



