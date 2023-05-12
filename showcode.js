let codeisopen = false;

function opencode(){
    if(codeisopen == false){
        document.getElementById("code").style.display = "none";
    }
    if(codeisopen == true){
        document.getElementById("code").style.display = "block";
        
    }
}

function btncode(){
    if(codeisopen == false){
        codeisopen = true;
    }
    else if(codeisopen == true){
        codeisopen = false;
    }
    //console.log(codeisopen)
    opencode();
}