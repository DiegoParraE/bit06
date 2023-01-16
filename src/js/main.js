let form = document.getElementById('select-item');
let exerciseContainer = document.getElementById('exer-container');


form.addEventListener('change', (event) => {
    console.log()
    switch (form.value) {
            case 'Ejercicio 1':
                exerciseContainer.src = 'exercise_1.html'
            break;
            case 'Ejercicio 2':
                exerciseContainer.src = 'exercise_2.html'
            break;
            case 'Ejercicio 3':
                exerciseContainer.src = 'exercise_3.html'
            break;
            case 'Ejercicio 4':
                exerciseContainer.src = 'exercise_4.html'
            break;
            case 'Ejercicio 5':
            
            break;
            case 'Ejercicio 6':
            
            break;
            case 'Ejercicio 7':
            
            break;
            case 'Ejercicio 8':
            
            break;
            case 'Ejercicio 9':
            
            break;
            case 'Ejercicio 10':
            
            break;
            case 'Ejercicio 11':
            
            break;
            case 'Ejercicio 12':
            
            break;
            case 'Ejercicio 13':
            
            break;
            case 'Ejercicio 14':
            
            break;
            case 'Ejercicio 15':
            
            break;


        default:
            break;
    }
});

