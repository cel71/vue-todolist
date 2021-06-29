
new Vue ({
    el:"#app",
    data: {
        toDo: [
            "Fare i compiti",
            "Fare la spesa",
            "Fare il bucato",
        ],
        elementList: "",
    },
    methods: {
        aggiungi: function() {
            this.toDo.push(this.elementList);
            this.elementList = "";
        },
        cancella: function(index) {
            this.toDo.splice(index, 1);
        }
    },
});