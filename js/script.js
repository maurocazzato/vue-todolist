// Descrizione:
// Rifare l’esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
  


// Rifare l’esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
var app = new Vue({
    data: {
        // nuovo todo
      newTodoText: '', 
      todoList: [
        { 
            text: "Dormire", 
            done: false,
        },
        { 
            text: "Volare", 
            done: true,
        },
        { 
            text: "Fissare il vuoto", 
            done: false, 
        }
      ]
    },
    methods: {
    // rimuovere un todo dalla lista
      removeTodo: function(index) {
        this.todoList.splice(index, 1);
      },
    // aggiungere un nuovo todo alla lista
      addTodo: function() {
        if (this.newTodoText.trim() !== '') {
          this.todoList.push({ text: this.newTodoText, done: false });
          // Pulisce il campo di input dopo l'aggiunta
          this.newTodoText = ''; 
        }
      },

    // BONUS invertire il valore della proprietà 'done' di un todo
        toggleTodoDone: function(index) {
            this.todoList(index).done = !this.todoList(index).done;
        },
    }
    // Collego new Vue all'elemento con id "app"
  });app.$mount('#app');