const 
    formulario2 = document.querySelector('.formulario2'),
    inputs = document.querySelectorAll('.formulario2 input'),
    sign_up_contenedor = document.querySelector('.sign-up-contenedor'),
    sign_in_contenedor = document.querySelector('.sign-in-contenedor')

document.addEventListener('click',e =>{
    if(e.target.matches('.no-account')){
       sign_up_contenedor.style.display = 'block';
       sign_in_contenedor.style.display = 'none';
       document.querySelector('.error_notify').classList.remove('active');
    }else if(e.target.matches('.ok-account')){
        sign_in_contenedor.style.display = 'block';
        sign_up_contenedor.style.display = 'none'; 
        document.querySelector('.error_notify').classList.remove('active');
    }

})

const expresiones_regulares = {
    usuario: /^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    edad: /^[0-9\s]{2}$/,
    contra: /^.{4,12}$/, 
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^[0-9\s]{8}$/,
}

const campos ={
    usuario: false,
    nombre: false,
    edad: false,
    contra: false,
    correo: false,
    telefono: false,
}

/*VALIDAR REGISTRAR*/
const validarformulario2 = (e) => {
    switch (e.target.name) {
        case "usuario":
            validarCampo(expresiones_regulares.usuario,e.target.value,'usuario');
            break;
        case "nombre":
            validarCampo(expresiones_regulares.nombre,e.target.value,'nombre');
            break;
        case "edad":
            validarCampo(expresiones_regulares.edad,e.target.value,'edad');
            break;
        case "contra":
            validarCampo(expresiones_regulares.contra,e.target.value, 'contra');
            break;    
        case "correo":
            validarCampo(expresiones_regulares.correo, e.target.value, 'correo');
            break;
        case "telefono":
            validarCampo(expresiones_regulares.telefono, e.target.value, 'telefono');
            break;
        default:
            break;
    }
}

const validarCampo = (expresion,input,campo) => {
    if (expresion.test(input)) {
        document.getElementById(campo).classList.remove('error');
        campos[campo] = true;
    } else {
        document.getElementById(campo).classList.add('error');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup',validarformulario2);
    input.addEventListener('blur',validarformulario2);
});

/*MENSAJE DE NOTIFICACIÓN*/
formulario2.addEventListener('submit', e=>{
    e.preventDefault();
    if(campos.usuario && campos.nombre && campos.edad &&campos.contra && campos.correo && campos.telefono){
        document.querySelector('.check_notify').classList.add('active');
        document.querySelector('.error_notify').classList.remove('active');

        setTimeout(() => {
            document.querySelector('.check_notify').classList.remove('active');
        }, 5000);

    }else{
        document.querySelector('.error_notify').classList.add('active');
        document.querySelector('.check_notify').classList.remove('active');
    }

});
