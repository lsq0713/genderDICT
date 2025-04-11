<template>
  <div class="min-h-screen flex flex-col">
    <!-- 导航栏 -->
    <header class="bg-blue-500 text-white py-4">
      <nav class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">性别研究词典</h1>
        <ul class="flex space-x-4">
          <li>
            <NuxtLink to="/" class="hover:underline">首页</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="hover:underline">关于</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="hover:underline">联系我们</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>

    <!-- 主体 -->
    <main class="flex-grow container mx-auto py-8">
      <NuxtPage />
    </main>

    <!-- 页脚 -->
    <footer class="bg-gray-800 text-white py-4">
      <div class="container mx-auto text-center">
        <p>&copy; 2025 性别名词词典. 版权所有.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// 暂无需要的逻辑代码
</script>

<style scoped>
/* 如果需要自定义样式，可以在这里添加 */
</style>