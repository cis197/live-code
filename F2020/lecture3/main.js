$(document).ready(() => {
  // fetch the button with class = click
  const $button = $('.click')

  // instantiate the class Button
  const buttonClass = new Button($button)
  
  // add the changeColor function/ event listener
  buttonClass.changeColor()
})
