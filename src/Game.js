class Game{

    constructor(questions){
        this.questions = questions
        
    }

    multipleQuestions(){

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
        
            

            for( var j=0; j<this.questions[i].incorrect_answers.length; j++){

                const label = document.createElement('label')

                const incorrect = document.createElement('input')
                // incorrect.className = 'opcion'
                incorrect.type = "checkbox"
                incorrect.value = false
                incorrect.className = "respuestaI"
                
                label.innerHTML = this.questions[i].incorrect_answers[j]
                label.className = 'label'

                label.append(incorrect)

                boxAnswers.append(label)

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
            }

            
            label.append(correct)
            boxAnswers.append(label)
            
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

console.log('edición al proyecto')
console.log('estos son console.logs de relleno')
console.log('estos son console.logs de relleno')
console.log('estos son console.logs de relleno')
console.log('estos son console.logs de relleno')
console.log('estos son console.logs de relleno')

export default Game;