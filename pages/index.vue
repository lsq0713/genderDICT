<template>
    <NuxtLayout layout="full-width">
        <section class="text-center">
            <h2 class="text-4xl font-bold mb-4">欢迎来到性别研究词典</h2>
            <p class="text-lg text-gray-700 mb-6">
                我们致力于提供全面的性别相关名词解释，帮助您更好地理解性别多样性。
            </p>
            <!-- <ContentRenderer v-if="home" :value="home" />
            <div v-else>Home not found</div> -->
        </section>
    </NuxtLayout>
</template>

<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('docs').path('/docs/').first())
useSeoMeta({
    title: home.value?.title,
    description: home.value?.description
})
// 暂无需要的逻辑代码
</script>

<style scoped>
/* 如果需要自定义样式，可以在这里添加 */
</style>