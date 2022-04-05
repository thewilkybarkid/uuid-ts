import * as _ from '../../src'

declare const uuid: _.Uuid

//
// Uuid
//

declare const uuid1: _.Uuid<1>
declare const uuid2: _.Uuid<2>
declare const uuid3: _.Uuid<3>
declare const uuid4: _.Uuid<4>
declare const uuid5: _.Uuid<5>
// $ExpectError
declare const uuid6: _.Uuid<6>

const uuidToString: string = uuid
// $ExpectError
const stringToUuid: _.Uuid = 'foo'
