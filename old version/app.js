// ==========================================
// TOKYO ARCHITECTURE - LANDMARK DATABASE
// ==========================================
const LANDMARKS = [
  {
    id: "forum",
    nameJp: "東京国際フォーラム",
    nameEn: "東京國際論壇",
    architect: "Rafael Viñoly",
    year: 1996,
    style: "contemporary",
    styleDisplay: "高科技現代主義 / 鋼結構桁架",
    location: "千代田區 丸之內",
    coords: [35.6778, 139.7640],
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1000&auto=format&fit=crop",
    quote: "「玻璃與鋼鐵的巨大船體，在繁華東京丸之內核心區航行起落。」",
    story: "東京國際論壇是後現代高科技結構主義的代表作。最吸引人的是其 60 公尺高的玻璃中庭，由一條巨型的 300 公尺鋼製「屋脊桁架」懸空橫跨，形如巨大的懸空龍骨或倒扣的船體。四周有將近 2,600 片特製防震玻璃環繞，白天陽光透過極致錯綜的鋼絲與骨架灑滿整座大堂，光影如同波光粼粼的水面。內部設有天橋斜坡環繞而上，供行人在半空中遊走，體驗前所未有的「透明紀念碑式空間」，充分體現了日本空間美學中的「空（Utsuroi）」與流動感。",
    highlights: [
      "高達 60 公尺的玻璃大堂（Glass Hall），被三維鋼製屋頂懸掛桁架懸空橫跨",
      "白天陽光透過 2,600 片防震透明玻璃，在清水混凝土外牆投射出如水波的斑駁光影",
      "多層懸空天橋與斜坡走廊組成的立體步行路網，宛如科幻片中的未來城市"
    ],
    cameraTip: "建議在 4 樓或 7 樓的懸空走廊上，使用 14-24mm 廣角鏡頭朝下拍對角線。在傍晚 6:00 藍色時刻（Blue Hour），中庭內黃色暖光與天窗外的冷藍天色相映，冷暖對比極為震撼。",
    mapsLink: "https://maps.google.com/?q=Tokyo+International+Forum"
  },
  {
    id: "prada",
    nameJp: "プラダ 青山店",
    nameEn: "Prada 青山旗艦店",
    architect: "Herzog & de Meuron",
    year: 2003,
    style: "contemporary",
    styleDisplay: "當代幾何 / 自承重網格幕牆",
    location: "港區 南青山",
    coords: [35.6622, 139.7153],
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=1000&auto=format&fit=crop",
    quote: "「一個多面體的水晶玻璃盒子，使服飾、身體與街景產生多重視角對話。」",
    story: "Prada 青山旗艦店是瑞士建築大師 Herzog & de Meuron 的神來之筆。整棟大樓外觀如同一顆琢磨過的鑽石水晶，完全由綠色的菱形網格玻璃幕牆拼裝而成。其中，玻璃塊面分為凹面、凸面及平面三種。行人在外面走過，或是店內顧客走動，都會看到窗外東京街景與人影被反射、放大與變形，打破了「牆」的內外阻隔，是一棟徹底探索視覺與知覺的頂尖時尚地標。它是東京最著名的「眼球磁鐵」，展現了晶瑩剔透、輕盈流動的幾何張力。",
    highlights: [
      "完全無支撐內柱的菱形網格自承重外鋼結構，將承重與維護結構合二為一",
      "凹面、凸面與平面三種特殊菱形玻璃交織，創造出如波浪般的動態折射",
      "地下廣場的下沉式苔蘚植生牆與青銅欄杆，營造城市綠洲"
    ],
    cameraTip: "傍晚 6:00 燈光亮起時，在對街街角斜射仰拍。使用中焦段（35mm或50mm）能捕捉到玻璃格子內泛出的柔和光暈，玻璃表面的反射會呈現迷人的青綠色與夢幻波紋。",
    mapsLink: "https://maps.google.com/?q=Prada+Aoyama"
  },
  {
    id: "sunnyhills",
    nameJp: "サニーヒルズ 南青山",
    nameEn: "微熱山丘 南青山",
    architect: "隈研吾 (Kengo Kuma)",
    year: 2013,
    style: "organic",
    styleDisplay: "有機自然 / 榫卯工藝「地獄組」",
    location: "港區 南青山",
    coords: [35.6631, 139.7169],
    image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?q=80&w=1000&auto=format&fit=crop",
    quote: "「如同在喧囂都市中長出的一片溫暖木網，讓人如置身森林木屋。」",
    story: "這座為台灣品牌「微熱山丘」打造的東京據點，是隈研吾「弱建築」哲學的精緻體現。整棟大樓被多達 5,000 多根、長達數公里的天然檜木條以 30 度角縱橫包裹，使用的是日本傳統榫卯工藝「地獄組」（Jigoku-gumi）。無任何鐵釘，完全由工匠手工互鎖拼組而成。走進室內，陽光透過複雜交錯的木網灑在水泥地面，散發陣陣檜木芳香，完美隔絕了表參道的都市喧囂。這種精密的立體網格讓建築不再顯得堅硬冷酷，而是如同溫暖的大樹散發光影。",
    highlights: [
      "純手工榫卯互鎖「地獄組」三維格柵結構，不耗費一顆鐵釘",
      "光影篩漏（Komorebi）效果，陽光穿透木格柵縫隙，在室內投射斑駁光斑",
      "將天然檜木的芬芳香氣融入三層茶座空間，提供多感官的建築體驗"
    ],
    cameraTip: "走到側邊的小巷內仰拍木格子交錯的層次。利用黃昏微弱的天光與室內暖黃的照光，能凸顯木構件的立體感與極致的日本手藝美感。",
    mapsLink: "https://maps.google.com/?q=SunnyHills+Minami-Aoyama"
  },
  {
    id: "yoyogi",
    nameJp: "国立代々木競技場",
    nameEn: "國立代代木競技場",
    architect: "丹下健三 (Kenzo Tange)",
    year: 1964,
    style: "modernist",
    styleDisplay: "戰後現代主義 / 雙懸索懸吊結構",
    location: "澀谷區 神南",
    coords: [35.6679, 139.6997],
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1000&auto=format&fit=crop",
    quote: "「鋼索拉起的動態弧線，是日本戰後現代主義的飛躍圖騰。」",
    story: "國立代代木競技場是日本現代建築大師丹下健三載入史冊的世界級傑作。為了 1964 年東京奧運會所建，主體採用極具前衛想像力的懸索懸吊結構——由兩根高聳的鋼筋混凝土主柱拉起兩條巨大鋼纜，屋頂如同帳篷般依懸索傾斜垂掛，內部無一根支柱。這座建築完美結合了西方高新結構工程與日本傳統神社屋脊（巴形）的流線美感，被視為戰後日本重返世界舞台的雄心圖騰。它流動的抛物線外牆在天際線下劃出極優美的動態力量。",
    highlights: [
      "兩條直徑達 33 公分的主懸鋼索拉起的流線屋頂，內部空間完全無柱",
      "將傳統神社屋頂脊線美感與西方現代張拉懸吊力學驚豔融合",
      "以粗獷的清水混凝土主體支柱支撐，展現結構外顯的力學與紀念碑感"
    ],
    cameraTip: "在天橋（原宿站往代代木公園方向）上使用中焦段（50-85mm），將第一、第二體育館以及其張拉的巨大懸索鋼纜連成一個S型曲線構圖，極富雕塑美感。",
    mapsLink: "https://maps.google.com/?q=Yoyogi+National+Gymnasium"
  },
  {
    id: "skytree",
    nameJp: "東京スカイツリー",
    nameEn: "東京晴空塔",
    architect: "日建設計 (Nikken Sekkei)",
    year: 2012,
    style: "contemporary",
    styleDisplay: "新現代主義 / 鋼結構桁架與心柱",
    location: "墨田區 押上",
    coords: [35.7101, 139.8107],
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1000&auto=format&fit=crop",
    quote: "「融合五重塔心柱抗震哲思與現代鋼管桁架的最高天際線。」",
    story: "東京晴空塔高達 634 公尺，是世界第一高自立式電波塔。其建築底部為三角形（代表穩定），向上逐漸過渡為圓形（代表圓滿），形成優美的「鼎立與圓弧」漸變。結構上大膽融入了日本法隆寺五重塔的古老抗震秘訣——「心柱結構」，中空圓筒心柱與外圍桁架分離，在強震時能互相抵消晃動。塔身外觀呈現特殊的「晴空塔白（Skytree White）」——一種融入日本傳統染織「藍白」工藝的淡青色，展現高科技下的古典韻味與大和之美。",
    highlights: [
      "從底部的三角形截面逐漸扭轉上升至頂部的圓形截面，演化出「反り（Sori）」與「起り（Mukuri）」的日本刀刃流線",
      "融合千年前法隆寺五重塔抗震智慧的現代「中心柱懸吊式抗震系統」",
      "融入傳統工藝的「晴空塔白」外觀，折射出和服般典雅柔和的淡青光澤"
    ],
    cameraTip: "走到不遠處的「十間橋」，可以拍到十間川水道中晴空塔的完整倒影。強烈推薦在傍晚點燈後前來，利用小水溝的鏡面反射，金色與粉色交織的塔影極具衝擊力。",
    mapsLink: "https://maps.google.com/?q=Tokyo+Skytree"
  },
  {
    id: "westernart",
    nameJp: "国立西洋美術館",
    nameEn: "國立西洋美術館",
    architect: "Le Corbusier",
    year: 1959,
    style: "modernist",
    styleDisplay: "現代主義 / 粗獷主義預製板",
    location: "台東區 上野公園",
    coords: [35.7154, 139.7758],
    image: "https://images.unsplash.com/photo-1490806863957-334237b24ee2?q=80&w=1000&auto=format&fit=crop",
    quote: "「西方現代主義之父柯比意，在日本土地上種下的純粹幾何種子。」",
    story: "國立西洋美術館是世界文化遺產，也是現代建築巨擘 Le Corbusier 在遠東唯一的設計作品。館內淋漓盡致地貫徹了他提出的「現代建築五要素」：底層挑空（Pilotis）讓出綠色地面、自由立面、自由平面、水平帶窗與屋頂花園。外牆採用由碎石與混凝土預製的掛板，呈現出樸質內斂的顆粒感。入口中庭的「無限生長美術館」螺旋平面配置，展現了幾何理性與大自然和諧共存的卓越想像，對後世安藤忠雄、前川國男等日本巨匠影響深遠。",
    highlights: [
      "勒·柯比意標誌性的「底層挑空（Pilotis）」圓柱，將地面開敞作為城市廣場與綠地",
      "由預製混凝土卵石掛板構成的粗獷灰白外立面，在陽光下呈現顆粒浮雕感",
      "內部獨特的「斜坡（Ramp）」通道與「無限增殖美術館」螺旋狀空間配置"
    ],
    cameraTip: "站在上野公園正門前廣場，利用長焦鏡頭（70-200mm）壓縮透視，將底層挑空圓柱、二樓水平帶窗與地上的羅丹青銅雕像「沉思者」一同框入，展現完美的新古典幾何比例。",
    mapsLink: "https://maps.google.com/?q=National+Museum+of+Western+Art"
  },
  {
    id: "hokusai",
    nameJp: "すみだ北斎美術館",
    nameEn: "墨田北齋美術館",
    architect: "妹島和世 (SANAA)",
    year: 2016,
    style: "contemporary",
    styleDisplay: "當代前衛 / 鏡面折線鋁板",
    location: "墨田區 龜澤",
    coords: [35.6962, 139.8008],
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1000&auto=format&fit=crop",
    quote: "「反射天空與周邊社區色彩的鏡面魔方，消解了美術館與公園的界線。」",
    story: "由普立茲克建築獎得主妹島和世打造的北齋美術館，是一座極富視覺衝擊的幾何魔方。大樓外部包裹著微微鏡面反射的鋁合金板，能將周圍綠色公園、墨田區的晴空以及鄰近住宅區的市井色澤以溫和的霧面反射出來。建築量體被中庭的「三角縫隙裂紋」切割，底層四向通透，附近居民在散步時能自由穿行於大樓下方，徹底打破了傳統美術館「神聖、封閉」的阻隔，完美展現了SANAA「穿透與消解」的輕盈哲學。",
    highlights: [
      "微反射霧面鋁合金金屬面板，折射出溫潤如白磁的雲霧天空色彩",
      "貫穿建築中心的三角漏斗狀「空中透空裂縫」，將光線與穿行視線引入內部",
      "親民的底層透空動線，無正門概念，讓整棟地標完全融為下町街區的日常一部分"
    ],
    cameraTip: "在下午 1:00 - 3:00 陽光斜照時，站在建築的「三角裂縫」通道中，向上仰拍幾何縫隙露出的天空。反射的光影與三角透視具有極高的視覺動態。",
    mapsLink: "https://maps.google.com/?q=The+Sumida+Hokusai+Museum"
  },
  {
    id: "asakusa",
    nameJp: "浅草文化観光センター",
    nameEn: "淺草文化觀光中心",
    architect: "隈研吾 (Kengo Kuma)",
    year: 2012,
    style: "organic",
    styleDisplay: "有機自然 / 天然木格柵疊屋",
    location: "台東區 淺草",
    coords: [35.7110, 139.7963],
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop",
    quote: "" + "「在雷門對街，將七棟江戶時代的傳統平房重疊在一起的立體聚落。」",
    story: "隈研吾在淺草雷門正對面的經典地標。他拋棄了單一玻璃幕牆摩天大樓的概念，而是將七個帶斜屋頂的日式傳統平房「疊加」在一個窄小的地基上。每一層的角度、高度和傾斜方向都各不相同，外壁包裹細密的天然杉木格柵，能調節刺眼的直射日光，形成精美的人字影。整棟樓宛如一座活潑的「江戶立體聚落」。頂樓設有免費木造觀景台，是鳥瞰雷門、仲見世通商店街至晴空塔完美視角的絕佳觀賞地，溫暖木香與江戶文化融為一體。",
    highlights: [
      "七個不同斜度日式傳統屋瓦屋頂拼裝而成的「立體江戶村落」",
      "天然杉木格柵立面，與雷門紅色燈籠及周邊下町歷史氛圍交相輝映",
      "八樓頂部視野極佳的免費開放木平台觀景露台，是俯拍仲見世通的首選"
    ],
    cameraTip: "強烈推薦下午 4:30 登上 8 樓展望露台。向東可以使用中焦段拍出雷門仲見世通長長一條燈火通明的直街，以及右側高聳拔地的晴空塔，古典與現代在同一個鏡框中對比。",
    mapsLink: "https://maps.google.com/?q=Asakusa+Culture+Tourist+Information+Center"
  },
  {
    id: "cathedral",
    nameJp: "東京カテドラル聖マリア大聖堂",
    nameEn: "東京聖瑪利亞大教堂",
    architect: "丹下健三 (Kenzo Tange)",
    year: 1964,
    style: "modernist",
    styleDisplay: "現代主義 / 雙曲混凝土殼體",
    location: "文京區 關口",
    coords: [35.7144, 139.7262],
    image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?q=80&w=1000&auto=format&fit=crop",
    quote: "「清水混凝土折疊而成的巨型十字架，是信仰與幾何力學的崇高回響。」",
    story: "這座天主教聖堂是丹下健三在 1960 年代與代代木競技場並立的另一高峰。教堂由八片呈拋物線弧度（HP殼體）的巨型鋼筋混凝土曲板所組成。從上空俯瞰，八個曲面板完美交織，構成一個巨大的「拉丁十字架」。教堂外立面由不銹鋼板包裹，在晴天時宛如一架降落大地的銀翼；室內完全不加任何裝飾，大膽露出斑駁冰冷的清水混凝土，頂部十字窗射下的神聖天光在空氣中塵埃閃爍，靜謐神聖到了極點。",
    highlights: [
      "由 8 個 HP 曲面薄殼結構（Hyperbolic Paraboloid）組成的懸挑無柱高聳空間",
      "頂部直插雲際的十字架天窗，將天光完全引入陰暗靜謐的祭壇內部",
      "外牆特製反光不銹鋼外板與室內冰冷粗糙裸露水泥的極端感官對比，營造出強烈的超現實神聖體驗"
    ],
    cameraTip: "內部是嚴格禁止拍攝的。建議在清晨，站在外院的聖母洞一側，朝上斜向仰拍巨大混凝土弧牆和教堂頂端銀色十字架的交點，能夠獲得非常有雕塑感的幾何構圖。",
    mapsLink: "https://maps.google.com/?q=St.+Mary's+Cathedral+Tokyo"
  },
  {
    id: "meiji",
    nameJp: "明治神宮",
    nameEn: "明治神宮",
    architect: "伊東忠太 (Chuta Ito)",
    year: 1920,
    style: "traditional",
    styleDisplay: "傳統古典 / 榫卯神社流造",
    location: "澀谷區 代代木",
    coords: [35.6763, 139.6993],
    image: "https://images.unsplash.com/photo-1490806863957-334237b24ee2?q=80&w=1000&auto=format&fit=crop",
    quote: "「隱於七十萬棵人造森林中的古典神社，呈現木榫結構與自然的寂靜共融。」",
    story: "明治神宮建於 1920 年，是東京市中心最大的一片森林神域。其主殿設計由日本首位建築史學家伊東忠太主持。建築採用日本最典型的「流造（Nagare-zukuri）」神社樣式，以優質的日本國產檜木為主體，展現精湛的古典卡榫工藝。神社屋頂鋪滿了厚實的絲柏樹皮（皮葺），兩端起翹的屋簷極具力學弧度。在綠樹掩映下，原木柱身隨時間流逝呈現自然的銀灰色，散發純粹的日本神道「侘寂與寂靜」美學，是東京的「心靈之肺」。",
    highlights: [
      "全殿使用無一鐵釘的日本傳統榫卯斗栱技術，保持純粹的原木質地",
      "由日本全國奉獻的 10 萬棵樹木，經過百年演進構成的人工原始生態林與清幽沙路",
      "日本最大的木造明神鳥居（高度達 12 公尺，採用台灣大雪山千年檜木）"
    ],
    cameraTip: "清晨 7:00 左右前往，此時遊人稀少。在大鳥居下方，用低角度仰拍鳥居，讓晨光透過參天的古木空隙（斜射光）照在石子路上，森林的薄霧能為神社添上神秘的空靈感。",
    mapsLink: "https://maps.google.com/?q=Meiji+Shrine"
  }
];

