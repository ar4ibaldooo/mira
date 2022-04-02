<template>
    <div id ="app">
        <h2>Книга предложений</h2>
        <hr>
        <p>Привет</p>

    <AddNote
            @add-note = "addNote"
    />
    </div>
</template>
<script>
    import AddNote from '@/components/AddNote'
    export default {
        name: 'App',
        data() {
            return {
                personals: [],
                loading: true,
                editable: false,
                addtable: false,
                add: false,
                errors: [],
                personalItemEdit: [],

                notes: [
                    {id: 1, text: 'купить хлеб', number: '89123213213123', email: 'a1@mail.ru'},
                    {id: 1, text: 'купить maslo', number: '89123213214444', email: 'a2@mail.ru'},
                    {id: 1, text: 'купить bulku', number: '8912321321333', email: 'a@3mail.ru'},

                ]
            }
        },
        methods: {
            removeNoteItem(id){
                this.todos = this.todos.filter(t=>t.id !== id)
            },
            addNote(note){
                this.notes.push(note)
                console.log(this.notes);
            },

        },
        components: {
            AddNote
        }
    }

</script>