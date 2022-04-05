/**
 * @since 0.1.0
 */
import * as I from 'fp-ts/IO'
import * as uuid from 'uuid'

import IO = I.IO

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category model
 * @since 0.1.0
 */
export type Uuid<V extends UuidVersion = UuidVersion> = string & UuidBrand<V>

type UuidVersion = 1 | 2 | 3 | 4 | 5

interface UuidBrand<V extends UuidVersion> {
  readonly _V: V
  readonly Uuid: unique symbol
}

// -------------------------------------------------------------------------------------
// constructors
// -------------------------------------------------------------------------------------

/**
 * @category constructors
 * @since 0.1.0
 */
export function v4(): IO<Uuid<4>> {
  return () => uuid.v4() as Uuid<4>
}
