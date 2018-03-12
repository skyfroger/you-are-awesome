// DO WHATEVER YOU WANT HERE

// ready
const createEnumerableProperty = (prop) => {return prop};

// ready
const createNotEnumerableProperty = (prop) => {
    return Symbol.for(prop);
};

// ready
const createProtoMagicObject = () => {
    let func = function(){};
    func.prototype = Function.prototype;
    return func;
};

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

// ready
const getDeepPropertiesCount = (obj) => {
    let jsonStr = JSON.stringify(obj);
    return (jsonStr.match(/\d+/g) || []).length;
};

// ready
const createSerializedObject = () => {return null};
const toBuffer = () => {};

// ready
const sortByProto = (objArray) => {
    return objArray.sort((a, b) => {return a.__proto__ - b.__proto__});
};

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