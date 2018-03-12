// DO WHATEVER YOU WANT HERE

// ready
const createEnumerableProperty = (prop) => {return prop};

const createNotEnumerableProperty = (prop) => {
    let obj = {};
    Object.defineProperty(obj, prop, {enumerable: false});
    return obj.prop;
};

const createProtoMagicObject = () => {};
const incrementor = () => {};
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
const returnBackInSecond = (x) => {
    return promise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(x);
        }, 1200);
    });
};
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