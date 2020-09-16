class Button {
  constructor($button) {
    this.$button = $button
  }

  changeColor = () => {
    this.$button.click(e => {
      const { target } = e
      $(target).css('color', 'orange')
    })
  }
}