---
title: "WebCAD 协同设计系统"
description: "基于 Nuxt 4 构建的离线优先 CAD 协同设计平台，支持 P2P 实时协作。"
year: 2026
role: "全栈开发"
tech: ["Nuxt 4", "PouchDB", "WebRTC", "Electron", "SQLite"]
heroImage: ""
featured: true
category: "cad"
order: 1
github: "https://github.com"
---

## 项目概述

WebCAD 是一个面向建筑工程团队的协同设计系统，核心理念是**离线优先、实时协作**。

## 核心特性

### 离线优先架构
- PouchDB + IndexedDB 实现本地数据持久化
- Service Worker 缓存所有静态资源
- 断网状态下可完整使用所有功能

### P2P 实时协作
- WebRTC DataChannel 实现点对点数据传输
- 无需中心服务器，局域网内直接通信
- 冲突解决：乐观锁 + 字段级合并

### 一键启动
- Electron 桌面端，双击即用
- 内置 Express + WebSocket 信令服务器
- SQLite 本地数据库，零配置

## 技术架构

```
┌─────────────────────────────────┐
│        Nuxt 4 SSR/SSG          │
├─────────────────────────────────┤
│     PWA + PouchDB (Offline)     │
├─────────────────────────────────┤
│     WebRTC P2P Collaboration    │
├─────────────────────────────────┤
│  Electron + Express + SQLite    │
├─────────────────────────────────┤
│   WebSocket Signaling Server    │
└─────────────────────────────────┘
```
