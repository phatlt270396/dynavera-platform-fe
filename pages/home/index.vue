<template>
    <div>
  
      <!-- Header -->
      <header class="header">
        <nav>
          <ul>
            <li><a href="#">首页</a></li>
            <li><a href="#">服务</a></li>
            <li><a href="#">联系</a></li>
          </ul>
        </nav>
        <h1 class="logo">DYNAVERAPTE.LTD.</h1>
      </header>
  
      <!-- Banner -->
      <section class="banner">
        <img src="~/assets/htmlpage/img/bg11.jpg" alt="Group of people" />
      </section>
  
      <!-- Content -->
       <div style="display: flex;justify-content: center;">
            <div class="service-section">
                <section class="content">
                    <h2>核心业务</h2>
                    <div class="cards">
                        <div class="card">
                            <div style="display: flex;justify-content: center;">
                                <div style="padding: 10px;background-color: #e8ebf8;border-radius: 5px;">
                                    <PhPhoneCall :size="32" color="#73417a"/>
                                </div>
                            </div>
                            <h3>互联网介绍</h3>
                            <p>互联网是...（nội dung mẫu）</p>
                        </div>
                        <div class="card">
                            <div style="display: flex;justify-content: center;">
                                <div style="padding: 10px;background-color: #e0f6f0;border-radius: 5px;">
                                    <PhShieldWarning :size="32" color="#427b4b" />
                                </div>
                            </div>
                            <h3>IT 安全</h3>
                            <p>提供安全保障...（nội dung mẫu）</p>
                        </div>
                        <div class="card">
                            <div style="display: flex;justify-content: center;">
                                <div style="padding: 10px;background-color: #fdede7;border-radius: 5px;"> 
                                    <PhLaptop :size="32" color="#7b6342" />
                                </div>
                            </div>
                            <h3>数据分析</h3>
                            <p>数据驱动决策...（nội dung mẫu）</p>
                        </div>
                    </div>
                </section>
                <section class="content">
                    <h2>核心业务</h2>
                    <div class="cards">
                    <div class="card">
                        <img width="100%" height="50%" src="~/assets/htmlpage/img/b4.jpg" />
                        <h3>互联网介绍</h3>
                        <p>互联网是...（nội dung mẫu）</p>
                    </div>
                    <div class="card">
                        <img width="100%" height="50%" src="~/assets/htmlpage/img/b5.jpg" />
                        <h3>IT 安全</h3>
                        <p>提供安全保障...（nội dung mẫu）</p>
                    </div>
                    <div class="card">
                        <img width="100%" height="50%" src="~/assets/htmlpage/img/b6.jpg" />
                        <h3>数据分析</h3>
                        <p>数据驱动决策...（nội dung mẫu）</p>
                    </div>
                    </div>
                </section>
                <section style="padding: 10%;display: flex;justify-content: center;background-color: #f9faff;margin: 20px 0">
                    <div style="font-size: 20px;font-weight:700">
                        如果有一天，你发现母亲的厨房不再像以前那么干净了； 如果有一天，你发现母亲的菜太成太难吃； 如果有一天，你发现父亲看电视看着看着睡着了； 如果有一天
                    </div>
                </section>
            </div>
       </div>
       <div class="footer">
            <div class="footer-container">
                <div class="footer-top">
                    如遇到问题请与我们联系，感谢支持！
                </div>
                <div class="footer-columns">
                    <div class="footer-col">
                        <h4>公司名</h4>
                        <p>DYNAVERAPTE.LTD.</p>
                    </div>
                    <div class="footer-col">
                        <h4>公司地址</h4>
                        <p>Company Address: 50 Chinasweeroad, #08-02,<br>
                        Thongchai Building, Singapore 169874</p>
                    </div>
                    <div class="footer-col">
                        <h4>了解更多</h4>
                        <a href="#">隐私条款</a>
                    </div>
                    <div class="footer-col">
                        <h4>电子邮件</h4>
                        <p>您可以发送邮件到：<a href="mailto:help@lapus.cn">help@lapus.cn</a> 联系我们！</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  </template>
  
  <script setup>
  // Không cần logic JS cho trang tĩnh
  import { PhPhoneCall, PhShieldWarning, PhLaptop } from '@phosphor-icons/vue';
  </script>
  
  <style scoped>
  /* Header */
  .header {
    background: #f5f5f5;
    padding: 10px;
    text-align: center;
  }
  .header nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 0;
  }
  .header nav a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
  }
  .logo {
    margin-top: 10px;
    font-size: 24px;
    font-weight: bold;
  }
  
  /* Banner */
  .banner img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  /* Content */
  .content {
    text-align: center;
    width: 100%;
  }
  .content h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .cards {
    display: flex;
    justify-content: center;
    flex-direction: row;
    margin:20px;
  }
  .card {
    border: 1px solid #ddd;
    padding: 15px;
    background: white;
    width: 30%;
    margin: 0 auto;
  }
  .service-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 900px;
    width: 100%;
    justify-content: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin-top: -50px;
    z-index: 10;
    background: white;
    padding: 40px 0;
  }
    .footer {
        background-color: #2e3b4e;
        padding: 20px 0;
        margin-top: -40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
        justify-content: center;
    }
    .footer-top {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    .footer-columns {
        display: flex;
        border-top: 1px dashed #ccc;
        padding-top: 20px;
        gap: 20px;
    }
    .footer-col {
        flex: 1;
        border-right: 1px dashed #ccc;
        padding-right: 20px;
    }
    .footer-col:last-child {
        border-right: none;
    }
    .footer-col h4 {
        margin-bottom: 10px;
        font-weight: normal;
        font-size: 14px;
        color: #ccc;
    }
    .footer-col p, 
    .footer-col a {
        font-size: 14px;
        line-height: 1.6;
        color: #fff;
        text-decoration: none;
    }
    .footer-col a:hover {
        text-decoration: underline;
    }
    .footer-container {
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        padding-top: 40px;
    }
    @media (max-width: 640px) {
        .cards {
            flex-direction: column;
        }
        .card {
            width: 90%;
            margin-bottom: 20px;
        }
        .footer-columns {
            flex-direction: column;
            align-items: left;
            padding-left: 20px;
        }
        .footer-top {
            padding-left: 20px;
        }
    }
  </style>