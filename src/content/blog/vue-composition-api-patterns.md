---
title: "Vue 3 Composition API 实用模式"
description: "总结 Vue 3 Composition API 中常用的几种代码组织模式，包括组合函数、状态管理等。"
pubDate: 2026-04-20
category: "frontend"
tags: ["vue", "composition-api", "typescript", "patterns"]
---

## 为什么用 Composition API？

Vue 3 的 Composition API 不是为了替代 Options API，而是为了解决 Options API 在复杂组件中的代码组织问题。

## 常用模式

### 1. 组合函数（Composables）

将可复用的逻辑提取为独立的函数：

```typescript
// useMousePosition.ts
import { ref, onMounted, onUnmounted } from 'vue';

export function useMousePosition() {
  const x = ref(0);
  const y = ref(0);

  const update = (e: MouseEvent) => {
    x.value = e.clientX;
    y.value = e.clientY;
  };

  onMounted(() => window.addEventListener('mousemove', update));
  onUnmounted(() => window.removeEventListener('mousemove', update));

  return { x, y };
}
```

### 2. 状态管理

用 `reactive` + `provide/inject` 替代简单的全局状态：

```typescript
// store.ts
import { reactive, provide, inject } from 'vue';

const storeKey = Symbol('store');

export function createStore() {
  return reactive({
    user: null,
    theme: 'light',
  });
}

export function useStore() {
  return inject(storeKey);
}
```

### 3. 异步数据获取

```typescript
export function useFetch<T>(url: string) {
  const data = ref<T | null>(null);
  const loading = ref(true);
  const error = ref<Error | null>(null);

  fetch(url)
    .then(res => res.json())
    .then(json => { data.value = json; })
    .catch(err => { error.value = err; })
    .finally(() => { loading.value = false; });

  return { data, loading, error };
}
```

## 总结

Composition API 的核心价值在于**逻辑关注点的集中**。把同一个功能的代码放在一起，而不是分散在 Options API 的各个选项中。
