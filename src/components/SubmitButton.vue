<template>
  <div>
    <span v-if="isAdmin">Admin Privileges</span>
    <span v-else>Not Authorized</span>
    <button>{{ msg }}</button>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true
    },
    isAdmin: {
      type: Boolean,
      required: false
    }
  },
};
</script>

<style></style>
