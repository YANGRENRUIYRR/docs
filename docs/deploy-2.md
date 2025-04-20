# 部署 博客
项目地址:[Hexo](https://github.com/hexojs/hexo)


## Hexo
作者：@[Hexojs](https://github.com/hexojs/)\
仓库：<https://github.com/hexojs/hexo>\
文档：<https://hexo.io/zh-cn/docs/>
## 前置要求
在电脑上装有npm，没有可以[安装](https://nodejs.org/en/download/prebuilt-installer)\
在电脑上装有git，没有可以[安装](https://git-scm.com/downloads)\
当前可以连接[GitHub](https://github.com)
## 安装Hexo-Cli
在以管理员权限运行的cmd中运行
```bash
npm install hexo-cli -g
```
## 初始化Hexo
在以管理员权限运行的cmd中运行
```bash
hexo init hexo&cd hexo&npm install
```
在这个时候，你已经可以用
```bash
hexo server
```
运行你的博客了
## 安装主题
hexo提供了很多主题，可以在<https://hexo.io/themes/>查看，点击主题的名字，即可跳转到Github，照```README.MD```操作即可
## 替换主题
```bash
hexo config theme 你的主题名字
```
## 部署指南：[link](https://hexo.io/zh-cn/docs/one-command-deployment)