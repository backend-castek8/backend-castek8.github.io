function getchannels() {
    let channeldb = [
        ["POOF", "POOF"],
        ["#", "nochan.png"],
        ["https://service-stitcher.clusters.pluto.tv/v2/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-castek8.github.io/tvhora/ch2.png"],
        ["http://fl4.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-castek8.github.io/tvhora/ch3.png"],
        ["http://v1.weatherscan.net/", "https://backend-castek8.github.io/tvhora/ch4.png"],
        ["https://fl3.moveonjoy.com/E_ENTERTAINMENT_TELEVISION/index.m3u8", "https://backend-castek8.github.io/tvhora/ch5.png"],
        ["https://retroblast.tv/hls/stream.m3u8", "https://backend-castek8.github.io/tvhora/ch6.png"],
        ["https://asp7.toonamiaftermath.com/livehttporigin/est/Ibd7c5-gf2dVw-playlist.m3u8", "https://backend-castek8.github.io/tvhora/ch7.png"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-castek8.github.io/tvhora/ch8.png"],
        ["https://fl3.moveonjoy.com/FOX_Sports_1/index.m3u8", "https://backend-castek8.github.io/tvhora/ch9.png"],
        ["https://www.rtvs.sk/embed/live/1", "https://backend-castek8.github.io/tvhora/ch10.png"],
        ["https://www.rtvs.sk/embed/live/2", "https://backend-castek8.github.io/tvhora/ch11.png"],
        ["https://www.rtvs.sk/embed/live/3", "https://backend-castek8.github.io/tvhora/ch12.png"],
        ["https://www.rtvs.sk/embed/live/15", "https://backend-castek8.github.io/tvhora/ch13.png"],
        ["https://live.joj.sk/", "https://backend-castek8.github.io/tvhora/ch14.png"],
        ["https://media.cms.markiza.sk/embed/markiza-live?autoplay=any", "https://backend-castek8.github.io/tvhora/ch15.png"],
        ["https://media.cms.markiza.sk/embed/doma-live?autoplay=any", "https://backend-castek8.github.io/tvhora/ch16.png"],
        ["https://media.cms.markiza.sk/embed/dajto-live?autoplay=any", "https://backend-castek8.github.io/tvhora/ch17.png"],
    ];
    return channeldb;
}

function checkupdate() {
    needupdate = 0;
    return needupdate;
}

function geturl() {
    url = "";
    return url
}