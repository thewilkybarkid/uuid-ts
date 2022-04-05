import { validate, version } from 'uuid'
import * as _ from '../src'

describe('uuid-ts', () => {
  describe('constructors', () => {
    describe('v4', () => {
      test('generates a v4 UUID', () => {
        const uuid = _.v4()()

        expect(validate(uuid)).toBe(true)
        expect(version(uuid)).toBe(4)
      })

      test('subsequent UUIDs are different', () => {
        const uuid1 = _.v4()()
        const uuid2 = _.v4()()

        expect(uuid1).not.toBe(uuid2)
      })
    })
  })
})
