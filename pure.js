
let main = document.getElementById('abc');

let img = document.createElement('img');
img.setAttribute('src','https://img4.hkrtcdn.com/14800/bnr_1479923_o.jpg')

main.appendChild(img);

let arr = ['https://img4.hkrtcdn.com/14800/bnr_1479923_o.jpg','https://img6.hkrtcdn.com/14799/bnr_1479875_o.jpg','https://img4.hkrtcdn.com/14675/bnr_1467433_o.jpg','https://img2.hkrtcdn.com/14797/bnr_1479641_o.jpg'];
let i = 0;
setInterval(function () {
    if (i == 4) {
        i = 0;
    }
    img.src = arr[i]
    i++;
},2000)