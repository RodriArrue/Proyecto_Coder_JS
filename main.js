
let EleccionUsuario = prompt("ingrese la plataforma para ver sus planes" )

let netflix = 'netflix'

let basico = 'basico'

let estandar = 'estandar'

let premium = 'premium'

if (EleccionUsuario == netflix ){

    let EleccionPlanNetflix = prompt("seleccione que plan quiere calcular : Basico , Estandar o premium")

    if (EleccionPlanNetflix == basico){

        let ValorImpuestosBasico = ((2499 * 155)/100)

        let ValorFinalBasico = 2499 + ValorImpuestosBasico
        
        console.log("el valor final del plan Basico es" , ValorFinalBasico)
    } else if (EleccionPlanNetflix == estandar) {

            let ValorImpuestosEstandar = ((4199 * 155)/100)

            let ValorFinalEstandar = 4199 + ValorImpuestosEstandar
        
            console.log("el valor final del plan Estandar es" , ValorFinalEstandar)
          } else if (EleccionPlanNetflix == premium){
                
                let ValorImpuestosPremium = ((5799 * 155)/100)

                let ValorFinalPremium = 5799 + ValorImpuestosPremium
        
                console.log("el valor final del plan Premium es" , ValorFinalPremium)
            } 
}             

//---------------------------------------------------------------------------------------------------------------------//
    
let spotify = 'spotify'

let individual = 'individual'

let duo = 'duo'

let familiar = 'familiar'

let estudiantes = 'estudiantes'

if (EleccionUsuario == spotify){

    let EleccionPlanSpotify = prompt("seleccione que plan quiere calcular : Individual , Duo , Familiar o Estudiantes")

    if (EleccionPlanSpotify == individual){

        ValorImpuestosIndividual = ((599 * 155)/ 100)

        ValorFinalIndividual = 599 + ValorImpuestosIndividual

        console.log("el valor final del plan Indivual es :" , ValorFinalIndividual)
         } else if (EleccionPlanSpotify == duo){

            let ValorImpuestosDuo = ((799 * 155)/ 100)

            let ValorFinalDuo = 799 + ValorImpuestosDuo

            console.log (" el valor final del plan Duo es :" , ValorFinalDuo)
            } else if (EleccionPlanSpotify == familiar) {

                let ValorImpuestosFamiliar = ((999 * 155)/ 100)

                let ValorFinalFamiliar = 999 + ValorImpuestosFamiliar

                console.log(" el valor final del plan Familiar es :" , ValorFinalFamiliar)
                } else if (EleccionPlanSpotify == estudiantes) {

                    let ValorImpuestosEstudiantes = ((329 * 155)/ 100)

                    let ValorFinalEstudiantes = 329 + ValorImpuestosEstudiantes

                    console.log("el valor final del plan Estudiantes es :" , ValorFinalEstudiantes)

                    }
}   

