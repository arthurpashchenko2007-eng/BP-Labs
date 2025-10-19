function ipToInt (ip = '127.0.0.1') {
    const result = ip.split('.')
     .reduce((accumulator, octet, index) => {
    const num0ctet = +octet;
       const shift = (3 - index) * 8;
       return accumulator + (num0ctet << shift);
    }, 0);
    return result>>>0;
}
console.log(`'10.0.0.1' => ${ipToInt('10.0.0.1')}`);
console.log(`'defouItIpTont' => ${ipToInt()}`);
console.log(`'192.168.1.1' => ${ipToInt('192.168.1.1')}`);
console.log(`'255.255.255.255' => ${ipToInt('255.255.255.255')}`);

