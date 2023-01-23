const btnAlpaca = document.getElementById('btn-alpaca').addEventListener('click', function(){playSound('alpaca');});
const btnCat = document.getElementById('btn-cat').addEventListener('click', function(){playSound('cat');});
const btnCow = document.getElementById('btn-cow').addEventListener('click', function(){playSound('cow');});
const btnDog = document.getElementById('btn-dog').addEventListener('click', function(){playSound('dog');});
const btnDonkey = document.getElementById('btn-donkey').addEventListener('click', function(){playSound('donkey');});
const btnDuck = document.getElementById('btn-duck').addEventListener('click', function(){playSound('duck');});
const btnElephant = document.getElementById('btn-elephant').addEventListener('click', function(){playSound('elephant');});
const btnFrog = document.getElementById('btn-frog').addEventListener('click', function(){playSound('frog');});
const btnGoat = document.getElementById('btn-goat').addEventListener('click', function(){playSound('goat');});
const btnHorse = document.getElementById('btn-horse').addEventListener('click', function(){playSound('horse');});
const btnLion = document.getElementById('btn-lion').addEventListener('click', function(){playSound('lion');});
const btnMonkey = document.getElementById('btn-monkey').addEventListener('click', function(){playSound('monkey');});
const btnMouse = document.getElementById('btn-mouse').addEventListener('click', function(){playSound('mouse');});
const btnOwl = document.getElementById('btn-owl').addEventListener('click', function(){playSound('owl');});
const btnPig = document.getElementById('btn-pig').addEventListener('click', function(){playSound('pig');});
const btnRooster = document.getElementById('btn-rooster').addEventListener('click', function(){playSound('rooster');});
const btnSheep = document.getElementById('btn-sheep').addEventListener('click', function(){playSound('sheep');});
const btnWolf = document.getElementById('btn-wolf').addEventListener('click', function(){playSound('wolf');});
const selectedAnimalTitle = document.getElementById('selected-animal-title')

const animalNames = [
    {name: 'alpaca', isNew: true},
    {name: 'cat', isNew: true},
    {name: 'cow', isNew: true},
    {name: 'dog', isNew: true},
    {name: 'donkey', isNew: true},
    {name: 'duck', isNew: true},
    {name: 'elephant', isNew: true},
    {name: 'frog', isNew: true},
    {name: 'goat', isNew: true},
    {name: 'horse', isNew: true},
    {name: 'lion', isNew: true},
    {name: 'monkey', isNew: true},
    {name: 'mouse', isNew: true},
    {name: 'owl', isNew: true},
    {name: 'pig', isNew: true},
    {name: 'rooster', isNew: true},
    {name: 'sheep', isNew: true},
    {name: 'wolf', isNew: true}
]
