function enviarEmail(){
    var params = {
        from_name: document.getElementById("input-email").value,
        message: document.getElementById("input-escreva").value
    };
    if (document.getElementById("input-email").value=="" ||  document.getElementById("input-escreva").value==""){
        alert("Preencha todos os campos!");
    }else (
        emailjs.send("service_nr8jdh9", "template_qu6go4a", params).then(function (res){
            document.getElementById("desc-contatos").innerHTML='Email enviado!';
            document.getElementById("input-email").value='';
            document.getElementById("input-escreva").value='';
        })
        
    )
    
}