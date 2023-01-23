function playSound(animal) {
    const audio = new Audio(`sounds/${animal}.mp3`)
    audio.play()
    console.log(`${animal} clicked!`)
    selectedAnimalTitle.innerHTML = `The ${animal} goes:`
    for (let x = 0; x < animalNames.length; x++) {
        if (animal == animalNames[x].name) {
            animalNames[x].isNew = false
            document.getElementById(`btn-${animal}`).style.backgroundColor = '';
            console.log(animalNames[x].isNew)
        }
    }
}

function fillPics(){
    for (let x = 0; x < animalNames.length; x++) {
        const animal = animalNames[x];
        let img = document.createElement('img')
        document.getElementById(`btn-${animal.name}`).appendChild(img)
        img.src = `pictures/${animal.name}.jpeg`  
        if (animal.isNew == true) {
            document.getElementById(`btn-${animal.name}`).style.backgroundColor = 'white';
        }  
    }
}

fillPics()