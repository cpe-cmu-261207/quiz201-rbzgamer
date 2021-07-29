const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')
const search = document.querySelector('#search')
const reset = document.querySelector('#reset')
const text = document.querySelector('#text')
const divtext = document.querySelector('#divtext')
const divsearch = document.querySelector('#divsearch')
divtext.style.visibility = 'hidden'
divsearch.style.visibility = 'hidden'

// define more constants and variables here

btn_toggle.onclick = () => {
  if(divtext.style.visibility === 'hidden' && divsearch.style.visibility === 'hidden'){
    divtext.style.visibility = 'visible'
    divsearch.style.visibility = 'visible'
  }else{
    divtext.style.visibility = 'hidden'
    divsearch.style.visibility = 'hidden'
  }

}

// more codes for Search and Reset buttons here
search.onclick = () => {
  
}

reset.onclick = () => {

}