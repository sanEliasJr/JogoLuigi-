const luigi = document.querySelector(".luigi")
const pipe = document.querySelector(".pipe")

const jump = () => {

    luigi.classList.add('jump')

    setTimeout(() =>{
        luigi.classList.remove('jump')


    },500)

}


const loop  = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const luigiPosition = +window.getComputedStyle(luigi).bottom.replace('px','');

    console.log(luigiPosition)
    if(pipePosition <= 80 && pipePosition > 0 && luigiPosition <100){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;       
        
        luigi.style.animation = 'none';
        luigi.style.bottom = `${luigiPosition}px`;  

        luigi.src = './img/game-over.png'
        luigi.style.width = '180px'
        luigi.style.left = '-40px'

        clearInterval(loop)
    }
},10)


document.addEventListener('keydown', jump);  