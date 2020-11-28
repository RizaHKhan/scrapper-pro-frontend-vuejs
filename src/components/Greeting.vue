<template>
  <div>{{ greeting }}</div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const greeting = ref("Vue and TDD");

    return {
      greeting
    };
  }
};
</script>

<style></style>
