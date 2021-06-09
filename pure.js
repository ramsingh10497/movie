
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
}, 2000)

let movies = [
    {
        name: 'wanted',
        releaseDate: '18th September 2019',
        url: 'https://i.pinimg.com/originals/1d/55/ce/1d55cee09d01b1a2740cf3ccf1c77755.jpg',
        imdbRating: '6.6'
    },

    {
        name: 'Holiday',
        releaseDate: '6th June 2014',
        url: 'https://i.ytimg.com/vi/7eXyzOlWZHQ/maxresdefault.jpg',
        imdbRating: '6.9'
    },
    {
        name: '3 Idiots',
        releaseDate: '25th december 2009',
        url: 'https://images.cinemaexpress.com/uploads/user/imagelibrary/2020/5/1/original/3_Idiots.PNG',
        imdbRating: '8.2'
    },
    {
        name: 'Toilet',
        releaseDate: '25th october 2016',
        url: 'https://i.ytimg.com/vi/ym4EJQ7XORk/maxresdefault.jpg',
        imdbRating: '7.9'
    },
    {
        name: 'Munna bhai MBBS',
        releaseDate: '12th June 2006',
        url: 'https://magazine.xpert.tv/wp-content/uploads/2020/07/mbbs.jpg',
        imdbRating: '7.8'
    },

    {
        name: 'Radhe',
        releaseDate: '6th May 2021',
        url: 'https://imgk.timesnownews.com/media/radhe.jpg',
        imdbRating: '5.3'
    },
    {
        name: 'Piku',
        releaseDate: '25th december 2015',
        url: 'https://i.ytimg.com/vi/oeiKUlUUNQ8/maxresdefault.jpg',
        imdbRating: '8.1'
    },
    {
        name: 'Pink',
        releaseDate: '12th june 2018',
        url: 'https://i.ytimg.com/vi/ei5rDWrAXFQ/maxresdefault.jpg',
        imdbRating: '7.9'
    },
    {
        name: 'Cocktail',
        releaseDate: '6th June 2006',
        url: 'https://m.media-amazon.com/images/M/MV5BMTU3ZmE4ZjQtMTdjMy00OTg1LWFmNmQtY2E5MzVkNTE5ZDQwXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_.jpg',
        imdbRating: '6.2'
    },
]
localStorage.setItem('movies', JSON.stringify(movies));

let mainDiv = document.createElement('div');
mainDiv.setAttribute('class', 'div1');
main.appendChild(mainDiv);
let arr1 = JSON.parse(localStorage.getItem('movies'));
for (let ele in arr1) {
    let tempDiv = document.createElement('div');
    tempDiv.setAttribute('class', 'div2');
    mainDiv.appendChild(tempDiv);

    let para = document.createElement('p');
    para.innerHTML = `Name: ${arr1[ele].name}<br> Release Date: ${arr1[ele].releaseDate} <br> ImdbRating: ${arr1[ele].imdbRating}`
    tempDiv.appendChild(para);
    let image = document.createElement('img');
    image.src = arr1[ele].url;
    image.setAttribute('id','im1')
    tempDiv.appendChild(image);
}