// ==========================================
// CURATED ITINERARIES DATABASE
// ==========================================
const ITINERARIES = {
  aoyama: {
    name: "表參道/青山前衛時尚與木構線",
    dist: "2.4 公里",
    time: "3 - 4 小時",
    stops: 3,
    steps: [
      {
        num: 1,
        title: "表參道地鐵站 A5 出口 (起點)",
        time: "13:00",
        desc: "從地鐵站出發，這裡出站後即可感受到濃厚的奢華時尚氣氛。沿著青山大道散步，前往第一站。",
        tip: "出口右手邊即是青木淳設計的 Louis Vuitton 旗艦店，可以用手機超廣角拍其波光粼粼的雙層金屬網格立面。",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=600&auto=format&fit=crop"
      },
      {
        num: 2,
        title: "微熱山丘 南青山 (木構榫卯)",
        time: "13:20",
        desc: "隈研吾經典的「弱建築」作品。5,000根檜木以傳統「地獄組」三維卡榫拼成。可在店內品嚐台灣鳳梨酥與熱烏龍茶，體驗被檜木芬芳與溫暖日光包裹的奇幻感受。",
        tip: "建議站在店外對角的小巷，仰拍攝入極致繁複的木構件，並可以進店體驗木質結構下的自然漏光。",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?q=80&w=600&auto=format&fit=crop"
      },
      {
        num: 3,
        title: "Prada 青山旗艦店 (水晶折射)",
        time: "14:30",
        desc: "從微熱山丘步行僅 2 分鐘。Herzog & de Meuron 打造的鑽石玻璃盒子。凹凸不平的菱形玻璃將東京青山街景、店內服飾以千變萬化的角度反射重疊，宛如未來科技水晶宮。",
        tip: "繞到建築後方的下沉式苔蘚花園，可以仰拍玻璃屋頂與石壁的交界，光影極美。",
        image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=600&auto=format&fit=crop"
      },
      {
        num: 4,
        title: "根津美術館 (終點竹廊)",
        time: "15:30",
        desc: "沿著古董大道步行 5 分鐘。隈研吾的另一大作。穿過標誌性的黑色竹林長廊，進入充滿宋代水墨風格的美術館大廳與精美的日式迴遊式庭院，體驗傳統日式枯山水與當代的寂靜融合。",
        tip: "入口著名的竹林長廊（Bamboo Passageway）是絕佳的人像與空間攝影點，推薦使用大光圈拍攝延伸感透視。",
        image: "https://images.unsplash.com/photo-1490806863957-334237b24ee2?q=80&w=600&auto=format&fit=crop"
      }
    ]
  },
  modernism: {
    name: "上野/文京現代主義巨擘人文線",
    dist: "5.6 公里 (含一次地鐵)",
    time: "4 - 5 小時",
    stops: 3,
    steps: [
      {
        num: 1,
        title: "上野公園 / 國立西洋美術館 (起點)",
        time: "09:30",
        desc: "世界文化遺產，現代建築大師勒·柯比意在東亞的孤品。觀察圓形挑空支柱（Pilotis）、清水水泥卵石掛立面，以及內部的坡道動線，感受幾何黃金分割的美感。",
        tip: "中庭內散落著羅丹著名的青銅雕塑。利用底層圓柱將雕塑框入，是柯比意式的經典構圖。",
        image: "https://images.unsplash.com/photo-1490806863957-334237b24ee2?q=80&w=600&auto=format&fit=crop"
      },
      {
        num: 2,
        title: "東京文化會館 (大師弟子的回應)",
        time: "10:45",
        desc: "就在西洋美術館正對面。由柯比意的日本大弟子前川國男設計。巨大的水平鋼筋混凝土懸挑屋頂、大膽的粗獷外牆，與師父的作品展開了跨越庭院的精彩「清水混凝土對話」。",
        tip: "走進大堂，抬頭看高聳的五彩雲狀天花板吊頂與粗獷的水泥柱，採光極佳，富有交響樂般的韻律。",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=600&auto=format&fit=crop"
      },
      {
        num: 3,
        title: "東京聖瑪利亞大教堂 (終點天光)",
        time: "13:30",
        desc: "從上野站搭乘大江戶線/有樂町線至江戶川橋站，步行10分鐘前往。丹下健三極致的神聖力學傑作。8片巨大的拋物線雙曲水泥壁構成高聳的十字架聖殿，內部裸露的水泥散發無窮莊嚴。",
        tip: "下午 2:00 - 3:30 前往，雖室內不能拍照，但可在庭院仰拍銀色金屬巨翼直插藍天，以及聖堂頂部神聖的十字交界。",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?q=80&w=600&auto=format&fit=crop"
      }
    ]
  },
  futuristic: {
    name: "墨田/灣區未來主義與消解線",
    dist: "4.8 公里 (步行加渡輪)",
    time: "4 - 5 小時",
    stops: 3,
    steps: [
      {
        num: 1,
        title: "墨田北齋美術館 (起點鏡魔方)",
        time: "13:30",
        desc: "妹島和世精雕細琢的鏡面金屬魔方。霧面反射著墨田區的市井生活與晴空。建築被三角裂縫切開，底層向公眾敞開，完美展現了SANAA將硬體消解於環境的透明感。",
        tip: "站在大樓正下方的三角通道中往上仰拍，幾何反光的牆面與藍天能構成科幻感極強的構圖。",
        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=600&auto=format&fit=crop"
      },
      {
        num: 2,
        title: "淺草文化觀光中心 (木製立體聚落)",
        time: "15:00",
        desc: "沿著北十間川漫步 15 分鐘跨過隅田川。隈研吾將 7 棟傳統斜屋頂小木屋「疊積木」般組裝在一起，細密的杉木格柵在陽光下投射出江戶時代的溫暖下町木質感。",
        tip: "直奔 8 樓展望露台。向東可一覽無遺地拍下雷門仲見世通商店街的橙紅燈火直街，與遠處晴空塔的絕美合影。",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop"
      },
      {
        num: 3,
        title: "東京晴空塔 / 十間橋 (終點倒影)",
        time: "17:30",
        desc: "步行前往押上晴空塔。融合五重塔抗震哲學與現代桁架結構的 634 公尺世界高塔。隨後步行 10 分鐘抵達十間橋，靜候晴空塔的點燈藍調時刻。",
        tip: "十間橋是拍攝晴空塔最負盛名的機位。使用廣角鏡頭，將相機貼近橋面，可在平靜的十間川水道中拍到晴空塔完整的金色反射倒影。",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=600&auto=format&fit=crop"
      }
    ]
  }
};

