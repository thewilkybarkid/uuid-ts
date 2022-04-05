/**
 * @since 0.1.0
 */

// -------------------------------------------------------------------------------------
// model
// -------------------------------------------------------------------------------------

/**
 * @category model
 * @since 0.1.0
 */
export type Uuid<V extends UuidVersion = UuidVersion> = string & UuidBrand

type UuidVersion = 1 | 2 | 3 | 4 | 5

interface UuidBrand {
  readonly Uuid: unique symbol
}
