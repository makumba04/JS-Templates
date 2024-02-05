//Al principio, el script señala al documento .html y usando la función "addEventListener" se deja cargado todo el código para que este preparado
document.addEventListener("DOMContentLoaded", function () {//La función padre
    const sections = document.querySelectorAll("*");//Crea una constante que va a llamar a todos los objetos pertenecientes a la clase señalada para que todos respondan a la misma función

    document.getElementById("section").addEventListener("click", function () {//Una de las funciones hijas que responde al evento de click sobre los botones que pertenecen (en este caso) a la clase "section"
        showSection(1);
    });
    //En este caso se pueden añadir tantos bloques como este, como hayan objetos tipo tabla o similares que se superpongan.

    function showSection(sectionNumber) {//La otra funcion hija, hace que obtenga el numero de la sección y muestre o esconda el contenido
        sections.forEach(function (section, index) {//Obtiene la constante "sections" que responde a todos los pertenecientes a esa clase
            if (index + 1 === sectionNumber) {// Teniendo en cuenta el número que recibe de la función anterior calcula el índice y decide si esa sección se debe mostrar...
                section.style.display = "block";
            } else {//O la sección se debe esconder
                section.style.display = "none";
            }
        });
    }
    //Básicamente recorriendo toda la clase de objetos que pertenecen a esta clase para mostrar el seleccionado y esconder el que se mostraba anteriormente
});