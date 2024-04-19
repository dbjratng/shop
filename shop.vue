<template>
  <div id="shop">
    <HelloTag :color="red" :text="text" :logo="logo" />
    <Hellosquare :color="purple" :text="text" :logo="logo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloTag from './components/HelloTag.vue';
import Hellosquare from './components/Hellosquare.vue';

export default defineComponent({
  name: 'Shop',
  components: {
    HelloTag,
    Hellosquare,
  },
  props: {
    color: {
      type: String,
      default: 'white',
    },
    text: {
      type: String,
      default: 'Hello, world!',
    },
    logo: {
      type: String,
      default: '',
    },
  },
});
</script>

<style scoped>
#shop {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
</style>