// ==========================================
// CORE APP CLASS DEFINITION
// ==========================================
class TokyoArchApp {
  constructor() {
    this.map = null;
    this.markers = [];
    this.activeTheme = localStorage.getItem("theme") || "light";
    this.activeFilter = "all";
    this.activeRoute = "aoyama";
    this.tileLayer = null;
    
    this.initElements();
    this.initTheme();
    this.initLeafletMap();
    this.renderLandmarks();
    this.renderItinerary();
    this.initEvents();
    this.initSakura();
  }

  // Initialize DOM Element References
  initElements() {
    this.themeToggleBtn = document.getElementById("theme-toggle-btn");
    this.searchBtn = document.getElementById("search-action-btn");
    this.searchInput = document.getElementById("landmark-search-input");
    this.cardsContainer = document.getElementById("cards-scroll-list");
    this.filterTabsContainer = document.getElementById("filter-tabs-container");
    
    // Drawer elements
    this.drawerOverlay = document.getElementById("detail-drawer-overlay");
    this.drawerPanel = document.getElementById("detail-drawer-panel");
    this.drawerCloseBtn = document.getElementById("drawer-close-btn");
    this.drawerTitleJp = document.getElementById("drawer-title-jp");
    this.drawerTitleEn = document.getElementById("drawer-title-en");
    this.drawerPhoto = document.getElementById("drawer-photo");
    this.drawerArchitect = document.getElementById("drawer-architect");
    this.drawerYear = document.getElementById("drawer-year");
    this.drawerStyle = document.getElementById("drawer-style");
    this.drawerLocation = document.getElementById("drawer-location");
    this.drawerQuote = document.getElementById("drawer-quote");
    this.drawerStoryText = document.getElementById("drawer-story-text");
    this.drawerHighlights = document.getElementById("drawer-highlights");
    this.drawerCameraTip = document.getElementById("drawer-camera-tip");
    this.drawerMapsLink = document.getElementById("drawer-maps-link");

    // Itinerary elements
    this.itineraryStepsContainer = document.getElementById("itinerary-steps-container");
    this.itinerarySelectorGrid = document.getElementById("itinerary-selector-grid");
    this.routeCurrentName = document.getElementById("route-current-name");
    this.routeDist = document.getElementById("route-dist");
    this.routeTime = document.getElementById("route-time");
    this.routeStops = document.getElementById("route-stops");
    
    // Quick search tags
    this.quickTags = document.querySelectorAll(".hero-quick-tag");
    this.footerLinks = document.querySelectorAll(".footer-links a");
    this.logoBtn = document.getElementById("logo-btn");
  }

