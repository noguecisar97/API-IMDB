function slide(){
    let img1 = document.querySelector('.img1')
    let img2 = document.querySelector('.img2')
    let img3 = document.querySelector('.img3')
    let img4 = document.querySelector('.img4')

    const listaMov = [img1,img2,img3,img4]
    
    listaMov.map((e , index) => {
        e.style.left = `${450 * index}px`
    })

    function mouse(img){
        const elemento = img.querySelector('.exb')  
        img.onmouseover = function(){
            elemento.style.display = 'block'
        }          
        img.onmouseout = function(){
            elemento.style.display = 'none'       
        }
    }
    
    function mover(){   
        listaMov.map(e => {            
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