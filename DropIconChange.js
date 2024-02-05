/*Primero utiliza la palabra document para señalar al archivo .html que vamos a manipular.
Luego usando la función "getElementById" llama al objeto que tiene el ID "menu-icon" (el ID del objeto puede ser cualquiera).
Y luego justo después usa la función "addEventListener" para decir que cada vez que se haga click en este objeto del fichero .html se debe ejecutar esta función*/ 
document.getElementById("menu-icon").addEventListener("click", function(){//La función 
    const icon = document.getElementById("menu-icon");//Crea una constante llamada "icono" (a partir del objeto principal)
    const list = document.getElementById("drop-list");//Crea una constante llamada "list" (a partir de la lista que queremos esconder)

    if(icon.className === "hamburger hamburger--collapse"){//Se crea una condición que dice que si el nombre de la clase del icono es este
        icon.className = "hamburger hamburger--collapse is-active";//La clase del icono debe pasar a mostrarse en activo
        list.style.display = "inline-block";//Y en pantalla el usuario debe poder ver la lista que anteriormente estaba escondida
        
    } else {//Si ocurre el caso contrario (el "classname" del icono aparece en activo)
        icon.className = "hamburger hamburger--collapse";//Se cambia el "classname" del icono para que aparezca como inactivo
        list.style.display = "none";//Y la lista anteriormente mostrada se esconda de nuevo
    }
});

//De este modo el botón es interactivo y la lista cambia su estado de visionado en función de la acción que reciba el botón "menu-icon"