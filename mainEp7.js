Vue.component('task-list', {
    template: `
        <div>
            <task v-for="task in tasks" :key=task.tasker>{{ task.tasker }}</task>
        </div>
    `,
    data() {
        return {
            tasks: [
                { tasker: "one", complete:true },
                { tasker: "two", complete:false },
                { tasker: "three", complete:true },
                { tasker: "four", complete:false},
            ]
        }
    }
})

Vue.component('task', {

    template: '<li><slot></slot></li>'
})

new Vue({
    el: '#root'
})