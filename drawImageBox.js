function drawImageBox(image_url,width,height){

    let outerdiv=document.createElement("div");

    let div_buttons=document.createElement("div");
    div_buttons.setAttribute("style","margin-top:20px; text-align:center")
    div_buttons.style.width=width+"px";


    let button_rotate_clock=document.createElement("a");
    button_rotate_clock.setAttribute("id","clockwise");
    let icon_clock=document.createElement("i");
    icon_clock.setAttribute("class","fa fa-rotate-right");
    button_rotate_clock.append(icon_clock);
    button_rotate_clock.style.padding="10px";
    button_rotate_clock.style.cursor="pointer";
    icon_clock.setAttribute("style","-webkit-text-stroke: 1px white;");


    let button_rotate_anticlock=document.createElement("a");
    button_rotate_anticlock.setAttribute("id","anticlockwise");
    let icon_anticlock=document.createElement("i");
    icon_anticlock.setAttribute("class","fa fa-rotate-left");
    button_rotate_anticlock.append(icon_anticlock);
    button_rotate_anticlock.style.padding="10px";
    button_rotate_anticlock.style.cursor="pointer";
    icon_anticlock.setAttribute("style","-webkit-text-stroke: 1px white;")


    let button_zoomin=document.createElement("a");
    button_zoomin.setAttribute("id","zoomin");
    let icon_zoomin=document.createElement("i");
    icon_zoomin.setAttribute("class","fa fa-search-plus");
    button_zoomin.append(icon_zoomin);
    button_zoomin.style.padding="10px";
    button_zoomin.style.cursor="pointer";
    icon_zoomin.setAttribute("style","-webkit-text-stroke: 0.8px white;")


    let button_zoomout=document.createElement("a");
    button_zoomout.setAttribute("id","zoomout");
    let icon_zoomout=document.createElement("i");
    icon_zoomout.setAttribute("class","fa fa-search-minus");
    button_zoomout.append(icon_zoomout);
    button_zoomout.style.padding="10px";
    button_zoomout.style.cursor="pointer";
    icon_zoomout.setAttribute("style","-webkit-text-stroke: 0.8px white;")

    let image_div=document.createElement("div");
    image_div.setAttribute("class","main image_holder dragscroll");
    let image=document.createElement("img");
    image.setAttribute("src",image_url);
    image.setAttribute("rotation","0");
    image_div.setAttribute("style","margin-top:20px; border:1px solid #ccc;; overflow:auto; cursor:grab; position: relative;");
    image_div.style.width=width+"px";
    image_div.style.height=height+"px";
    image.setAttribute("style","position: absolute;left: 50%;top: 50%;transform: translate(-50%, -50%);");
    image.style.width="100%";
    image_div.append(image);

    button_zoomin.onclick = function(){
        var myImg = image
        var currWidth = myImg.clientWidth;
        console.log(currWidth);
        if (currWidth == 2500) return false;
        else {
            console.log(currWidth);
            myImg.style.width = (currWidth + 100) + "px";
        }
	}

    button_zoomout.onclick = function(){
        var myImg = image
        var currWidth = myImg.clientWidth;
        if (currWidth == 100) return false;
        else {
            myImg.style.width = (currWidth - 100) + "px";
        }
	}

    button_rotate_clock.onclick = function(){
		var rotation=image.getAttribute("rotation");
        new_rotation=parseInt(rotation)+90;
        if(new_rotation%360==0){
            new_rotation=0;
        }
        console.log("")
        image.setAttribute("rotation",new_rotation);
        image.style.transform = `translate(-50%, -50%) rotate(${new_rotation}deg)`;

	}

    button_rotate_anticlock.onclick = function(){
		var rotation=image.getAttribute("rotation");

        new_rotation=parseInt(rotation)-90;
        if(new_rotation%360==0){
            new_rotation=0;
        }
        image.setAttribute("rotation",new_rotation);
        image.style.transform = `translate(-50%, -50%) rotate(${new_rotation}deg)`;
	}

    
    div_buttons.append(button_rotate_clock);
    div_buttons.append(button_rotate_anticlock);
    div_buttons.append(button_zoomin);
    div_buttons.append(button_zoomout);
    outerdiv.append(div_buttons);
    outerdiv.append(image_div);

    return outerdiv;
}