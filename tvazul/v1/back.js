function getchannels() {
    let channeldb = [
        ["https://service-stitcher.clusters.pluto.tv/v2/stitch/embed/hls/channel/5f36d726234ce10007784f2a/master.m3u8?advertisingId=channel&appName=rokuchannel&appVersion=1.0&bmodel=bm1&channel_id=channel&content=channel&content_rating=ROKU_ADS_CONTENT_RATING&content_type=livefeed&coppa=false&deviceDNT=1&deviceId=channel&deviceMake=rokuChannel&deviceModel=web&deviceType=rokuChannel&deviceVersion=1.0&embedPartner=rokuChannel&genre=ROKU_ADS_CONTENT_GENRE&is_lat=1&platform=web&rdid=channel&studio_id=viacom&tags=ROKU_CONTENT_TAGS", "https://backend-castek8.github.io/tvazul/v1/banners/bobross.svg"],
        ["http://fl4.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/newsnation.svg"],
        ["http://v2.weatherscan.net/", "https://backend-castek8.github.io/tvazul/v1/banners/weather.svg"],
        ["https://fl3.moveonjoy.com/E_ENTERTAINMENT_TELEVISION/index.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/e.svg"],
        ["https://fl3.moveonjoy.com/FOX_Sports_1/index.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/foxsports.png"],
        ["https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/tnt.svg"],
        ["https://retroblast.tv/hls/stream.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/cn.png"],
        ["http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/toonami.png"],
        ["https://streaming-live.rtp.pt/liverepeater/smil:rtpi.smil/playlist.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/rtp1.svg"],
        ["https://d1zx6l1dn8vaj5.cloudfront.net/out/v1/b89cc37caa6d418eb423cf092a2ef970/index.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/sic.png"],
        ["https://d277k9d1h9dro4.cloudfront.net/out/v1/293e7c3464824cbd8818ab8e49dc5fe9/index.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/sicnoticias.svg"],
        ["https://raw.githubusercontent.com/ipstreet312/freeiptv/master/ressources/tvipt/sh/tvi.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/tvi.png"],
        ["https://video-auth2.iol.pt/live_tvi_ficcao/live_tvi_ficcao/edge_servers/tvificcao-720p/playlist.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/tvificao.png"],
        ["https://video-auth4.iol.pt/live_tvi_reality/live_tvi_reality/edge_servers/tvireality-720_passthrough/playlist.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/tvireality.png"],
        ["https://video-auth2.iol.pt/live_vmais/live_vmais/edge_servers/vmais-720p/playlist.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/vplus.png"],
        ["https://cnnportugal.iol.pt/direto", "https://backend-castek8.github.io/tvazul/v1/banners/cnnpt.png"],
        ["https://www.rtvs.sk/embed/live/1", "https://backend-castek8.github.io/tvazul/v1/banners/rtvs1.svg"],
        ["https://www.rtvs.sk/embed/live/2", "https://backend-castek8.github.io/tvazul/v1/banners/rtvs2.svg"],
        ["https://www.rtvs.sk/embed/live/3", "https://backend-castek8.github.io/tvazul/v1/banners/rtvs24.svg"],
        ["https://www.rtvs.sk/embed/live/15", "https://backend-castek8.github.io/tvazul/v1/banners/rtvsport.svg"],
        ["https://live.joj.sk/", "https://backend-castek8.github.io/tvazul/v1/banners/joj.svg"],
        ["https://media.cms.markiza.sk/embed/markiza-live?autoplay=any", "https://backend-castek8.github.io/tvazul/v1/banners/marzika.svg"],
        ["https://media.cms.markiza.sk/embed/doma-live?autoplay=any", "https://backend-castek8.github.io/tvazul/v1/banners/doma.svg"],
        ["https://media.cms.markiza.sk/embed/dajto-live?autoplay=any", "https://backend-castek8.github.io/tvazul/v1/banners/dajto.svg"],
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