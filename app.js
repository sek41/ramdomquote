const button = document.getElementById('button'); // Corrected the method name from 'object' to 'getElementById'
const ramdom = document.getElementById('ramdom'); // Corrected the method name from 'object' to 'getElementById'
const frases = [
    "El conocimiento es poder.",
    "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
    "Nada es imposible, la palabra misma dice 'soy posible'.",
    "La paciencia es amarga, pero su fruto es dulce.",
    "No dejes para mañana lo que puedas hacer hoy.",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "El que no arriesga no gana.",
    "La verdadera medida de la grandeza de un hombre no se mide por su riqueza, sino por su integridad y su capacidad para afectar positivamente a los que lo rodean.",
    "La imaginación es más importante que el conocimiento.",
    "La vida es lo que hacemos de ella. Los viajes son los viajeros. Lo que vemos no es lo que vemos, sino lo que somos.",
    "La mente es como un paracaídas, solo funciona si se abre.",
    "Haz el bien sin mirar a quién.",
    "La vida es corta, sonríe mientras aún tienes dientes.",
    "La educación es el arma más poderosa que puedes usar para cambiar el mundo.",
    "El pesimista se queja del viento; el optimista espera que cambie; el realista ajusta las velas.",
    "La felicidad no es algo que pospones para el futuro; es algo que diseñas para el presente.",
    "La única forma de hacer un gran trabajo es amar lo que haces.",
    "No es lo que te pasa, sino cómo reaccionas lo que importa.",
    "Cambia tus pensamientos y cambiarás tu mundo.",
    "La vida es una aventura audaz o no es nada."
];

button.onclick = function(){
const num= Math.floor(Math.random()*frases.length)

ramdom.innerHTML= frases[num]
}

const body = document.body;
const colores = [
    "#FF0000", // Rojo
    "#00FF00", // Verde
    "#0000FF", // Azul
    "#FFFF00", // Amarillo
    "#FF00FF", // Magenta
    "#00FFFF", // Cian
    "#FFA500", // Naranja
    "#800080", // Púrpura
    "#008000", // Verde oscuro
    "#800000"  // Marrón
];
let count = 0; // Declarar count fuera de la función de clic

button.onclick = function() {
    // Incrementar count dentro de la función de clic
    count++;
    // Verificar si count supera el índice máximo en el array de colores
    if (count >= colores.length) {
        count = 0; // Si es así, volver al inicio del array
    }
    // Establecer el color de fondo del body según el valor en el array de colores
    body.style.backgroundColor = colores[count];
};
