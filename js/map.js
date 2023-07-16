'use strict';

var AuthorPostfix = ['01', '02', '03', '04', '05', '06', '07', '08'];
var OfferTitle = ["Большая уютная квартира", "Маленькая неуютная квартира", "Огромный прекрасный дворец", "Маленький ужасный дворец", "Красивый гостевой домик", "Некрасивый негостеприимный домик", "Уютное бунгало далеко от моря", "Неуютное бунгало по колено в воде"];
var TypeRoom = [ 'palace', 'flat', 'house', 'bungalo'];
var Check = ['12:00', '13:00', '14:00'];
var Features = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"];


var SimilarAdsNearby = [];


for (var i = 0; i < 8; i++) {

	var Rand = Math.random();
	var RandomPostfix = AuthorPostfix[(Math.floor(Rand * AuthorPostfix.length))];
	var RamdomAvatar = 'img/avatars/user' + RandomPostfix + '.png';
	var RandomOfferTitle = OfferTitle[(Math.floor(Rand * OfferTitle.length))];
	var LocationX = (Math.floor(Rand * 600)) + 1;
	var LocationY = (Math.floor(Rand * 350)) + 1;
	var RandomAddres = LocationX + ', ' + LocationY;
	var RandomPrice = (Math.floor(Rand * (1000000-1000))) + 1000;
	var RandomType = TypeRoom[(Math.floor(Rand * TypeRoom.length))];
	var NumRooms = Math.floor(Rand * 5) + 1;
	var RandomCheck = Check[(Math.floor(Rand * Check.length))];
	var RandomFeatures = Features[(Math.floor(Rand * Features.length))] + ' and ' + Features[(Math.floor(Rand * Features.length))];


	var RandomObject = {
		'avatar': RamdomAvatar,
		'title': RandomOfferTitle,
		'address': RandomAddres,
		'price': RandomPrice,
		'type': RandomType,
		'rooms': NumRooms,
		'guests': NumRooms*2,
		'checkin': RandomCheck,
		'checkout': RandomCheck,
		'features': RandomFeatures,
		'description': ' ',
		'photos': ['https://www.re-port.net/picture_l/report/0000060801_01.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'https://fashionsnap-assets.com/asset/format=auto,width=1200/article/images/2020/12/hilton_kyoto_20201215-001.jpg'],
		'x': 150,
		'y': 200

	};


	SimilarAdsNearby[i] = RandomObject;
};





console.log(SimilarAdsNearby);