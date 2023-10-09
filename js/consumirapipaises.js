function poblarDatosPaises() {

    var url = ' https://restcountries.com/v3.1/independent?status=true'
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(paises => {

     //  crearListaPaises(paises);
     adicionarDatosTablaPaises(paises);

    });

    function adicionarDatosTablaPaises(paises){

        var tabla = document.getElementById("tablaPaises");
        for (const pais of paises) {g

            var fila = tabla.insertRow(-1);
            var columnaNombre = fila.insertCell(0);
            var columnaCapital = fila.insertCell(1);
            var columnaMoneda = fila.insertCell(2);
            var columnaBandera = fila.insertCell(3);
            var columnaPoblacion= fila.insertCell(4);


            columnaNombre.innerHTML = pais.name.official;
            columnaCapital.innerHTML = pais.capital[0];
            columnaMoneda.innerHTML = pais.name.currencies;
            columnaBandera.innerHTML = pais.region;
            columnaPoblacion.innerHTML = pais.population;



            
        }

        
    }

    function crearListaPaises(paises) {

        
    }

   /* function adicionarDatosTablaPaises(paises){

        var tabla = document.getElementById("tablaPaises");
        for (const pais of paises) {

            var fila = tabla.insertRow(-1);
            var columnaNombre = fila.insertCell(0);
            var columnaCapital = fila.insertCell(1);
            var columnaMoneda = fila.insertCell(2);
            var columnaBandera = fila.insertCell(3);
            var columnaPoblacion= fila.insertCell(2);


            columnaNombre.innerHTML = pais.name.official;
            columnaCapital.innerHTML = pais.capital[0];
            columnaRegion.innerHTML = pais.name.official;


            
        }

        
    }

    function crearListaPaises(paises) {

        var ul = crearNodo('ul');

        for (const pais of paises) {

            var li = crearNodoTexto('li', pais.name.common);
            adicionarNodoContenedor(ul,li);
            
        }
        
        adicionarNodoBody(ul);
    } */
    
}