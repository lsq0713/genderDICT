<script setup lang="ts">
import { ref } from 'vue'

// 模拟数据
const entries = ref([
    {
        "id": "section1",
        "title": "词条 1",
        "children": [
            {
                "id": "entry1",
                "title": "子词条 1.1",
                "content": "这是子词条 1.1 的内容。"
            },
            {
                "id": "entry2",
                "title": "子词条 1.2",
                "content": "这是子词条 1.2 的内容。"
            }
        ]
    },
    {
        "id": "section2",
        "title": "词条 2",
        "children": [
            {
                "id": "entry3",
                "title": "子词条 2.1",
                "content": "这是子词条 2.1 的内容。"
            }
        ]
    }
])

// 控制目录的展开/收缩状态
const expandedSections = ref<Record<string, boolean>>({})

// 切换目录展开状态
const toggleSection = (section: string) => {
    expandedSections.value[section] = !expandedSections.value[section]
}
</script>

<template>
    <div class="flex h-screen">
        <!-- 左侧目录 -->
        <aside class="w-1/4 bg-gray-100 p-4 overflow-y-auto">
            <ul>
                <li v-for="entry in entries" :key="entry.id" class="mb-2">
                    <button class="w-full text-left font-bold text-gray-700 hover:text-blue-500"
                        @click="toggleSection(entry.id)">
                        {{ entry.title }}
                    </button>
                    <ul v-if="expandedSections[entry.id]" class="ml-4 mt-2">
                        <li v-for="item in entry.children" :key="item.id">
                            <a :href="'#' + item.id" class="text-gray-600 hover:text-blue-400">
                                {{ item.title }}
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>

        <!-- 右侧内容 -->
        <main class="w-3/4 p-6 overflow-y-auto">
            <div v-for="entry in entries" :key="entry.id" class="mb-8">
                <h2 :id="entry.id" class="text-2xl font-bold text-gray-800">
                    {{ entry.title }}
                </h2>
                <div v-for="item in entry.children" :key="item.id" class="mt-4">
                    <h3 :id="item.id" class="text-xl font-semibold text-gray-700">
                        {{ item.title }}
                    </h3>
                    <p class="text-gray-600">{{ item.content }}</p>
                </div>
            </div>
        </main>
    </div>
</template>

<style>
/* 可选：为锚点跳转添加平滑滚动效果 */
html {
    scroll-behavior: smooth;
}
</style>