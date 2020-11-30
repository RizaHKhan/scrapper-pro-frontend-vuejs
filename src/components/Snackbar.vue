<template>
  <transition name="fade">
    <div class="snackbar" v-if="message">
      <p class="snackbar__message">{{ message }}</p>
      <Button
        event="close"
        background="primary"
        text="Close"
        size="sm"
        @click="changeMessage(true)"
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
    const store = useStore();
    let message = computed(() => store.getters["snackbar/getFirstMessage"]);
    changeMessage();

    watch(message, async () => {
      await changeMessage();
    });

    async function changeMessage(fail) {
      try {
        if (fail) throw new Error();
        await new Promise(resolve => setTimeout(resolve, 3000));
        store.commit("snackbar/removeShownMessage");
      } catch (e) {
        store.commit("snackbar/removeAllMessages");
      }
    }

    return {
      message,
      changeMessage
      // clearTimer
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
