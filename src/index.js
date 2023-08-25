console.log('%c HI', 'color: firebrick')












































function ceo () {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch (imgUrl)
.then (response => response.json())
.then (json => renderImg (json))
}

function renderImg(images) {
    const loc = document.querySelector('div')
    images.message.forEach(Image => {
      const img = document.createElement('img');
      img.src = Image;
      loc.appendChild(img)
    });
  }
  
  
  function getAllBreeds () {
    const breedsUrl = "https://dog.ceo/api/breeds/list/all"
    fetch (breedsUrl)
    .then (response => response.json())
    .then (json => renderBreeds (json)) 
  
  }
let allBreeds =[]
 function renderBreeds(breeds) {
     allBreeds = Object.keys(breeds.message)
    console.log(allBreeds)
       allBreeds.forEach ( breed => {
       const li = document.createElement ('li');
       li.innerHTML = breed
       document.querySelector('#dog-breeds').appendChild(li)
       li.addEventListener ('click', function(e){
        e.target.style.color = 'red'
       })
  });


  }


getAllBreeds()

document.addEventListener('DOMContentLoaded', () => {
    ceo()

const dropdown = document.getElementById('breed-dropdown')
dropdown.addEventListener('change', function(e){
console.log(e.target.value)
let result = allBreeds.filter((breed) =>  { 
   return breed.charAt() == e.target.value
})
console.log(result)
document.getElementById("dog-breeds").innerHTML = "";
result.forEach ( breed => {
    const li = document.createElement('li');
    li.innerHTML = breed
    document.querySelector("#dog-breeds").appendChild(li)
    

})
})


const anyString = "Brave new world";
console.log(`The character at index 0   is '${anyString.charAt()}'`);
















  
  })