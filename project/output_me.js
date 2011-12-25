var fs = require('fs'), fileContent = 'nothing';
fs.readFile(__filename, "utf-8", function(err, file) {  
    if(err) {  
        console.log(err);
        return;  
    }
    fileContent = file;
    //对于file的处理放到回调函数这里处理
    console.log('doSomethingWithFile: '+ fileContent +'\n');
});
console.log('我们先去喝杯茶\n');