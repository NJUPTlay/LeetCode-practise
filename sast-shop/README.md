## SAST-SHOP SAST 周边H5网页
每年 sast 都会制作会服，并且之后还会有更多周边推出，故设计sast周边H5网页便于售卖
## SAST-SHOP 前端代码仓库
本仓库为sast-shop前端代码仓库，使用React + TypeScript + Vite开发，后端接口使用sast-shop后端仓库提供的接口。

## 使用技术栈

- [React](https://react.dev/)
- [Sass/Scss](https://sass.bootcss.com/)
- [React-Router](https://reactrouter.com/)
 <!-- - [Tailwind](https://tailwindcss.com/) -->

## 项目开发
本项目使用的是pnpm作为包管理器，如果你还没有安装pnpm，使用以下命令安装：
```bash
npm i -g pnpm
```
开发教程
```bash
git clone https://github.com/NJUPT-SAST/sast-shop-frontend.git

cd sast-shop-frontend

pnpm i

pnpm run dev
```
## 项目架构
```
 |-- src
        |-- index.scss
        |-- main.tsx
        |-- Route.tsx 路由配置
        |-- assets 图片
        |-- pages
            |-- home 主页
            |-- login 登录页
            |-- me 我的/历史订单
            |-- order-detail 修改订单详情 
            |-- order-form 信息填写并支付
            |-- product-detail 商品详情
```

## 如果开发过程中遇到问题，欢迎小登们来提交`issue`😊，或者直接线下单杀。



