<style>
.editor {
    background-color: #ccc;
    width: 60%;
    height: 30vh;
    margin-top: 10px;
};
</style>

<template>
    <div>
        <h1>madori</h1>
        <svg class="editor">
            <text x="10" y="10" font-size="24" v-if="editText">xxxx</text>
        </svg>
        <div>
            <button class="btn btn-primary" v-on:click="addText">テキスト</button>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Small modal</button>
        </div>
        <modal>
        </modal>
    </div>
</template>

<script>
export default {
    data: {
        parts: [],
        currentText: '',
        editText: false
    },
    methods: {
        addText: function() {
            console.log('hello');
            $('#myModal').modal();
        }
    }
}
</script>

