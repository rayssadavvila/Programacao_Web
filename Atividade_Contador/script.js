// um botão para aumentar essa variável e outro para diminuir essa variável, e colocar limites de aceitação desse valor
let x = 0;
const valor = document.getElementById("valor");
const aumentar = document.getElementById("btAumentar");
const diminuir = document.getElementById("btDiminuir");

    aumentar.onclick = () => {
        x++;
            //const confirmacao = confirm("Confirmado com sucesso!" + x);
            //titulo.innerHTML += `<br />Confirmação: ${confirmacao}`;
       valor.innerHTML = `<em> valor: ${x}</em>`;
    }
        btDiminuir.onclick = () => {
            if(x > 0){
                x--;
            }
            else{
                diminuir.disabled = true;
                const alerta = alert("escolha um valor maior que 0");
                valor.innerHTML = `<em>${alerta}</em>`;
            }
            
            //const confirmacao = confirm("Confirmado com sucesso!" + x);
            //titulo.innerHTML += `<br />Confirmação: ${confirmacao}`;
            valor.innerHTML = `<em> valor: ${x}</em>`;
        }

    
