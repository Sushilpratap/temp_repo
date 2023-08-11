const os=require('os');

const user=os.userInfo() ;
console.log(user);

const uptime=os.uptime();
console.log(`the uptime of the system is ${uptime} seconds`);
const currOs={
    type:os.type(),
    release:os.release(),
    memory:os.freemem(),
};
console.log(currOs);


