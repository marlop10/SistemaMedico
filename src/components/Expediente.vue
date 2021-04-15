<template>
    <div>
        <h3 class="titulo">{{ titulo }}</h3>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "Expediente",
        data() {
            return {
                titulo: "Expediente"
            }
        }
    }
</script>

<style lang="scss" scoped>
.titulo{
    text-align: center;
}
</style>