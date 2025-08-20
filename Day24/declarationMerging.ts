//original interface

interface car{
    brand: string;
    start():void;
}

//Declaration merging
interface car{
    model:string;
    stop():void;
}

const myCar:car={
    brand:"BMW",
    model:"M3",
    start(){
        console.log("start");
    },
    stop(){
        console.log("stop");
    },
}

myCar.start();
myCar.stop();