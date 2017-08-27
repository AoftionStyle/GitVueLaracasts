Vue.component('modal', {
  template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box">
          <p style="color:coral">I am aoftion, I am Smart, I will get it</p>
          <p style="color:red">This is a paragraph.</p>
        </div>
      </div>

      <button class="modal-close"></button> 
    </div>
  `
})

new Vue({
  el: '#root',
  data: {
    showModal: false
  }
})