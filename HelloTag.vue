<template>
  <div :style="{ backgroundColor: backgroundColor, color: textColor }">
    <h2>{{ text }}</h2>
    <img :src="C:\app\image" alt="Logo" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  props: {
    backgroundColor: String,
    textColor: String,
    text: String,
    logoUrl: String,
  },
});
</script>

<style scoped>
div {
  padding: 20px;
}
h2 {
  font-size: 24px;
}
img {
  max-width: 100px;
}
</style>
