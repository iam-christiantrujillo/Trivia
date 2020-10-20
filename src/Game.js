class Game{

    constructor(questions){
        this.questions = questions
        // this.correctAnswer = false;  //Esto va a validar si la respuesta es la correcta o no

    }

    multipleQuestions(){
        

        for(var i=0; i<this.questions.length; i++){

            const boxPreguntas = document.querySelector('.preguntas')
            const boxPregunta = document.createElement('div')
            boxPregunta.className = 'boxPreguntas'
            const pregunta = document.createElement('h1')
            pregunta.className = 'pregunta'
            pregunta.innerHTML = this.questions[i].question
            const boxAnswers = document.createElement('div')
            boxAnswers.className = 'boxAnwers' 
            const label = document.createElement('label')
            const correct = document.createElement('input')
            correct.type = "checkbox"
            // correct.className = 'opcion'
            label.innerHTML = this.questions[i].correct_answer

            const boton = document.createElement('button')
            boton.className = 'checar'
            boton.innerHTML = "CHECAR"
            

            for( var j=0; j<this.questions[i].incorrect_answers.length; j++){

                const label = document.createElement('label')

                const incorrect = document.createElement('input')
                // incorrect.className = 'opcion'
                incorrect.type = "checkbox"
                label.innerHTML = this.questions[i].incorrect_answers[j]

                label.append(incorrect)

                boxAnswers.append(label)

            }

            label.append(correct)
            boxAnswers.append(label)
            
            boxPregunta.append(pregunta, boxAnswers, boton)
            boxPreguntas.append(boxPregunta)

            
            


        }
    }
    



}

export default Game;