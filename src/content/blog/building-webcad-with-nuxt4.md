---
title: "用 Nuxt 4 构建离线优先的 WebCAD 系统"
description: "分享 WebCAD 协同设计系统的架构设计思路，包括离线优先策略、P2P 协作和冲突解决方案。"
pubDate: 2026-05-15
category: "webcad"
tags: ["nuxt", "pouchdb", "webrtc", "offline-first"]
---

## 为什么选择离线优先？

在建筑工程现场，网络环境往往不可靠。设计师可能需要在没有网络的环境下继续工作，等到回到办公室后再同步数据。这就要求系统必须能够在完全离线的状态下正常运行。

## 架构设计

### 数据层：PouchDB + IndexedDB

PouchDB 是一个 JavaScript 数据库，可以在浏览器中运行，数据存储在 IndexedDB 中。它的最大特点是支持与远程 CouchDB 数据库双向同步。

```javascript
// 本地数据库
const localDB = new PouchDB('webcad');

// 远程数据库
const remoteDB = new PouchDB('http://localhost:5984/webcad');

// 双向同步
localDB.sync(remoteDB, {
  live: true,
  retry: true
});
```

### 协作层：WebRTC

WebRTC 允许浏览器之间直接通信，无需经过服务器。这对于局域网内的协同设计非常理想。

### 冲突解决

当多个用户同时修改同一个对象时，我们采用字段级合并策略：

1. 乐观锁检测并发修改
2. 字段级 diff 比较
3. 自动合并不冲突的字段
4. 冲突字段交给用户手动解决

## 性能数据

| 指标 | 数值 |
|------|------|
| 首屏加载 | 1.2s |
| 离线可用率 | 100% |
| 同步成功率 | 85% |
| 缓存命中率 | 78% |
