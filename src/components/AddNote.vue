<template>
    <form @submit.prevent="onSubmit">
        <div>
        <div class='box'>

            <div class='item input'>
                    <label for="name">Имя</label>
                    <input type="text"  id="name" placeholder="Ваше имя" v-model="name">
            </div>
            <div class='item input'>
                    <label for="phone">Телефон</label>
                    <input type="tel"   id="phone" placeholder="+7" min="0" maxlength=12 minlength=12  required="required" v-model="phone">
            </div>
            <div class='item input'>
                <label for="email">Email</label>
                    <input  id="email"
                            type="email"
                            v-model="email"
                            name="email"
                            required="required"
                            placeholder="Ваша почта"
                    >

            </div>
            <div class='item input'>
                    <label for="textarea">Ваше предложение</label>
                    <textarea  id="textarea" required="required" v-model="text" placeholder="Введите текст"> </textarea>
            </div>

            <div class='item'>

                    <input type="file" id="image" class = "inputfile" ref="image" @change="onChangeFileUpload()"/>
                <label for="image" class = "inputfilelabel" ><strong>{{photo}}</strong></label>
            </div>
            <div class='item item_save'>
                <button class = "save_button" type="submit"><strong>Сохранить</strong></button>
            </div>
        </div>
        </div>
    </form>
</template>
<script>
    export default {
        data() {
            return {
                phone: '+7',
                email: '',
                name: '',
                finger: '',
                text: '',
                image: '',
                errors: [],
                photo: 'Добавить фото'
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
            onChangeFileUpload(){
                this.image = this.$refs.image.files[0];
                this.photo = this.image.name
                /*console.log(this.image)*/
            },
            onSubmit() {
                if (this.phone.trim()>2 && this.email.trim() && this.text.trim()) {
                    const newNote = {

                        phone: this.phone,
                        name: this.name,
                        text: this.text,
                        email: this.email,
                        finger: this.finger,
                        image: this.image,
                        imageName: this.image.name,
                    }
                    this.title = '',
                    this.phone = '+7',
                    this.email = '',
                    this.text = '',
                    this.name = ''
                    this.image = ''
                    this.photo = 'Добавить фото'
                    this.$emit("add-note", newNote)
                    /*console.log(newNote + 'ceichac');*/
                }
            }
        },
    }
</script>
<style scoped>
    * {box-sizing: border-box}
    .box {


        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .item {
        width: 300px;
        text-align: center;
    }

    .inputfile {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }
    .inputfile + label {




        width: 300px;
        border: 3px dashed #bbc6ce; /* THIS SHOULD CHANGE */
        color: #6c757d;
    }

    .inputfile:focus + label,
    .inputfile + label:hover {
        border: 3px solid red; /* THIS SHOULD CHANGE */
        background-color: #bbc6ce;
        color: white;
    }
    .inputfile + label {
        cursor: pointer; /* "hand" cursor */
    }
    .inputfile + label * {
        pointer-events: none;
    }
    input, select, textarea {
        width:100%;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        resize: vertical;
        margin:10px 0;
    }
    textarea {
        min-height: 100px;
        resize: vertical;
    }

    label {
        padding: 12px 12px 1px 0;
        display: inline-block;
    }
    .inputfilelabel{
        padding: 12px 12px 12px 0;
        display: inline-block;
    }
    input:focus, textarea:focus {
        background-color: lightblue;
    }
    .add_button {
        color: #6c757d;
        border-color: #6c757d;



        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin:10px 0;

        background-color: rgba(51, 125, 247, 0.53);
        border: none;
        color: white;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
    }
    .save_button111 {
        background-color: #6c757d;
        color: #6c757d;
        border-color: #6c757d;
    }

    .save_button{
        font-size: 1.25em;
        font-weight: 700;
        color: rgba(225, 40, 61, 0.65);
        display:block;
        height:60px;
        width:100%;
        border:3px solid rgba(198, 39, 58, 0.27);
        -webkit-border-radius:2px;
        -moz-border-radius:2px;
        border-radius:2px;
        background:transparent;
        text-align:center;
        line-height:60px;

        cursor:pointer;
        position:relative;
        z-index:50;
        margin-top:20px}
    .save_button:hover {
        background:#c6273a;
        color: white;
    }
</style>
