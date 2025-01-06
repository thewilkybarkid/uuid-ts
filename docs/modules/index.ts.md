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
  - [Uuid](#uuid)
  - [v4](#v4)
- [model](#model)
  - [Uuid (type alias)](#uuid-type-alias)
- [refinements](#refinements)
  - [isUuid](#isuuid)

---

# constructors

## Uuid

**Signature**

```ts
export declare function Uuid(uuid: string): Uuid
```

**Example**

```ts
import { Uuid } from 'uuid-ts'

const uuid = Uuid('224d8877-d59f-409f-aed0-5157df78357f')

assert.deepStrictEqual(uuid, '224d8877-d59f-409f-aed0-5157df78357f')
```

Added in v0.1.1

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

# refinements

## isUuid

**Signature**

```ts
export declare const isUuid: Refinement<unknown, Uuid<UuidVersion>>
```

Added in v0.1.0
