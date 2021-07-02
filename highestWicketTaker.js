//this will fetch the highest wicket taker of the given match.
const request = require('request');
const cheerio = require('cheerio');
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard";
console.log("Before");
request(url,cb);
function cb(err, response, html) {
    if(err) {
        console.log(err);
    } else {
        // console.log(html);
        extractHtml(html);
    }
}

function extractHtml(html) {
    let $ = cheerio.load(html);
    let teamsArr = $(".match-info.match-info-MATCH .team");
    let teamName;
    for(let i=0; i<teamsArr.length; i++) {
        let hasClass = $(teamsArr[i]).hasClass("team-gray");
        if(hasClass == false) {
            //find
            let teamNameElem = $(teamsArr[i]).find(".name");
            console.log("👑==>" +teamNameElem.text());
        }
    }
} 
console.log("After");
