/* laracasts Vue 2 Step by Step ep8-9 */
Vue.component('message', {
    props: ['title','body'],
    data() {
        return {
            isVisible: true
        }
    },
    template: `
    <article class="message" v-show = isVisible>
        <div class="message-header">
            {{ title }}
            <button type="button" @click="hideModal">x</button>
        </div>
        <div class="message-body">
            {{ body }}
        </div>
    </article>
    `,
    methods: {
        hideModal(){
            this.isVisible = false
        }
    }
})


new Vue({
    el: '#root'
})