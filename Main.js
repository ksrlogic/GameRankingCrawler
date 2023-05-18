
const Crawler = require('crawler');
const htmlparser = require('node-html-parser')



const domain = "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=101" // 네이버뉴스 도메인

const c = new Crawler({
    maxConnections: 10,
    // This will be called for each crawled page
    callback: (error, res, done) => {
        if (error) {
            console.log(error);
        } else {
            const body = res.body;
            const html = body.toString()
            const parsed_html = html.search()

            console.log();
        }
        done();
    }
});

c.queue(domain)



//class="sh_text"