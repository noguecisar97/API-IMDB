function slide(){
    let img1 = document.querySelectorAll('.img')
    const listaMov = Array.from(img1)
    
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
        img.style.left = (number < -450)? `${(listaMov.length - 1)*450}px`:`${number-3}px`
    }    
    mover()
}  
slide()