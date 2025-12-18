const momemt = require("moment");

const time = momemt().format()
// const time = momemt().format("YYYY-MM-DD")
console.log(time);

setInterval(()=> {
//    const time = momemt().format()
//    console.log(`Time: `, time )
}, 5000);