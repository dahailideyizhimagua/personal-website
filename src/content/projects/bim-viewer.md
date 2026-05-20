---
title: "BIM 模型浏览器"
description: "轻量级 BIM 模型在线查看器，支持 IFC 格式解析与三维渲染。"
year: 2025
role: "前端开发"
tech: ["Three.js", "TypeScript", "WebGL", "IFC.js"]
heroImage: ""
featured: true
category: "web"
order: 2
github: "https://github.com"
---

## 项目概述

一个基于 Web 的 BIM 模型查看器，可以在浏览器中直接打开和浏览 IFC 格式的建筑信息模型。

## 核心功能

- IFC 文件解析与结构树展示
- 三维模型实时渲染（WebGL）
- 构件属性查看与搜索
- 剖切面与透视模式
- 测量工具（距离、面积、角度）
- 标注与批注功能

## 技术细节

使用 Three.js 作为渲染引擎，IFC.js 处理 IFC 文件解析。通过 Web Worker 将解析任务移至后台线程，避免阻塞 UI。
