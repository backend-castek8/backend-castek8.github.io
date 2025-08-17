function getchannels() {
    let channeldb = [
        ["index.html", "NULL"],
        ["index2.html#https://pluto.tv/us/live-tv/5f36d726234ce10007784f2a", "https://backend-castek8.github.io/tvazul/v1/banners/bobross.svg"],
        ["index3.html#http://fl4.moveonjoy.com/NEWS_NATION/index.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/newsnation.svg"],
        ["index2.html#http://v2.weatherscan.net/", "https://backend-castek8.github.io/tvazul/v1/banners/weather.svg"],
        ["index3.html#https://fl3.moveonjoy.com/E_ENTERTAINMENT_TELEVISION/index.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/e.svg"],
        ["index3.html#https://fl3.moveonjoy.com/FOX_Sports_1/index.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/foxsports.png"],
        ["index3.html#https://turnerlive.warnermediacdn.com/hls/live/2023168/tnteast/slate/VIDEO_0_3564000.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/tnt.svg"],
        ["index3.html#https://retroblast.tv/hls/stream.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/cn.png"],
        ["index2.html#http://api.toonamiaftermath.com:3000/est/playlist.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/toonami.png"],
        ["index3.html#https://streaming-live.rtp.pt/liverepeater/smil:rtpi.smil/playlist.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/rtp1.svg"],
        ["index3.html#https://d1zx6l1dn8vaj5.cloudfront.net/out/v1/b89cc37caa6d418eb423cf092a2ef970/index.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/sic.png"],
        ["index3.html#https://d277k9d1h9dro4.cloudfront.net/out/v1/293e7c3464824cbd8818ab8e49dc5fe9/index.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/sicnoticias.svg"],
        ["index3.html#https://raw.githubusercontent.com/ipstreet312/freeiptv/master/ressources/tvipt/sh/tvi.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/tvi.png"],
        ["index3.html#https://video-auth2.iol.pt/live_tvi_ficcao/live_tvi_ficcao/edge_servers/tvificcao-720p/playlist.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/tvificao.png"],
        ["index3.html#https://video-auth4.iol.pt/live_tvi_reality/live_tvi_reality/edge_servers/tvireality-720_passthrough/playlist.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/tvireality.png"],
        ["index3.html#https://video-auth2.iol.pt/live_vmais/live_vmais/edge_servers/vmais-720p/playlist.m3u8", "https://backend-castek8.github.io/tvazul/v1/banners/vplus.png"],
        ["index2.html#https://cnnportugal.iol.pt/direto", "https://backend-castek8.github.io/tvazul/v1/banners/cnnpt.png"],
        ["index.html", "NULL"],
    ];
    return channeldb;
}

function getchinfo() {
    let chinfodb = [
        ["Channel Name", "Channel Description"],
        ["Bob Ross", "Joy of Painting 24/7"],
        ["News Nation", "Non bias news 24/7"],
        ["Weather Scan", "24/7 Weather Service"],
        ["E!", "TV Shows and movies"],
        ["Fox Sports", "24/7 Sports coverage"],
        ["TNT", "Movies all the time."],
        ["Cartoon Network", "Cartoons for all ages"],
        ["Zen", "24/7 Zen music."],
        ["RTP 1", "Conteúdo geral"],
        ["SIC", "Tele novelas"],
        ["SIC Notocias", "Cobertura noticiosa 24-7"],
        ["TVi", "Telenovelas e reality shows"],
        ["TVi Ficao", "Telenovelas"],
        ["TVi Reality", "Reality shows"],
        ["V+", "Telenovelas e reality shows"],
        ["CNN Portugal", "Cobertura noticiosa 24-7"],
        ["Channel Name", "Channel Description"],
    ];
    return chinfodb;
}