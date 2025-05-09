<template>
    <div class="min-h-screen flex flex-col">
        <!-- 导航栏 -->
        <header class="bg-fudan-blue text-white py-4 shadow-md">
            <nav class="container mx-auto flex justify-between items-center">
                <h1 class="text-2xl font-bold">性别研究词典</h1>
                <ul class="hidden md:flex space-x-4">
                    <li>
                        <NuxtLink to="/" class="hover:underline">首页</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/search" class="block hover:underline">检索</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/contact" class="hover:underline">联系我们</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://gitee.com/lessen/gender-dict" class="hover:underline">
                            <Icon name="i-simple-icons-gitee" style="color: white" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="https://github.com/lsq0713/genderDICT" class="hover:underline">
                            <Icon name="i-simple-icons-github" style="color: white" />
                        </NuxtLink>
                    </li>
                </ul>
                <!-- 移动端菜单按钮 -->
                <button class="md:hidden text-white focus:outline-none" @click="toggleMobileMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </nav>
            <!-- 移动端菜单 -->
            <ul v-if="isMobileMenuOpen" class="md:hidden bg-blue-600 text-white space-y-2 p-4">
                <li>
                    <NuxtLink to="/" class="block hover:underline">首页</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/search" class="block hover:underline">检索</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/contact" class="block hover:underline">联系我们</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="https://gitee.com/lessen/gender-dict" class="hover:underline">
                        <Icon name="i-simple-icons-gitee" style="color: white" />
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="https://github.com/lsq0713/genderDICT" class="hover:underline">
                        <Icon name="i-simple-icons-github" style="color: white" />
                    </NuxtLink>
                </li>
            </ul>
        </header>

        <!-- 主体 -->
        <div class="flex flex-grow relative">
            <!-- 左侧侧边栏 -->
            <aside :class="[
                'bg-gray-50 border-r border-gray-200 p-4 overflow-y-auto transition-all duration-300 h-full shadow-md',
                isSidebarOpen ? 'w-1/4' : 'w-0 opacity-0'
            ]">
                <div v-if="isSidebarOpen" class="mt-4">
                    <!-- 侧边栏标题 -->
                    <h2 class="text-lg font-semibold text-gray-800 border-b pb-2 mb-4">
                        词条目录
                        <NuxtLink to="/search"
                            class="px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition">
                            <Icon name="i-lucide-search" style="color: black" />
                        </NuxtLink>
                    </h2>
                    <ul class="space-y-2">
                        <li v-for="post in posts" :key="post.id">
                            <NuxtLink :to="post.path"
                                class="block px-3 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition">
                                {{ post.title }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </aside>

            <!-- 浮动按钮 -->
            <button @click="toggleSidebar"
                class="fixed left-0 top-1/2 z-10 -translate-y-1/2 transform flex items-center gap-2 px-3 py-2 rounded-r-lg transition-all duration-200 shadow-md"
                :class="[
                    isSidebarOpen
                        ? 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                ]">
                <Icon :name="isSidebarOpen ? 'i-lucide-chevron-left' : 'i-lucide-chevron-right'" class="w-5 h-5" />
                <span class="font-medium">
                    {{ isSidebarOpen ? '收起' : '展开' }}
                </span>
            </button>

            <!-- 右侧内容 -->
            <main :class="[isSidebarOpen ? 'w-3/4' : 'w-full', 'p-6 overflow-y-auto']">
                <NuxtPage />
            </main>
        </div>

        <!-- 页脚 -->
        <footer class="bg-gray-800 text-white py-4">
            <div class="container mx-auto text-center">
                <p>&copy; 2025 性别研究词典. 版权所有.</p>
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAsyncData } from '#app'

useHead({
    title: '性别研究词典',
    meta: [
        { name: 'description', content: '性别研究词典是一个致力于提供全面的性别相关名词解释的平台。' }
    ]
})

useSeoMeta({
    title: '性别研究词典',
    ogTitle: '性别研究词典',
    description: '性别研究词典是一个致力于提供全面的性别相关名词解释的平台。',
    ogDescription: '性别研究词典是一个致力于提供全面的性别相关名词解释的平台。',
    // ogImage: 'https://example.com/image.png',
    // twitterCard: 'summary_large_image',
})

// 获取内容数据
const { data: posts } = await useAsyncData('entries', () =>
    queryCollection('entries').all()
)

// 控制侧边栏状态
const isSidebarOpen = ref(true)
const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
}

// 控制移动端菜单状态
const isMobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<style scoped>
html {
    scroll-behavior: smooth;
    overflow-y: scroll;
}
</style>