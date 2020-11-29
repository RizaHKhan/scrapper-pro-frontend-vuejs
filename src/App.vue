<template>
  <div class="main">
    <Button text="Submit" size="sm" />
    <Button text="Submit" />
    <Button
      event="penis"
      text="Submit"
      size="lg"
      background="primary"
      @button-click="handleClick"
    />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <button @click="addMsg">Click Me</button>
    <Snackbar />
  </div>
</template>

<script>
import Snackbar from "@/components/Snackbar";
import Button from "@/components/Button";
import { useStore } from "vuex";

export default {
  components: {
    Snackbar,
    Button
  },
  setup() {
    let val = 0;
    const store = useStore();

    function addMsg() {
      store.commit("snackbar/addMsg", `message${val++}`);
    }

    function handleClick(event) {
      console.log("click", event);
    }

    return {
      addMsg,
      handleClick
    };
  }
};
</script>
<style lang="scss">
*,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
