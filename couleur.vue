<template>
  <CustomComponent customBackgroundColor="red" customTextColor="white" text="Hello!" logoUrl="C:\app\image" />
</template>

<script lang="ts">
import CustomComponent from './CustomComponent.vue';

export default {
  components: {
    CustomComponent,
  },
};
</script>
