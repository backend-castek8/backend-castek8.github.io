﻿function getchannels() {
    let channeldb = [
        ["https://service-stitcher.clusters.pluto.tv/v2/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-castek8.github.io/tvazul/v1/banners/bobross.svg"],
        ["http://fl4.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/newsnation.svg"],
        ["http://v2.weatherscan.net/", "https://backend-castek8.github.io/tvazul/v1/banners/weather.svg"],
        ["https://fl3.moveonjoy.com/Start_Tv/index.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/start.png"],
        ["https://fl3.moveonjoy.com/FOX_Sports_1/index.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/foxsports.png"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/tnt.svg"],
        ["https://retroblast.tv/hls/stream.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/cn.png"],
        ["https://www.youtube.com/embed/UbDZREFXewA", "https://backend-castek8.github.io/tvazul/v1/banners/zen.svg"],
        ["https://streaming-live.rtp.pt/liverepeater/smil:rtpi.smil/playlist.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/rtp1.svg"],
        ["https://cnnportugal.iol.pt/direto", "https://backend-castek8.github.io/tvazul/v1/banners/cnnpt.png"],
        ["https://d1zx6l1dn8vaj5.cloudfront.net/out/v1/b89cc37caa6d418eb423cf092a2ef970/index.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/sic.png"],
        ["https://pluto.tv/br/live-tv/633dcebd80386500074a2461", "https://backend-castek8.github.io/tvazul/v1/banners/filmelier.png"],
        ["https://pluto.tv/br/live-tv/6824ce10c5d53e1351ceb8d1", "https://backend-castek8.github.io/tvazul/v1/banners/nick.png"],
        ["https://pluto.tv/br/live-tv/5f12136385bccc00070142ed", "https://backend-castek8.github.io/tvazul/v1/banners/anime.png"],
        ["NULL", "NULL"],
        ["NULL", "NULL"],
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