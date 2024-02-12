const api = 'https://65c668d8e5b94dfca2e17f0b.mockapi.io/api/v1/comida_menu'; // URL de la API
const platos = document.getElementById('platos');
var estructuraHTML = `
<div class="plato">
    <h3>Titulo-plato</h3>
    <ul>
    <img class="imgComida" src="Fotografia" alt="Fotografia_comida">
    <li>Ingrediente</li>
    <img class="imgInto" src="Intolerancias" alt="Fotografia_intolerancia">
    <li>Precio</li>
     </ul>
</div>
`;



function apiConnection() {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            data.forEach(plato => {
                let celiacos = '/src/assets/img/celiaco.png';
                let diabeticos = '/src/assets/img/diabetes.png';
                let veganos = '/src/assets/img/vegano.png';

                arr = new Array();

                if (plato.intolerancias.length == 0) {

                } else if (plato.intolerancias.includes('Celiacos')) {
                    arr.push(celiacos);
                } else if (plato.intolerancias.includes('Diabeticos')) {
                    arr.push(diabeticos);
                }
                else if (plato.intolerancias.includes('Veganos')) {
                    arr.push(veganos);
                }

                let platoHTML = estructuraHTML
                    .replace('Titulo-plato', plato.nombre)
                    .replace('Fotografia', plato.fotografia)
                    .replace('Nombre', plato.nombre)
                    .replace('Ingrediente', plato.ingredientes.join(', '))
                    .replace('Intolerancias', arr.join(', '))
                    .replace('Precio', plato.precio);
                platos.innerHTML += platoHTML;
            });
        });

}

apiConnection();
