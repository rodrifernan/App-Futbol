import { createStore } from "redux";

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Juan Carlitos",
            foto: "https://analiticafantasy.com/assets/images/players/player_309.png"
        },
        {
            id: 2,
            nombre: "Beto Quiroga",
            foto: "https://cdnmd.lavoz.com.ar/sites/default/files/styles/box_128/public/nota_periodistica/portada-zaracho-04-12-18_1600174869.jpg"
        },
        {
            id: 3,
            nombre: "Alejo Garcia",
            foto: "data:image/jpeg;base64,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"
        },
        {
            id: 4,
            nombre: "Juan Disain",
            foto: "https://cdnmd.lavoz.com.ar/sites/default/files/styles/box_128/public/nota_periodistica/juan_foyth_1601814349.jpg"
        },
        {
            id: 5,
            nombre: "Alvaro Felipe",
            foto: "https://media.sabes.cl/2021/07/Captura-de-Pantalla-2021-07-04-a-las-153052-media-128x128.png.webp"
        },
        {
            id: 6,
            nombre: "Alexys Lozada",
            foto: "https://cdnmd.lavoz.com.ar/sites/default/files/styles/box_128/public/nota_periodistica/pavon-los-angeles-galaxy_1440x810_1605181627.jpg"
        },
        {
            id: 7,
            nombre: "Harold Pajuelo",
            foto: "https://media.sabes.cl/2021/02/Arturo-Vidal-2-media-128x128.jpg.webp"
        },
        {
            id: 8,
            nombre: "Manu Rodriguez",
            foto: "https://ih1.redbubble.net/image.716075685.0940/raf,128x128,075,f,fafafa:ca443f4786.u2.jpg"
        },
        {
            id: 9,
            nombre: "AlejoRodríguez",
            foto: "https://media.sabes.cl/2021/08/MONTES-media-128x128.jpg.webp"
        },
        {
            id: 10,
            nombre: "Andrés Muquinche",
            foto: "https://ih1.redbubble.net/image.749883460.8748/flat,128x,075,f-pad,128x128,f8f8f8.u3.jpg"
        },
        {
            id: 11,
            nombre: "Ricardo Otero",
            foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQJfL1ghY9WeIrrHmmO6HTVBJWsvfFr0R1kw&usqp=CAU"
        },
        {
            id: 12,
            nombre: "Deivis Rivera",
            foto: "https://64.media.tumblr.com/avatar_dba83166a7a6_128.pnj"
        },
        {
            id: 13,
            nombre: "Percy Tuncar",
            foto: "https://media.sabes.cl/2021/07/WhatsApp-Image-2021-07-13-at-100801-media-128x128.jpg.webp"
        }
    ],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action/*objeto*/)=>{
    
    if(action.type === "AGREGAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j=> j.id !== action.jugador.id)
        }
    }

    if(action.type === "AGREGAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j=>j.id !== action.jugador.id)
        }
    }

    if(action.type === "QUITAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.filter(j=>j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if(action.type === "QUITAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.filter(j=> j.id !==action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenador)