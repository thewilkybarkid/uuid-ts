import { expectTypeOf } from 'expect-type'
import * as I from 'fp-ts/IO'
import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'
import * as _ from '../src'

import IO = I.IO
import Option = O.Option
import Uuid = _.Uuid

declare const string: string
declare const unknown: unknown
declare const uuid: Uuid

//
// Uuid
//

declare const uuid1: Uuid<1>
declare const uuid2: Uuid<2>
declare const uuid3: Uuid<3>
declare const uuid4: Uuid<4>
declare const uuid5: Uuid<5>
declare const uuid6: Uuid<6>
declare const uuid7: Uuid<7>
declare const uuid8: Uuid<8>
// @ts-expect-error
declare const uuid9: Uuid<9>

expectTypeOf(uuid).toMatchTypeOf(string)
expectTypeOf(string).not.toMatchTypeOf(uuid)
expectTypeOf(uuid1).toMatchTypeOf(uuid)
expectTypeOf(uuid).not.toMatchTypeOf(uuid1)
expectTypeOf(uuid1).not.toMatchTypeOf(uuid2)

//
// Uuid
//

expectTypeOf(_.Uuid(string)).toMatchTypeOf<Uuid>()
expectTypeOf(_.Uuid(uuid)).toMatchTypeOf<Uuid>()

//
// v4
//

expectTypeOf(_.v4()).toEqualTypeOf<IO<Uuid<4>>>()

//
// isUuid
//

expectTypeOf(pipe(unknown, O.fromPredicate(_.isUuid))).toEqualTypeOf<Option<Uuid>>()
