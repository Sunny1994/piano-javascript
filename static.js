const pianokeys= document.querySelectorAll('.key')

function playSound(newKey){
    new Audio(newKey).play()
    console.log(newKey)
}

pianokeys.forEach((pianokey,i)=>{
    const number= i<9? '0'+ (i+1): i+1    
    const newKey= 'piano/24-piano-keys/24-piano-keys/key' + number + '.ogg'
    
    pianokey.addEventListener('click', ()=>playSound(newKey))
})