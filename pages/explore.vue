<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
        <h1 class="text-4xl font-bold mb-4">欢迎来到文档检索页面</h1>
        <p class="mb-8">请输入关键词以检索相应的文档。</p>
        <UContentSearch :files="sections" @update:results="updateResults" @select-file="navigateToFile" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAsyncData } from '#app'
import UContentSearch from '~/components/UContentSearch.vue'

interface Section {
    id: string
    title: string
    titles: string[]
    content: string
    level: number
    slug: string // Added slug property
}

const sections = ref<Section[]>([])

// 使用 Nuxt Content 的 queryCollectionSearchSections 方法获取文档锚点
const fetchSections = async () => {
    const { data, error } = await useAsyncData('search-sections', () =>
        queryCollectionSearchSections('content', {
            ignoredTags: ['code'] // 忽略代码块中的内容
        })
    )
    if (error) {
        console.error('Error fetching sections:', error)
    }
    console.log('Fetched data:', data.value)
    sections.value = (data.value || []).map(item => ({
        id: item.id,
        title: item.title,
        titles: item.titles,
        content: item.content,
        level: item.level,
        slug: `/content/${item.id}`
    }))
}

// 页面加载时获取文档锚点
onMounted(fetchSections)

// 更新搜索结果
function updateResults(results: Section[]) {
    console.log('搜索结果更新:', results)
}

// 跳转到选中的文档锚点
function navigateToFile(file: Section) {
    const anchor = file.id ? `#${file.id}` : ''
    window.location.href = `${file.slug}${anchor}`
}
</script>

<style>
/* 如果需要自定义样式，可以在这里添加 */
</style>
