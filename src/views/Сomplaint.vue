<template>
    <div id ="app">
        <object :data="require('@/assets/miratorg.svg')" type="image/svg+xml"></object>
        <h2>Книга предложений</h2>
        <hr>

        <div class="item attention" v-if="errors.length">
            <ul>
                <li v-for="error in errors" :key="error.id">{{ error }}</li>
            </ul>

        </div>
        <loader v-if="loading" />
    <AddNote
            @add-note = "addNote"
    />
    </div>
</template>
<script>
    import AddNote from '@/components/AddNote'
    import axios from 'axios'
    import FingerprintJS from '@fingerprintjs/fingerprintjs'
    import Loader from '@/components/Loader'
    export default {
        name: 'App',
        data() {
            return {
                personals: [],
                finger: '',
                loading: false,
                editable: false,
                addtable: false,
                add: false,
                errors: [],
                personalItemEdit: [],
            notes: []
            }
        },
        mounted: function () {
            FingerprintJS.load({

            })
                .then((fp) => fp.get())
                .then((result) => {
                    this.visitorId = result.visitorId;
                    this.finger = this.visitorId
                    /*console.log(this.finger)
                    console.log(this.datetime)*/
                });
        },

        methods: {



            addNote(note){
                let bodyFormData = new FormData();
                bodyFormData.append('name', note.name);
                bodyFormData.append('email', note.email);
                bodyFormData.append('phone', note.phone);
                bodyFormData.append('finger', this.finger);
                bodyFormData.append('category', note.category);
                bodyFormData.append('text', note.text);
                bodyFormData.append('file',note.image);
                console.log(Object.entries(note))
                axios({
                    method: "post",
                    url: "http://10.66.66.58:80/test/api/notes",
                    data: bodyFormData,
                    headers: { "Content-Type": "multipart/form-data" },
                })
                    .then(response => {
                        //handle success
                        /*console.log(JSON.stringify(bodyFormData))*/
                        if (response.data.status) {
                            this.errors.push(response.data.message)
                            /*console.log(response.data.message);
                            console.log(response);*/

                        }
                        else {
                            this.errors.push(response.data.message)
                           /* console.log(response.data.status);
                            console.log(response);*/
                        }
                    })
                    .catch(error => {
                        /*console.log(error.message)*/
                        this.errors.push(error.message)
                    })
            },

        },
        components: {
            AddNote,
            Loader
        }
    }

</script>