<template>
  <button class="button" :class="size + ' ' + background" @click="handleClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: false,
      default: "md"
    },
    event: {
      type: String,
      required: true
    },
    background: {
      type: String,
      required: false,
      default: "dark"
    }
  },
  setup(props, context) {
    function handleClick() {
      context.emit("button-click", props.event);
    }

    return {
      handleClick
    };
  }
};
</script>

<style lang="scss" scoped>
.button {
  border: 0;
  border-radius: 5px;
  margin: 0.2rem;
}

.button.md {
  padding: 1rem;
}

.button.lg {
  padding: 2rem;
}

.button.sm {
  padding: 0.5rem;
}

.dark {
  background: black;
  color: white;
}

.primary {
  background: blue;
  color: white;
}

.secondary {
  background: grey;
  color: black;
}
</style>
