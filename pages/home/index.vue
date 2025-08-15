<template>
    <div class="min-h-screen flex flex-col bg-gray-50">
        <!-- Header -->
        <header class="h-36 flex flex-col items-center justify-center text-black">
            <nav class="w-full flex justify-center mt-4">
                <ul class="flex gap-8">
                    <li><a href="#" class="hover:text-purple-400 font-bold">首页</a></li>
                    <li><a href="#" class="hover:text-purple-400 font-bold">隐私协议</a></li>
                </ul>
            </nav>
            <h1 class="mt-4 text-2xl font-bold tracking-widest">兼顾软件开发和影视制作</h1>
        </header>

        <!-- Banner -->
        <section class="w-full">
            <img src="~/assets/htmlpage/img/bg11.jpg" alt="Group of people" class="w-full h-auto object-cover" />
        </section>

        <!-- Content -->
        <div class="flex justify-center w-full">
            <div class="flex flex-col items-center max-w-4xl w-full bg-white shadow-lg mt-[-50px] z-10 p-10">
                <!-- Icon Cards -->
                <section class="w-full text-center">
                    <h2 class="text-2xl font-bold mb-6">核心业务</h2>
                    <div class="flex flex-col items-center md:items-start md:flex-row justify-center gap-6 flex-wrap mb-8">
                        <div class="flex-1 w-full md:w-auto h-full max-w-xs border border-gray-200 bg-white mx-2 py-4 rounded-lg flex flex-col items-center">
                            <div class="flex justify-center mb-4">
                                <div class="p-2 bg-[#e8ebf8] rounded">
                                    <PhPhoneCall :size="32" color="#73417a" />
                                </div>
                            </div>
                            <h3 class="font-semibold text-lg mb-2">互联网技术服务与平台建设</h3>
                            <p class="text-gray-600 text-left px-2">提供从需求分析、架构设计到开发管理的全流程服务，打造综合企业任务的互联网平台，助力企业开展主营业务管理。</p>
                        </div>
                        <div class="flex-1 w-full md:w-auto max-w-xs h-full border border-gray-200 bg-white mx-2 py-4 rounded-lg flex flex-col items-center">
                            <div class="flex justify-center mb-4">
                                <div class="p-2 bg-[#e0f6f0] rounded">
                                    <PhShieldWarning :size="32" color="#427b4b" />
                                </div>
                            </div>
                            <h3 class="font-semibold text-lg mb-2">IT 顾问服务</h3>
                            <p class="text-gray-600 text-left px-2">拥有资深 IT 专家团队，为企业提供信息化战略规划、技术选型、系统优化等专业建议，帮助企业提升 IT 运营效率，降低成本。</p>
                        </div>
                        <div class="flex-1 w-full md:w-auto max-w-xs h-full border border-gray-200 bg-white mx-2 py-4 rounded-lg flex flex-col items-center">
                            <div class="flex justify-center mb-4">
                                <div class="p-2 bg-[#fdede7] rounded">
                                    <PhLaptop :size="32" color="#7b6342" />
                                </div>
                            </div>
                            <h3 class="font-semibold text-lg mb-2">推广和发行服务</h3>
                            <p class="text-gray-600 text-left px-2">借助多元化的渠道资源，精准营销的推广策略，实现品牌产品的广泛传播，提高作品的知名度和影响力，同时保障专业的发行策略，确保作品顺利上线。</p>
                        </div>
                    </div>
                </section>
                <!-- Image Cards -->
                <section class="w-full text-center">
                    <h2 class="text-2xl font-bold mb-6">影视一条龙服务</h2>
                    <div class="flex flex-col items-center md:flex-row justify-center gap-6 flex-wrap mb-8">
                        <div class="flex-1 w-full md:w-auto max-w-xs border border-gray-200 pb-4 bg-white mx-2 rounded-lg flex flex-col md:items-start items-center text-left">
                            <img class="w-full h-32 object-cover rounded mb-4" src="~/assets/htmlpage/img/b4.jpg" />
                            <h3 class="font-semibold text-lg mb-2 px-2">影视摄像摄影服务</h3>
                            <p class="text-gray-400 text-sm text-left px-2">2022年4月11日 图 网页模板</p>
                        </div>
                        <div class="flex-1 w-full md:w-auto max-w-xs border border-gray-200 pb-4 bg-white mx-2 rounded-lg flex flex-col md:items-start items-center text-left">
                            <img class="w-full h-32 object-cover rounded mb-4" src="~/assets/htmlpage/img/b5.jpg" />
                            <h3 class="font-semibold text-lg mb-2 px-2">影视后期剪辑</h3>
                        </div>
                        <div class="flex-1 w-full md:w-auto max-w-xs border border-gray-200 pb-4 bg-white mx-2 rounded-lg flex flex-col md:items-start items-center text-left">
                            <img class="w-full h-32 object-cover rounded mb-4" src="~/assets/htmlpage/img/b6.jpg" />
                            <h3 class="font-semibold text-lg mb-2 px-2">团队介绍网页展示</h3>
                        </div>
                    </div>
                </section>
                <!-- Quote Section -->
                <section class="w-full flex justify-center bg-[#f9faff] my-5 py-10 rounded">
                    <div class="text-xl font-bold text-gray-700 text-center p-4">
                        开发和运营面向客户的Web应用，支持在线交易、产品展示和服务预订。
                    </div>
                </section>
            </div>
        </div>

        <!-- Footer -->
        <footer class="bg-[#2e3b4e] text-white flex flex-col items-center px-4 md:px-0 justify-center mt-[-40px] pt-10 pb-6">
            <div class="w-full max-w-4xl mx-auto">
                <div class="text-lg font-bold mb-6 text-left">如遇到问题请与我们联系，感谢支持！</div>
                <div class="flex flex-col md:flex-row flex-wrap border-t border-dashed border-gray-400 pt-6 gap-6 justify-between">
                    <div class="flex-1 min-w-[150px] pr-6 border-r-0 md:border-r border-dashed border-gray-400 last:border-none">
                        <h4 class="mb-2 text-white text-sm font-normal">HTML PAGE</h4>
                        <p class="text-sm text-gray-400">© 2024 Lapus.<br />All rights reserved</p>
                    </div>
                    <div class="flex-1 min-w-[150px] pr-6 border-r-0 md:border-r border-dashed border-gray-400 last:border-none">
                        <h4 class="mb-2 text-white text-sm font-normal">联系我们</h4>
                        <p class="text-sm text-gray-400">中国 福建 厦门<br /><br /><a href="mailto:help@lapus.cn" class="underline">help@lapus.cn</a><br />13799264013</p>
                    </div>
                    <div class="flex-1 min-w-[150px] pr-6 border-r-0 md:border-r border-dashed border-gray-400 last:border-none">
                        <h4 class="mb-2 text-white text-sm font-normal">了解更多</h4>
                        <p class="text-sm text-gray-400">隐私条款</p>
                    </div>
                    <div class="flex-1 min-w-[150px]">
                        <h4 class="mb-2 text-white text-sm font-normal">电子邮件
                        </h4>
                        <p class="text-sm text-gray-400">您可以发送邮件到：<a href="mailto:help@lapus.cn" class="underline">help@lapus.cn</a> 联系到我们! </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
  
<script setup>
// Không cần logic JS cho trang tĩnh
import { PhPhoneCall, PhShieldWarning, PhLaptop } from '@phosphor-icons/vue';
import '~/assets/css/tailwind.css';
</script>
  
