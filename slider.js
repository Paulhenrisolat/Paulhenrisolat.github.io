let imgNum = 0;

function NextImg() 
{
    imgNum = imgNum + 1;
    if(imgNum > 3)
    {
        imgNum = 0
    }
    ChangeImage();
}

function PreviousImg() 
{
    imgNum = imgNum - 1;
    if(imgNum < 0)
    {
        imgNum = 3
    }
    ChangeImage();
}

//img height size 590
//slider img desactive all img non active (only one allways active)
function ChangeImage()
{
    if (imgNum == 0){
        //document.getElementById("image").src = "../../Images/morbimg/morb3.png";
        document.getElementById("img4").style.display = "none";
        document.getElementById("img2").style.display = "none";
        document.getElementById("img1").style.display = "block";
    }
    if (imgNum == 1){
        //document.getElementById("image").src = document.getElementById("img1");
        document.getElementById("img1").style.display = "none";
        document.getElementById("img3").style.display = "none";
        document.getElementById("img2").style.display = "block";
    }
    if (imgNum == 2){
        document.getElementById("img2").style.display = "none";
        document.getElementById("img4").style.display = "none";
        document.getElementById("img3").style.display = "block";
    }
    if (imgNum == 3){
        document.getElementById("img3").style.display = "none";
        document.getElementById("img1").style.display = "none";
        document.getElementById("img4").style.display = "block";
    }
}
