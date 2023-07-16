'use strict';
/*var option1 = {
	'author':
}

var SimilarAdsNearby = ['', 2, 3, 4, 5, 6, 7, 8];*/




var AuthorPostfix = ['01', '02', '03', '04', '05', '06', '07', '08'];

var RandomPostfix = AuthorPostfix[(Math.floor(Math.random() * AuthorPostfix.length))];

var RamdomAvatar = 'img/avatars/user' + RandomPostfix + '.png';

var author = {
	'avatar': 'RamdomAvatar'
};

console.log(RamdomAvatar);