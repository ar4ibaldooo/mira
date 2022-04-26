<template>
    <div>
        <h2>Список предложений и замечаний</h2>
        <hr>
       <!-- <button v-if="addtable" class="add_button" @click="addPersonal"> Добавить запись
        </button>-->
            <confirm-dialogue ref="confirmDialogue"></confirm-dialogue>
        <EditApp v-if="editable"

                v-bind:personalItemEdit="personalItemEdit"
                @edit-personal="editPersonal"
        />

        <loader v-if="loading" />
        <ListApp
                v-else-if="personals.length"
                v-bind:personals="personals"
                @remove-personal="doDelete"
                @open-personal="openPersonalItem"
        />
        <p v-else>Нет записей</p>
        <div>
            <!-- ошибки -->
            <ul v-if="errors && errors.length">
                <li v-for="error of errors" :key="error.id">
                    {{error.message}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import ListApp from '@/components/ListApp'
    import EditApp from '@/components/EditApp'
    import Loader from '@/components/Loader'
    import ConfirmDialogue from '@/components/ConfirmDialogue.vue'
    import axios from 'axios'
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
                personalItemEdit: []
            }
        },
        mounted() {
            axios.get('http://10.66.66.58:80/test/api/notes')
                .then(response => {
                    this.personals = response.data
                    this.loading = false
                    this.addtable = true
                    /*console.log(JSON.stringify(this.personals));*/
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },
       /* mounted() {
            axios.get('https://dummy.restapiexample.com/api/v1/employees/1')
                .then(response => {
                    this.PersonalItem = response.data.data
                    console.log(response.data.data)
                })
                .catch(e => {
                    this.errors.push(e)
                })
        },*/
        methods: {
/*            removePersonalItem(id) {
                axios.delete(`http://dummy.restapiexample.com/api/v1/delete/${id}`)
                this.editable = false
                this.personals = this.personals.filter(t => t.id !== id)
            },*/
            async doDelete(id) {
                const ok = await this.$refs.confirmDialogue.show({
                    title: '!!!',
                    message: `Вы действительно желаете удалить запись ?`,
                    okButton: 'Удалить',
                })
                // If you throw an error, the method will terminate here unless you surround it wil try/catch
                if (ok) {
                    await axios.delete(`http://10.66.66.58:80/test/api/notes/${id}`)
                    this.editable = false
                    alert('Запись успешно удалена')
                    location.reload();

                } else {
                    alert('Произошла ошибка попробуйте еще раз')
                }
            },
            openPersonalItem(id) {

                axios.get(`http://10.66.66.58:80/test/api/notes/${id}`)
                    .then(response => {
                        console.log(response.data)
                        this.personalItemEdit = response.data
                        this.loading = false
                        this.editable = true
                        console.log(response.data.data)
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })

               /* this.personals = this.personals.filter(t => t.id !== id)*/
            },
            editPersonal(personal) {
                if (!this.add){
                    axios
                        .patch(`http://10.66.66.58:80/test/api/notes/${personal.id}`,
                            {
                                name: personal.name,
                                email: personal.email,
                                phone: personal.phone,
                                finger: personal.finger,
                                category: personal.category,
                                text: personal.text,
                            })
                    this.editable = false
                    this.addtable = true
                   /*console.log('edit aaaaaaaa',personal)*/
                    this.add = false
                    location.reload();
                }
                else {
                    let bodyFormData = new FormData();
                        bodyFormData.append('name', personal.name);
                        bodyFormData.append('email', personal.email);
                        bodyFormData.append('phone', personal.phone);
                        bodyFormData.append('finger', personal.finger);
                        bodyFormData.append('category', personal.category);
                        bodyFormData.append('text', personal.text);

                    axios({
                        method: "post",
                        url: "http://10.66.66.58:80/test/api/notes",
                        data: bodyFormData,
                        headers: { "Content-Type": "multipart/form-data" },
                    })
                        .then(function (response) {
                            //handle success
                            console.log(response);
                        })
                        .catch(function (response) {
                            //handle error
                            console.log(response);
                        });





/*                    axios.post(`http://10.66.66.58:80/test/api/notes`, { value: "personal.name" })
                        .then(response => {
                        })
                        .catch(e => {
                            this.errors.push(e)
                        })
                    this.add = false*/
                    /*console.log('add',personal)*/
                    /*location.reload();*/
                }

            },
             addPersonal() {
                 this.editable = true
                 this.addtable = false
                 this.add = true
                 this.personalItemEdit = []
            },
        },
        components: {
                ListApp,
                EditApp,
                Loader,
            ConfirmDialogue
        }

    }
</script>