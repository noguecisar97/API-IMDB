function slide(){
    let img1 = document.querySelector('.img1')
    let img2 = document.querySelector('.img2')
    let img3 = document.querySelector('.img3')
    let img4 = document.querySelector('.img4')
    
    function mouse(img){
        const elemento = img.querySelector('.exb')  
        img.onmouseover = function(){
            elemento.style.display = 'block'
        }          
        img.onmouseout = function(){
            elemento.style.display = 'none'       
        }
    }
    img1.style.left = '0px'
    img2.style.left = '450px'
    img3.style.left = '900px'
    img4.style.left = '1350px'

    const lista = [img1,img2,img3,img4]
    function mover(){   
        lista.map(e => {            
            movendo(e)
            mouse(e)
        })
    }
    setInterval(mover,10)
    function movendo(img){
        let number = parseInt(img.style.left)
        number = number - 3
        if(number < -450){
            return img.style.left = '1350px'
        }
        img.style.left = `${number}px`
    }    
    mover()
}  
slide()