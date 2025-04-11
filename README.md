# 性别研究词典 (Demo)

本项目是复旦大学25春《性别与历史》课程关于“性别研究词典”项目的网站（试开发）

| 目录 |
| ---- |
| [词条编写](#section1) |
| [加入我们](#section2) |
| [技术栈](#section3) |

词条编写同学仅需阅读[词条编写](#section1)即可

## 词条编写<a id="section1"></a>

### Markdown 介绍

词条采用 markdown 格式进行编写，markdown 是世界上最受欢迎的标记语言之一，只需要半个小时就可以掌握！

- 教程：[Markdown 基本语法 | Markdown 教程](https://markdown.com.cn/basic-syntax/)

- 在线编辑器：[在线markdown编辑器_微信公众号markdown排版工具](https://markdown.com.cn/editor/)

- 可选工具：

  目前如飞书、腾讯文档、有道云笔记等软件均支持 markdown 编辑与预览（实际上用记事本也可以编辑，只是看不到效果:no_mouth:）

  - [Typora 官方中文站](https://typoraio.cn/)：很流行的 Typora 编辑器，免费版也完全满足几乎需求

> Minimum Viable Product：实际上在编写词条过程中，你只需要掌握[Markdown 标题语法](https://markdown.com.cn/basic-syntax/headings.html)、[Markdown 段落语法](https://markdown.com.cn/basic-syntax/paragraphs.html)、[Markdown 换行语法](https://markdown.com.cn/basic-syntax/line-breaks.html)、[Markdown 列表语法](https://markdown.com.cn/basic-syntax/lists.html)、[Markdown 链接语法](https://markdown.com.cn/basic-syntax/links.html)即可（好像也差不多学完了:innocent:

### 词条示例

下面是一个 markdown 词条示例，可以先**忽略前五行的内容**，我们将在后面说明：

```markdown
---
title: '厌女症'
description: '样例词条：厌女症'
date: 2025-4-11
---
# 厌女症

## 解释

厌女症，（英语：Misogyny），也称女性贬抑，是一种对女性的系统性歧视、贬低、敌视或仇恨的文化态度、行为模式或制度性实践。它根植于性别不平等的社会结构中，表现为对女性价值的否定、性别角色的刻板化限制，以及对女性身体、自主权和社会地位的压迫。主要表现形式包括：对女性的刻板印象与贬低；将女性身体商品化；以道德绑架控制女性行为，诸如“荡妇羞辱”或“贞洁规训”；通过宗教、传统或媒体传播“男尊女卑”的价值观；法律与政策中对女性权益的忽视等。

## 参考文献

1. 上野千鹤子：《厌女：日本的女性嫌恶》， 上海三联书店， 2015年。
Kate Manne，Down Girl: The Logic of Misogyny，Oxford University Press，2017。

2. 伊藤诗织：《黑箱：日本之耻》，上海雅众文化，2017年。

## 示例

新东方董事长俞敏洪曾声称“衡量和评价的方向决定了教育的方向，比如，中国女人挑选男人的标准是要男人会赚钱，至于良心好不好不管，所以中国女性的堕落导致了国家的堕落。” 这一言论即是典型的厌女表现。参照：[俞敏洪道歉了，但这个时代的厌女症远没结束](http://www.bjnews.com.cn/culture/2018/11/19/522800.html)

## 延伸阅读

[我遭遇过的厌女症](https://www.douban.com/gallery/topic/32/)
```

其中第一级标题（`#`）为 **词条名**，最好与第二行的 `title` 一致

> 关于前五行（及开头两个 `---` 及其之间的内容）：此处内容是网站读取 md 文件的重要部分，请严格按照后续提供的模板进行修改。
>
> 字段解释：
>
> `title:` 后是词条名，也是网页目录
>
> `description:`后是词条描述，**不要换行！**请简短的描述词条，在网站搜索时标题下面的内容即为此处
>
> `date:`后是编写时间，请按照 `xxxx-xx-xx` 的格式填写时间

### 模板（待定）

**前七行请严格只修改 `< >` 内的内容（删去 `<` 与 `>`）**，二级标题及其他可视情况改变结构

```markdown
---
title: '<词条名>'
description: '<描述>'
date: <时间，格式为xxxx-xx-xx>
---
# <词条名>

## 解释

balabala

## 参考文献

1. O.o

2. o.O

3. balabala

## 示例

嘿咻嘿咻~

## 延伸阅读

A.A

```

> **:point_up:只编写词条的同学了解上面的内容就足够啦！**

## 加入我们<a id="section2"></a>

不仅是技术，包括内容、美术、运营等相关技能都可以参与其中：

- 开发人员（网站）：对于现有网站的开发，最好对 html 有一定了解（或愿意学习），对 Vue、React、Nuxt 等框架有了解的更佳。
- 开发人员（其他）：只要有代码基础，或者有小程序、APP 等的开发技能，也可加入到项目的开发之中
- 内容：负责内容的整理以及文案的创作
- 美术：网站UI美化或者其他美术设计工作
- 运营：工具的运营工作

联系方式：与助教联系

## 技术栈<a id="section3"></a>

本项目基于 Nuxt3 + tailwindCSS + Nuxt Content 开发

### Nuxt3

官方文档：[Nuxt: The Progressive Web Framework](https://nuxt.com/)

中文文档：[Nuxt 中文站 - 直观的Web框架 Nuxt3文档 · Nuxt](https://nuxt.com.cn/)

### tailwindCSS

> 注：当前使用版本为 v4.1

官方文档：[Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.](https://tailwindcss.com/)

中文文档：[Tailwind CSS - 只需书写 HTML 代码，无需书写 CSS，即可快速构建美观的网站。 | TailwindCSS中文文档 | TailwindCSS中文网](https://www.tailwindcss.cn/)

### Nuxt Content

> 注：当前使用版本为 v3.4.0

官方文档：[The git-based CMS for Nuxt projects.](https://content.nuxt.com/)

### Iconify

官方文档：[Iconify Design: All popular icon sets, one framework.](https://iconify.design/)

使用 `npm i -D @iconify-json/simple-icons` 与 `npm i -D @iconify-json/lucide` 本地安装了 SimpleIcons 与 Lucide 两款图标库

可使用例如 `<Icon name="lucide:mail" style="color: black" />` 或 `<Icon name="i-lucide-mail" style="color: black" />` 及 `<Icon name="i-simple-icons-github" style="color: black" />` 进行调用

在 markdown 文件中，可使用如 `:icon{name="i-lucide-music"}` 进行调用
