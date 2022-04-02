<template>
    <form @submit.prevent="onSubmit">
        <div class='box'>
            <div class="attention">
                <p v-if="errors.length">
                    <b>Пожалуйста исправьте указанные ошибки:</b>
                <ul>
                    <li v-for="error in errors" :key="error.id">{{ error }}</li>
                </ul>
                </p>
            </div>
            <div class='item'>
                <label>Ваш телефонный номер
                    <input type="tel" placeholder="+7" min="0" maxlength=12 minlength=12 v-model="number">
                </label>
            </div>
            <div class='item'>
                <label>Ваш Email
                    <input
                            type="email"
                            v-model="email"
                            name="email"
                    >
                </label>
            </div>
            <div class='item'>
                <label>Напишите ваше предложение
                    <textarea   v-model="text">
                    </textarea>
                </label>
            </div>
            <div class='item_save'>
                <button class = "save" type="submit">Сохранить</button>
            </div>
        </div>
    </form>
</template>
<script>
    export default {
        data() {
            return {
                number: '+7',
                email: '',
                text: '',
                errors: []
            }
        },
        methods: {

            checkForm: function (e) {
                if (this.number.trim()>2 && this.email.trim() && this.text.trim()) {
                    return true;
                }
                this.errors = [];
                if (this.number<=2) {
                    this.errors.push('Требуется указать номер.');
                }
                if (!this.email) {
                    this.errors.push('Требуется указать email.');
                }
                e.preventDefault();


            },
            onSubmit() {
                if (this.number.trim()>2 && this.email.trim() && this.text.trim()) {
                    const newNote = {
                        date: Date.now(),
                        number: this.number,
                        email: this.email,
                        text: this.text,
                        complited: false
                    }
                    this.$emit("add-note", newNote)
                    this.title = '',
                    this.number = '+7',
                    this.email = '',
                    this.text = ''
                }
            }
        }
    }
</script>
<style scoped>
    form {
        display: flex;
    }
</style>
