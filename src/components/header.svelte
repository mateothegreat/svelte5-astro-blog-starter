<script lang="ts">
  import { Github, Linkedin, Mail } from "lucide-svelte";
</script>

<header class="bg-black p-4">
  <nav class="flex items-center">
    <h2 class="mr-6 p-2">
      <a href="/">
        <img src="title.png" alt="matthewdavis.io" />
      </a>
    </h2>
    <div class="flex flex-1 justify-end gap-10 text-base tracking-widest">
      <a href="/" class="text-violet-600">HOME</a>
      <a href="/blog" class="text-green-600">BLOG</a>
      <a href="/about" class="text-blue-600">ABOUT</a>
    </div>
    <div class="mx-10 ml-14 flex gap-5">
      <a href="https://github.com/mateothegreat" target="_blank">
        <Github class="cursor-pointer text-slate-600 hover:text-green-500" />
      </a>
      <a href="https://linkedin.com/in/runtotrouble" target="_blank">
        <Linkedin class="cursor-pointer text-slate-600 hover:text-green-500" />
      </a>
      <a href="mailto:matthew@matthewdavis.io" target="_blank">
        <Mail class="cursor-pointer text-slate-600 hover:text-green-500" />
      </a>
    </div>
  </nav>
</header>
