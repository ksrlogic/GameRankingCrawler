const domain = "https://www.gamemeca.com/ranking.php" // GameMeka 도메인
const Crawler = require('crawler');

const c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: (error, res, done) => {
        if (error) {
            console.log(error);
        } else {
            const $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log($('title').text());
        }
        done();
    }
});

// Queue just one URL, with default callback
c.queue(domain);

console.log("Y")
console.log("Y")
console.log("Y")
console.log("Y")
console.log("This is Practice")
