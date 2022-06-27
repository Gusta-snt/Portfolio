function enviarEmail(){
    var params = {
        from_name: document.getElementById("input-email").value,
        message: document.getElementById("input-escreva").value
    };
    if (document.getElementById("input-email").value=="" ||  document.getElementById("input-escreva").value==""){
        alert("There are empty inputs! Please, insert all the needed informations.");
    }else (
        emailjs.send("service_nr8jdh9", "template_qu6go4a", params).then(function (res){
            document.getElementById("desc-contatos").textContent='Email sended!';
            document.getElementById("input-email").value='';
            document.getElementById("input-escreva").value='';
        })
        
    )
    
}