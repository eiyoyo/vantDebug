const app = getApp()

Page({
  data: {
    show: false
  },
  openhandle: function() {
    this.setData({
      'show': true
    })
  }
})
