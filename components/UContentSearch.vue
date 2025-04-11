<template>
    <div class="search-container">
        <input
            type="text"
            v-model="searchTerm"
            placeholder="输入关键词搜索文档..."
            class="border border-gray-300 rounded-md p-2 w-full mb-4"
        />
        <div v-if="filteredFiles.length > 0" class="results">
            <h2 class="text-lg font-semibold mb-2">搜索结果:</h2>
            <ul>
                <li
                    v-for="file in filteredFiles"
                    :key="file.id"
                    class="py-2 flex items-center justify-between"
                >
                    <button
                        @click="selectFile(file)"
                        class="text-blue-500 hover:underline"
                    >
                        {{ file.title }}
                    </button>
                    <span
                        v-if="!file.slug"
                        class="text-gray-500 text-sm italic"
                    >
                        无效的文档链接
                    </span>
                </li>
            </ul>
        </div>
        <div v-else>
            <p class="text-gray-500">未找到相关文档，请尝试其他关键词。</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface File {
    id: string
    title: string
    content: string
    slug: string
}

const props = defineProps({
    files: {
        type: Array as () => File[],
        required: true
    }
})

const emit = defineEmits(['update:results', 'select-file'])

const searchTerm = ref('')

const filteredFiles = computed(() => {
    if (!searchTerm.value) return props.files
    return props.files.filter(file =>
        file.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
        file.content.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
})

// 监听过滤结果并向父组件发送更新
watch(filteredFiles, (newResults) => {
    emit('update:results', newResults)
})

// 选中文档时触发事件
function selectFile(file: File) {
    emit('select-file', file)
}
</script>

<style scoped>
.search-container {
    max-width: 600px;
    margin: 0 auto;
}
.results ul {
    list-style: none;
    padding: 0;
}
.results li {
    border-bottom: 1px solid #e5e7eb;
    padding: 8px 0;
}
</style>