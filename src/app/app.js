const api = 'https://65c668d8e5b94dfca2e17f0b.mockapi.io/api/v1/comida_menu'; // URL de la API
const platos = document.getElementById('platos');
var estructuraHTML = `
<div class="plato">
    <h2>Titulo-plato</h2>
    
    <img class="imgComida" src="Fotografia" alt="Fotografia_comida">
    
    <ul class="Ingr">
    <h3> 
    Ingredientes:
    </h3>
    
    </ul>

    <div class="sp-bt">
    
     
        <div class="ING">
    
            ing
       
        </div>
        

    </div>

   <p>Intolerancias</p>
   
    <li><span>Precio €</span></li>
    
</div>
`;



function apiConnection() {
    fetch(api)
        .then(response => response.json())
        .then(data => {
            data.forEach(plato => {


                let platoHTML = estructuraHTML
                    .replace('Titulo-plato', plato.nombre)
                    .replace('Fotografia', plato.fotografia)
                    .replace('Nombre', plato.nombre)
                    .replace('ing', plato.ingredientes.join(', '))
                    .replace('Intolerancias', plato.intolerancias.join(', '))
                    .replace('Precio', plato.precio);
                platos.innerHTML += platoHTML;
            });
        });

}

apiConnection();
