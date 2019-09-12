
const mobilMenu = document.getElementById('Inactivo'),Activese = document.getElementById('Activo')

mobilMenu.addEventListener("click",AtivoAlli)
Activese.addEventListener("click",ActivoPues)

function AtivoAlli(e) {
    if (e.isTrusted === true) {
        Activese.classList.add('activate')
        console.log(e);
    }
    else{
        Activese.classList.remove('activate')  
    }

    
    
}
function ActivoPues(e) {
    if (e.isTrusted === true) {
        Activese.classList.remove('activate')
        console.log(e);
    }


    
    
}