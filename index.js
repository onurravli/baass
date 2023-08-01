#!/usr/bin/env node

const quotes = [
	'Kolay olmayacak ama gerçekleştiğine değecek.',
	'Taşı delen suyun gücü değil, damlaların sürekliliğidir.',
	'Fitness, birinden daha iyi olman değil; öncekinden daha iyi olmandır.',
	'Fikirlerini hoş görüyle karşılarım. Ancak sakın küçük fikirler olmasınlar. Bana, geleceğimize katkı yapacak büyük fikirlerle gel.',
	'Bugün sana imkansız gelen hareketler bir gün ısınma hareketlerin olacak.',
	'Bir şeyi yapamayacağınızı düşünüyorsanız, haklısınız. Bir şeyi yapabileceğinizi düşünüyorsanız, haklısınız. Bu düşüncelerinizin hepsi doğru.',
	'Sen kendini ne kadar zorlarsan, hayat da sana o kadar kolay gelir.',
	'Bas bas bağırma, çalış. Çalış ki, bağıracak halin olmasın.',
	'Kaldırması en zor olan ağırlık kıçındır.',
	'Fit olmak bir hedef değil, yaşam biçimidir.',
	'Mazeret üretmek saatte sıfır kalori yakar.',
	'Daha iyi bir beden isteme, onun için çalış.',
];
const random = Math.floor(Math.random() * quotes.length);
console.log(quotes[random]);
