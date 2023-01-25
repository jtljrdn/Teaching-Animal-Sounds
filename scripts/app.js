function playSound(animal) {
    const audio = new Audio(`sounds/${animal}.mp3`)
    audio.play()
    console.log(`${animal} clicked!`)
    for (let x = 0; x < animalNames.length; x++) {
        if ((animal == animalNames[x].name) && (animalNames[x].isNew == true)) {
            animalNames[x].isNew = false
            console.log(animalNames[x].isNew)
            selectedAnimalTitle.innerHTML = `The ${animal} goes:`
        } else if ((animal == animalNames[x].name) && (animalNames[x].isNew == false)) {
            selectedAnimalTitle.innerHTML = `Choose a New Animal!`
            document.getElementById(`btn-${animalNames[x].name}`).disabled = true
        }
        document.getElementById(`btn-${animalNames[x].name}`).removeChild(document.getElementById(`img-${animalNames[x].name}`))
    }
    fillPics(animalNames)
}

function fillPics(array){
    for (let x = 0; x < array.length; x++) {
        const animal = array[x];
        let img = document.createElement('img')
        document.getElementById(`btn-${animal.name}`).appendChild(img).id = `img-${animal.name}`
        img.src = `pictures/${animal.name}.jpeg`  
        if (animal.isNew == true) {
            document.getElementById(`btn-${animal.name}`).style.backgroundColor = 'white';
        } else {
            document.getElementById(`btn-${animal.name}`).style.backgroundColor = '';
        }
    }
}

