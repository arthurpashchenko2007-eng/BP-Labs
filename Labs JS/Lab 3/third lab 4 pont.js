const iface = {
    prop1 : "value1" ,
    m1 : function a () {} ,
    m2 : function b () {} ,
    m3 : function (a,b) {},
    prop2 : 123 ,
    m4 : (a, b, c) => {} ,
    m5 : (a, b , c, d) => {}
};
const methods = [];
for (const key in iface) {
    if (Object.hasOwnProperty.call(iface, key)) {
        const value1 = iface[key];
        if (typeof value1 === 'function') {
            const argCount = value1.length;
            methods.push({name: key, args: argCount});
        }
    }
}
console.log(methods);    