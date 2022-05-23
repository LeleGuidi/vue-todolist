const app = new Vue({
    el: `#app`,
    data: {
        todos: [
            {
                "todo": `Fare la spesa`,
                "done": false,
            },
            {
                "todo": `Portare fuori il cane`,
                "done": true,
            },
            {
                "todo": `Completare l'esercizio di boolean`,
                "done": false,
            }
        ],
        newTodo: ``,
    },
    methods: {
        removeTodo(index) {
            this.todos.splice(index, 1)
        },
        addTodo() {
            if(this.newTodo) {
                let todo = {"todo": this.newTodo, "done": false}
                this.todos.push(todo)
                this.newTodo = ``
            }
        }
    },
})