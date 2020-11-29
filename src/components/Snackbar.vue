<template>
  <transition name="fade">
    <div class="snackbar" v-if="msg">
      <p class="snackbar__message">{{ msg }}</p>
      <Button
        @button-click="clearTimer"
        event="close"
        background="primary"
        text="Close"
        size="sm"
      />
    </div>
  </transition>
</template>

<script>
import { useStore } from "vuex";
import { computed, watch } from "vue";
import Button from "@/components/Button.vue";

export default {
  components: {
    Button
  },
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
  bottom: 10px;
  right: 10px;
  width: 300px;
  display: flex;
  flex-direction: column;
  transition: all 5s ease;

  &__message {
    font-size: 2rem;
  }

  &__button {
    align-self: flex-end;
    width: 100px;
    padding: 1.5rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
