const apicache = require('apicache');
const cache = apicache.middleware;

const cacheArticles = cache('1 day'); 
const cacheVideos = cache('1 day'); 

module.exports = { 
    cacheArticles, 
    cacheVideos,
};
