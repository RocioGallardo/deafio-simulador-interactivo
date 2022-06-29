//PASAPALABRA 

//PALABRAS
let palabraA = "ala"
let palabraB = "botella"
let palabraC = "camisa"
let palabraD = "decena"
let palabraE = "electricista"
let palabraF = "favorito"
let palabraG = "canguro"
let palabraH = "hielo"
let palabraI = "imposible"
let palabraJ = "jarabe"
let palabraK = "ketchup"
let palabraL = "lenteja"
let palabraM = "cama"
let palabraN = "nido"
let palabraO = "olfato"
let palabraP = "pizza"
let palabraQ = "peluquero"
let palabraR = "regar"
let palabraS = "salir"
let palabraT = "tenedor"
let palabraU = "urano"
let palabraV = "velero"
let palabraX = "sexto"
let palabraY = "yema"
let palabraZ = "buzon"

//DEFINICIONES
let definicionA = "A\n Parte del cuerpo de algunos animales que les permite volar"
let definicionB = "B\n Recipiente de cuello estrecho que contiene liquidos"
let definicionC = "C\n Prenda de vestir con botones"
let definicionD = "D\n Conjunto de diez unidades"
let definicionE = "E\n Persona que arregla o pone la electricidad"
let definicionF = "F\n Sinónimo de preferido"
let definicionG = "Contiene G\n Mamífero que se desplaza saltando y tiene una bolsa en su barriga para sus crías"
let definicionH = "H\n Agua en estado sólido"
let definicionI = "I\n Antónimo de posible"
let definicionJ = "J\n Medicina que tomamos cuando estamos enfermos"
let definicionK = "K\n Salsa de color rojo que echamos a algunas comidas"
let definicionL = "L\n Legumbre pequeña y de color marrón"
let definicionM = "Contiene M\n Mueble para descansar y dormir"
let definicionN = "N\n Refugio que construyen las aves con hierbas, ramas, plumas u otros materiales blandos para poner sus huevos y albergar sus crias"
let definicionO = "O\n Sentido por el que se perciben los olores"
let definicionP = "P\n Masa de harina redondeada con queso, tomate y otros ingredientes"
let definicionQ = "Contiene Q\n Persona que corta y peina el cabello"
let definicionR = "R\n Echar agua a una planta o un terreno"
let definicionS = "S\n Antónimo de entrar"
let definicionT = "T\n Utensilio de mesa que consta de una mango y una cabeza con dientes largos a modo de clavos"
let definicionU = "U\n Séptimo planeta del sistema solar"
let definicionV = "V\n Embarcación de vela"
let definicionX = "Contiene X\n En una fila, el que va detrás del quinto"
let definicionY = "Y\n Parte amarilla del huevo"
let definicionZ = "Contiene Z\n Objeto donde se dejan las cartas para el correo"




// CANTIDAD DE VIDAS
let vidas = 5

// HACER PALABRA DIFERENTE A RESPUESTA
let respuesta = "x"
let palabra = "y"

//Función para pedir respuestas, repetir pregunta y restar vidas si se contesta mal
function pedirPalabra(definicion, palabra){
    while ((vidas >= 1) && (respuesta != palabra)){
        respuesta = prompt(`${definicion}`).toLowerCase()
        if(respuesta != palabra){
            vidas = vidas - 1
            if (vidas >= 1){
            alert (` Fallaste! Te quedan ${vidas} vidas`)
            } else{
                alert ("Te quedaste sin vidas !!")
            }
        }
    }
    
}


pedirPalabra (definicionA, palabraA)
pedirPalabra (definicionB, palabraB)
pedirPalabra (definicionC, palabraC)
pedirPalabra (definicionD, palabraD)
pedirPalabra (definicionE, palabraE)
pedirPalabra (definicionF, palabraF)
pedirPalabra (definicionG, palabraG)
pedirPalabra (definicionH, palabraH)
pedirPalabra (definicionI, palabraI)
pedirPalabra (definicionJ, palabraJ)
pedirPalabra (definicionK, palabraK)
pedirPalabra (definicionL, palabraL)
pedirPalabra (definicionM, palabraM)
pedirPalabra (definicionN, palabraN)
pedirPalabra (definicionO, palabraO)
pedirPalabra (definicionP, palabraP)
pedirPalabra (definicionQ, palabraQ)
pedirPalabra (definicionR, palabraR)
pedirPalabra (definicionS, palabraS)
pedirPalabra (definicionT, palabraT)
pedirPalabra (definicionU, palabraU)
pedirPalabra (definicionV, palabraV)
pedirPalabra (definicionX, palabraX)
pedirPalabra (definicionY, palabraY)
pedirPalabra (definicionZ, palabraZ)


if (vidas >= 1){
    alert ("Felicitaciones ! Haz ganado")
}





