var botao1 = document.querySelector('#primeiro-botao');
var botao2 = document.querySelector('#segundo-botao');
var container1 = document.querySelector('#container-experiencias1');
var container2 = document.querySelector('#container-experiencias2');

botao2.addEventListener('click', function() {
    if(container1.style.visibility === 'visible') {
        container1.style.visibility = 'hidden';
        container1.style.display = 'none';
        container2.style.visibility = 'visible';
        container2.style.display = 'flex';
    } else {
        container2.style.visibility = 'visible';
    }
});

botao1.addEventListener('click', function() {
    if(container2.style.visibility === 'visible') {
        container2.style.visibility = 'hidden';
        container2.style.display = 'none';
        container1.style.visibility = 'visible';
        container1.style.display = 'flex';
    } else {
        container1.style.visibility = 'visible';
    }
});

