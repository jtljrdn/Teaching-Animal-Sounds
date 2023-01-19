function playSound(animal) {
    const audio = new Audio(`sounds/${animal}.mp3`)
    audio.play()
    console.log(`${animal} clicked!`)
    selectedAnimalTitle.innerHTML = `The ${animal} goes:`

}

function fillPics(){
    for (let x = 0; x < animalNames.length; x++) {
        const animal = animalNames[x];
        let img = document.createElement('img')
        document.getElementById(`btn-${animal}`).appendChild(img)
        img.src = `pictures/${animal}.jpeg`   
    }
}

fillPics()