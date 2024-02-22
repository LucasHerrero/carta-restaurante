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
   
   <h3 class="Price">Precio €</h3>
    

   <button class="btnPedir">🤍 </button>
</div>
`;



async function apiConnection() {
    return await fetch(api)
        .then(response => response.json()
            .then(data => data));

}




function orderData(data, orderBy) {
    // Ordenar los datos
    data.sort((a, b) => {
        if (orderBy === 'asc') {
            return a.precio - b.precio;
        } else {
            return b.precio - a.precio;
        }
    });


}
  data.forEach(plato => {

       

    let platoHTMLDef = estructuraHTML
            .replace('Titulo-plato', plato.nombre)
            .replace('Fotografia', plato.fotografia)
            .replace('Nombre', plato.nombre)
            .replace('ing', plato.ingredientes.join(', ').toUpperCase())
            .replace('Intolerancias', plato.intolerancias.join(', '))
            .replace('Precio', plato.precio);
            
            platos.innerHTML += platoHTMLDef;
         
    
      

    });

    allCheckboxes();
    btnFav();




function allCheckboxes() {
    const chekboxes = document.querySelectorAll('input[type="checkbox"]');
    const platos2 = document.querySelectorAll('.plato'); 

    var arrCheck = [];
    chekboxes.forEach(checkbox => {


        checkbox.addEventListener('change', () => {
            
          
            if (checkbox.checked) {
                   
                switch (checkbox.value) {
                    case 'Celiacos':  
                    arrCheck.push(checkbox.value);
                    platos2.forEach(plato => {
                      
                        if (!plato.querySelector('.Into').textContent.includes('Celiacos')) {
                            plato.style.display = 'none';
                        }
                    });
                        break;
                        case 'Lactosa':   arrCheck.push(checkbox.value);
                          platos2.forEach(plato => {

                            if (!plato.querySelector('.Into').textContent.includes('Lactosa')) {
                                plato.style.display = 'none';
                            }
                        });
                        break;
                        case 'Veganos': 
                        arrCheck.push(checkbox.value);
                         platos2.forEach(plato => {
                            if (!plato.querySelector('.Into').textContent.includes('Veganos')) {
                                plato.style.display = 'none';
                            }
                        });
                        break;
                        case 'Cualquiera':    arrCheck.push(checkbox.value);
                        
                        platos2.forEach(plato => {
                            plato.style.display = 'flex';
                        });
                }      
                    }else {
                        arrCheck = arrCheck.filter((item) => item !== checkbox.value);
                    platos2.forEach(plato => {
                        plato.style.display = 'flex';

                    })
                }
                localStorage.setItem('arrCheck', JSON.stringify(arrCheck));
        });

            //Push valor del array al localstorage
          



        //
        if (localStorage.getItem('arrCheck')) {
            arrCheck = JSON.parse(localStorage.getItem('arrCheck'));
            arrCheck.forEach(item => {
                if (checkbox.value === item) {
                    checkbox.checked = true;
                    checkbox.dispatchEvent(new Event('change'));
                }
            });
        }else {}
       
    
    });
}

function btnFav() {
    const btnFav = document.querySelectorAll('.btnPedir');
    var arrFav = [];



  btnFav.forEach(btn => {

    if (localStorage.getItem('arrFav')) {
        arrFav = JSON.parse(localStorage.getItem('arrFav'));
        arrFav.forEach(item => {
            if (btn.closest('.plato').querySelector('h2').textContent === item) {
                btn.classList.remove('btnPedir');
                btn.classList.add('btnFavorito');
            }
        });
    }
 

   btn.addEventListener('click', () => {

    var titu = btn.closest('.plato');
    titu = titu.querySelector('h2').textContent;

    if (btn.classList.contains('btnPedir')) {
        btn.classList.remove('btnPedir');
        btn.classList.add('btnFavorito');
        arrFav.push(titu);


    }else if(btn.classList.contains('btnFavorito')) {
        btn.classList.remove('btnFavorito');
        btn.classList.add('btnPedir');
        arrFav = arrFav.filter((item) => item !== titu);
    }
console.log(arrFav);
    localStorage.setItem('arrFav', JSON.stringify(arrFav));

   }); 
});
}
apiConnection().then(data => orderData(data, 'desc')); // Para ordenar de mayor a menor

function order(){
const Orden = document.querySelector('div.hidden');
const Orden2 = document.querySelector('div.show');

if(Orden!==null){
  Orden.classList.remove('hidden');
  Orden.classList.add('show');

}else if(Orden2!==null){
  Orden2.classList.remove('show');
  Orden2.classList.add('hidden');
}
}

function orderAsc(data){
    data.precio.sort((a, b) => a - b);
}

function orderDesc(){

}

