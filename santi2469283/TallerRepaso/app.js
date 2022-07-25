// Crear las siguientes funciones:
// 1. Cree una función que liste todos los nombres con sus respectiva edad.
// 2. Liste solamente los nombres que tengan una edad mayor a 20.
// 3. ¿Cuál es el porcentaje de mujeres que hay en el grupo?
// 4. Agregue una foto a cada personaje, y muestrelos en el navegador
// 5. Cree un nuevo personaje desde el navegador incluyendo imagen.


import {people} from './people.js'

const text = document.getElementById ('text')
const btn = document.getElementById ('btn')
const text2 = document.getElementById ('text2')
const btn2 = document.getElementById ('btn2')
const text3 = document.getElementById ('text3')
const btn3 = document.getElementById ('btn3')

// este apartado mostrara la lista de las personas con su edad
btn.addEventListener('click', ()=>{
text.innerHTML = ' '
text2.innerHTML = ' '
text3.innerHTML = ' '
people.map(list => {
  const listPeople = document.createElement('p')
  listPeople.textContent = list.name + ' - ' + list.age + ' años'
  listPeople.value = list.name + ' - ' + list.age + ' años'
  text.appendChild(listPeople)
  })
})


// este apartado mostrara las personas que sean mayores a 20
btn2.addEventListener('click', ()=>{
  text.innerHTML = ' '
  text2.innerHTML = ' '
  people.map(age => {
    if(age.age > 20){
      const listAge = document.createElement('p')
      listAge.textContent = age.name
      listAge.value = age.name
      text2.appendChild(listAge)
    }
  })
})


// este apartado mostrara el porcentaje de mujeres que en el grupo

btn3.addEventListener('click', () =>{
  text.innerHTML = ' '
  text2.innerHTML = ' '
  text3.innerHTML = ' '
  people.filter(female =>{
    if(female.gender === 'Female'){
      const percent = document.createElement('p')
      percent.textContent = female.gender
      percent.value = female.gender
      text3.appendChild(percent)
    }
  })
})



// ------------------------------------------------------------------------------------------------------


const containerCards = document.getElementById('container-cards')
const buttonPeople = document.getElementById('btn4')

// buttonPeople.addEventListener('click', characters)
buttonPeople.addEventListener('click', createCards)


function characters() {

  people.map(character => {
    const option = document.createElement ('option')
    option.value = character.name
    option.textContent = character.name
    containerCards.appendChild(option)
  })
}


function createCards(people){
  const {name, age, gender, img} = people

  const card = document.createElement('div')
  card.classList.add('card-people')

  const imgCard = document.createElement('img')
  imgCard.setAttribute('src', img)
  imgCard.setAttribute('alt', name)
  imgCard.classList.add('img-people')

  const nameCard = document.createElement('p')
  nameCard.textContent = name
  nameCard.classList.add('name-people')

  const ageCard = document.createElement('p')
  ageCard.textContent = age
  ageCard.classList.add('age-people')

  
  const genderCard = document.createElement('p')
  genderCard.textContent = gender
  genderCard.classList.add('gender-people')
  
  
  card.appendChild(imgCard)
  card.appendChild(nameCard)
  card.appendChild(ageCard)
  card.appendChild(genderCard)

  containerCards.appendChild(card)
}


// ----------------------------------------------------------------------
// crear un personaje desde el navegador

let imgSelected = ' '


const modal = document.querySelector('.modal')
const closeModal = document.getElementById('close-modal')
const newName = document.getElementById('new-name')
const newAge = document.getElementById('new-age')
const newGender = document.getElementById('new-gender')
const newImage = document.getElementById('new-image')
const btnNewPeople = document.getElementById('btn-new-create')
const btnCreate = document.getElementById('btn5')

btnCreate.addEventListener('click', showModal)
btnNewPeople.addEventListener('click', createNewPeople)

newImage.addEventListener('change', importImg)
closeModal.addEventListener('click', () => modal.style.display = 'none')

function importImg(event) {
  const currentImg = event.target.files[0]
  const objectURL = URL.createObjectURL(currentImg)
  imgSelected = objectURL
}

function createNewPeople() {
  
  const titleName = newName.value
  const titleAge = newAge.value
  const titleGender = newGender.value
  

  const newPeople = {name: titleName, age: titleAge, gender: titleGender, img: imgSelected}

  people.push(newPeople)
  characters()
  modal.style.display = 'none'

}

function showModal(){
  modal.style.display = 'flex';
}