  // Set initial theme setup
  initTheme() {
    document.documentElement.setAttribute("data-theme", this.activeTheme);
    this.updateThemeIcon();
  }

  // Update theme toggle icon
  updateThemeIcon() {
    const icon = this.themeToggleBtn.querySelector("i");
    if (this.activeTheme === "dark") {
      icon.className = "fa-solid fa-sun";
    } else {
      icon.className = "fa-solid fa-moon";
    }
  }

  // Initialize Leaflet Map
  initLeafletMap() {
    // Center of Tokyo
    const defaultCenter = [35.6885, 139.7540];
    this.map = L.map("leaflet-map-element", {
      center: defaultCenter,
      zoom: 12,
      scrollWheelZoom: false
    });

    this.updateMapTiles();
  }

  // Dynamic swap tiles when changing dark/light
  updateMapTiles() {
    if (this.tileLayer) {
      this.map.removeLayer(this.tileLayer);
    }

    // Elegant CartoDB styles matching the Wabi/Charcoal theme perfectly
    const tileUrl = this.activeTheme === "dark" 
      ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

    this.tileLayer = L.tileLayer(tileUrl, {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(this.map);
  }

  // Render Map Pin Markers and Bind Synchronization
  renderMapMarkers(filteredData) {
    // Clear old markers
    this.markers.forEach(m => this.map.removeLayer(m));
    this.markers = [];

    if (filteredData.length === 0) return;

    const bounds = [];

    filteredData.forEach(item => {
      // Custom markers with styled HTML inside
      const customIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div class="marker-pin-wrapper" id="pin-${item.id}"></div>`,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -30]
      });

      const popupContent = `
        <div class="map-popup-card">
          <img src="${item.image}" alt="${item.nameEn}">
          <h4>${item.nameEn}</h4>
          <p>${item.architect} • ${item.year}</p>
          <div class="popup-link" onclick="window.app.openLandmarkDrawer('${item.id}')">
            <span>瀏覽細節</span> <i class="fa-solid fa-circle-chevron-right"></i>
          </div>
        </div>
      `;

      const marker = L.marker(item.coords, { icon: customIcon })
        .bindPopup(popupContent, { className: 'custom-map-popup', minWidth: 200 })
        .addTo(this.map);

      // Marker click maps interaction
      marker.on('click', () => {
        this.highlightCard(item.id);
      });

      marker.landmarkId = item.id;
      this.markers.push(marker);
      bounds.push(item.coords);
    });

    // Auto fit map bounding box
    if (bounds.length > 0) {
      this.map.fitBounds(bounds, { padding: [40, 40] });
    }
  }

  // Render landmark lists to scroll panel
  renderLandmarks() {
    const searchVal = this.searchInput.value.trim().toLowerCase();
    
    // Filter array
    const filtered = LANDMARKS.filter(item => {
      const matchStyle = this.activeFilter === "all" || item.style === this.activeFilter;
      const matchSearch = !searchVal || 
        item.nameEn.toLowerCase().includes(searchVal) || 
        item.nameJp.includes(searchVal) || 
        item.architect.toLowerCase().includes(searchVal) || 
        item.location.toLowerCase().includes(searchVal) ||
        item.styleDisplay.toLowerCase().includes(searchVal);
      
      return matchStyle && matchSearch;
    });

    // Clear old HTML
    this.cardsContainer.innerHTML = "";

    if (filtered.length === 0) {
      this.cardsContainer.innerHTML = `
        <div class="empty-explorer-state">
          <i class="fa-solid fa-wind"></i>
          <h3>找不到相符的建築地標</h3>
          <p>請嘗試其他關鍵字，或是調整風格分類標籤。</p>
          <button class="hero-search-btn" onclick="window.app.resetFilters()">重設全部篩選</button>
        </div>
      `;
      this.renderMapMarkers([]);
      return;
    }

    // Generate cards HTML
    filtered.forEach(item => {
      const card = document.createElement("article");
      card.className = "landmark-card";
      card.id = `card-${item.id}`;
      card.setAttribute("data-id", item.id);

      card.innerHTML = `
        <div class="card-img-wrapper">
          <img src="${item.image}" alt="${item.nameEn}">
          <span class="card-tag">${item.styleDisplay.split(" / ")[0]}</span>
        </div>
        <div class="card-body">
          <div>
            <div class="card-header-meta">
              <span class="card-location"><i class="fa-solid fa-map-pin"></i> ${item.location}</span>
              <span class="card-meta-year">${item.year} 年</span>
            </div>
            <div class="card-title-group">
              <p class="card-jp-title">${item.nameJp}</p>
              <h3 class="card-en-title">${item.nameEn}</h3>
            </div>
            <p class="card-architect"><i class="fa-solid fa-compass-drafting"></i> ${item.architect}</p>
          </div>
          <div class="card-footer">
            <button class="card-btn" onclick="event.stopPropagation(); window.app.openLandmarkDrawer('${item.id}')">
              <span>詳細探索</span>
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      `;

      // Card clicks sync map marker
      card.addEventListener("click", () => {
        this.selectLandmarkFromCard(item.id);
      });

      this.cardsContainer.appendChild(card);
    });

    // Render interactive pins
    this.renderMapMarkers(filtered);
  }

  // Card click sync Leaflet map center & popup
  selectLandmarkFromCard(id) {
    // Remove all card actives
    document.querySelectorAll(".landmark-card").forEach(c => c.classList.remove("active"));
    
    const cardEl = document.getElementById(`card-${id}`);
    if (cardEl) {
      cardEl.classList.add("active");
    }

    const landmark = LANDMARKS.find(l => l.id === id);
    if (landmark) {
      // Pan map
      this.map.setView(landmark.coords, 14, { animate: true, duration: 0.8 });
      
      // Open popup
      const marker = this.markers.find(m => m.landmarkId === id);
      if (marker) {
        marker.openPopup();
        
        // Highlight custom Pin wrapper
        document.querySelectorAll(".marker-pin-wrapper").forEach(p => p.classList.remove("active"));
        const pinWrapper = document.getElementById(`pin-${id}`);
        if (pinWrapper) pinWrapper.classList.add("active");
      }

      // Update hero showcase preview instantly
      this.updateHeroShowcase(landmark);
    }
  }

  // Update Hero Showcase Visual Badge
  updateHeroShowcase(landmark) {
    const showcaseImg = document.getElementById("hero-showcase-img");
    const showcaseTitle = document.getElementById("hero-showcase-title");
    const showcaseMeta = document.getElementById("hero-showcase-meta");

    if (showcaseImg && showcaseTitle && showcaseMeta) {
      // Fade transition effect
      showcaseImg.style.opacity = 0.3;
      setTimeout(() => {
        showcaseImg.src = landmark.image;
        showcaseTitle.textContent = landmark.nameEn;
        showcaseMeta.textContent = `${landmark.architect}, ${landmark.year}`;
        showcaseImg.style.opacity = 1;
      }, 300);
    }
  }

  // Sync Highlight Card in right panel when clicking pins
  highlightCard(id) {
    document.querySelectorAll(".landmark-card").forEach(c => c.classList.remove("active"));
    
    const cardEl = document.getElementById(`card-${id}`);
    if (cardEl) {
      cardEl.classList.add("active");
      // Scroll smoothly inside cards container
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    const pinWrapper = document.getElementById(`pin-${id}`);
    if (pinWrapper) {
      document.querySelectorAll(".marker-pin-wrapper").forEach(p => p.classList.remove("active"));
      pinWrapper.classList.add("active");
    }
  }

  // Open side drawer panel with sliding effects
  openLandmarkDrawer(id) {
    const item = LANDMARKS.find(l => l.id === id);
    if (!item) return;

    this.drawerTitleJp.textContent = item.nameJp;
    this.drawerTitleEn.textContent = item.nameEn;
    this.drawerPhoto.src = item.image;
    this.drawerArchitect.textContent = item.architect;
    this.drawerYear.textContent = `${item.year} 年`;
    this.drawerStyle.textContent = item.styleDisplay;
    this.drawerLocation.textContent = item.location;
    this.drawerQuote.textContent = item.quote;
    this.drawerStoryText.textContent = item.story;
    this.drawerCameraTip.textContent = item.cameraTip;
    this.drawerMapsLink.href = item.mapsLink;

    // Highlights list bullet points
    this.drawerHighlights.innerHTML = "";
    item.highlights.forEach(h => {
      const li = document.createElement("li");
      li.innerHTML = `<i class="fa-solid fa-angle-right"></i> ${h}`;
      this.drawerHighlights.appendChild(li);
    });

    // CSS class activation trigger animations
    this.drawerOverlay.classList.add("open");
    this.drawerPanel.classList.add("open");
    document.body.style.overflow = "hidden"; // disable body scrolls
  }

  // Slide drawer panel out
  closeLandmarkDrawer() {
    this.drawerOverlay.classList.remove("open");
    this.drawerPanel.classList.remove("open");
    document.body.style.overflow = ""; // restore body scroll
  }

  // Render curating steps routes
  renderItinerary() {
    const route = ITINERARIES[this.activeRoute];
    if (!route) return;

    this.routeCurrentName.innerHTML = `<i class="fa-solid fa-route"></i> ${route.name}`;
    this.routeDist.textContent = route.dist;
    this.routeTime.textContent = route.time;
    this.routeStops.textContent = `${route.stops} 處地標`;

    this.itineraryStepsContainer.innerHTML = "";

    route.steps.forEach(step => {
      const stepNode = document.createElement("div");
      stepNode.className = "route-step-node";

      stepNode.innerHTML = `
        <div class="route-step-marker">${step.num}</div>
        <div class="route-step-card">
          <div class="route-step-info">
            <div class="route-step-header">
              <span class="route-step-time"><i class="fa-solid fa-clock"></i> 預估朝聖時間：${step.time}</span>
              <h4 class="route-step-title" onclick="window.app.focusStepLandmark('${step.title}')">${step.title}</h4>
              <p class="route-step-desc">${step.desc}</p>
            </div>
            <div class="route-step-tip">
              <i class="fa-solid fa-lightbulb"></i>
              <p><strong>大師觀賞點：</strong>${step.tip}</p>
            </div>
          </div>
          <div class="route-step-img">
            <img src="${step.image}" alt="${step.title}">
          </div>
        </div>
      `;

      this.itineraryStepsContainer.appendChild(stepNode);
    });
  }

  // Clicking an itinerary step title focuses on explorer map
  focusStepLandmark(title) {
    // Attempt matching title with landmarks
    const cleanTitle = title.split(" (")[0];
    const match = LANDMARKS.find(l => l.nameEn.includes(cleanTitle) || cleanTitle.includes(l.nameEn) || l.nameEn === cleanTitle);
    
    if (match) {
      // Smooth scroll back to Map Explorer section
      const mapSection = document.getElementById("explorer");
      if (mapSection) {
        mapSection.scrollIntoView({ behavior: 'smooth' });
      }
      
      // Delay selecting landmark card for scroll to settle
      setTimeout(() => {
        this.selectLandmarkFromCard(match.id);
      }, 500);
    }
  }

  // Clear filters & input text
  resetFilters() {
    this.searchInput.value = "";
    this.activeFilter = "all";
    
    // Reset active category filter classes
    document.querySelectorAll(".filter-tab").forEach(tab => {
      tab.classList.remove("active");
      if (tab.getAttribute("data-style") === "all") tab.classList.add("active");
    });

    this.renderLandmarks();
  }

  // Setup dynamic interactive Event Listeners
  initEvents() {
    // Theme toggle button click
    this.themeToggleBtn.addEventListener("click", () => {
      this.activeTheme = this.activeTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", this.activeTheme);
      this.initTheme();
      this.updateMapTiles();
      this.renderLandmarks(); // updates markers matching map color tiles
    });

    // Sidebar Close click
    this.drawerCloseBtn.addEventListener("click", () => this.closeLandmarkDrawer());
    this.drawerOverlay.addEventListener("click", () => this.closeLandmarkDrawer());

    // Explorer Category Filter buttons clicks
    this.filterTabsContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-tab");
      if (!btn) return;

      document.querySelectorAll(".filter-tab").forEach(tab => tab.classList.remove("active"));
      btn.classList.add("active");

      this.activeFilter = btn.getAttribute("data-style");
      this.renderLandmarks();
    });

    // Search bar triggers
    this.searchBtn.addEventListener("click", () => this.renderLandmarks());
    this.searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.renderLandmarks();
    });
    this.searchInput.addEventListener("input", () => {
      // Instant query updates
      this.renderLandmarks();
    });

    // Quick tag clicks triggers search inputs
    this.quickTags.forEach(tag => {
      tag.addEventListener("click", () => {
        const query = tag.getAttribute("data-tag");
        this.searchInput.value = query;
        this.renderLandmarks();
        
        // Auto scroll to explorer section
        document.getElementById("explorer").scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Itinerary selector button card click switching
    this.itinerarySelectorGrid.addEventListener("click", (e) => {
      const card = e.target.closest(".itinerary-selector-card");
      if (!card) return;

      document.querySelectorAll(".itinerary-selector-card").forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      this.activeRoute = card.getAttribute("data-route");
      this.renderItinerary();
    });

    // Timeline Node clicks triggers category tags filter & centering landmarks
    document.querySelectorAll(".timeline-node").forEach(node => {
      node.addEventListener("click", () => {
        document.querySelectorAll(".timeline-node").forEach(n => n.classList.remove("active"));
        node.classList.add("active");

        const epochStyle = node.getAttribute("data-epoch");
        
        // Match style mappings
        let styleTag = "all";
        if (epochStyle === "traditional") styleTag = "traditional";
        else if (epochStyle === "metabolism") styleTag = "modernist";
        else if (epochStyle === "hightech") styleTag = "contemporary";
        else if (epochStyle === "organic") styleTag = "organic";

        // Scroll to explorer
        document.getElementById("explorer").scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(() => {
          this.activeFilter = styleTag;
          // Sync category active button state
          document.querySelectorAll(".filter-tab").forEach(tab => {
            tab.classList.remove("active");
            if (tab.getAttribute("data-style") === styleTag) tab.classList.add("active");
          });
          this.renderLandmarks();
        }, 500);
      });
    });

    // Footer link clicks centering landmarks or triggers tag searches
    this.footerLinks.forEach(link => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("data-target");
        const tagQuery = link.getAttribute("data-tag");

        if (targetId) {
          e.preventDefault();
          document.getElementById("explorer").scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            this.resetFilters();
            this.selectLandmarkFromCard(targetId);
          }, 600);
        } else if (tagQuery) {
          e.preventDefault();
          this.searchInput.value = tagQuery;
          this.activeFilter = "all";
          document.getElementById("explorer").scrollIntoView({ behavior: 'smooth' });
          setTimeout(() => {
            // Update active tabs
            document.querySelectorAll(".filter-tab").forEach(tab => {
              tab.classList.remove("active");
              if (tab.getAttribute("data-style") === "all") tab.classList.add("active");
            });
            this.renderLandmarks();
          }, 600);
        }
      });
    });

    // Logo click triggers return to top & resets filters
    this.logoBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => {
        this.resetFilters();
      }, 500);
    });

    // Simple scroll spy tracking for navbar links highlighting
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY + 100;
      
      const sections = [
        { id: "explorer", el: document.getElementById("nav-explore") },
        { id: "timeline", el: document.getElementById("nav-history") },
        { id: "itineraries", el: document.getElementById("nav-itinerary") },
        { id: "tools", el: document.getElementById("nav-guide") }
      ];

      sections.forEach(sec => {
        const target = document.getElementById(sec.id);
        if (target) {
          const top = target.offsetTop;
          const height = target.offsetHeight;
          
          if (scrollPos >= top && scrollPos < top + height) {
            document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
            sec.el.classList.add("active");
          }
        }
      });
    });
  }

  // Floating Sakura cherry blossom falling physics simulation
  initSakura() {
    const container = document.getElementById("sakura-container");
    if (!container) return;

    const count = 15; // Moderate counts to preserve extreme fluid frame rates
    for (let i = 0; i < count; i++) {
      const petal = document.createElement("div");
      petal.className = "sakura-petal";
      
      // Random physics layout
      const left = Math.random() * 100; // viewport %
      const delay = Math.random() * 12; // seconds delay
      const duration = 8 + Math.random() * 10; // seconds speed
      const size = 6 + Math.random() * 8; // width px

      petal.style.left = `${left}%`;
      petal.style.top = `-20px`;
      petal.style.width = `${size}px`;
      petal.style.height = `${size * 1.4}px`;
      petal.style.animationDelay = `${delay}s`;
      petal.style.animationDuration = `${duration}s`;
      
      // Subtle variations in rotation angles
      const rot = Math.random() * 360;
      petal.style.transform = `rotate(${rot}deg)`;

      container.appendChild(petal);
    }
  }
}

// Global initialization
window.addEventListener("DOMContentLoaded", () => {
  window.app = new TokyoArchApp();
});
