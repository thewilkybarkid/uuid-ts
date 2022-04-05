---
title: index.ts
nav_order: 1
parent: Modules
---

## index overview

Added in v0.1.0

---

<h2 class="text-delta">Table of contents</h2>

- [constructors](#constructors)
  - [v4](#v4)
- [model](#model)
  - [Uuid (type alias)](#uuid-type-alias)

---

# constructors

## v4

**Signature**

```ts
export declare function v4(): IO<Uuid<4>>
```

Added in v0.1.0

# model

## Uuid (type alias)

**Signature**

```ts
export type Uuid<V extends UuidVersion = UuidVersion> = string & UuidBrand<V>
```

Added in v0.1.0
