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



function orderData(data) {
 




    // data.forEach(plato => {

    //     if (plato.intolerancias.includes(valueCheck) || valueCheck == 'Cualquiera') {
    //             let platoHTMLDef = estructuraHTML
    //             .replace('Titulo-plato', plato.nombre)
    //             .replace('Fotografia', plato.fotografia)
    //             .replace('Nombre', plato.nombre)
    //             .replace('ing', plato.ingredientes.join(', ').toUpperCase())
    //             .replace('Intolerancias', plato.intolerancias.join(', '))
    //             .replace('Precio', plato.precio);
    //         platos.innerHTML += platoHTMLDef;
    //     }
    // });
}

apiConnection()
        .then(data => {
            orderData(data);
        });

        



//  Esto Funciona
// function atLeastOneChecked() {
//     const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//     var arrValueCheck = [];
//     var valueCheck;
    
//     valueCheck = 'Cualquiera';
//     if(valueCheck == checkbox.value) {
//         valueCheck = '';
//        } 
//        if (valueCheck == 'Cualquiera') {
//         apiConnection()
//         .then(data => {
//             orderData(data,valueCheck);
//         });
//        }      

//     checkboxes.forEach((checkbox) => {
             
//         checkbox.addEventListener('change', () => {
//            if(valueCheck == checkbox.value) {
//             valueCheck = '';
//            } else {
//             valueCheck = checkbox.value;
//                        }
              
           

//             if (valueCheck == 'Celiacos') {
//                 apiConnection()
//          .then(data => {
//             orderData(data,valueCheck);
//             });  
//         } else if (valueCheck == 'Veganos') {
//             apiConnection()
//             .then(data => {
//                 orderData(data,valueCheck);
//             });
//         }else if (valueCheck == 'Lactosa') {
//             apiConnection()
//             .then(data => {
//                 orderData(data,valueCheck);
//             });
//         }  



//        });
//     });

            
            
            
        




// atLeastOneChecked();
