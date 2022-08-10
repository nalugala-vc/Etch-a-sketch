let main=document.getElementById("main");
let gridsButton=document.getElementById("grid");
let main2=document.createElement("div");
main2.setAttribute("id","newclass");
let submit=document.getElementById("sub");
submit.addEventListener("click",Submit);
let refresh=document.getElementById("refresh");
refresh.addEventListener("click",Refresh);
function Submit(){
    let inputNumbergrid=document.getElementById("nogrids").value;
    let color=document.getElementById("color").value;
    for(let i=0;i<inputNumbergrid;i++){
    for(let j=0;j<inputNumbergrid;j++){
        let div=document.createElement("div");
        let dimensions=300/inputNumbergrid;
        console.log(dimensions)
        div.style.width=dimensions+"px";
        div.style.height=dimensions+"px";
        

        div.addEventListener("mouseover",changecolor);

        function changecolor(){
            div.style.backgroundColor=color;
        }

        main2.append(div);
        
    
    }
        }
        main.style.display="none";
        document.getElementById("gridpanee").append(main2);
        document.getElementById("fields").style.display="none";
}
function Refresh(){
    location.reload();
}
for(let i=0;i<16;i++){
    for(let j=0;j<16;j++){
        let div=document.createElement("div");
        div.style.width="18.75px";
        div.style.height="18.75px";
        

        div.addEventListener("mouseover",changecolor);

        function changecolor(){
            div.style.backgroundColor="black";
        }

        main.append(div);
    
    }
}


gridsButton.addEventListener("click",showPopup);

function showPopup(){
    document.getElementById("fields").style.display="block";
}

