const app = new Vue({
    el: `#app`,
    data: {
        todos: [
            {
                todo: `Fare la spesa`,
                done: false,
            },
            {
                todo: `Portare fuori il cane`,
                done: true,
            },
            {
                todo: `Completare l'esercizio di boolean`,
                done: false,
            }
        ],

    },
    methods: {

    },
})