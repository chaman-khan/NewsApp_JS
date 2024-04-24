import React, { Component } from "react";
import NewsArticle from "./NewsArticle";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Hipertextual",
      },
      author: "Uriel Bederman",
      title:
        "¿Cómo se cuelan las aplicaciones maliciosas en la Google Play Store?",
      description:
        "A la hora de descargar una aplicación móvil, los expertos recomiendan hacerlo desde las tiendas oficiales. En otras palabras, evitar las plataformas de terceros. Sin embargo, el malware en Google Play es moneda corriente. ¿Cómo logran los programas maliciosos…",
      url: "http://hipertextual.com/2024/04/malware-google-play-android-aplicaciones",
      urlToImage:
        "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/11/malware-en-google-play.jpg?fit=2560%2C1528&quality=55&strip=all&ssl=1",
      publishedAt: "2024-04-21T08:00:00Z",
      content:
        "A la hora de descargar una aplicación móvil, los expertos recomiendan hacerlo desde las tiendas oficiales. En otras palabras, evitar las plataformas de terceros. Sin embargo, el malware en Google Pla… [+12082 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Javier Lacort",
      title:
        "He vuelto a jugar juegos retro aprovechando la llegada de emuladores a iOS. Ha sido una lección sobre el paso del tiempo",
      description:
        "La aprobación de los emuladores de juegos retro en iOS es una de las noticias del año en Casa Apple. Aunque el inicio fue bastante accidentado, y el primer emulador en llegar duró menos en la App Store que un código de Game Pass en el canal de Slack de Xataka…",
      url: "https://www.xataka.com/videojuegos/he-vuelto-a-jugar-juegos-retro-aprovechando-llegada-emuladores-a-ios-ha-sido-leccion-paso-tiempo",
      urlToImage: "https://i.blogs.es/4a8733/dest-rojo/840_560.jpeg",
      publishedAt: "2024-04-21T09:01:30Z",
      content:
        "La aprobación de los emuladores de juegos retro en iOS es una de las noticias del año en Casa Apple. Aunque el inicio fue bastante accidentado, y el primer emulador en llegar duró menos en la App Sto… [+2795 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Simon Cohen",
      title: "Hey LeBron, is that a new Beats Pill speaker by any chance?",
      description:
        "The L.A. Lakers just posted a video of LeBron James and the basketball superstar appears to be holding an unreleased Beats Pill speaker.",
      url: "https://www.digitaltrends.com/home-theater/new-beats-pill-specs-pricing-availability/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2024/04/lebron-new-beats-pill.jpg?resize=1200%2C630&p=1",
      publishedAt: "2024-04-21T02:28:35Z",
      content:
        "L.A. Lakers / Instagram\r\nIf you’ve been hoping that Beats would one day see fit to bring back its Pill portable Bluetooth speaker, then take a moment and cast your eyes on the silver object dangling … [+2122 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Andrew Morrisey",
      title: "Get $750 off the Dell XPS 17 laptop this weekend",
      description:
        "This weekend you can save big on a new laptop with this impressive deal on the Dell XPS 17.",
      url: "https://www.digitaltrends.com/computing/dell-xps-17-laptop-deal-dell-april-2024-2/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2020/05/dell-xps-17-feature-02.jpg?resize=1200%2C630&p=1",
      publishedAt: "2024-04-21T07:30:11Z",
      content:
        "Dell\r\nIf you’ve got your eye out for a new laptop, we’d like to direct you toward Dell. At Dell you’ll find one of the best laptop deals of the weekend, and it’s even something to consider if you’re … [+1757 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Jennifer Allen",
      title: "The 6 best laptops for Excel in 2024",
      description:
        "We take a look at the best laptops for Excel as well as focus on what you need to consider when buying one.",
      url: "https://www.digitaltrends.com/computing/best-laptops-for-excel/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2024/01/dellxps13-ces-01.jpg?resize=1200%2C630&p=1",
      publishedAt: "2024-04-21T10:30:06Z",
      content:
        "Mark Coppock / Digital Trends\r\nBuying one of the best laptops for using Excel isn’t as simple as just heading to the best laptops list and buying one of those. Well, it kind of is but using Excel req… [+16199 chars]",
    },
    {
      source: {
        id: "hacker-news",
        name: "Hacker News",
      },
      author: null,
      title:
        "Ask HN: Is iCloud a viable alternative to Dropbox? Any other alternatives?",
      description: "Comments",
      url: "https://news.ycombinator.com/item?id=40104547",
      urlToImage: null,
      publishedAt: "2024-04-21T10:29:29Z",
      content:
        "Short question: Currently Im a Dropbox user on Mac, is iCloud a viable alternative? If not, who do you have a good experience with?Ive been a happy Dropbox user for 10+ years, its rock-solid syncing … [+905 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: null,
      title: "この充電器ハブでXREAL Airでのごろ寝ゲームはついに完成する",
      description:
        "Image:XREALまたひとつ弱点がなくなってしまった。ARメガネ「XREALAir」シリーズの新しい周辺機器として、「XREALHUB」が登場しました。AppleのVisionProも良いけれど、大画面をコンパクトにってコンセプトならここが最前線だと思いますよ。充電も大画面も両立外付けディスプレイ感覚で気軽に大画面を味わえるのがXREALAirシリーズの魅力でしたが、スマホやゲーム機といったホ",
      url: "https://www.gizmodo.jp/2024/04/xreal-air-hub.html",
      urlToImage:
        "https://media.loom-app.com/gizmodo/dist/images/2024/04/19/240419xrealhub2.jpg?w=1280&h=630&f=jpg",
      publishedAt: "2024-04-21T03:00:00Z",
      content:
        "ARXREAL AirXREAL HUBAppleVision Pro\r\nXREAL AirXREAL HUB\r\nNintendo SwitchXREAL AirSwitchXREAL AirXREAL HUB\r\nXREAL HUBType-C21Nintendo SwitchXREAL HUBXREAL AirSwitch\r\nUSB PD120HzAR72Hz90Hz\r\nXREAL Hub\r\n… [+148 chars]",
    },
    {
      source: {
        id: null,
        name: "Yanko Design",
      },
      author: "Sarang Sheth",
      title:
        "This Smart Light is what you get if a Disco Ball and Smart Bulb had a baby",
      description:
        "This Smart Light is what you get if a Disco Ball and Smart Bulb had a babyIf the 20th century had the lava lamp, the 21st century has the GLORB. It’s dynamic, portable, customizable, smart, heck, it’s even waterproof. A geodesic...",
      url: "https://www.yankodesign.com/2024/04/20/this-smart-light-is-what-you-get-if-a-disco-ball-and-smart-bulb-had-a-baby/",
      urlToImage:
        "https://www.yankodesign.com/images/design_news/2024/04/this-smart-light-is-what-you-get-if-a-disco-ball-and-smart-bulb-had-a-baby/GLORB_smart_lamp_and_living_sculpture_02.jpg",
      publishedAt: "2024-04-21T01:45:55Z",
      content:
        "If the 20th century had the lava lamp, the 21st century has the GLORB. It’s dynamic, portable, customizable, smart, heck, it’s even waterproof.\r\nA geodesic sphere, where each individual facet is a de… [+3124 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Isra Fdez",
      title:
        "Apple es la mayor importadora de desodorantes del mundo entero. Un ex-trabajador revela las razones",
      description:
        "Cada vez que Apple abre una nueva va Apple Store, como la que apertura en Madrid en algún momento de 2024, la compañía sigue la misma estrategia: generar un aroma, un olor. Junto a la cuidada decoración y la atención profesional, hay detalles que pasan desape…",
      url: "https://www.applesfera.com/curiosidades/apple-mayor-importadora-desodorantes-mundo-entero-ex-trabajador-revela-razones",
      urlToImage: "https://i.blogs.es/029a1d/desodorante-apple/840_560.jpeg",
      publishedAt: "2024-04-21T10:01:29Z",
      content:
        "Cada vez que Apple abre una nueva va Apple Store, como la que apertura en Madrid en algún momento de 2024, la compañía sigue la misma estrategia: generar un aroma, un olor. Junto a la cuidada decorac… [+4934 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Guille Lomener",
      title:
        "Llevo años esperando las copias de seguridad de iCloud y ojalá lleguen pronto a Mac. De momento me sirven estas dos alternativas",
      description:
        "Llevo utilizando el Mac más de catorce años y he visto cómo ha evolucionado sus sistemas operativos hasta lo que tenemos hoy en día. Por ejemplo, antes no existía ni la aplicación Notas ni la posibilidad de tener varios escritorios. Ahora, con macOS Sonoma, t…",
      url: "https://www.applesfera.com/os-x/llevo-anos-esperando-copias-seguridad-icloud-ojala-lleguen-pronto-a-mac-momento-me-sirven-estas-dos-alternativas",
      urlToImage: "https://i.blogs.es/91fd20/3/840_560.jpeg",
      publishedAt: "2024-04-21T08:01:29Z",
      content:
        "Llevo utilizando el Mac más de catorce años y he visto cómo ha evolucionado sus sistemas operativos hasta lo que tenemos hoy en día. Por ejemplo, antes no existía ni la aplicación Notas ni la posibil… [+5076 chars]",
    },
    {
      source: {
        id: null,
        name: "XDA Developers",
      },
      author: "Parth Shah",
      title: "First 10 things to do with a new Mac",
      description:
        "Bought a new Mac recently? Check off these things first and familiarize yourself with Apple’s desktop OS.",
      url: "https://www.xda-developers.com/first-10-things-to-do-with-a-new-mac/",
      urlToImage:
        "https://static1.xdaimages.com/wordpress/wp-content/uploads/wm/2024/03/startech-dual-hdmi-adapter-19-1.jpg",
      publishedAt: "2024-04-21T00:00:13Z",
      content:
        "Whether you are a student, professional, or general consumer, you simply can’t ignore a Mac when shopping for a new laptop. Powerful and efficient M-series CPUs, comprehensive redesigns on the MacBoo… [+6755 chars]",
    },
    {
      source: {
        id: null,
        name: "Golem.de",
      },
      author: "Michael Linden",
      title:
        "Deutschlandweite Fototour: Apple macht Fotos von deutschen Städten für Kartendienst",
      description:
        "Apple hat angekündigt, von Mitte April bis Mitte August spezielle Kameraautos und Personen mit Kamerarucksäcken durch ganz Deutschland zu schicken. (Apple, Google)",
      url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fdeutschlandweite-fototour-apple-macht-fotos-von-deutschen-staedten-fuer-kartendienst-2404-184306.html&referer=https%3A%2F%2Ft.co%2F1df536884d",
      urlToImage: null,
      publishedAt: "2024-04-21T09:40:02Z",
      content:
        "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka Android",
      },
      author: "Eva Rodriguez de Luis",
      title:
        "Este adaptador alternativo a Android Auto lleva Samsung DeX a la pantalla de tu coche",
      description:
        "Si tienes un coche relativamente moderno con una pantalla en el salpicadero, es bastante probable (habida cuenta de la lista de modelos compatibles) que tenga Android Auto, la adaptación de Android a los vehículos para simplificar su uso y centrarlo en aquell…",
      url: "https://www.xatakandroid.com/gadgets-android/este-adaptador-alternativo-a-android-auto-lleva-samsung-dex-a-pantalla-tu-coche",
      urlToImage:
        "https://i.blogs.es/b7a91a/captura-de-pantalla-2024-04-21-a-las-9.06.08/840_560.jpeg",
      publishedAt: "2024-04-21T08:01:29Z",
      content:
        "Si tienes un coche relativamente moderno con una pantalla en el salpicadero, es bastante probable (habida cuenta de la lista de modelos compatibles) que tenga Android Auto, la adaptación de Android a… [+3253 chars]",
    },
    {
      source: {
        id: null,
        name: "Caschys Blog",
      },
      author: "Felix Frank",
      title:
        "IDC: PC-Markt nach Rückgang im ersten Quartal 2024 wieder mit Wachstum",
      description:
        "Laut vorläufigen Zahlen des Worldwide Quarterly Personal Computing Device Tracker der International Data Corporation (IDC) kehrt man für die weltweiten PC-Lieferungen im ersten Quartal 2024 wieder zu Wachstum und vorpandemischen Volumina zurück. So gibt man 5…",
      url: "https://stadt-bremerhaven.de/idc-pc-markt-nach-rueckgang-im-ersten-quartal-2024-wieder-mit-wachstum/",
      urlToImage:
        "https://stadt-bremerhaven.de/wp-content/uploads/2022/01/Software-am-Computer.jpg",
      publishedAt: "2024-04-21T06:00:01Z",
      content:
        "Laut vorläufigen Zahlen des Worldwide Quarterly Personal Computing Device Tracker der International Data Corporation (IDC) kehrt man für die weltweiten PC-Lieferungen im ersten Quartal 2024 wieder zu… [+1865 chars]",
    },
    {
      source: {
        id: null,
        name: "Lifehacker.ru",
      },
      author: "Виктор Подволоцкий",
      title: "Нет, Apple Pay не заработает в России в ближайшее время",
      description:
        "Не спешите радоваться новостям про разблокировку доступа к NFC на iPhone.",
      url: "https://lifehacker.ru/apple-pay-ne-zarabotaet-v-rossii/",
      urlToImage:
        "https://cdn.lifehacker.ru/wp-content/uploads/2024/04/South-Korea-Apple-Pay-kopiya_1713686903-1024x512.jpg",
      publishedAt: "2024-04-21T08:23:17Z",
      content:
        "NFC- Apple Pay . iPhone . ?\r\n Reuters , Apple NFC iPhone, iPad Apple Pay Apple Wallet. , Apple . ! .\r\n Apple, , . , , , NFC.\r\n ( 10% ) , Apple . , FaceID.\r\n Apple (, ) . «» Apple Pay . , Apple Pay . … [+81 chars]",
    },
    {
      source: {
        id: null,
        name: "GSMArena.com",
      },
      author: "Ivan",
      title: "CMF Neckband Pro review",
      description:
        "Neckband-style earbuds have mostly gone out of fashion these days, but there's still specific use cases where they work better than TWS alternatives. For one they let you drop the wire but still have great battery life, and ensure they won't fall while runnin…",
      url: "https://www.gsmarena.com/cmf_neckband_pro_review-news-62526.php",
      urlToImage:
        "https://fdn.gsmarena.com/imgroot/news/24/04/cmf-neckband-pro-review/-952x498w6/gsmarena_000.jpg",
      publishedAt: "2024-04-21T02:04:02Z",
      content:
        "Neckband-style earbuds have mostly gone out of fashion these days, but there's still specific use cases where they work better than TWS alternatives. For one they let you drop the wire but still have… [+5530 chars]",
    },
    {
      source: {
        id: null,
        name: "01net.com",
      },
      author: "Gabriel Manceau",
      title:
        "iOS 18 : date de sortie, iPhone compatibles, IA, nouveautés, tout ce qu’il faut savoir",
      description:
        "iOS 18 et iPadOS 18 sont attendus sur nos iPhone et iPad autour du mois de septembre 2024. La prochaine version du système d'exploitation d'Apple s’annonce comme une mise à jour majeure. Compatibilité, date de sortie, fonctionnalités IA, on fait le point sur …",
      url: "https://www.01net.com/actualites/ios-18-date-de-sortie-iphone-compatibles-ia-nouveautes.html",
      urlToImage: "https://www.01net.com/app/uploads/2024/04/ios-18.jpg",
      publishedAt: "2024-04-21T09:00:41Z",
      content:
        "iOS 18 et iPadOS 18 sont attendus sur nos iPhone et iPad autour du mois de septembre 2024. La prochaine version du système d’exploitation d’Apple sannonce comme une mise à jour majeure. Compatibilité… [+8034 chars]",
    },
    {
      source: {
        id: null,
        name: "La Vanguardia",
      },
      author: "Fran Besora",
      title: "Se le empapó el iPhone por completo… por suerte tenía AppleCare+",
      description:
        "AppleCare+ es la póliza de seguro que ofrece Apple para proteger bien sus dispositivos ante caídas, robos o pérdidas. Pagando una cuota mensual o anual con un precio diferente según el dispositivo, puedes estar tranquilo/a de que tendrá solución, ya sea a tra…",
      url: "https://www.lavanguardia.com/andro4all/apple/se-le-empapo-el-iphone-por-completo-por-suerte-tenia-applecare",
      urlToImage:
        "https://www.lavanguardia.com/andro4all/hero/2024/04/applecare.jpg?width=1200",
      publishedAt: "2024-04-21T07:01:24Z",
      content:
        "AppleCare+ es lo mejor que le puede pasar a tus dispositivos\r\nAppleCare+ es la póliza de seguro que ofrece Apple para proteger bien sus dispositivos ante caídas, robos o pérdidas. Pagando una cuota m… [+2437 chars]",
    },
    {
      source: {
        id: null,
        name: "La Vanguardia",
      },
      author: "David Freire",
      title:
        "“DiskMantler”, el dispositivo que tarda 8 segundos en desmontar por completo cualquier disco duro",
      description:
        "La Unión Europea está trabajando muy duro para conseguir reducir el volumen de desechos electrónicos que se generan cada año y para lograrlo ha obligado a todos los fabricantes de smartphones en Europa, incluida Apple, a que lancen al mercado sus dispositivos…",
      url: "https://www.lavanguardia.com/andro4all/tecnologia/diskmantler-el-dispositivo-que-tarda-8-segundos-en-desmontar-por-completo-cualquier-disco-duro",
      urlToImage:
        "https://www.lavanguardia.com/andro4all/hero/2024/04/diskmantler-portada.jpg?width=1200",
      publishedAt: "2024-04-21T09:01:24Z",
      content:
        "Gracias a DiskMantler vas a poder reciclar todos tus discos duros en cuestión de minutos\r\nLa Unión Europea está trabajando muy duro para conseguir reducir el volumen de desechos electrónicos que se g… [+2279 chars]",
    },
    {
      source: {
        id: null,
        name: "Nextpit.de",
      },
      author: "Edwin Kee",
      title:
        "Top 5 Android- & iOS-Apps der Woche: Café-Management, E-Mail-App & mehr!",
      description:
        "Wollt Ihr interessante Apps auf Eurem Handy genießen? nextpit hat weitere 5 Empfehlungen aus dem Apple App Store und dem Google Play Store für Euch!",
      url: "https://www.nextpit.de/top-5-android-ios-apps-der-woche-2024-16",
      urlToImage:
        "https://fscl01.fonpit.de/userfiles/7687254/image/Top_Apps.jpg",
      publishedAt: "2024-04-21T08:00:01Z",
      content:
        "Diese Woche werfen wir einen Blick auf ein Café-Management-Spiel, eine nützliche App für temporäre E-Mails, einen Gewohnheitstracker und ein Tagebuch sowie ein paar Apps, die nur für Android-Geräte g… [+8807 chars]",
    },
    {
      source: {
        id: null,
        name: "Techbang.com",
      },
      author: "耕陶",
      title: "宏碁打造全新顯示器產品線《Acer CS2 》智慧型螢幕系列正式問世！",
      description:
        "搭載 WebOS、Airplay 無線投影、相容多元影音串流平台  創造新型態工作與娛樂 IoT 生活宏碁全新顯示器產品線《Acer CS2 》智慧型螢幕系列正式問世！搭載 WebOS Hub 2.0S 系統，直觀介面操作便利，相容多元影音串流平台如 Netflix、YouTube 或節目，透過 Airplay 無線投影可將影片、遊戲和照片從 iPhone、iPad 和 Mac 等 Apple 裝置直接傳輸至螢幕，再加上軟體定期更新，安全升級且功能優化，同時具有家長監護功能，全家共同使用更安心。\n\n一機多工的 A…",
      url: "https://www.techbang.com/posts/114725-acer-has-created-a-new-display-product-line-acer-cs2-and-the",
      urlToImage:
        "https://cdn2.techbang.com/system/excerpt_images/114725/original/cc42866d15693e869f4c3903fa889ead.jpg?1713502894",
      publishedAt: "2024-04-21T05:30:00Z",
      content:
        "Acer CS2 WebOS Hub 2.0S NetflixYouTube Airplay iPhoneiPad Mac Apple \r\nAcer CS2 USB Camera Apple Home WiFi iOT \r\n 23 CS2 \r\nCS2 23.8 27 IPS Full HD1920x1080 1000:1 HDR10 sRGB 99% Acer BlueLightShield  … [+208 chars]",
    },
    {
      source: {
        id: null,
        name: "Giveawayoftheday.com",
      },
      author: "GOTD_Editor",
      title: "Joyoshare Activation Unlocker 3.2.0 for Win",
      description:
        "Joyoshare Activation Unlocker for Windows is a great tool for you to remove iCloud activation lock from iPhone, iPad and iPod touch. It can bypass the activation screen on your device without using Apple ID and password. This software functions well to get ri…",
      url: "https://www.giveawayoftheday.com/joyoshare-activation-unlocker-2/",
      urlToImage:
        "https://giveawayoftheday.com/wp-content/uploads/og/2023/04/154d762c76e1b0df1706cbab60200ee4.png",
      publishedAt: "2024-04-21T08:00:00Z",
      content:
        "Joyoshare iPhone Unlocker is a mighty program with ability to unlock Apple ID without password, remove screen lock, unlock MDM restrictions without data loss and remove screen time without passcode. … [+1313 chars]",
    },
    {
      source: {
        id: null,
        name: "Nikonrumors.com",
      },
      author: "[NR] admin",
      title:
        "Now your phone can be a Ninja too: Atomos announces the Ninja phone video co-processor",
      description:
        "Now your phone can be a Ninja too – Atomos announces the Ninja Phone, a 10-bit video co-processor for smartphones and tablets that lets you record from Nikon HDMI cameras: Adorama B&H Photo Coming soon to Amazon Key features and additional information: 10-Bit…",
      url: "https://nikonrumors.com/2024/04/20/now-your-phone-can-be-a-ninja-too-atomos-announces-the-ninja-phone-video-co-processor.aspx/",
      urlToImage:
        "https://nikonrumors.com/wp-content/uploads/2024/04/Atomos-Ninja-phone-video-co-processor-for-Nikon-1.jpg",
      publishedAt: "2024-04-21T01:33:52Z",
      content:
        "Now your phone can be a Ninja too – Atomos announces the Ninja Phone, a 10-bit video co-processor for smartphones and tablets that lets you record from Nikon HDMI cameras:\r\nKey features and additiona… [+6499 chars]",
    },
    {
      source: {
        id: "marca",
        name: "Marca",
      },
      author: "P. GARCÍA",
      title:
        "Chollos Amazon: las Adidas Runfalcon 3.0 al 42%, el videojuego The Last of Us por 8 euros...",
      description:
        "Con la llegada del buen tiempo son muchos los chollos que podemos encontrar estos días en Amazon. Y para que no te pierdas ninguna oferta de las que merecen la pena, en BAZAR hemos",
      url: "https://www.marca.com/regalos-promociones/2024/04/21/6624c712e2704e45438b4586.html",
      urlToImage:
        "https://phantom-marca.unidadeditorial.es/af28febc37916282704a8f916e65a617/resize/1200/f/webp/assets/multimedia/imagenes/2024/04/21/17136877210107.jpg",
      publishedAt: "2024-04-21T08:35:03Z",
      content:
        "Con la llegada del buen tiempo son muchos los chollos que podemos encontrar estos días en Amazon. Y para que no te pierdas ninguna oferta de las que merecen la pena, en BAZAR hemos preparado esta sel… [+45740 chars]",
    },
    {
      source: {
        id: null,
        name: "Ascii.jp",
      },
      author: "ASCII",
      title: "手のひらサイズに折りたためるワイヤレス充電スタンド",
      description:
        "iPhone・Apple Watch・Air Podsなどのデバイスを2台同時に最大18Wで充電可能 「Hacray 2 in 1 折りたたみワイヤレス充電スタンド」予約受付中。",
      url: "https://weekly.ascii.jp/elem/000/004/194/4194704/",
      urlToImage:
        "https://ascii.jp/img/2024/04/17/3719361/l/e3e70432c685177d.jpg",
      publishedAt: "2024-04-21T03:00:00Z",
      content:
        "5iPhoneApple WatchAir Pods218W! Hacray 2 in 1 \r\nHacray 2 in 1 5\r\n5\r\niPhoneApple WatchAir Pods218WMagSafeiPhone\r\n87g\r\niOS 17 iPhone\r\n68×65×18mm87g\r\nAirPodsApple WatchApple Watch\r\n15W10W7.5W5WApple Wat… [+90 chars]",
    },
    {
      source: {
        id: "il-sole-24-ore",
        name: "Il Sole 24 Ore",
      },
      author: "di Alessandro Longo",
      title:
        "Apple apre all’utilizzo di parti di ricambio usate per riparare gli iPhone",
      description:
        "Sostituire uno schermo, una fotocamera rotti o una batteria dell’iPhone potrebbe costarci di meno fra qualche mese",
      url: "https://www.ilsole24ore.com/art/apple-apre-all-utilizzo-parti-ricambio-usate-riparare-iphone-AFQjBRcD",
      urlToImage:
        "https://i2.res.24o.it/images2010/2024/04/AFQjBRcD/images/266562ee-fd5d-11ee-b7e8-b1b285e0cd6d-fotohome0.jpg",
      publishedAt: "2024-04-21T10:28:01Z",
      content:
        "Ascolta la versione audio dell'articolo\r\n3' di lettura\r\nSostituire uno schermo, una fotocamera rotti o una batteria delliPhone potrebbe costarci di meno fra qualche mese. Grazie a un passo di Apple, … [+2497 chars]",
    },
    {
      source: {
        id: "techradar",
        name: "TechRadar",
      },
      author: "becky.scarrott@futurenet.com (Becky Scarrott)",
      title:
        "Apple is exploring removable batteries for iOS devices – and I think AirPods need it most",
      description:
        "Apple has filed a patent for an easy-to-replace battery standard for iPhones, tablets and keyboards – but AirPods aren't mentioned.",
      url: "https://www.techradar.com/audio/earbuds-airpods/apple-is-exploring-removable-batteries-for-ios-devices-but-our-airpods-need-it-most",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/jTmAbH8NjZUuGTz2vGAPke-1200-80.jpg",
      publishedAt: "2024-04-21T08:30:09Z",
      content:
        'As if to temper the cries of "but what are you doing for Sustainability Week, Tim?" across the internet, Mr. Cook\'s behemoth recently filed a patent for uniform battery enclosures – something that mi… [+12075 chars]',
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "David Phelan, Senior Contributor, \n David Phelan, Senior Contributor\n https://www.forbes.com/sites/davidphelan/",
      title: "Huawei’s Pura 70 Ultra Beats iPhone With Pioneering New Feature",
      description:
        "The latest phone from Huawei has key new communications features which could be crucial in emergency.",
      url: "https://www.forbes.com/sites/davidphelan/2024/04/21/huaweis-pura-70-ultra-beats-iphone-with-pioneering-new-feature-upgrade-samsung-galaxy-s24-google-pixel-iphone-15-pro-max/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/6624e19422dd1088c271d702/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      publishedAt: "2024-04-21T10:00:16Z",
      content:
        "Huawei just announced its latest phones, the Pura 70 range. There are plenty of updates and improvements, including a retractable zoom lens, but the company also introduced a key communications featu… [+2400 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "Bill Stone, Contributor, \n Bill Stone, Contributor\n https://www.forbes.com/sites/bill_stone/",
      title: "Better Earnings Don’t Stop The Plunge In Stocks",
      description:
        "Worries about the soft landing sent stocks tumbling. The second busiest week of earnings season has four of the Magnificent 7 report earnings, which will be crucial.",
      url: "https://www.forbes.com/sites/bill_stone/2024/04/21/better-earnings-dont-stop-the-plunge-in-stocks/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/6289278ab804d306fc837362/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      publishedAt: "2024-04-21T10:18:55Z",
      content:
        "The S&amp;P 500 slumped by 3% for the week. The Magnificent 7 was hit with an almost 8% decline as ... [+] worries about inflation and a hard landings weighed on risk assets.\r\ngetty\r\nThe earnings sea… [+6048 chars]",
    },
    {
      source: {
        id: null,
        name: "ComputerBase",
      },
      author: "Frank Hüber",
      title:
        "Wochenrück- und Ausblick: Wir hatten Geburtstag und trotzdem wird Netflix teurer",
      description:
        "In der vergangenen Woche feierte ComputerBase 25-jähriges Jubiläum. Für uns ein Anlass, in einem Podcast auf die ersten Jahre von ComputerBase zurückzublicken – als zur CeBIT noch auf dem Küchenboden geschlafen und für Tests ständig das eigene System zerlegt …",
      url: "https://www.computerbase.de/2024-04/wochenrueckblick-und-ausblick-2024-w16/",
      urlToImage:
        "https://pics.computerbase.de/1/1/2/0/6/7-ac75cfa472cef24f/article-1280x720.9797f548.jpg",
      publishedAt: "2024-04-21T06:00:00Z",
      content:
        "In der vergangenen Woche feierte ComputerBase 25-jähriges Jubiläum. Für uns ein Anlass, in einem Podcast auf die ersten Jahre von ComputerBase zurückzublicken als zur CeBIT noch auf dem Küchenboden g… [+3027 chars]",
    },
    {
      source: {
        id: null,
        name: "Antyweb.pl",
      },
      author: "Kamil Świtalski",
      title: "Twórcy popularnego emulatora: nie będzie wersji na iPhone",
      description:
        "Apple pozwala z każdym rokiem na coraz więcej. Jednak niektóre ich blokady sprawiają, że... i tak nie da się z nich zrobić odpowiedniego użytku. Dlatego nie zobaczymy ich w App Store.\n \n The post Twórcy popularnego emulatora: nie będzie wersji na iPhone appea…",
      url: "https://antyweb.pl/tworcy-popularnego-emulatora-nie-bedzie-wersji-na-iphone",
      urlToImage:
        "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2023/09/npxbzobo6x/iphone-15-pro-max_4.jpg",
      publishedAt: "2024-04-21T06:38:13Z",
      content:
        "Zmiana regulaminu App Store pozwalajca na zamieszczanie tam oprogramowania do emulacji to jedno z najwikszych trzsie ziemi, jakie zadziao si w ekosystemie Apple od lat. Prawdopodobnie nawet wiksze, n… [+2484 chars]",
    },
    {
      source: {
        id: null,
        name: "Antyweb.pl",
      },
      author: "Piotr Kurek",
      title:
        "Tańszy Steam Deck? To możliwe. Valve sprzeda ci sprzęt w niższej cenie",
      description:
        'Wraz z premierą Steam Deck OLED, firma Valve zapowiedziała wprowadzenie do swojej oferty odnawiane urządzenia do grania przenośnego. To dobry moment, by tę "konsolę" kupić w dużo niższej cenie. Z pełną gwarancją i certyfikacją.\n \n The post Tańszy Steam Deck? …',
      url: "https://antyweb.pl/tanszy-steam-deck",
      urlToImage:
        "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2021/07/15192328/steam1.jpg",
      publishedAt: "2024-04-21T10:12:34Z",
      content:
        'Steam Deck sprawi, e "pececiarze" pokochali granie przenone. Sprzt stworzony przez Valve nieustannie zajmuje czoowe miejsce na licie bestsellerów platformy. Wraz z premier Steam Deck OLED firma zmien… [+3754 chars]',
    },
    {
      source: {
        id: null,
        name: "Elladodelmal.com",
      },
      author: "noreply@blogger.com (Chema Alonso)",
      title: "Tu cuenta de MyPublicInbox con AppleID",
      description:
        "Durante este tiempo, los compañeros del equipo han estado trabajando para tener la plataforma de MyPublicInbox más adaptada a los usuarios de Apple que tengan iPhone, iPad, o MacOS en su día a día de trabajo. Han estado haciendo una versión WebApp de MyPublic…",
      url: "https://www.elladodelmal.com/2024/04/tu-cuenta-de-mypublicinbox-con-appleid.html",
      urlToImage:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh5noE6eFatfdgWQEaPBhAjpdvQMoG2yhuP8LecExArsgM7PWKvtymnndIn1Xfckk6Jgp9Y9jlrJmMskq5kxZr-TbzEbdG_NeHuaBHaIQR_sbN-TgOJMwC7zNs4AWnlfFkh-2VHj3iMm-lQj6LAA3z3GycPORbW-4W5j2mfEW4nDo6izRtmiNlC/w1200-h630-p-k-no-nu/AppleID_0.jpeg",
      publishedAt: "2024-04-21T07:09:00Z",
      content:
        "Durante este tiempo, los compañeros del equipo han estado trabajando para tener la plataforma de MyPublicInbox más adaptada a los usuarios de Apple que tengan iPhone, iPad, o MacOS en su día a día de… [+1372 chars]",
    },
    {
      source: {
        id: null,
        name: "Esuteru.com",
      },
      author: "htmk722",
      title:
        "大人気の『スイカゲーム』、スマホ版の収益がリリース3ヶ月で、約3億円の売上を記録していた事が判明！",
      description:
        "大人気の『スイカゲーム』、スマホ版の収益がリリース3ヶ月で、約3億円の売上を記録していた事が判明！の記事ページ",
      url: "http://blog.esuteru.com/archives/10200744.html",
      urlToImage: "https://livedoor.blogimg.jp/hatima/imgs/7/4/74fa1cfc.jpg",
      publishedAt: "2024-04-21T01:00:20Z",
      content:
        "33240\r\n11iOS32003.09419SensorTowerSensorTowerTVCM\r\n411iOSAndroid\r\nSwitch\r\nApple\r\nT",
    },
    {
      source: {
        id: null,
        name: "taz.de",
      },
      author: "taz. die tageszeitung",
      title: "US-Repräsentantenhaus hat entschieden: Ultimatum für Tiktok",
      description:
        "Ein US-Gesetz, das einen Verkauf der Kurzvideo-App erzwingen soll, könnte in wenigen Tagen in Kraft treten. Das Votum des US-Senats steht bevor.",
      url: "https://taz.de/US-Repraesentantenhaus-hat-entschieden/!6003172/",
      urlToImage: "https://taz.de/picture/6956954/948/452506858-1.jpeg",
      publishedAt: "2024-04-21T09:58:00Z",
      content:
        "Ein US-Gesetz, das einen Verkauf der Kurzvideo-App erzwingen soll, könnte in wenigen Tagen in Kraft treten. Das Votum des US-Senats steht bevor.\r\nFür Tiktok und die chinesische Mutterfirma Bytedance … [+2182 chars]",
    },
    {
      source: {
        id: null,
        name: "Everything-everywhere.com",
      },
      author: "Gary Arndt",
      title: "The Origin of Words and Phrases: Military",
      description:
        "Podcast Transcript The English language has evolved organically, gathering words and phrases from different languages, countries, and communities.  It should come as no surprise that many of the words in English have come from the military. For centuries, sol…",
      url: "https://everything-everywhere.com/the-origin-of-words-and-phrases-military/",
      urlToImage:
        "https://photos.smugmug.com/Other/n-hRFP2/Podcast-Images/i-qXWFmJN/0/DfCWdD95jJLWSBfVFj2rwd6QbNHmZTZtssFspq7rp/L/1384epart-L.jpg",
      publishedAt: "2024-04-21T07:59:41Z",
      content:
        "Subscribe Apple | Spotify | Amazon | Player.FM | TuneInCastbox | Podurama | Podcast Republic | RSS | Patreon\r\nThe English language has evolved organically, gathering words and phrases from different … [+10762 chars]",
    },
    {
      source: {
        id: null,
        name: "Tinhte.vn",
      },
      author: "no-reply@tinhte.vn (Anh Tú.), Anh Tú.",
      title:
        "Apple tuân thủ yêu cầu của Trung Quốc, gỡ bỏ WhatsApp và Threads khỏi App Store",
      description:
        "Tình hình căng thằng giữa Mỹ và Trung Quốc về công nghệ đang leo thang, và Apple lại một lần nữa trở thành tâm điểm. Một số ứng dụng trên App Store đã bị Trung Quốc yêu cầu phải được xoá bỏ, đáng chú ý là có đến 2 ứng dụng đến từ Meta…",
      url: "https://tinhte.vn/thread/apple-tuan-thu-yeu-cau-cua-trung-quoc-go-bo-whatsapp-va-threads-khoi-app-store.3779922/",
      urlToImage:
        "https://photo2.tinhte.vn/data/attachment-files/2024/04/8313234_fefef.jpg",
      publishedAt: "2024-04-21T00:54:27Z",
      content:
        "ng thái này khin ngi dùng internet Trung Quc ngày càng khó khn hn trong vic giao tip vi th gii bên ngoài, th hin rõ n lc kim soát thông tin ca Bc Kinh. Trc ó, nhiu ng dng mng xã hi nh Instagram, X (T… [+978 chars]",
    },
    {
      source: {
        id: null,
        name: "Spidersweb.pl",
      },
      author: "Maciej Gajewski",
      title: "Gry z PlayStation na iPhonie. Dzięki Unii Europejskiej",
      description:
        "Apple chcąc zmniejszyć odpływ użytkowników z App Store’a zdecydował się na wprowadzenie do niego emulatorów starych konsol. Wkrótce też PlayStation.",
      url: "https://spidersweb.pl/2024/04/iphone-playstation-emulator.html",
      urlToImage:
        "https://ocs-pl.oktawave.com/v1/AUTH_2887234e-384a-4873-8bc5-405211db13a2/spidersweb/2024/04/iphone-playstation-emulator.jpg",
      publishedAt: "2024-04-21T07:30:00Z",
      content:
        "Czemu, skoro oferuje na innych platformach dobrej jakoci emulacj konsol NES, SNES, Nintendo 64, Game Boy, Nintendo DS czy nawet, jak obiecuj twórcy, PlayStation 2 i Dreamcasta? Chodzi o dodatkowe opr… [+346 chars]",
    },
    {
      source: {
        id: null,
        name: "Daily Beast",
      },
      author: "The Daily Beast",
      title: "The Trumps Aren’t Style Icons. That Title Belongs to This Pair",
      description:
        "Photo Illustration by Erin O'Flynn/The Daily Beast/Getty Images\r\nListen to this full episode of The New Abnormal on Apple Podcasts, Spotify, Amazon and Stitcher.MAGA figure Stephen Miller claimed this week that Donald Trump was a generation-defining fashion i…",
      url: "https://www.thedailybeast.com/donald-and-melania-trump-arent-style-icons-that-title-belongs-to-barack-and-michelle-obama",
      urlToImage:
        "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_900,w_1600,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1713640278/240220-tna-bonus-trump-fashion-icons-hero_u17jtv",
      publishedAt: "2024-04-21T03:15:03Z",
      content:
        "Listen to this full episode of The New Abnormal on Apple Podcasts, Spotify, Amazon and Stitcher.\r\nMAGA figure Stephen Miller claimed this week that Donald Trump was a generation-defining fashion icon… [+1884 chars]",
    },
    {
      source: {
        id: null,
        name: "Roomie.jp",
      },
      author: "かいサポ（お買いものサポーター）",
      title:
        "まだ在庫あるよ！ #AmazonスマイルSALE で3つのメディア読者がカテゴリ別｢購入したものランキング｣",
      description:
        "Amazon（アマゾン）では、2024年4月19日9時から4月22日23時59分まで「AmazonスマイルSALE ゴールデンウィーク」を開催中です。\r\n本記事では、メディアジーンの3つのWebメディア（ギズモード・ジャパン、ライフハッカー・ジャパン、ROOMIE（ルーミー））の読者が、期間中に購入したセールアイテムを商品カテゴリ別のランキングで紹介しています。ぜひチェックしてみてください！",
      url: "https://www.roomie.jp/2024/04/1212370/",
      urlToImage:
        "https://media.loom-app.com/roomie/dist/images/2024/04/RM1-4.jpg?w=1200",
      publishedAt: "2024-04-21T05:15:11Z",
      content:
        "Amazon202441994222359AmazonSALE \r\n3WebROOMIE\r\n10,0008\r\n202442113\r\nKindle200Kindle Unlimited20\r\n3\r\n1Anker 675 USB-C 12-in-1 Monitor Stand Wireless\r\n2Anker Soundcore Liberty 4 NC Blueooth 5.3\r\n3UGREEN … [+607 chars]",
    },
    {
      source: {
        id: null,
        name: "Macitynet.it",
      },
      author: "Emiliano Contarino",
      title:
        "Da Playstation a Wii, una valanga di emulatori arriva su iPhone a Apple TV",
      description:
        "A breve il primo emulatore Playstation su iPhone e Apple TV, e non solo.\n- su macitynet.it Da Playstation a Wii, una valanga di emulatori arriva su iPhone a Apple TV",
      url: "https://www.macitynet.it/amulatori-iphone-apple-tv/",
      urlToImage:
        "https://www.macitynet.it/wp-content/uploads/2024/04/Provenance-Emulator-jpeg.webp",
      publishedAt: "2024-04-21T10:29:44Z",
      content:
        "Da quando Apple ha aperto agli emulatori gli sviluppatori stanno facendo a gara per pubblicare le proprie app sullo store della Mela. Adesso, lo sviluppatore dell’app multi-emulatore Provenance ha ri… [+2114 chars]",
    },
    {
      source: {
        id: null,
        name: "Hwupgrade.it",
      },
      author: null,
      title:
        "Svendite del Weekend Amazon: mini PC sotto i 150, robot scontatissimi, iPhone 15 al minimo (769), super portatili e molto altro!",
      description:
        "Sono veramente tanti gli sconti proposti da Amazon in questo weekend e coprono praticamente tutto il settore della tecnologia. Si risparmia veramente molto sui prodotti che abbiamo selezionato per poi, ad uno ad uno. Eccoli!",
      url: "https://www.hwupgrade.it/news/multimedia/svendite-del-weekend-amazon-mini-pc-sotto-i-150-robot-scontatissimi-iphone-15-al-minimo-769-super-portatili-e-molto-altro_126437.html",
      urlToImage: "https://www.hwupgrade.it/i/n/SmartphoneBF_720.jpg",
      publishedAt: "2024-04-21T06:37:30Z",
      content:
        "Torna disponibile, in soli 10 pezzi, il super portatile Lenovo con ben \r\n24GB di RAM, SSD da 1TB processore Intel Core i3-1215U (6 core, 8 threadf, 4,4GHz!). \r\nIn regalo anche uno zaino! Meglio ribad… [+11000 chars]",
    },
    {
      source: {
        id: null,
        name: "Macbidouille.com",
      },
      author: "pmvigier@gmail.com (Philippe)",
      title: "Les CPU des Mac : Fat Binary",
      description:
        "On est toujours en mars 1994, Apple a introduit de nouveaux Power Macintosh, que deux cartes accélératrices pour Macintosh 68040, et a intégré un émulateur 68k du même coup, rendant le passage presque transparent.Presque? Oui il y a une dernière pièce dans ce…",
      url: "https://macbidouille.com/news/2024/04/21/les-cpu-des-mac-fat-binary",
      urlToImage:
        "http://files.macbidouille.com/mbv3/2024/04/14/qmeApgGfht068dYr.jpeg",
      publishedAt: "2024-04-21T07:40:09Z",
      content:
        "On est toujours en mars 1994, Apple a introduit de nouveaux Power Macintosh, que deux cartes accélératrices pour Macintosh 68040, et a intégré un émulateur 68k du même coup, rendant le passage presqu… [+2090 chars]",
    },
    {
      source: {
        id: null,
        name: "Smhn.info",
      },
      author: "會原",
      title: "Pixel 5a、欠陥判明により無償交換が実施中",
      description:
        "画面がつかず文鎮化した、突然死したとの報告の絶えないGoogle Pixel 5a (5G)について、Googleが1年間延長修理プログラムを実施中です。スマートフォンの電源をつけても画面に何も表示されない、画面が黒くなるなど、ディスプレイ関連の問題が対象。Googleの裁量に基...smhn.infoにアクセスすると、全文を読むことができます。",
      url: "https://smhn.info/202404-pixel-5a-recall",
      urlToImage:
        "https://smhn.info/wp-content/uploads/2024/04/fig_main-e1713687485596.png",
      publishedAt: "2024-04-21T08:20:56Z",
      content:
        "Apple\r\n2024-04-20 22:28:14ryoppi913\r\nAppleGalaxyIDCiPhoneSamsung\r\nIDC2024120234131SamsungAppleApple1SamsungGSMArenaSamsungApple...\r\nNothing Phone (2a)\r\n2024-04-16 09:17:39\r\nNothing Phone (2a)\r\nNothin… [+471 chars]",
    },
    {
      source: {
        id: null,
        name: "Iculture.nl",
      },
      author: "Gonny van der Zwaag | iCulture.nl",
      title: "‘Beats Pill-speaker komt terug’",
      description:
        "Beats lijkt van plan om de Beats Pill-speaker terug te brengen in een nieuwe uitvoering. Superster LeBron James werd gespot met de speaker, voorafgaand aan een NBA-wedstrijd.\nHet artikel ‘Beats Pill-speaker komt terug’ lees je op iCulture.",
      url: "https://www.iculture.nl/nieuws/beats-pill-speaker-2024/",
      urlToImage:
        "https://www.iculture.nl/wp-json/social-image-generator/v1/image/1393185/?v=11711611713698708",
      publishedAt: "2024-04-21T09:24:19Z",
      content:
        "Er is momenteel nog maar één plek waar je de Beats Pill-speaker nog kunt vinden: in sommige Apple Stores. Daar is de speaker niet te koop, maar wordt ‘ie gebruikt voor Today at Apple-sessies. Het lij… [+3945 chars]",
    },
    {
      source: {
        id: null,
        name: "Hvg.hu",
      },
      author: "hvg@hvg.hu",
      title:
        "Elvitelre #63: A pszichopaták és Modi győznek, a magyarok és a németek ikszelnek",
      description:
        "Elvitelre - a podcast, amelyben az adott hét legjobb HVG hetilapos és hvg360-as anyagaiból válogatunk. Csak indítsa el a háttérben és hallgassa meg szerzőink legjobb írásait! Ezen a héten megnézzük, sikeresebbek-e a pszichopaták, miért sikeres Narendra Modi, …",
      url: "https://hvg.hu/itthon/20240421_elvitelre-podcast-pszichopatak-india-futball",
      urlToImage:
        "https://img.hvg.hu/Img/7fcefbf8-ac48-4ee6-aef5-32203afa118c/73791167-95ef-4d57-a486-866251c04646.jpg",
      publishedAt: "2024-04-21T04:00:00Z",
      content:
        "Újra itt az Elvitelre, a hvg.hu hétzáró podcastja, amelyben az elmúlt hét legjobb HVG-s és hvg360-as anyagaiból válogatunk – önnek csak el kell indítania a háttérben.\r\nA legfrissebb epizódban a pszic… [+332 chars]",
    },
    {
      source: {
        id: null,
        name: "Ipadizate.com",
      },
      author: "Ángel Roca",
      title: "iPhone 16 Pro: 5 novedades que revolucionarán su cámara",
      description:
        "Como cada año se espera que la cámara de los próximos iPhone 16 Pro vuelva a mejorar para ponerse un escalón por encima. Esto cada año es más difícil, ya que la actual cámara de los iPhone 15 Pro es una auténtica maravilla. Sin embargo, Apple tiene guardados …",
      url: "https://ipadizate.com/rumores/iphone-16-pro-novedades-que-revolucionaran-su-camara",
      urlToImage:
        "https://ipadizate.com/hero/2024/04/iphone-16-pro.1713453581.2727.jpg?width=1200",
      publishedAt: "2024-04-21T10:02:48Z",
      content:
        "Las cámaras del iPhone 16 Pro mejorarán con estas novedades\r\nComo cada año se espera que la cámara de los próximos iPhone 16 Pro vuelva a mejorar para ponerse un escalón por encima. Esto cada año es … [+3193 chars]",
    },
    {
      source: {
        id: null,
        name: "Techviral.net",
      },
      author: "Amarnath Chakraborty",
      title: "10 Best Music Streaming Apps for iPhone in 2024",
      description:
        "Who doesn’t like listening to music? Of course, everyone does. But for a proper music experience, you need a music streaming app. If you have an iPhone, you have hundreds of apps for music streaming. Most of these apps are free to download and use, with some …",
      url: "https://techviral.net/music-streaming-apps-for-iphone/",
      urlToImage:
        "https://techviral.net/wp-content/uploads/2024/04/Best-Music-Streaming-Apps-for-iPhone-1-1.png",
      publishedAt: "2024-04-21T06:45:51Z",
      content:
        "Who doesnt like listening to music? Of course, everyone does. But for a proper music experience, you need a music streaming app.\r\nIf you have an iPhone, you have hundreds of apps for music streaming.… [+6462 chars]",
    },
    {
      source: {
        id: null,
        name: "[Removed]",
      },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "1970-01-01T00:00:00Z",
      content: "[Removed]",
    },
    {
      source: {
        id: null,
        name: "[Removed]",
      },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "1970-01-01T00:00:00Z",
      content: "[Removed]",
    },
    {
      source: {
        id: null,
        name: "[Removed]",
      },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "1970-01-01T00:00:00Z",
      content: "[Removed]",
    },
    {
      source: {
        id: null,
        name: "Iphon.fr",
      },
      author: "iPhon.fr",
      title: "4 nouveautés de l’app Calculette révélées ? Ce que l’on sait",
      description:
        "En prime, nous vous dévoilons la date de sortie potentielle de ces changements.",
      url: "https://www.iphon.fr/post/nouveautes-app-calculette-revelees",
      urlToImage: "https://www.iphon.fr/app/uploads/2024/04/calculette.jpg",
      publishedAt: "2024-04-21T04:57:37Z",
      content:
        "L’app native Calculette, qui comme son nom l’indique permet d’effectuer des opérations mathématiques rapides, sera bientôt mise à jour par Apple. C’est en tout cas l’hypothèse partagée par nos confrè… [+4356 chars]",
    },
    {
      source: {
        id: null,
        name: "Wallpaper*",
      },
      author: "Ellie Stathaki",
      title:
        "Burnt Earth Beach House is an experimental retreat crafted in terracotta",
      description:
        "The experimental Australian Burnt Earth Beach House by John Wardle breaks new ground in material composition, using baked earth for warmth, texture and tonality",
      url: "https://www.wallpaper.com/architecture/residential/burnt-earth-beach-house-john-wardle-australia",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/RGjxVZjndfPgQKjDmzvtzk-1200-80.jpg",
      publishedAt: "2024-04-21T06:00:00Z",
      content:
        "Burnt Earth Beach House breaks through the ground in ragged, abstract shapes, as if it’s emerging from the earth. It began life as a question: is there an alternative to building with timber that is … [+6796 chars]",
    },
    {
      source: {
        id: null,
        name: "Technews.tw",
      },
      author: "商業周刊",
      title: "連摩斯漢堡也開起唱片公司、辦選秀？背後藏日本破千萬人才危機",
      description:
        "日本摩斯漢堡，如今竟要開起唱片公司！ 4月2日，該公司宣布，將推出名為「摩斯唱片」（MOS Records）的計畫，以支持目前在摩斯漢堡工作的年輕人夢想，預計從4月起展開選秀活動，開放所有目前在摩斯漢堡全職、兼職同仁參加。 只要尚未和特定製作公司、唱片公司、出版社簽訂合約，不論性別、年齡、國籍，任何...",
      url: "https://technews.tw/2024/04/21/mos-burger-launches-employee-only-record-label-mos-records/",
      urlToImage:
        "https://img.technews.tw/wp-content/uploads/2024/04/19102447/26298286945_6678222143_k.jpg",
      publishedAt: "2024-04-21T01:30:15Z",
      content:
        "42MOS Records4\r\nJapan Today\r\n5679The Kitchen Live\r\n30ZARD\r\nApple MusicSpotifyYouTubeInstagramYouTube Music50185\r\nRecruitRecruit Works Institute20401,100\r\n2022652021391219687653,035\r\nArthur LewisNikke… [+64 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "hgetahun@insider.com (Hannah Getahun)",
      title:
        "Taylor Swift, Tupac, and Snoop Dogg are now somehow part of the weekslong rap beef between Drake and Kendrick Lamar",
      description:
        'Drake released "Taylor Made," a second diss track in response to Kendrick Lamar. The track uses what sounds like AI-generated Shakur and Snoop voices.',
      url: "https://www.businessinsider.com/drake-taylor-swift-kendrick-lamar-diss-track-tupac-snoop-dogg-2024-4",
      urlToImage:
        "https://i.insider.com/662476d50dfb1341e9fd5b63?width=1200&format=jpeg",
      publishedAt: "2024-04-21T03:03:01Z",
      content:
        "If you thought rap's latest all-out brawl couldn't get any more convoluted, enter Taylor Swift, Snoop Dogg, and Tupac Shakur.\r\nOn Friday, an embattled Drake released \"Taylor Made,\" his second diss tr… [+3289 chars]",
    },
    {
      source: {
        id: null,
        name: "Geeky Gadgets",
      },
      author: "Roland Hutchinson",
      title: "How to Use Hot Corners on Your Mac",
      description:
        "If you’re looking to enhance your productivity and streamline your interactions with your Mac, mastering Hot Corners can be a game-changer. This feature, integrated into macOS, enables you to execute quick actions by simply moving your mouse to any of the fou…",
      url: "https://www.geeky-gadgets.com/how-to-use-hot-corners-on-your-mac/",
      urlToImage:
        "https://www.geeky-gadgets.com/wp-content/uploads/2024/04/Hot-Corners-.jpg",
      publishedAt: "2024-04-21T08:57:50Z",
      content:
        "If you’re looking to enhance your productivity and streamline your interactions with your Mac, mastering Hot Corners can be a game-changer. This feature, integrated into macOS, enables you to execute… [+3566 chars]",
    },
    {
      source: {
        id: null,
        name: "Ixbt.com",
      },
      author: "dexter@ixbt.com (Dexter)",
      title:
        "Suzuki Jimny 2024 уже в России. Сколько дилеры просят за легендарный внедорожник?",
      description:
        "До российских дилеров добрались внедорожники Suzuki Jimny 2024 модельного года. Цены начинаются от 4,19 млн рублей, причем столько просят за пятидверную машину уже в наличии, с ЭПТС и оплаченным утильсбором. \r\n Изображение: Suzuki Такой Jimny продается в Сант…",
      url: "https://www.ixbt.com/news/2024/04/21/suzuki-jimny-2024.html",
      urlToImage:
        "https://www.ixbt.com/img/n1/news/2024/3/0/suzuki-jimny-scaled-e1713675459451-1920x1079_large.jpg",
      publishedAt: "2024-04-21T09:26:00Z",
      content:
        "Suzuki Jimny 2024 . 4,19 , , .\r\n Jimny -. — 9- , Apple CarPlay Android Auto, - -, , .\r\n , . — 4,2 4,4 .\r\n : 1,5- 102 .., 4- «» .",
    },
    {
      source: {
        id: null,
        name: "Webnews.it",
      },
      author: "Manuel De Pandis",
      title: "Sony DualSense: sconto FOLLE del 22% su Amazon",
      description:
        "Il Sony DualSense della PlayStation 5 costa solo 54,90€ su Amazon, IVA inclusa e spese di spedizione comprese.",
      url: "https://www.webnews.it/sony-dualsense-sconto-folle-del-22-su-amazon/",
      urlToImage:
        "https://cdn.webnews.it/U9g7ybmkWkJUN9n3Tn7_bvHatVA=/2160x1350/filters:format(webp)/https://www.webnews.it/app/uploads/2024/04/Telefonino.net-IV-2160x1350-9-2.jpg",
      publishedAt: "2024-04-21T10:30:34Z",
      content:
        "Se possiedi una PlayStation 5 e stai cercando un nuovo joypad per divertirti in compagnia dei tuoi amici, della tua compagna o del tuo compagno, con i tuoi parenti e non solo, oggi vogliamo proporti … [+2134 chars]",
    },
    {
      source: {
        id: null,
        name: "Webnews.it",
      },
      author: "Ivan Miralli",
      title: "TV LG è tua A SOLI 299€: comandi vocali e risoluzione 4K",
      description:
        "La risoluzione 4K e i comandi vocali integrati fanno di questa TV LG 4K in offerta un acquisto da non perdere.",
      url: "https://www.webnews.it/tv-lg-e-tua-a-soli-299e-comandi-vocali-e-risoluzione-4k/",
      urlToImage:
        "https://cdn.webnews.it/Ws2bd2gMmW1dEr1JSn1xU65oE6c=/2120x840/filters:format(webp)/https://www.webnews.it/app/uploads/2024/04/60-euro-1148.jpg",
      publishedAt: "2024-04-21T09:05:15Z",
      content:
        "Hai voglia di ricrearti un vero e proprio angolo cinema all’interno del tuo salotto di casa? Non ti preoccupare, Amazon ha l’offerta che fa al caso tuo proponendoti la TV LG 4K al sensazionale prezzo… [+2537 chars]",
    },
    {
      source: {
        id: null,
        name: "Papelpop.com",
      },
      author: "Guilherme Araujo",
      title:
        "Fiona Apple está compondo novas faixas, diz amiga e “porta-voz” da cantora",
      description:
        "Zelda Hallman, uma das amigas mais próximas de Fiona Apple (também considerada sua “porta-voz”, já que a mesma não possui perfis nas redes sociais) deu pistas sobre o paradeiro da cantora. Ao ser questionada por um fã sobre o que a mesma achava das novas músi…",
      url: "https://www.papelpop.com/2024/04/fiona-apple-esta-compondo-novas-faixas-diz-amiga-e-porta-voz-da-cantora/",
      urlToImage:
        "https://assets.papelpop.com/wp-content/uploads/2020/10/fiona2.jpg",
      publishedAt: "2024-04-21T00:13:35Z",
      content:
        "Zelda Hallman, uma das amigas mais próximas de Fiona Apple (também considerada sua “porta-voz”, já que a mesma não possui perfis nas redes sociais) deu pistas sobre o paradeiro da cantora. Ao ser que… [+872 chars]",
    },
    {
      source: {
        id: null,
        name: "Smzdm.com",
      },
      author: null,
      title:
        "百亿补贴：Apple 苹果 iPhone 15 Pro 5G智能手机 128GB 6358元（需用券）",
      description:
        "百亿补贴:Apple 苹果 iPhone 15 Pro 5G智能手机 128GB 6358元,什么值得买甄选出拼多多优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
      url: "https://www.smzdm.com/p/110207051/",
      urlToImage:
        "https://y.zdmimg.com/202309/13/6500b105fc3444180.png_d250.jpg",
      publishedAt: "2024-04-21T10:40:04Z",
      content:
        "iPhone 15 Pro 6.1 ProMotion Super Retina XDR 120Hz iOS 17 187 \r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 242835mmiPhone 15 Pro… [+106 chars]",
    },
    {
      source: {
        id: null,
        name: "Smzdm.com",
      },
      author: null,
      title: "Apple 苹果 iPhone 15 Pro 5G手机 256GB 蓝色钛金属 7481.41元",
      description:
        "Apple 苹果 iPhone 15 Pro 5G手机 256GB 蓝色钛金属 7481.41元,什么值得买甄选出京东优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
      url: "https://www.smzdm.com/p/110175748/",
      urlToImage:
        "https://qny.smzdm.com/202309/13/6500b101c43396167.png_d250.jpg",
      publishedAt: "2024-04-21T02:08:17Z",
      content:
        "iPhone 15 Pro 6.1 ProMotion Super Retina XDR 120Hz iOS 17 187 \r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 242835mmiPhone 15 Pro… [+106 chars]",
    },
    {
      source: {
        id: null,
        name: "Smzdm.com",
      },
      author: null,
      title:
        "Apple 苹果 iPhone 15 Pro Max (A3108) 256GB 白色钛金属 支持移动联通电信5G 双卡双待手机 8337.11元",
      description:
        "Apple 苹果 iPhone 15 Pro Max (A3108) 256GB 白色钛金属 支持移动联通电信5G 双卡双待手机 8337.11元,什么值得买甄选出京东优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
      url: "https://www.smzdm.com/p/110193463/",
      urlToImage:
        "https://qny.smzdm.com/202309/13/6500b1c2f4c617754.png_d250.jpg",
      publishedAt: "2024-04-21T06:25:51Z",
      content:
        "iPhone 15 Pro Max 6.7ProMotion Super Retina XDR 120Hz iOS 17 iPhone 14 Pro Max 19g\r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 2… [+135 chars]",
    },
    {
      source: {
        id: null,
        name: "Smzdm.com",
      },
      author: null,
      title:
        "Apple 苹果 iPad Air 5 2022款 10.9英寸平板电脑 64GB 4099元（需用券）",
      description:
        "Apple 苹果 iPad Air 5 2022款 10.9英寸平板电脑 64GB 4099元（需用券）,什么值得买甄选出天猫精选优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
      url: "https://www.smzdm.com/p/110208204/",
      urlToImage:
        "https://qny.smzdm.com/202311/09/654bb234ad1e05898.jpg_d250.jpg",
      publishedAt: "2024-04-21T07:56:58Z",
      content:
        "iPad Air iPad Pro M1 USB-C 2 Apple Pencil \r\n M1 iPad Air 5 CPU 60% 2 iPad Air 5 12MP Center Stage 64GB256GB iPad Air 5 5G \r\n5 Touch ID iPad Air 5  Liquid Retina 500nit iPad Pro",
    },
    {
      source: {
        id: null,
        name: "Smzdm.com",
      },
      author: null,
      title:
        "百亿补贴：Apple 苹果 MacBook Air 2020款 M1 芯片版 13.3英寸 轻薄本 8+256 深空灰 4699元",
      description:
        "百亿补贴:Apple 苹果 MacBook Air 2020款 M1 芯片版 13.3英寸 轻薄本 8+256 深空灰 4699元,什么值得买甄选出拼多多优惠促销商品,包括Apple/苹果报价、多少钱等信息,认真生活,好好花钱就上什么值得买。",
      url: "https://www.smzdm.com/p/110192329/",
      urlToImage:
        "https://y.zdmimg.com/202107/01/60dd2ba82c5404349.jpg_d250.jpg",
      publishedAt: "2024-04-21T05:35:33Z",
      content:
        "MacBook Air 13.3 2560x1600 Apple M1 MacBook Air 15 18 \r\nM1 5nm 160 M1 8 CPU 8 GPU 25000 4K 3D M1 Mac 16 11 15 \r\n 8GB 16GB 256GB 512GB1TB 2TB 1.29 30W USB-C 1 MacBook Air 3 40Gb/s 6K Wi-Fi 6",
    },
    {
      source: {
        id: null,
        name: "Smzdm.com",
      },
      author: null,
      title: "百亿补贴：Apple 苹果 iPhone 15 Pro 5G手机 128GB 6348元（需用券）",
      description:
        "玩家之道全新的钛合金边框，有史以来最轻最窄边框的Pro系列，更好更清晰的深度拍照体验。拼多多此款目前活动128GB到手价6348元，256GB到手价7228元，512GB到手价9098元，1TB到手价10698元，近期好价，感兴趣的值友可以入手。",
      url: "https://www.smzdm.com/p/110185095/",
      urlToImage:
        "https://y.zdmimg.com/202309/13/6500b104b5a4f4674.png_d250.jpg",
      publishedAt: "2024-04-21T03:26:34Z",
      content:
        "iPhone 15 Pro 6.1 ProMotion Super Retina XDR 120Hz iOS 17 187 \r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 242835mmiPhone 15 Pro… [+106 chars]",
    },
    {
      source: {
        id: null,
        name: "Smzdm.com",
      },
      author: null,
      title: "百亿补贴：Apple 苹果 iPhone 15 5G智能手机 128GB 4548元（需用券）",
      description:
        "玩家之道升级灵动岛设计，主摄升级4800万像素，A16芯片加持~拼多多此款目前活动售价4748元，下单领取200元优惠券，实付低至4548元，近期好价，感兴趣的值友可以入手。",
      url: "https://www.smzdm.com/p/110184954/",
      urlToImage:
        "https://y.zdmimg.com/202312/27/658bf3f1194f78973.png_d250.jpg",
      publishedAt: "2024-04-21T03:26:34Z",
      content:
        "iPhone 15 IP68 171g7.8mm\r\niPhone 156.1 OLED XDR 2556×1179460ppi2000100%DCI-P360HziPhone 15\r\n A16 6 CPU5GPU 16 iPhone 14203050%LightningUSB-C\r\niPhone 154800f1.62400120021200f2.4 HDR 5\r\nSOS",
    },
    {
      source: {
        id: null,
        name: "Smzdm.com",
      },
      author: null,
      title:
        "百亿补贴：Apple 苹果 iPhone 15 Plus 5G智能手机 128GB 5198元（需用券）",
      description:
        "玩家之道升级灵动岛设计，主摄升级4800万像素，A16芯片加持~拼多多此款目前活动128GB到手价5198元，256GB售价6348元，近期好价，感兴趣的值友可以入手。",
      url: "https://www.smzdm.com/p/110185024/",
      urlToImage:
        "https://qny.smzdm.com/202404/02/660b7eeabb9d32390.png_d250.jpg",
      publishedAt: "2024-04-21T03:26:34Z",
      content:
        "iPhone 15 Plus IP68 201g7.8mm\r\niPhone 15 Plus 6.7 OLED XDR 2796×1290460ppi2000100%DCI-P360HziPhone 15Plus A16 6 CPU5GPU 16 iPhone 14 Plus 263550%LightningUSB-C\r\niPhone 15 Plus 4800f1.62400120021200f2… [+12 chars]",
    },
    {
      source: {
        id: null,
        name: "Smzdm.com",
      },
      author: null,
      title:
        "百亿补贴：Apple 苹果 iPhone 15 Pro Max 5G智能手机 256GB 8098元（需用券）",
      description:
        "玩家之道搭载A17 Pro芯片，更新USB-C接口，使用钛合金边框，潜望式长焦镜头~拼多多此款目前活动256GB到手价8098元；512GB到手价9858元；1TB到手价11498元；近期好价，感兴趣的值友可以入手。",
      url: "https://www.smzdm.com/p/110185175/",
      urlToImage:
        "https://y.zdmimg.com/202310/18/652f78a5437e62917.jpg_d250.jpg",
      publishedAt: "2024-04-21T03:26:34Z",
      content:
        "iPhone 15 Pro Max 6.7ProMotion Super Retina XDR 120Hz iOS 17 iPhone 14 Pro Max 19g\r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 2… [+135 chars]",
    },
    {
      source: {
        id: null,
        name: "Smzdm.com",
      },
      author: null,
      title:
        "百亿补贴：Apple 苹果 iPhone 15 Pro 5G智能手机 256 GB 7278元包邮（需用券）",
      description:
        "拼多多此款目前活动售价7478元，领取200元优惠红包，到手7278元，近期好价。",
      url: "https://www.smzdm.com/p/110208877/",
      urlToImage:
        "https://y.zdmimg.com/202309/13/6500b105fc3444180.png_d250.jpg",
      publishedAt: "2024-04-21T08:09:10Z",
      content:
        "iPhone 15 Pro 6.1 ProMotion Super Retina XDR 120Hz iOS 17 187 \r\niPhone 15 Pro Action Action \r\niPhone 15 Pro A17 Pro 3nm CPU 16 10% 6 GPU 20% iPhone 15 Pro 3A\r\niPhone 15 Pro 48MP 242835mmiPhone 15 Pro… [+106 chars]",
    },
    {
      source: {
        id: null,
        name: "FREDZONE",
      },
      author: "Habib ADECHOKAN",
      title:
        "Apple : une application de calculatrice révolutionnaire bientôt dévoilée lors de la WWDC 2024 ?",
      description:
        "Selon des informations rapportées par AppleInsider, la marque à la pomme s’apprêterait à dévoiler une version entièrement repensée de son application de calculatrice pour Mac loes de la Worldwide Developers’ Conference (WWDC) en juin 2024. Cette mise à jour, …",
      url: "https://www.fredzone.org/apple-application-calculatrice-revolutionnaire-devoilee-wwdc-2024",
      urlToImage:
        "https://www.fredzone.org/wp-content/uploads/2024/04/Calculatrice-Unsplash-1068x580-1.jpg",
      publishedAt: "2024-04-21T09:42:14Z",
      content:
        "Cette mise à jour, prévue pour macOS 15, promet de redéfinir les standards en matière de calculatrices sur ordinateur !\r\nUn design repensé et une interface adaptative\r\nL’une des principales améliorat… [+2189 chars]",
    },
    {
      source: {
        id: null,
        name: "Unlimit-tech.com",
      },
      author: "Sultan Alqahtani",
      title: "أول الصور التي تكشف عن تصميم ساعة APPLE WATCH X القادمة",
      description:
        "هذا الموضوع أول الصور التي تكشف عن تصميم ساعة APPLE WATCH X القادمة ظهر على التقنية بلا حدود.\nبدأت شركة ابل في العمل على تطوير جيل جديد من الساعات الذكية، ولقد كُشِف عن أول الصور ثلاثية الأبعاد التي توضح تصميم إصدار ابل القادم APPLE WATCH X. أكدت عدد من التقا…",
      url: "https://www.unlimit-tech.com/2024/04/%d8%a3%d9%88%d9%84-%d8%a7%d9%84%d8%b5%d9%88%d8%b1-%d8%a7%d9%84%d8%aa%d9%8a-%d8%aa%d9%83%d8%b4%d9%81-%d8%b9%d9%86-%d8%aa%d8%b5%d9%85%d9%8a%d9%85-%d8%b3%d8%a7%d8%b9%d8%a9-apple-watch-x-%d8%a7%d9%84/",
      urlToImage:
        "https://i0.wp.com/www.unlimit-tech.com/wp-content/uploads/APPLE-WATCH-X-1.png?fit=680%2C377&ssl=1",
      publishedAt: "2024-04-21T10:30:27Z",
      content:
        "APPLE WATCH X.\r\n Apple Watch X .\r\n .\r\n@ConceptCentral Apple Watch X .\r\n “Mark Gurman” Apple Watch Series 10 ”Apple Watch X”.\r\n .\r\n.\r\n Apple Watch X .\r\n Watch X .",
    },
    {
      source: {
        id: null,
        name: "The Week Magazine",
      },
      author:
        "theweekonlineeditorsuk@futurenet.com (Julia O'Driscoll, The Week UK)",
      title:
        "Loire Valley Lodges review: sleep, feast and revive in treetop luxury",
      description:
        "Forest hideaway offers chance to relax and reset in Michelin key-winning comfort",
      url: "https://theweek.com/culture-life/travel/loire-valley-lodges-review",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/yNgfcuPARRajaHuy4JgUH-1200-80.png",
      publishedAt: "2024-04-21T07:35:45Z",
      content:
        "The dawn chorus is an idyllic start to any day. But listening to it from the comfort of a bed in a treehouse as you soak up panoramic forest views – now that makes for a truly magical morning. \r\nAnd … [+8572 chars]",
    },
    {
      source: {
        id: null,
        name: "Ozbargain.com.au",
      },
      author: "OZY Bar",
      title:
        "Silicone Cover Case for Apple AirPods 1 2 3 Pro 2nd 3rd Generation (3 Pack) $7.99 Delivered @ AB eBay",
      description:
        "BUY 1, GET 1 AT 25% OFF (add 2 to cart)\n\nMade of high quality tpu & PC which is no odor, shockproof, non-slip, durable.\n\nCutout for charging the airpods from the bottom without remove the case.\n\nCompatible with Wireless Charging.\n\n360° full protection, no nee…",
      url: "https://www.ozbargain.com.au/node/842177",
      urlToImage: "https://files.ozbargain.com.au/n/77/842177x.jpg?h=7074b7c8",
      publishedAt: "2024-04-21T05:33:45Z",
      content:
        "BUY 1, GET 1 AT 25% OFF (add 2 to cart)\r\nMade of high quality tpu &amp; PC which is no odor, shockproof, non-slip, durable.\r\nCutout for charging the airpods from the bottom without remove the case.\r\n… [+264 chars]",
    },
    {
      source: {
        id: null,
        name: "Ushigyu.net",
      },
      author: "@ushigyu",
      title:
        "Amazonで安く買う7つの方法。お得なセールやクーポン、ポイント獲得チャンスを見逃すな！",
      description:
        "日本でも5,000万人以上が利用しているとされるネット通販サイト、Amazon（アマゾン）。 多くの商品が定価よりは安くなっているものの、やはり誰だって可能な限り安く買いたいもの。 そこで、この記事ではAmazonをもう ...",
      url: "https://ushigyu.net/amazon-shopping-tips/",
      urlToImage:
        "https://media.ushigyu.net/wp-content/uploads/2022/05/amazon-buy-cheap-1.jpg",
      publishedAt: "2024-04-21T04:30:33Z",
      content:
        "5,000Amazon\r\nAmazon18Amazon\r\nAmazon\r\nAmazon\r\nAmazon21\r\nKindle\r\nAmazon\r\n2\r\nAmazon2\r\n1Amazon67\r\n2023711122794\r\n2023711127/9\r\n1Amazon\r\nAmazon1112\r\n2023Amazon11220:00 12123:591011/2223\r\n2023Amazon11/2412… [+1992 chars]",
    },
    {
      source: {
        id: null,
        name: "Applech2.com",
      },
      author: "applech2",
      title:
        "AmazonのスマイルSALEで、BelkinのQi2対応ワイヤレス充電パッドやモバイルバッテリー、MagSafeマウントなどの一部製品が過去最安価格で販売中。",
      description:
        "AmazonのスマイルSALEで、BelkinのQi2対応ワイヤレス充電パッドやモバイルバッテリー、MagSafeマウントなどの一部製品が過去最安価格で特選タイムセールとなっています。詳細は以下から。 　Amazon. […]\nThe post AmazonのスマイルSALEで、BelkinのQi2対応ワイヤレス充電パッドやモバイルバッテリー、MagSafeマウントなどの一部製品が過去最安価格で販売中。 first appeared on AAPL Ch..",
      url: "https://applech2.com/archives/20240421-amazon-smile-sale-belkin-2024.html",
      urlToImage:
        "https://applech2.com/wp-content/uploads/2024/04/Amazon-smile-sale-belkin-2024.jpg",
      publishedAt: "2024-04-21T01:45:59Z",
      content:
        "AmazonSALEBelkinQi2MagSafe\r\nAmazon.co.jp20240419Amazon SALE \r\nBelkin27955%OFFApple DockKitBelkin Qi2/MagSafe2-in-1 MagSafe\r\nBelkin 26,910 25,562\r\nAppleDockKitiPhoneMagSafeiPhone0425SALE5%OFF\r\nBelkin … [+2035 chars]",
    },
    {
      source: {
        id: null,
        name: "netzwelt",
      },
      author: "Pascal Wittkowski",
      title:
        "Neue Geheimnisse zum iOS 18-Update aufgedeckt: Apples beliebte App bekommt wohl 2 neue Funktionen",
      description:
        "Mit iOS 18 verpasst Apple iPhones und iPads ein großes Update. Neben der KI spielt dabei auch eine beliebte App eine wichtige Rolle. Die bekommt gleich 2 Funktionen.\nDieser Artikel wurde einsortiert unter \nApple iPhone,Apple,Apple iPad,Technology,Apple iOS - …",
      url: "https://www.netzwelt.de/news/230031-geheimnisse-ios-18-update-aufgedeckt-beliebte-app-bekommt-neue-funktionen-spendiert.html",
      urlToImage:
        "https://img.netzwelt.de/dw1600_dh900_sw1024_sh576_sx0_sy128_sr16x9_nu2/picture/original/2024/04/apple-werkelt-bereits-kraeftig-ios-18-release-termin-grosse-versions-update-noch--402348.jpeg",
      publishedAt: "2024-04-21T09:05:00Z",
      content:
        "APPLE\r\nMit iOS 18 verpasst Apple iPhones und iPads ein großes Update. Neben der KI spielt dabei auch eine beliebte App eine wichtige Rolle. Die bekommt gleich 2 Funktionen.\r\nApple werkelt bereits krä… [+2052 chars]",
    },
    {
      source: {
        id: null,
        name: "netzwelt",
      },
      author: "Marius Müller",
      title:
        "Hautirritationen durch Fitness-Tracker und Smartwatches: Das sagen Garmin, Fitbit und Co.",
      description:
        "Ihr nutzt regelmäßig eine Smartwatch oder einen Fitness-Tracker und leidet unter Hautproblemen am Handgelenk? Wir erklären, woher das kommen kann und wie ihr Irritationen vermeiden könnt.\nDieser Artikel wurde einsortiert unter \nTechnology,Smartwatch,Wearables.",
      url: "https://www.netzwelt.de/news/229916-hautirritationen-fitness-tracker-smartwatches-sagen-garmin-fitbit-co.html",
      urlToImage:
        "https://img.netzwelt.de/dw1600_dh900_sw2000_sh1125_sx0_sy53_sr16x9_nu2/picture/original/2024/04/smartwatch-402018.jpeg",
      publishedAt: "2024-04-21T06:00:00Z",
      content:
        "SMARTWATCH\r\nIhr nutzt regelmäßig eine Smartwatch oder einen Fitness-Tracker und leidet unter Hautproblemen am Handgelenk? Wir erklären, woher das kommen kann und wie ihr Irritationen vermeiden könnt.… [+4212 chars]",
    },
    {
      source: {
        id: null,
        name: "netzwelt",
      },
      author: "Pascal Wittkowski",
      title:
        "Google-Entwickler warnt vor gefährlichem KI-Hype: Pixel-Smartphones sollen anderen Weg gehen",
      description:
        "Für viele Smartphone-Hersteller ist die KI die Allzweckwaffe. Doch in Bezug auf die Kamera birgt sie Gefahren. Google will Pixel-Handys aber nicht zu KI-Monstern machen.\nDieser Artikel wurde einsortiert unter \nGoogle,Smartphone,Hersteller,Handy,Google Pixel 8…",
      url: "https://www.netzwelt.de/news/230043-google-entwickler-warnt-gefaehrlichem-ki-hype-pixel-smartphones-anderen-weg.html",
      urlToImage:
        "https://img.netzwelt.de/dw1600_dh900_sw1024_sh576_sx0_sy58_sr16x9_nu2/picture/original/2024/04/google-will-gaenzlich-ki-verzichten-anders-einsetzen-konkurrenz-402413.jpeg",
      publishedAt: "2024-04-21T09:09:05Z",
      content:
        "GOOGLE\r\nFür viele Smartphone-Hersteller ist die KI die Allzweckwaffe. Doch in Bezug auf die Kamera birgt sie Gefahren. Google will Pixel-Handys aber nicht zu KI-Monstern machen.\r\nAuch Google will für… [+4227 chars]",
    },
    {
      source: {
        id: null,
        name: "Techstage.de",
      },
      author: "Marcel Kappelsberger",
      title:
        "Samsung Galaxy A55 im Test: Großer Akku, Top-OLED-Display & 5 Jahre Updates",
      description:
        "Samsung schafft es mit dem Galaxy A55 wieder, ein starkes Mittelklasse-Smartphone aus der A-Reihe zu präsentieren. Details über die neue Preis-Leistungs-Referenz gibt es im Test.",
      url: "https://www.techstage.de/test/samsung-galaxy-a55-im-test-grosser-akku-top-oled-display-und-5-jahre-updates/m4lep3r#article",
      urlToImage:
        "https://ocdn.eu/pulscms-transforms/1/ajNktkpTURBXy84Y2E4NWZkOTc3MzJkNmY4ZjMyN2FhZWUzZmQ5ZTI1NS5qcGeSlQMAAM0PwM0I3JMFzQSwzQJ2",
      publishedAt: "2024-04-21T04:30:00Z",
      content:
        "Es lässt sich feststellen, dass bestimmte Smartphone-Modelle oder -Reihen von bestimmten Bevölkerungsgruppen bevorzugt werden. Selten sieht man etwa Rentner mit den neusten Gaming-Smartphones wie ein… [+11233 chars]",
    },
    {
      source: {
        id: null,
        name: "Mundodeportivo.com",
      },
      author: "Autor Redacción",
      title:
        "El peculiar contrato de pareja de Endrick y Gabriely Miranda: estas son sus cláusulas",
      description:
        "Endrick, el joven talento brasileño de apenas 17 años, está en boca de todos. No solo por su juego en las filas del Palmeiras, sino también por su relación con la joven modelo Gabriely Miranda. Sin embargo, lo que realmente ha llamado la atención es el contra…",
      url: "https://www.mundodeportivo.com/vaya-mundo/20240421/1002231974/peculiar-contrato-pareja-endrick-gabriely-miranda-son-clausulas-dct.html",
      urlToImage:
        "https://www.mundodeportivo.com/files/og_thumbnail/files/fp/uploads/2024/01/12/65a0f83b466ec.r_d.363-363-0.jpeg",
      publishedAt: "2024-04-21T08:50:54Z",
      content:
        "Endrick, el joven talento brasileño de apenas 17 años, está en boca de todos. No solo por su juego en las filas del Palmeiras, sino también por su relación con la joven modelo Gabriely Miranda. Sin e… [+1447 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Zachary McAuliffe",
      title:
        "Don't Waste Paper This Earth Day, Sign Documents Right on Your iPhone",
      description: "We don't need to bring ink and paper into this.",
      url: "https://www.cnet.com/tech/services-and-software/dont-waste-paper-this-earth-day-sign-documents-right-on-your-iphone/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/09550155d81fdfda1fcae0404e546c6a7c151b6a/hub/2024/04/17/45d8ed85-445f-4e2d-b9ce-5364471624d5/iphone-13-pro-max-sierra-blue.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2024-04-21T10:00:04Z",
      content:
        "Apple has introduced a lot of useful iPhone features with iOS 17 and its updates, like Podcast transcripts and the Journal app. You may not know that in 2015, Apple released iOS 9 with a feature call… [+1897 chars]",
    },
    {
      source: {
        id: null,
        name: "Fxguide.com",
      },
      author: "Mike Seymour",
      title: "Project Arena: Chaos LED Volumes",
      description:
        "Project Arena is a real-time ray tracing solution for virtual production from Chaos.",
      url: "https://www.fxguide.com/quicktakes/project-arena-chaos-led-volumes/",
      urlToImage:
        "https://www.fxguide.com/wp-content/uploads/2024/04/Chaos_featured.jpg",
      publishedAt: "2024-04-21T10:14:17Z",
      content:
        "Project Arena is a real-time ray tracing solution for virtual production from Chaos. The system is still in the alpha stage and is being tested on various key production LED stages. The goal is to ha… [+4755 chars]",
    },
    {
      source: {
        id: null,
        name: "Diariomotor.com",
      },
      author: "Javier López",
      title:
        "Peugeot quiere ir a por Tesla, y lo hace con un compacto eléctrico de 31.000 € y 413 km de autonomía",
      description:
        "Adquirir un coche eléctrico hoy en día en España es una tarea reservada cada vez para más bolsillos, pero solo para unas pocas situaciones. Al fin de cuentas, el requisito de tener cargador en casa resulta imprescindible pero, si lo tenemos, el dilema pasa a …",
      url: "https://www.diariomotor.com/noticia/peugeot-308-e-style-oferta-datos/",
      urlToImage:
        "https://www.diariomotor.com/imagenes/2024/04/peugeot-308-e-style-interior-1062559.jpeg",
      publishedAt: "2024-04-21T10:00:50Z",
      content:
        "Adquirir un coche eléctrico hoy en día en España es una tarea reservada cada vez para más bolsillos, pero solo para unas pocas situaciones. Al fin de cuentas, el requisito de tener cargador en casa r… [+2132 chars]",
    },
    {
      source: {
        id: null,
        name: "N-tv.de",
      },
      author: "n-tv NACHRICHTEN",
      title:
        'Hyatt-Chef im Interview: "Wir profitieren vom Trend zu Luxusreisen"',
      description:
        "Hyatt Hotels ist eine der größten Hotelketten der Welt - und will vor allem im Luxussegment weiter wachsen. In einem ihrer seltenen Interviews sprechen Hyatt-Chef Mark Hoplamazian und Europa-Chef Javier Águila über die Pläne für Deutschland.",
      url: "https://www.n-tv.de/wirtschaft/Wir-profitieren-vom-Trend-zu-Luxusreisen-article24884203.html",
      urlToImage:
        "https://bilder2.n-tv.de/img/incoming/crop24887073/7961326320-cImg_16_9-w1200/2006-05-31T120000Z-507617266-BM2DSSOGOCAA-RTRMADP-3-WORLD-CUP-2006-PREVIEW-HOTEL.jpg",
      publishedAt: "2024-04-21T08:53:29Z",
      content:
        "Hyatt Hotels ist eine der größten Hotelketten der Welt - und will vor allem im Luxussegment weiter wachsen. In einem ihrer seltenen Interviews sprechen Hyatt-Chef Mark Hoplamazian und Europa-Chef Jav… [+10146 chars]",
    },
    {
      source: {
        id: null,
        name: "Leancrew.com",
      },
      author: "Dr. Drang",
      title: "Typing special characters",
      description:
        "A couple of days ago, two tweets appeared in my Mastodon timeline1 that got me thinking about how and why I type special characters on my Mac. The first was from Cabel Sasser,",
      url: "https://leancrew.com/all-this/2024/04/typing-special-characters/",
      urlToImage:
        "https://leancrew.com/all-this/images2024/20240420-Keyboard%20viewer%20with%20option%20key%20pressed.png",
      publishedAt: "2024-04-21T05:01:28Z",
      content:
        "Previous post\r\nApril 21, 2024 at 12:01 AM by Dr. Drang\r\nA couple of days ago, two tweets appeared in my Mastodon timeline1 that got me thinking about how and why I type special characters on my Mac. … [+2418 chars]",
    },
    {
      source: {
        id: null,
        name: "Wattsupwiththat.com",
      },
      author: "Guest Blogger",
      title:
        "Climate Change Weekly #503: Official Temperature Data Isn’t ‘Data’ At All",
      description:
        "In fact, we found that 89 percent of the stations—nearly 9 of every 10—fail to meet the National Weather Service’s own siting requirements …",
      url: "https://wattsupwiththat.com/2024/04/20/climate-change-weekly-503-official-temperature-data-isnt-data-at-all/",
      urlToImage:
        "https://i0.wp.com/wattsupwiththat.com/wp-content/uploads/2024/04/CCW-map-of-us-weather-stations-1-topaz.webp?fit=1024%2C512&ssl=1",
      publishedAt: "2024-04-21T05:00:00Z",
      content:
        "From Heartland Daily News\r\nH. Sterling Burnett\r\nYOU SHOULD SUBSCRIBE TO CLIMATE CHANGE WEEKLY.\r\nIN THIS ISSUE:\r\n<ul><li>Official Temperature Data Isnt Data At All</li><li>Video of the Week: This is h… [+14472 chars]",
    },
    {
      source: {
        id: null,
        name: "Overclockers.ru",
      },
      author: "Nivan",
      title:
        "В следующем iPad Air будет использован мини-LED дисплей вместо ЖК-экрана",
      description:
        "Мини-LED дисплей появится только в 12,9-дюймовом варианте нового iPad Air.",
      url: "https://overclockers.ru/blog/worldnews/show/153186/V-sledujuschem-iPad-Air-budet-ispol-zovan-mini-LED-displej-vmesto-ZhK-ekrana",
      urlToImage: "https://overclockers.ru/st/legacy/blog/432003/506655_O.jpg",
      publishedAt: "2024-04-21T06:34:48Z",
      content:
        "Apple iPad Air - -LED -. .  \r\niPad Air -, -LED , iPad Pro. iPad Air iPad Pro.\r\n, -LED 12,9- iPad Air. , Apple . 11- iPad Air - -.\r\n-LED , . , -, iPad Air . \r\n, -LED -. 12,9- iPad Air . Apple -LED iPa… [+84 chars]",
    },
    {
      source: {
        id: null,
        name: "Overclockers.ru",
      },
      author: "dima0782",
      title: "Lenovo Yoga Slim: ноутбук без вентилятора на Snapdragon X Elite",
      description:
        "Этот ноутбук привлекает внимание своим тонким дизайном и работой без вентиляторов.",
      url: "https://overclockers.ru/blog/techbaza/show/153162/Lenovo-Yoga-Slim-pervyj-noutbuk-bez-ventilyatora-na-Snapdragon-X-Elite",
      urlToImage: "https://overclockers.ru/st/legacy/blog/427135/506566_O.png",
      publishedAt: "2024-04-21T00:50:48Z",
      content:
        'Lenovo Snapdragon X Elite - 14,5- Lenovo Yoga Slim 7. , . , WalkingCat X (Twitter), .\r\n , Lenovo Yoga Slim 14,5" 2024 Snapdragon edition. , 14,5- , . . \r\nQualcomm Snapdragon X Elite, , Intel 13- , 68… [+485 chars]',
    },
    {
      source: {
        id: null,
        name: "Iphone-mania.jp",
      },
      author: "FT729",
      title:
        "Apple Watch Ultra 3が新デジタルクラウン採用で薄型化？特許出願済み",
      description:
        "Apple Watch Ultra 3はApple Watch Ultra 2と基本デザインは共通ながら、特許出願済みの新構造のデジタルクラウンを採用することで内部スペース拡大を実現する可能性があるとの予想が伝えられてい […]",
      url: "https://iphone-mania.jp/news-579022/",
      urlToImage:
        "https://iphone-mania.jp/uploads/2023/07/30/Apple-Watch-Ultra-2-AH.jpg",
      publishedAt: "2024-04-21T09:01:39Z",
      content:
        "Apple Watch Ultra 3Apple Watch Ultra 2\r\nApple20242\r\nApple Watch\r\nApple Watch Series 10Apple Watch \r\nApple Watch Series 10\r\nApple Watch Series 10\r\nSource:Lifewire\r\nPhoto:Apple Hub/Facebook",
    },
    {
      source: {
        id: null,
        name: "Iphone-mania.jp",
      },
      author: "lexi",
      title:
        "Apple Vision Proが手術で活躍！手術中のインターフェースの動画も公開",
      description:
        "Appleの複合現実（MR）ヘッドセットVision Proが、ブラジルで肩腱板断裂の関節鏡手術において使用され、威力を発揮したと伝えられています。動画も公開されており、どのような状況下でデバイスが使用されたのかがわかり […]",
      url: "https://iphone-mania.jp/news-579015/",
      urlToImage:
        "https://iphone-mania.jp/uploads/2024/02/16/Apple-WWCD23-Vision-Pro-with-battery-230605-2.jpg",
      publishedAt: "2024-04-21T06:50:25Z",
      content:
        "AppleMRVision Pro\r\nApple Vision Pro1\r\nVision ProVision Pro\r\nMicrosoft HoloLensApple Vision Pro\r\nVision Pro\r\nApple Vision Pro3D\r\nAppleVision Pro\r\nSource: MacMagazine via AppleInsider\r\nPhoto: Apple",
    },
    {
      source: {
        id: null,
        name: "Iphone-mania.jp",
      },
      author: "lexi",
      title: "iPhoneのNFC、EU域内でのサードパーティー開放間近？",
      description:
        "iPhoneの近距離無線通信（NFC）は、これまでApple Payのみに限定されてきましたが、これが欧州連合（EU）のデジタル市場法（DMA）に抵触するのを憂慮したAppleは、欧州経済領域（EEA）内において自らサー […]",
      url: "https://iphone-mania.jp/news-579019/",
      urlToImage:
        "https://iphone-mania.jp/uploads/2024/04/21/apple_pay__c08w264834sy_og.png",
      publishedAt: "2024-04-21T08:21:42Z",
      content:
        "iPhoneNFCApple PayEUDMAAppleEEAEUReuters\r\niPhoneNFCApple PayEEA\r\nApple2NFCApple Pay1NFC10%\r\nAppleNFC5Reuters\r\nEUDMAEUApp StoreNFC\r\nAppleApple Pay84\r\nSource: Reuters\r\nPhoto: Apple",
    },
    {
      source: {
        id: null,
        name: "VOA News",
      },
      author: "webdesk@voanews.com (Associated Press)",
      title:
        "Apple pulls WhatsApp and Threads from App Store on Beijing's orders",
      description:
        "HONG KONG — Apple said it had removed Meta's WhatsApp messaging app and its Threads social media app from the App Store in China to comply with orders from Chinese authorities.\n\n\nThe apps were removed from the store Friday after Chinese officials cited unspec…",
      url: "https://www.voanews.com/a/apple-pulls-whatsapp-and-threads-from-app-store-on-beijing-s-orders-/7578626.html",
      urlToImage:
        "https://gdb.voanews.com/2190A672-1C2C-422C-922D-EE56DA226498.jpg",
      publishedAt: "2024-04-21T04:32:24Z",
      content:
        "HONG KONG  Apple said it had removed Meta's WhatsApp messaging app and its Threads social media app from the App Store in China to comply with orders from Chinese authorities.\r\nThe apps were removed … [+2313 chars]",
    },
    {
      source: {
        id: null,
        name: "Donanimhaber.com",
      },
      author: "Deniz Çakmak",
      title: "Snapdragon X Elite işlemcili ilk laptoplar 24 Nisan'da gelebilir",
      description:
        "Windows 11 dizüstü bilgisayarlara güç verecek, merakla beklenen Snapdragon X Elite işlemcili ilk laptoplar çok yakında gelebilir. Şİrket, 24 Nisan tarihine işaret eden paylaşımda bulundu.",
      url: "https://www.donanimhaber.com/snapdragon-x-elite-islemcili-ilk-laptoplar-24-nisan-da-gelebilir--176526",
      urlToImage:
        "https://www.donanimhaber.com/images/images/haber/176526/src_340x1912xsnapdragon-x-elite-islemcili-ilk-laptoplar-24-nisan-da-gelebilir.jpg",
      publishedAt: "2024-04-21T07:00:00Z",
      content:
        "a').click(); event.preventDefault();\"&gt;Tam Boyutta GörWindows 11 dizüstü bilgisayarlara güç verecek, merakla beklenen Snapdragon X Elite ilemcili ilk laptoplar çok yaknda gelebilir.  irket X'de \"4/… [+1767 chars]",
    },
    {
      source: {
        id: null,
        name: "The Mac Observer",
      },
      author: "Nick deCourville",
      title: "How To Use Delta Emulator and Play Nintendo Games on iOS",
      description:
        "Gamers, your time is here: the Delta emulator app is now available for iOS, and with it arrives a wealth of emulation and features. This expansive app hosts an impressive selection of classic video game consoles, providing the ability to play thousands of ret…",
      url: "https://www.macobserver.com/tips/how-to/use-delta-emulator-ios/",
      urlToImage:
        "https://www.macobserver.com/wp-content/uploads/2024/04/Use-Delta-Emulator-iOS-10-April-2024-Featured.jpg",
      publishedAt: "2024-04-21T09:44:58Z",
      content:
        "Gamers, your time is here: the Delta emulator app is now available for iOS, and with it arrives a wealth of emulation and features. This expansive app hosts an impressive selection of classic video g… [+7512 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com.mx",
      },
      author: "César Aguilla",
      title:
        '"La próxima escazes será de electricidad": lo anticipó un científico argentino y lo confirmó Elon Musk',
      description:
        "Los cortes de electricidad serán los nuevos retos al que deba enfrentarse la tecnología en unos años, según la visión a futuro de Elon Musk. Durante la Bosch Connected World de 2024, Musk contestó diversas preguntas del público y entre ellas abordó diversas t…",
      url: "https://www.xataka.com.mx/energia/proxima-escazes-sera-electricidad-anticipo-cientifico-argentino-confirmo-elon-musk",
      urlToImage:
        "https://i.blogs.es/5dc202/diseno-sin-titulo-13-/840_560.jpeg",
      publishedAt: "2024-04-21T01:01:29Z",
      content:
        "Los cortes de electricidad serán los nuevos retos al que deba enfrentarse la tecnología en unos años, según la visión a futuro de Elon Musk. Durante la Bosch Connected World de 2024, Musk contestó di… [+5030 chars]",
    },
    {
      source: {
        id: null,
        name: "Linuxlinks.com",
      },
      author: "LinuxLinks",
      title: "8 Best Free and Open Source API Documentation Browsers",
      description:
        "Software developers need all the help possible. One useful tool is a documentation browser. In fact, they can sometimes be a life changer.",
      url: "https://www.linuxlinks.com/best-free-open-source-api-documentation-browsers/",
      urlToImage:
        "https://www.linuxlinks.com/wp-content/uploads/2021/11/7141762.jpg",
      publishedAt: "2024-04-21T01:48:48Z",
      content:
        "Software developers need all the help possible. One useful tool is a documentation browser. In fact, they can sometimes be a life changer.\r\nWhat makes a good API documentation browser? Things like a … [+2516 chars]",
    },
    {
      source: {
        id: null,
        name: "Benchmark.pl",
      },
      author: "Paweł Maziarz",
      title: "Idziesz na randkę? Koniecznie włącz tę funkcję w telefonie",
      description:
        "Jak poprawić bezpieczeństwo przy spotkaniach z nieznajomą osobą? Jest na to sposób! Wystarczy użyć funkcji wbudowanej w naszych telefonach.",
      url: "https://www.benchmark.pl/aktualnosci/ukryta-funkcja-w-telefonie-warto-wlaczyc-jak-idziesz-na-randke.html",
      urlToImage:
        "https://cdn.benchmark.pl/uploads/article/94250/MODERNICON/2f88021f0b4d4818c8b92619ca6d72ea9d1832fd.jpg",
      publishedAt: "2024-04-21T04:40:00Z",
      content:
        "Jak poprawi bezpieczestwo przy spotkaniach z nieznajom osob? Jest na to sposób! Wystarczy uy funkcji wbudowanej w naszych telefonach.\r\nPortale randkowe pomagaj pozna swoj drug poow, jednak zawsze nad… [+1734 chars]",
    },
    {
      source: {
        id: null,
        name: "CNA",
      },
      author: null,
      title: "Bill to ban TikTok in US moves ahead in Congress",
      description:
        "WASHINGTON: The US House of Representatives approved a Bill on Saturday (Apr 20) that would force the wildly popular social media app TikTok to divest from its Chinese parent company ByteDance or be shut out o",
      url: "https://www.channelnewsasia.com/world/tiktok-us-ban-bytedance-forced-sale-congress-4280656",
      urlToImage:
        "https://onecms-res.cloudinary.com/image/upload/s--4Yij5Uys--/fl_relative,g_south_east,l_mediacorp:cna:watermark:2023-11:afp_watermark_14112023,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/one-cms/core/0975075ebe641f8c0a3961eeeb0eb7a94f98745e.jpg?itok=lv0Ag1yi",
      publishedAt: "2024-04-21T00:20:04Z",
      content:
        "Under the Bill, ByteDance would have to sell the app within a year or be excluded from Apple and Google's app stores in the United States.\r\nThe House of Representatives last month approved a similar … [+995 chars]",
    },
    {
      source: {
        id: null,
        name: "Smartmania.cz",
      },
      author: "Dominik Vlasák",
      title:
        "Nevyhovuje vám na iPhonu Apple Pay? V Evropě si můžete vybrat alternativu",
      description:
        "<ul>\n<li>Bezkontaktní platby skrze iPhone se dlouhou dobu omezovaly pouze na službu Apple Pay</li>\n<li>Díky tlaku Evropské unie ovšem toto omezení na území Evropského hospodářského prostoru padlo</li>\n<li>Apple změnu učinil dobrovolně, aby se vyhnul případném…",
      url: "https://smartmania.cz/?p=331660",
      urlToImage:
        "https://smartmania.cz/wp-content/uploads/2024/04/apple-pay-iphone-unsplash.jpg",
      publishedAt: "2024-04-21T10:30:59Z",
      content:
        "<ul><li>Bezkontaktní platby skrze iPhone se dlouhou dobu omezovaly pouze na slubu Apple Pay</li><li>Díky tlaku Evropské unie ovem toto omezení na území Evropského hospodáského prostoru padlo</li><li>… [+1787 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3 ">
        <h2>NewsApp - Top News</h2>
        <div className="row">
          {this.state.articles.map((item) => {
            return (
              <div key={item.url} className="col-md-4">
                <NewsArticle
                  title={item.title.slice(0, 45)}
                  description={item.description.slice(0, 88)}
                  imageUrl={item.urlToImage}
                  newsUrl={item.url}
                  source={item.source}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
