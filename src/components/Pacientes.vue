<template>
    <div>
        <h3 class="titulo">{{ titulo }}</h3>
        <hr>
    </div>
</template>

<script>
    export default {
        name: "Pacientes",
        data() {
            return {
                titulo: "Pacientes"
            }
        }
    }
</script>

<style lang="scss" scoped>
.titulo{
    text-align: center;
}
</style>