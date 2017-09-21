Vue.component('coupon', {
  template: '<input placeholder="Enter coupon code">',

  methods: {
    onCouponApplied() {
      this.$emit('coupon-was-applied')
    }
  }
})

new Vue({
  el: '#root',

  methods: {
    onCouponApplied() {
      alert('it was applied')
    }
  }
})