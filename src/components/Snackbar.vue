<template>
  <div class="snackbar" v-if="msg">
    <p class="snackbar__message">{{ msg }}</p>
    <button class="snackbar__button" @click="clearTimer">Close</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, watch } from "vue";

export default {
  setup() {
    let timer;
    const store = useStore();
    let msg = computed(() => store.getters["snackbar/getFirstMsg"]);

    if (msg.value) {
      startTimer();
    }

    watch(msg, () => {
      msg = computed(() => store.getters["snackbar/getFirstMsg"]);
      if (msg.value) {
        startTimer();
      } else {
        clearTimer();
      }
    });

    function startTimer() {
      timer = setTimeout(removeShownMsg, 3000);
    }

    function removeShownMsg() {
      store.commit("snackbar/removeShownMsg");
    }

    function clearTimer() {
      clearTimeout(timer);
      removeShownMsg();
    }

    return {
      msg,
      clearTimer
    };
  }
};
</script>

<style lang="scss" scoped>
.snackbar {
  border: solid 1px red;
  border-radius: 5px;
  padding: 1rem;
  position: absolute;
  bottom: 0px;
  right: 10px;
  width: 400px;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease;

  &__message {
    font-size: 2rem;
  }

  &__button {
    align-self: flex-end;
    width: 100px;
    padding: 1.5rem;
  }
}
</style>
