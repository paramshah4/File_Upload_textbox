function uploadImgFile(event,curr){
    console.log(curr);
    let idElement=curr.id;
    var id=idElement.split("-")[1];
    console.log(id);
    var file=event.target.files[0];
    var name_ele=document.getElementById("filename-"+id);
    name_ele.innerHTML=file.name;
    var image = document.getElementById('output-'+id);
    image.src = URL.createObjectURL(file);
}

function onImageClick(curr){
    console.log(curr.src)
    if(curr.src==''){
        return;
    }
    // var modal = document.getElementById("myModal");
    // var modalImg = document.getElementById("img01");
    // modal.style.display = "block";

    // modalImg.src = curr.src;
    // var span = modal.getElementsByClassName("close")[0];
    // span.onclick = function() { 
    // modal.style.display = "none";
    //  }
    var imagediv=drawImageBox(curr.src,500,500);
    console.log(imagediv);
    let test=document.getElementById("test");
    test.append(imagediv);
    dragscroll.reset();

}