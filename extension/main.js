var elements = document.querySelectorAll('img');

var rocks = [
    "https://c.tenor.com/MThz30WrMWQAAAAd/the-rock-chinese-the-rock.gif",
    "https://c.tenor.com/ACQn5n-60vcAAAAC/xd-iksdi.gif",
    "https://c.tenor.com/kHcmsxlKHEAAAAAC/rock-one-eyebrow-raised-rock-staring.gif",
    "https://c.tenor.com/qCECg-F0y90AAAAC/the-rock-dwayne-johnson.gif",
    "https://c.tenor.com/RP_qoKH85xgAAAAd/the-rock-sus-the-rock-meme.gif",
    "https://c.tenor.com/CoH0pdIdiEEAAAAC/therock.gif",
    "https://c.tenor.com/GkY0BS3F0R4AAAAd/the-rock-just-bring-it.gif",
];

var chance = 1;

for (i=0 ; elements.length - 1; i++) {
    var number = Math.floor(Math.random() * 201);

    if (number <= chance) {
        elements[i].src = rocks[Math.floor(Math.random() * 6)];
    }
};