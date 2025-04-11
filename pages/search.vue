<script setup lang="ts">
import MiniSearch from 'minisearch'
import { ref, computed, toValue } from 'vue'

const query = ref('')
const { data } = await useAsyncData('search', () => queryCollectionSearchSections('content'))

const miniSearch = new MiniSearch({
    fields: ['title', 'content'],
    storeFields: ['title', 'content'],
    searchOptions: {
        prefix: true,
        fuzzy: 0.2,
    },
})

// Add data to the MiniSearch instance
if (data.value) {
    miniSearch.addAll(toValue(data.value))
}

const result = computed(() => {
    return query.value ? miniSearch.search(toValue(query)) : []
})
</script>

<template>
    <div class="min-h-screen bg-gray-100 flex flex-col items-center py-10">
        <div class="w-full max-w-2xl bg-white shadow-md rounded-lg p-6">
            <h1 class="text-2xl font-bold text-gray-800 mb-4">搜索</h1>
            <input
                v-model="query"
                type="text"
                placeholder="请输入搜索内容..."
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ul class="mt-6 space-y-4">
                <li
                    v-for="link in result"
                    :key="link.id"
                    class="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                    <NuxtLink
                        :to="link.id"
                        class="text-lg font-semibold text-blue-600 hover:underline"
                    >
                        {{ link.title }}
                    </NuxtLink>
                    <p class="text-gray-600 text-sm mt-2">{{ link.content }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
