<template>

    <form @submit.prevent="onSubmit">
        <div class='box'>
            <div class='item'>
                <label>Имя
                    <input type="text" v-model="personalLocalEdit.name">
                </label>
            </div>
            <div class='item'>
                <label>Телефон
                    <input type="text" v-model="personalLocalEdit.phone">
                </label>
            </div>
            <div class='item'>
                <label>Email
                    <input type="text" v-model="personalLocalEdit.email">
                </label>
            </div>
            <div class='item_text'>
                <label>Текст
                    <textarea v-model="personalLocalEdit.text">
                    </textarea>
                </label>
            </div>
            <div class='item'>
                <label>Категория
                    <select v-model="personalLocalEdit.category">
                    <option>Best</option>
                    <option>Spam</option>
                    <option>undefined</option>
                    </select>
                </label>
            </div>
            <div class='item_save'>
                <button class = "save" @click='edit'>Сохранить</button>
            </div>
        </div>

    </form>
</template>
<script>

    export default {
        props: {
            personalItemEdit: {
                type: Object,
                required: true,
            },
            index: Number
        },
        data() {
            return {
                personalLocal:  this.personalItemEdit,
            };
        },
        computed: {
            personalLocalEdit: function () {
                console.log(1)
                return this.personalItemEdit
            }
        },

        methods: {
   /*         onSubmit() {
                    const editPersonal = {
                        employee_name : personalItemEdit.employee_name ,
                        employee_salary: this.employee_salary,
                        employee_age: this.employee_age,
                    }
                    this.$emit("edit-personal", personalLocal)
            },*/
            edit () {

                console.log('tut edit'+ this.personalItemEdit)
                this.$emit("edit-personal", this.personalItemEdit)
            }
        }
    }

</script>
<style scoped>
    .box {
        display: flex;
        padding: 0 5px;
    }
    .item {
        flex: 1 1 auto;
        margin: 0 5px;
    }
    .item_save {
        align-items: flex-end;
    }
    .save {
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: end;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
</style>
