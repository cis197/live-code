class Button {
  constructor($button) {
    this.$button = $button
  }

  changeColor = () => {
    // $('.click').click(function() {
      //     console.log(this)
      //     $(this).css('color', 'orange')
      //   })
    this.$button.click(e => {
      // console.log(e)
      // console.log(typeof(e))
      const { target } = e
      $(target).css('color', 'orange')
    })
  }
}