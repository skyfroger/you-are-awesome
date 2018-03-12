// DO WHATEVER YOU WANT HERE

// ready
const createEnumerableProperty = (prop) => {return prop};

const createNotEnumerableProperty = (prop) => {
    let obj = Object.defineProperty({}, prop, {enumerable: false});
    return obj;
};

const createProtoMagicObject = () => {};
const incrementor = () => {
    var count = 0;
    function e(){
        return ++count;
    }
    return e();
};
const asyncIncrementor = () => {};

// ready
const createIncrementer = () => {
    var gen = function* (){
        var value = 0;
        while(true)
            yield ++value;
    }
    return gen();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (x) => {};
const getDeepPropertiesCount = (obj) => {};

// ready
const createSerializedObject = () => {return null};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;