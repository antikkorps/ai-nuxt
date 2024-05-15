<script setup lang="ts">

</script>
<template>
  <div class="flex flex-row fixed w-full items-center justify-between px-6 py-4 bg-white dark:bg-neutral-800">
    <div class="flex flex-row items-center justify-between space-x-3">
    <div class="text-2xl dark:text-white">logo</div>
    <div class="list-items pl-4">
      <div class="flex flex-row items-center justify-between dark:text-white space-x-6">
        <div><NuxtLink to="/">Item1</NuxtLink></div>
        <div><NuxtLink to="/">Item2</NuxtLink></div>
        <div><NuxtLink to="/">Item3</NuxtLink></div>
      </div>
    </div>
    </div>
    <div class="flex items-center justify-between dark:text-white space-x-2">
      <div>Some Ui</div>
      <div>
        <div>Some other Ui</div>
      </div>
    </div>
  </div>
</template>
