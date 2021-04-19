<template>
  <div class="modal">
      <slot></slot>
  </div>
</template>

<script>
export default {
    name: "Modal",
    data() {
        return {
        }
    },
};
</script>

<style lang="scss" scoped>
.modal,
.modal.modalEvent{
  &.activo{
    height: 100vh !important;
    position: absolute !important;
    background-color: rgba(97, 136, 148, 0.8);
    overflow: visible !important;
    display: flex !important;
    justify-content: center;
    align-items: center;
  }

  .form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin: 20px auto;
    padding: 20px;
    background-color: $m-white;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    -webkit-box-shadow: inset 1px 1px 0 0 rgba(255,255,255,0.2), inset -1px -1px 0 0 rgba(0,0,0,0.2);
    -moz-box-shadow: inset 1px 1px 0 0 rgba(255,255,255,0.2), inset -1px -1px 0 0 rgba(0,0,0,0.2);
    box-shadow: inset 1px 1px 0 0 rgba(255,255,255,0.2), inset -1px -1px 0 0 rgba(0,0,0,0.2);
  }
  .input{
    margin: 10px 0;
  }
}
</style>
