function getchannels() {
    let channeldb = [
        ["index.html", "NULL"],
        ["index.html", "NULL"],
        ["index2.html#https://service-stitcher.clusters.pluto.tv/v2/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-castek8.github.io/meiji/ch2.svg"],
        ["index3.html#http://fl4.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-castek8.github.io/meiji/ch3.svg"],
        ["index2.html#http://v2.weatherscan.net/", "https://backend-castek8.github.io/meiji/ch4.svg"],
        ["index2.html#https://fl3.moveonjoy.com/E_ENTERTAINMENT_TELEVISION/index.m3u8", "https://backend-castek8.github.io/meiji/ch5.svg"],
        ["index2.html#https://retroblast.tv/hls/stream.m3u8", "https://backend-castek8.github.io/meiji/ch6.png"],
        ["index2.html#http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-castek8.github.io/meiji/ch7.png"],
        ["index2.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-castek8.github.io/meiji/ch8.svg"],
        ["index2.html#https://fl3.moveonjoy.com/FOX_Sports_1/index.m3u8", "https://backend-castek8.github.io/meiji/ch9.png"],
        ["index.html", "NULL"],
    ];
    return channeldb;
}

function getchinfo() {
    let chinfodb = [
        ["Channel Name", "Channel Description"],
        ["Channel Name", "Channel Description"],
        ["Bob Ross", "24/7 Joy of Painting"],
        ["News Nation", "Non bias news 24/7"],
        ["Weather Scan", "24/7 Weather Service"],
        ["E!", "The most popular movies and TV shows"],
        ["Cartoon Network", "24/7 cartoons"],
        ["Toonami", "24/7 Cartoons and Anime"],
        ["TNT", "Movies all the time."],
        ["Fox Sports", "24/7 Sports coverage"],
        ["RTVS 1", "Všeobecný obsah"],
        ["RTVS 2", "Všeobecný a vzdelávací obsah"],
        ["RTVS 24", "Správy 24 hodín denne, 7 dní v týždni"],
        ["RTVS SPORT", "Šport 24 hodín denne, 7 dní v týždni"],
        ["JOJ", "Televízne programy a filmy"],
        ["Marzika", "Rodinný obsah"],
        ["Doma", "Televízne relácie pre ženy"],
        ["Dajto", "Televízne relácie pre mužov"],
        ["Channel Name", "Channel Description"],
    ];
    return chinfodb;
}