(function(){
	var app = angular.module('store', []);

	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		canPurchase:false,
		soldOut: false

	}

	var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		canPurchase:false,
		soldOut: false,
		img: "public/img/dode.jpeg"

	},
	{
		name: 'Zirconium',
		price: 3.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		canPurchase:false,
		soldOut: false,
		img: "public/img/zircon.jpg"
	},
	{
		name: 'Hexagonal gem',
		price: 4.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		canPurchase:false,
		soldOut: false,
		img: "public/img/hexagonal.gif"
	},
	{
		name: 'Emerald',
		price: 5.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		canPurchase:false,
		soldOut: false,
		img: "public/img/emerald.jpg"
	},
	{
		name: 'Diamond',
		price: 6.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		canPurchase:false,
		soldOut: false,
		img: "public/img/diamond.png"
	},
	{
		name: 'Sapphire',
		price: 7.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		canPurchase:false,
		soldOut: false,
		img: "public/img/sapphire.jpg"
	},
	{
		name: 'Ruby',
		price: 8.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		canPurchase:false,
		soldOut: false,
		img: "public/img/ruby.jpg"
	},
	{
		name: 'Aquamarine',
		price: 9.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		canPurchase:false,
		soldOut: false,
		img: "public/img/aquamarine.jpg"
	},
	{
		name: 'Citrine',
		price: 10.95,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
		canPurchase:false,
		soldOut: false,
		img: "public/img/citrine.jpg"
	},

	];

	app.controller('StoreController', function(){
		this.products = gems;
	});
})();