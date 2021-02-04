class Button {
  constructor($button) {
    this.$button = $button
  }

  changeColor = () => {
    this.$button.click(e => {
      console.log(e)
      console.log(typeof(e))
      const { target } = e
      $(target).css('color', 'orange')
    })
  }
}