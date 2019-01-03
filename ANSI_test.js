const str = "\033[36m"+new Date()+"\033[0m::";

setInterval(() => {
    console.log(str);
}, 1000);
