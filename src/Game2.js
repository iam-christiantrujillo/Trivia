class Game2{

    constructor(questions){
        this.questions = questions
        
    }

    trueOrFalse(){

        // const nav = document.querySelector('nav')
        // const puntaje = document.createElement('div')
        // puntaje.innerHTML = `PUNTAJE ${0}`
        
        // puntaje.className = 'pun'
        // nav.append(puntaje)

        const body = document.querySelector('body')
        const formulario = document.querySelector('.formulario')
        body.removeChild(formulario)


        for(var i=0; i<this.questions.length; i++){

            const boxPreguntas = document.querySelector('.preguntas')
            const boxPregunta = document.createElement('div')
            boxPregunta.className = 'boxPregunta'
            boxPregunta.id = `boxP${i}`
            const pregunta = document.createElement('h1')
            pregunta.className = 'pregunta'
            pregunta.innerHTML = this.questions[i].question
            const boxAnswers = document.createElement('div')
            boxAnswers.className = 'boxAnwers' 
            const label = document.createElement('label')
            const correct = document.createElement('input')
            correct.type = "checkbox"
            correct.value = true
            correct.className = "respuesta"
            // correct.className = 'opcion'
            label.innerHTML = this.questions[i].correct_answer
            label.className = 'label'
            

            const boton = document.createElement('button')
            boton.className = `checar`
            boton.innerHTML = "CHECAR"
        
            

           
            const labelI = document.createElement('label')

            const incorrect = document.createElement('input')
                // incorrect.className = 'opcion'
            incorrect.type = "checkbox"
            incorrect.value = false
            incorrect.className = "respuestaI"
                
            labelI.innerHTML = this.questions[i].incorrect_answers
            labelI.className = 'label'

                

                

            incorrect.addEventListener('click', () => {
                const si = 'INCORRECTO'
                    // const valor = 'CORRECTO'
                    // console.log(valor, 'Esta bine')
                boton.addEventListener('click', ()=>{
                    if(si === 'INCORRECTO'){
                        console.log('wuuuu no')
                        boxPregunta.style.backgroundColor = '#ffacac'
                        boxPregunta.removeChild(boton)
                    }
                })
            })
            
            labelI.append(incorrect)

                
            
            label.append(correct)
            boxAnswers.append(label, labelI)
            
            boxPregunta.append(pregunta, boxAnswers, boton)
            boxPreguntas.append(boxPregunta)

            
            
            correct.addEventListener('click', () => {
                const si = 'CORRECTO'
                // const valor = 'CORRECTO'
                // console.log(valor, 'Esta bine')
                boton.addEventListener('click', ()=>{
                    if(si === 'CORRECTO'){
                        console.log('wuuuu')
                        boxPregunta.style.backgroundColor = '#baffad'
                        boxPregunta.removeChild(boton)
                        
                        
                    }
                })
            })

          
        }        
        
    }
    



}

export default Game2;