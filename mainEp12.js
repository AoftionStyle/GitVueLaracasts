Vue.component('coupon', {
  template: '<input placeholder="Enter coupon code">',

})

new Vue({
  el: '#root',

  methods: {
    onCouponApplied() {
      alert('it was applied')
    }
  }
})