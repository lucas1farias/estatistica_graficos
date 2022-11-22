

var root = document.compatMode =='BackCompat' ? document.body : document.documentElement
var hasVerticalScrollbar = root.scrollHeight>root.clientHeight
var hasHorizontalScrollbar = root.scrollWidth>root.clientWidth

function char() {
  let chars = 'abcdef'
  let numbers = '0123456789'
  let hexadecimal = []
  
  for (let index of chars) {
    hexadecimal.push(index)
  }
  
  for (let index of numbers) {
    hexadecimal.push(index)
  }

  return hexadecimal[Math.floor(Math.random() * (hexadecimal.length - 0))]
}

function ink() {
  return `#${char()}${char()}${char()}${char()}${char()}${char()}`
}

function firstGraphicDataShow({target}) {
  let graphicFirstDataDiv = document.querySelector('.graphic-first-data')
  graphicFirstDataDiv .classList.remove('hide')
}

function firstGraphicDataHide({target}) {
  let graphicFirstDataDiv = document.querySelector('.graphic-first-data')
  graphicFirstDataDiv .classList.add('hide')
}

function thirdGraphicDataShow({target}) {
  let graphicThirdDataDiv = document.querySelector('.graphic-third-data')
  graphicThirdDataDiv.classList.remove('hide')
}

function thirdGraphicDataHide({target}) {
  let graphicThirdDataDiv = document.querySelector('.graphic-third-data')
  graphicThirdDataDiv.classList.add('hide')
}

function fourthGraphicDataShow({target}) {
  let graphicFourthDataDiv = document.querySelector('.graphic-fourth-data')
  graphicFourthDataDiv.classList.remove('hide')
}

function fourthGraphicDataHide({target}) {
  let graphicFourthDataDiv = document.querySelector('.graphic-fourth-data')
  graphicFourthDataDiv.classList.add('hide')
}

function fifthGraphicDataShow({target}) {
  let graphicFifthDataDiv = document.querySelector('.graphic-fifth-data')
  graphicFifthDataDiv.classList.remove('hide')
}

function fifthGraphicDataHide({target}) {
  let graphicFifthDataDiv = document.querySelector('.graphic-fifth-data')
  graphicFifthDataDiv.classList.add('hide')
}

function changeLayout({target}) {
  let specificTags = [...document.querySelectorAll('.graphic-table-1st-version > *')]
  specificTags.forEach(tag => {
    tag.style.color = 'ivory'
  })
  document.body.style.background = `linear-gradient(45deg, ${ink()}, ${ink()})`
}

// Botão que muda o layout
let layoutBtn = document.querySelector('.layout')
layoutBtn.addEventListener('click', changeLayout)

// Botões do gráfico 1
let graphicFirstBtnShow = document.querySelector('.graphic-first-btn-show')
let graphicFirstBtnHide = document.querySelector('.graphic-first-btn-hide')
graphicFirstBtnShow.addEventListener('click', firstGraphicDataShow)
graphicFirstBtnHide.addEventListener('click', firstGraphicDataHide)

// Botões do gráfico 3
let graphicThirdBtnShow = document.querySelector('.graphic-third-btn-show')
let graphicThirdBtnHide = document.querySelector('.graphic-third-btn-hide')
graphicThirdBtnShow.addEventListener('click', thirdGraphicDataShow)
graphicThirdBtnHide.addEventListener('click', thirdGraphicDataHide)

// Botões do gráfico 4
let graphicFourthBtnShow = document.querySelector('.graphic-fourth-btn-show')
let graphicFourthBtnHide = document.querySelector('.graphic-fourth-btn-hide')
graphicFourthBtnShow.addEventListener('click', fourthGraphicDataShow)
graphicFourthBtnHide.addEventListener('click', fourthGraphicDataHide)

// Botões do gráfico 5
let graphicFifthBtnShow = document.querySelector('.graphic-fifth-btn-show')
let graphicFifthBtnHide = document.querySelector('.graphic-fifth-btn-hide')
graphicFifthBtnShow.addEventListener('click', fifthGraphicDataShow)
graphicFifthBtnHide.addEventListener('click', fifthGraphicDataHide)

let windowEl = document.querySelectorAll('.window-properties')
setInterval(() => {
  let width  = windowEl.innerWidth || document.documentElement.clientWidth || 
  document.body.clientWidth;
  let height = windowEl.innerHeight|| document.documentElement.clientHeight|| 
  document.body.clientHeight;
  
  // Detectar barra de rolagem vertical
  if (hasVerticalScrollbar) {
    windowEl.forEach(each => {
      each.innerHTML = `${width + 17}, ${height}`
    })
  } else {
    windowEl.forEach(each => {
      each.innerHTML = `${width}, ${height}`
    })
  }
  
  /*
  Tags filhas do gráfico 5 recebem "box-shadow" alternado
  "box-shadow" alterna entre 0px e 2px (efeito piscar)
  */
  let graphicFifth = [...document.querySelectorAll('.vertical-bars > *')]
  let shades = ['yellowgreen', 'aqua', 'ivory', 'yellow', 'crimson', 'black', '#0f0', 'sandybrown', 'orangered', 'gray']
  graphicFifth.forEach(function(bar, index) {
    bar.style.boxShadow = `0 0 10px 2px ${shades[index]}`
    setTimeout(() => {
      bar.style.boxShadow = `0 0 10px 0px ${shades[index]}`
    }, 1000)
  })
}, 1)

/*
Todas as tags filhas das tags mãe com classe 
"graphic-table-1st-version", recebem "box-shadow" alternados
"box-shadow" alterna entre as cores índices em "inks"
*/
let calculus = document.querySelectorAll('.graphic-table-1st-version > *')
let inks = ['black', 'purple', 'yellow', 'crimson', 'magenta', 'sandybrown', 'brown', '#0f0', 'yellowgreen', 'ivory', 'aqua', 'mediumseagreen']
setInterval(() => {
  calculus.forEach(index => {
    let inksIndex = Math.floor(Math.random() * inks.length - 0)
    index.style.transition = 'box-shadow ease 1s'
    index.style.boxShadow = `0 0 20px 0 ${inks[inksIndex]}`
    
  })
}, 3000)
