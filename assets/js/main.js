var x = document.getElementById("slider-items-one")
var y = document.getElementById("slider-items-two")
var z = document.getElementById("slider-items-three")
const sliders = [x,y,z]
var i=0
if(i===0){
    x.style.display ='block'
    y.style.display ='none'
    z.style.display ='none'
}
rightFunc=()=>{
    i=i+1
    if(i===3){
        i=0
    }
    if(i===0){
        x.style.display ='block'
        y.style.display ='none'
        z.style.display ='none'
    }
    if(i===1){
        x.style.display ='none'
        y.style.display ='block'
        z.style.display ='none'
    }
    if(i===2){
        x.style.display ='none'
        y.style.display ='none'
        z.style.display ='block'
    }
}

leftFunc=()=>{
    i=i-1
    if(i===-1){
        i=2
    }
    if(i===0){
        x.style.display ='block'
        y.style.display ='none'
        z.style.display ='none'
    }
    if(i===1){
        x.style.display ='none'
        y.style.display ='block'
        z.style.display ='none'
    }
    if(i===2){
        x.style.display ='none'
        y.style.display ='none'
        z.style.display ='block'
    }
}







