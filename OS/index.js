const os = require('os');

console.log('CPU architecture', os.arch());

console.log('Free memory', os.freemem());

console.log('Total memory', os.totalmem());

console.log('Network Interface', JSON.stringify(os.networkInterfaces()))

console.log('OS default tempt dir', os.tmpdir())

console.log('Endianess:', os.endianness())

console.log('Hotsname', os.hostname());

console.log('OS type', os.type())

console.log('platform', os.platform())

console.log('release: ', os.release())