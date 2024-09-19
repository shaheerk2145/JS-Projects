const clock = document.getElementById('clock');
// const UKclock = document.getElementById('UKclock');
// const UAEclock = document.getElementById('UAEclock');
// const USAclock = document.getElementById('USAclock');

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML= date.toLocaleTimeString();
}, 1000);


// setInterval(function () {
//     let date = new Date();
//     let usaDate= date.getTime();
//     let usaOffset = date.getTimezoneOffset()* 6000;
//     // console.log(usaOffset)
//     let utc= usaDate+usaOffset;
//     // console.log(utc);
//     let offset = -5;
//     // console.log(offset);
//     let usaTime= utc + (3600000 * offset);
//     let USAclock = new Date(usaTime).toLocaleTimeString();
//     // console.log(USAclock);
//     document.getElementById("USAclock").innerHTML = USAclock;
// }, 1000);

setInterval(function (){
    let date = new Date().toLocaleTimeString('en-AU',{timeZone: 'Australia/Sydney'});
    document.getElementById('AUSclock').textContent=date;

    const usaTime = new Date().toLocaleTimeString('en-US',{timeZone: 'America/New_York'});
    document.getElementById('USAclock').textContent=usaTime;

    const uaeTime = new Date().toLocaleTimeString('en-US',{timeZone: 'Asia/Dubai'});
    document.getElementById('UAEclock').textContent=uaeTime;

    const  ukTime = new Date().toLocaleTimeString('en-GB',{timeZone: 'Europe/London'});
    document.getElementById('UKclock').textContent=ukTime;
},1000)
