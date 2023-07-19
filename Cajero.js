// Cuentas

var cuentas = [
    { nombre: "Kimchee", genero: 1, saldo: 9200, password: "123456"},
    { nombre: "Ozzy", genero: 2, saldo: 8290, password: "yzzo" },
    { nombre: "James", genero: 2, saldo: 7967, password: "king" }
];

// Elementos de Login

const message = document.getElementById("message");
const user = document.getElementById("user");
const password = document.getElementById("password");
const buttonLogin = document.getElementById("buttonLogin");

buttonLogin.addEventListener("click", validate)

// Función para loguearse

function login(){
    
    for(i = 0; i < cuentas.length; i++){
                
        if(user.value == cuentas[i].nombre && password.value == cuentas[i].password && cuentas[i].genero < 2){
                        
            message.innerHTML = `¡Hola ${cuentas[i].nombre}! Bienvenida a tu cuenta.`;   
            return true
            
        }
        else if(user.value == cuentas[i].nombre && password.value == cuentas[i].password && cuentas[i].genero == 2){
                        
            message.innerHTML = `¡Hola ${cuentas[i].nombre}! Bienvenido a tu cuenta.`;
            return true
        }
    } 
}

//Inicio del programa

function validate(){
    if(login()){
        account()
        messageBack()
    }
    else{    
        message.innerHTML = "Usuario o contraseña incorrectos, vuelve a intentarlo."
        message.style.color = "red"
        message.style.display = "flex"
        message.style.fontSize = "20px";
        message.style.background = "none";
        message.style.height = "75px"
        setTimeout(function(){
            message.style.display = "none"
            message.innerHTML = ""
        },1000)}
}

// Elementos inside account

const menu = document.getElementById("menu");
const menLogin = document.getElementById("menuLogin")
const cash = document.getElementById("cash");
const consult = document.getElementById("consult");
const deposit = document.getElementById("deposit");
const withdraw = document.getElementById("withdraw");
const logout = document.getElementById("logout");
const text = document.getElementById("text")
const text_2 = document.getElementById("text_2")

/*  Función 
    para elegir
    opciones 
*/

function account(){
    
    hide([menuLogin, buttonLogin]);
    show([menu])
    message.style.display = "flex"
    
    consult.addEventListener("click", actions.optionConsult);
    deposit.addEventListener("click", actions.optionDeposit);
    withdraw.addEventListener("click", actions.optionWithdraw);
    logout.addEventListener("click", actions.optionLogout);
    
}

let actions = {
    optionConsult: function(){
        message.innerHTML = `Tu saldo actual es de: ${cuentas[i].saldo} pesos.`
    },
    optionDeposit: function(){
        message.innerHTML = "Por favor, escribe el monto que deseas depositar:"
        show([cash])
        let deposito = parseInt(cash.value);

        if(deposito > 0){
            cuentas[i].saldo = cuentas[i].saldo + deposito;

            message.innerHTML = `Haz depositado ${deposito}. Tu saldo actual es de ${cuentas[i].saldo}`;
            cash.value = ""
            hide([cash])
            
        }
        else if(deposit < 0){
            message.innerHTL = 'Monto incorrecto, por favor vuelve a intentarlo.';M
        }
    },
    optionWithdraw: function(){
        message.innerHTML = "Por favor, escribe el monto que deseas retirar:";
        show([cash]);
        let retiro = parseInt(cash.value);
        
        if(retiro <= cuentas[i].saldo){
            
            cuentas[i].saldo = cuentas[i].saldo - retiro
            message.innerHTML = `Haz retirado ${retiro} pesos. Tu saldo actual es de ${cuentas[i].saldo} pesos.`;
            cash.value = ""
            hide([cash])
        }else if(retiro > cuentas[i].saldo){
            message.innerHTML = 'Saldo insuficiente o mal escrito, intentalo otra vez.';
        }
    },
    optionLogout: function(){
        show([menuLogin, buttonLogin])
        hide([menu, message])
        user.value = ""
        password.value = ""
    }
}

function hide(elements){
    for (let index = 0; index < elements.length; index++) {
        elements[index].style.display = "none"
    }
}

function show(elements){
    for (let index = 0; index < elements.length; index++) {
        elements[index].style.display = "flex";
    }
}

function messageBack(){
    message.style.color = "#272F59";
    message.style.background = "#9AA3D9";
    message.style.fontSize = "40px";
    message.style.height = "175px";
}