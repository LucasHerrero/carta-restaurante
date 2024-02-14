const api = 'https://65c668d8e5b94dfca2e17f0b.mockapi.io/api/v1/comida_menu'; // URL de la API
const platos = document.getElementById('platos');
var estructuraHTML = `
<div class="plato">
    <h2>Titulo-plato</h2>
    
    <img class="imgComida" src="Fotografia" alt="Fotografia_comida">
    
    <div>
    <ul class="Ingr">
    <h3> 
    Ingredientes:
    </h3>
    
    </ul>

    <div class="sp-bt">
    
     
        <div class="ING">
    
           <p> ing </p>
       
        </div>


        

    </div>
    <h3 class="Apto">Apto:</h3>
   <p class="Into">Intolerancias</p>
   
   <h3>Precio €</h3>
    

   <button class="btnPedir">Pedir</button>
</div>
`;



function apiConnection() {
    return fetch(api)
        .then(response => response.json());
}



function orderData(data,checkboxValue) {
    data.forEach(plato => {


        plato.forEach(intolerancia => {

            switch (intolerancia.intolerancias) {
                case intolerancia.intolerancias.includes('Cualquiera'):
                    let platoHTMLCual = estructuraHTML
                    .replace('Titulo-plato', plato.nombre)
                    .replace('Fotografia', plato.fotografia)
                    .replace('Nombre', plato.nombre)
                    .replace('ing', plato.ingredientes.join(', ').toUpperCase())
                    .replace('Intolerancias', plato.intolerancias.join(', '))
                    .replace('Precio', plato.precio);
                platos.innerHTML += platoHTMLCual;
    

                    break;
                case intolerancia.intolerancias.includes('Celiacos'):

                    let platoHTMLCeli = estructuraHTML
                        .replace('Titulo-plato', plato.nombre)
                        .replace('Fotografia', plato.fotografia)
                        .replace('Nombre', plato.nombre)
                        .replace('ing', plato.ingredientes.join(', ').toUpperCase())
                        .replace('Intolerancias', plato.intolerancias.join(', '))
                        .replace('Precio', plato.precio);
                    platos.innerHTML += platoHTMLCeli;

                    break;
                case intolerancia.intolerancias.includes('Lactosa'):
                    let platoHTMLLact = estructuraHTML
                        .replace('Titulo-plato', plato.nombre)
                        .replace('Fotografia', plato.fotografia)
                        .replace('Nombre', plato.nombre)
                        .replace('ing', plato.ingredientes.join(', ').toUpperCase())
                        .replace('Intolerancias', plato.intolerancias.join(', '))
                        .replace('Precio', plato.precio);
                    platos.innerHTML += platoHTMLLact;

                    break;
                case intolerancia.intolerancias.includes('Veganos'):
                    let platoHTMLVeg = estructuraHTML
                        .replace('Titulo-plato', plato.nombre)
                        .replace('Fotografia', plato.fotografia)
                        .replace('Nombre', plato.nombre)
                        .replace('ing', plato.ingredientes.join(', ').toUpperCase())
                        .replace('Intolerancias', plato.intolerancias.join(', '))
                        .replace('Precio', plato.precio);
                    platos.innerHTML += platoHTMLVeg;


                    break;
                default:
                    let platoHTMLDef = estructuraHTML
                        .replace('Titulo-plato', plato.nombre)
                        .replace('Fotografia', plato.fotografia)
                        .replace('Nombre', plato.nombre)
                        .replace('ing', plato.ingredientes.join(', ').toUpperCase())
                        .replace('Intolerancias', plato.intolerancias.join(', '))
                        .replace('Precio', plato.precio);
                    platos.innerHTML += platoHTMLDef;
                    break;
            }
        });
    });
}

function ifChecked() {

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            if (atLeastOneChecked()) {
                console.log('HAZ MARCADO UN CHECKBOX');
            } else {
                apiConnection().then(data => orderData(data,atLeastOneChecked));
            }
        });
    });

    function atLeastOneChecked() {
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                
              return CheckboxValue = checkboxes[i].value;  


            }
        }
    }




}

ifChecked();
