import * as fc from 'fast-check'
import { validate, version } from 'uuid'
import * as _ from '../src'

describe('uuid-ts', () => {
  describe('constructors', () => {
    describe('Uuid', () => {
      test('with an UUID', () => {
        fc.assert(
          fc.property(fc.uuid(), uuid => {
            expect(_.Uuid(uuid)).toStrictEqual(uuid)
          }),
        )
      })

      test('with a non-UUID', () => {
        fc.assert(
          fc.property(fc.anything(), value => {
            expect(() => _.Uuid(value as string)).toThrow(new Error('Not a UUID'))
          }),
        )
      })
    })

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

  describe('refinements', () => {
    describe('isUuid', () => {
      test('with a UUID', () => {
        fc.assert(
          fc.property(fc.uuid(), uuid => {
            expect(_.isUuid(uuid)).toBe(true)
          }),
        )
      })

      test('with a non-UUID', () => {
        fc.assert(
          fc.property(fc.anything(), value => {
            expect(_.isUuid(value)).toBe(false)
          }),
        )
      })
    })
  })
})
