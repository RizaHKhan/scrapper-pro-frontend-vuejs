<template>
  <div class="navigation">
    <h1>Scrapper-Pro</h1>
    <form v-if="!loggedIn">
      <input type="text" v-model="username" />
      <input type="text" v-model="password" />
      <input type="button" @click="handleClick" />
    </form>
    <div v-else>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    let username = ref("");
    let password = ref("");
    const loggedIn = computed(() => store.getters["user/loggedIn"]);

    function handleClick() {
      console.log(username.value);
      console.log(password.value);
    }

    return {
      loggedIn,
      username,
      password,
      handleClick
    };
  }
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  flex-direction: space-between;
}
</style>
