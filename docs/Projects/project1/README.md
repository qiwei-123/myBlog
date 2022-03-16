# 校园社交网站
![在这里插入图片描述](https://img-blog.csdnimg.cn/f084132edbd440eb8ddfc35406b0aa3a.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBATC5lbW9u,size_20,color_FFFFFF,t_70,g_se,x_16)
![在这里插入图片描述](https://img-blog.csdnimg.cn/b8491e0267ea41b3824729f38dc7487c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBATC5lbW9u,size_20,color_FFFFFF,t_70,g_se,x_16)
在这里看操作效果哦[演示视频地址](https://www.bilibili.com/video/BV1RY411J7hp?spm_id_from=333.999.0.0)<br>
**项目描述**：使用Vue及node开发，websockt打通连接的校园社交网站。<br>
**项目功能**：注册、登陆、发动态、加好友、聊天以及修改个人信息。<br>
**项目反思与总结**：
#### 1.路由懒加载：
若无懒加载，用户进入浏览器可能会因加载内容过多出现白屏现象。运用懒加载，浏览器会按需加载，需要哪一个组件先将其加载。
```javascript
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/main',
        name: 'Main',
        redirect: '/main/home',
        component: () => import('../views/Main.vue'),
        children: [
            {
                path: 'home',
                name: 'Home',
                component: Home
            },
            {
                path: 'chat',
                name: 'Chat',
                component: Chat
            },
            {
                path: 'info',
                name: 'Info',
                component: Info
            }
        ]
    }
```
