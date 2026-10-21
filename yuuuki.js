const karutaData = [
    { upper: "<span class='highlight'>あきの</span>たの かりほのいほの とまをあらみ", lower: "わがころもではつゆにぬれつつ", length: 16},
    { upper: "<span class='highlight'>はるす</span>ぎて なつきにけらし しろたへの", lower: "ころもほすてふあまのかぐやま" , length: 4},
    { upper: "<span class='highlight'>あし</span>びきの やまどりのをの しだりをの", lower: "ながながしよをひとりかもねむ" , length: 16},
    { upper: "<span class='highlight'>たご</span>のうらに うちいでてみれば しろたへの", lower: "ふじのたかねにゆきはふりつつ" , length: 6},
    { upper: "<span class='highlight'>おく</span>やまに もみぢふみわけ なくしかの", lower: "こゑきくときぞあきはかなしき" , length: 7},
    { upper: "<span class='highlight'>かさ</span>さぎの わたせるはしに おくしもの", lower: "しろきをみればよぞふけにける", length: 4 },
    { upper: "<span class='highlight'>あまの</span>はら ふりさけみれば かすがなる", lower: "みかさのやまにいでしつきかも", length: 16 },
    { upper: "<span class='highlight'>わがい</span>ほは みやこのたつみ しかぞすむ", lower: "よをうぢやまとひとはいふなり" , length: 7},
    { upper: "<span class='highlight'>はなの</span>いろは うつりにけりな いたづらに", lower: "わがみよにふるながめせしまに" , length: 4},
    { upper: "<span class='highlight'>これ</span>やこの ゆくもかへるも わかれては", lower: "しるもしらぬもあふさかのせき" , length: 6},
    { upper: "<span class='highlight'>わたのはら や</span>そしまかけて こぎいでぬと", lower: "ひとにはつげよあまのつりぶね" , length: 7},
    { upper: "<span class='highlight'>あまつ</span>かぜ くものかよひぢ ふきとぢよ", lower: "をとめのすがたしばしとどめむ" , length: 16},
    { upper: "<span class='highlight'>つく</span>ばねの みねよりおつる みなのがは", lower: "こひぞつもりてふちとなりぬる" , length: 2},
    { upper: "<span class='highlight'>みち</span>のくの しのぶもぢずり たれゆゑに", lower: "みだれそめにしわれならなくに" , length: 5},
    { upper: "<span class='highlight'>きみがため は</span>るののにいでて わかなつむ", lower: "わがころもでにゆきはふりつつ" , length: 3},
    { upper: "<span class='highlight'>たち</span>わかれ いなばのやまの みねにおふる", lower: "まつとしきかばいまかへりこむ" , length: 6},
    { upper: "<span class='highlight'>ちは</span>やぶる かみよもきかず たつたがは", lower: "からくれないにみづくくるとは" , length: 3},
    { upper: "<span class='highlight'>す</span>みのえの きしによるなみ よるさへや", lower: "ゆめのかよひぢひとめよくらむ" , length: 1},
    { upper: "<span class='highlight'>なにはが</span>た みじかきあしの ふしのまも", lower: "あはでこのよをすぐしてよとや", length: 8 },
    { upper: "<span class='highlight'>わび</span>ぬれば いまはたおなじ なにはなる", lower: "みをつくしてもあはむとぞおもふ" , length: 7},
    { upper: "<span class='highlight'>いまこ</span>んと いひしばかりに ながつきの", lower: "ありあけのつきをまちいでつるかな" , length: 3},
    { upper: "<span class='highlight'>ふ</span>くからに あきのくさきの しをるれば", lower: "むべやまかぜをあらしといふらむ" , length: 1},
    { upper: "<span class='highlight'>つき</span>みれば ちぢにものこそ かなしけれ", lower: "わがみひとつのあきにはあらねど" , length: 2},
    { upper: "<span class='highlight'>この</span>たびは ぬさもとりあへず たむけやま", lower: "もみぢのにしきかみのまにまに" , length: 6},
    { upper: "<span class='highlight'>なにし</span>おはば あふさかのせきの さねかづら", lower: "ひとにしられでくるよしもがな" , length: 8},
    { upper: "<span class='highlight'>をぐ</span>らやま みねのもみぢば こころあらば", lower: "いまひとたびのみゆきまたなむ" , length: 7},
    { upper: "<span class='highlight'>みかの</span>はら わきてながるる いづみがは", lower: "いつみきとてかこひしかるらむ", length: 5 },
    { upper: "<span class='highlight'>やまざ</span>とは ふゆぞさびしさ まさりける", lower: "ひとめもくさもかれぬとおもへば" , length: 4,},
    { upper: "<span class='highlight'>こころあ</span>てに をらばやをらむ はつしもの", lower: "おきまどはせるしらぎくのはな" , length: 6},
    { upper: "<span class='highlight'>ありあ</span>けの つれなくみえし わかれより", lower: "あかつきばかりうきものはなし", length: 16 },
    { upper: "<span class='highlight'>あさぼらけ あ</span>りあけのつきと みるまでに", lower: "よしののさとにふれるしらゆき", length: 16 },
    { upper: "<span class='highlight'>やまが</span>はに かぜのかけたる しがらみは", lower: "ながれもあへぬもみぢなりけり" , length: 4},
    { upper: "<span class='highlight'>ひさ</span>かたの ひかりのどけき はるのひに", lower: "しづごころなくはなのちるらむ" , length: 3},
    { upper: "<span class='highlight'>たれ</span>をかも しるひとにせむ たかさごの", lower: "まつもむかしのともならなくに" , length: 6},
    { upper: "<span class='highlight'>ひとは</span>いさ こころもしらず ふるさとは", lower: "はなぞむかしのかににほひける", length: 3 },
    { upper: "<span class='highlight'>なつ</span>のよは まだよひながら あけぬるを", lower: "くものいづこにつきやどるらむ" , length: 8},
    { upper: "<span class='highlight'>しら</span>つゆに かぜのふきしく あきののは", lower: "つらぬきとめぬたまぞちりける", length: 2 },
    { upper: "<span class='highlight'>わすら</span>るる みをばおもはず ちかひてし ", lower: "ひとのいのちのをしくもあるかな" , length: 7},
    { upper: "<span class='highlight'>あさぢ</span>ふの をののしのはら しのぶれど", lower: "あまりてなどかひとのこひしき" , length: 16},
    { upper: "<span class='highlight'>しの</span>ぶれど いろにいでにけり わがこひは", lower: "ものやおもふとひとのとふまで" , length: 2},
    { upper: "<span class='highlight'>こひ</span>すてふ わがなはまだき たちにけり", lower: "ひとしれずこそおもひそめしか" , length: 6},
    { upper: "<span class='highlight'>ちぎりき</span>な かたみにそでを しぼりつつ", lower: "すゑのまつやまなみこさじとは" , length: 3},
    { upper: "<span class='highlight'>あひ</span>みての のちのこころに くらぶれば", lower: "むかしはものおもはざりけり" , length: 16},
    { upper: "<span class='highlight'>あふこ</span>との たえてしなくば なかなかに", lower: "ひとをもみをもうらみざらまし" , length: 7},
    { upper: "<span class='highlight'>あはれ</span>とも いふべきひとは おもほえで", lower: "みのいたづらになりぬべきかな" , length: 16},
    { upper: "<span class='highlight'>ゆら</span>のとを わたるふなびと かぢをたえ", lower: "ゆくへもしらぬこひのみちかな" , length: 2},
    { upper: "<span class='highlight'>やへ</span>むぐら しげれるやどの さびしさに", lower: "ひとこそみえねあきはきにけり", length: 4 },
    { upper: "<span class='highlight'>かぜを</span>いたみ いはうつなみの おのれのみ", lower: "くだけてものをおもふころかな", length: 4 },
    { upper: "<span class='highlight'>みかき</span>もり ゑじのたくひの よるはもえ", lower: "ひるはきえつつものをこそおもへ" , length: 5},
    { upper: "<span class='highlight'>きみがため を</span>しからざりし いのちさへ", lower: "ながくもがなとおもひけるかな" , length: 3},
    { upper: "<span class='highlight'>かく</span>とだに えやはいぶきの さしもぐさ", lower: "さしもしらじなもゆるおもひを" , length: 4},
    { upper: "<span class='highlight'>あけ</span>ぬれば くるるものとは しりながら", lower: "なほうらめしきあさぼらけかな", length: 16},
    { upper: "<span class='highlight'>なげき</span>つつ ひとりぬるよの あくるまは", lower: "いかにひさしきものとかはしる" , length: 8},
    { upper: "<span class='highlight'>わすれ</span>じの ゆくすゑまでは かたければ", lower: "けふをかぎりのいのちともがな" , length: 7},
    { upper: "<span class='highlight'>たき</span>のおとは たえてひさしく なりぬれど", lower: "なこそながれてなほきこえけれ" , length: 6},
    { upper: "<span class='highlight'>あらざ</span>らむ このよのほかの おもひでに", lower: "いまひとたびのあふこともがな" , length: 16},
    { upper: "<span class='highlight'>め</span>ぐりあひて みしやそれとも わかぬまに", lower: "くもがくれにしよはのつきかな" , length: 1},
    { upper: "<span class='highlight'>ありま</span>やま ゐなのささはら かぜふけば", lower: "いでそよひとをわすれやはする" , length: 16},
    { upper: "<span class='highlight'>やす</span>らはで ねなましものを さよふけて", lower: "かたぶくまでのつきをみしかな" , length: 4},
    { upper: "<span class='highlight'>おほえ</span>やま いくののみちの とほければ", lower: "まだふみもみずあまのはしだて" , length: 7},
    { upper: "<span class='highlight'>いに</span>しへの ならのみやこの やへざくら", lower: "けふここのへににほひぬるかな" , length: 3},
    { upper: "<span class='highlight'>よを</span>こめて とりのそらねは はかるとも", lower: "よにあふさかのせきはゆるさじ" , length: 4},
    { upper: "<span class='highlight'>いまは</span>ただ おもひたえなむ とばかりを", lower: "ひとづてならでいふよしもがな" , length: 3},
    { upper: "<span class='highlight'>あさぼらけ う</span>ぢのかはぎり たえだえに", lower: "あらはれわたるせぜのあじろぎ" , length: 16},
    { upper: "<span class='highlight'>うら</span>みわび ほさぬそでだに あるものを", lower: "こひにくちなむなこそをしけれ" , length: 2},
    { upper: "<span class='highlight'>もろ</span>ともに あはれとおもへ やまざくら", lower: "はなよりほかにしるひともなし" , length: 2},
    { upper: "<span class='highlight'>はるの</span>よの ゆめばかりなる たまくらに", lower: "かひなくたたむなこそをしけれ" , length: 4},
    { upper: "<span class='highlight'>こころに</span>も あらでうきよに ながらへば", lower: "こひしかるべきよはのつきかな" , length: 6},
    { upper: "<span class='highlight'>あらし</span>ふく みむろのやまの もみぢばは", lower: "たつたのかはのにしきなりけり" , length: 16},
    { upper: "<span class='highlight'>さ</span>びしさに やどをたちいでて ながむれば", lower: "いづこもおなじあきのゆふぐれ" , length: 1},
    { upper: "<span class='highlight'>ゆふ</span>されば かどたのいなば おとづれて", lower: "あしのまろやにあきかぜぞふく" , length: 2},
    { upper: "<span class='highlight'>おと</span>にきく たかしのはまの あだなみは", lower: "かけじやそでのぬれもこそすれ" , length: 7},
    { upper: "<span class='highlight'>たか</span>さごの をのへのさくら さきにけり", lower: "とやまのかすみたたずもあらなむ", length: 6 },
    { upper: "<span class='highlight'>うか</span>りける ひとをはつせの やまおろしよ", lower: "はげしかれとはいのらぬものを" , length: 2},
    { upper: "<span class='highlight'>ちぎりお</span>きし させもがつゆを いのちにて", lower: "あはれことしのあきもいぬめり" , length: 3},
    { upper: "<span class='highlight'>わたのはら こ</span>ぎいでてみれば ひさかたの", lower: "くもゐにまがふおきつしらなみ" , length: 7},
    { upper: "<span class='highlight'>せ</span>をはやみ いはにせかるる たきがはの", lower: "われてもすゑにあはむとぞおもふ" , length: 1},
    { upper: "<span class='highlight'>あはぢ</span>しま かよふちどりの なくこゑに", lower: "いくよねざめぬすまのせきもり" , length: 16},
    { upper: "<span class='highlight'>あきか</span>ぜに たなびくくもの たえまより", lower: "もれいづるつきのかげのさやけさ", length: 16 },
    { upper: "<span class='highlight'>ながか</span>らむ こころもしらず くろかみの", lower: "みだれてけさはものをこそおもへ" , length: 8},
    { upper: "<span class='highlight'>ほ</span>ととぎす なきつるかたを ながむれば", lower: "ただありあけのつきぞのこれる" , length: 1},
    { upper: "<span class='highlight'>おも</span>ひわび さてもいのちは あるものを", lower: "うきにたへぬはなみだなりけり" , length: 7},
    { upper: "<span class='highlight'>よのなかよ</span> みちこそなけれ おもひいる", lower: "やまのおくにもしかぞなくなる" , length: 4},
    { upper: "<span class='highlight'>ながら</span>へば またこのごろや しのばれむ", lower: "うしとみしよぞいまはこひしき" , length: 8},
    { upper: "<span class='highlight'>よも</span>すがら ものおもふころは あけやらで", lower: "ねやのひまさへつれなかりけり" , length: 4},
    { upper: "<span class='highlight'>なげけ</span>とて つきやはものを おもはする", lower: "かこちがほなるわがなみだかな" , length: 8},
    { upper: "<span class='highlight'>む</span>らさめの つゆもまだひぬ まきのはに", lower: "きりたちのぼるあきのゆふぐれ" , length: 1},
    { upper: "<span class='highlight'>なにはえ</span>の あしのかりねの ひとよゆゑ", lower: "みをつくしてやこひわたるべき" , length: 8},
    { upper: "<span class='highlight'>たま</span>のをよ たえなばたえね ながらへば", lower: "しのぶることのよわりもぞする" , length: 6},
    { upper: "<span class='highlight'>みせ</span>ばやな をじまのあまの そでだにも", lower: "ぬれにぞぬれしいろはかはらず" , length: 5},
    { upper: "<span class='highlight'>きり</span>ぎりす なくやしもよの さむしろに", lower: "ころもかたしきひとりかもねむ" , length: 3},
    { upper: "<span class='highlight'>わがそ</span>では しほひにみえぬ おきのいしの", lower: "ひとこそしらねかわくまもなし" , length: 7},
    { upper: "<span class='highlight'>よのなかは</span> つねにもがもな なぎさこぐ", lower: "あまのをぶねのつなでかなしも" , length: 4},
    { upper: "<span class='highlight'>みよ</span>しのの やまのあきかぜ さよふけて", lower: "ふるさとさむくころもうつなり" , length: 5},
    { upper: "<span class='highlight'>おほけ</span>なく うきよのたみに おほふかな", lower: "わがたつそまにすみぞめのそで" , length: 7},
    { upper: "<span class='highlight'>はなさ</span>そふ あらしのにはの ゆきならで", lower: "ふりゆくものはわがみなりけり" , length: 4},
    { upper: "<span class='highlight'>こぬ</span>ひとを まつほのうらの ゆふなぎに", lower: "やくやもしほのみもこがれつつ" , length: 6},
    { upper: "<span class='highlight'>かぜそ</span>よぐ ならのをがはの ゆふぐれは", lower: "みそぎぞなつのしるしなりける" , length: 4},
    { upper: "<span class='highlight'>ひとも</span>をし ひともうらめし あぢきなく", lower: "よをおもふゆゑにものおもふみは", length: 3 },
    { upper: "<span class='highlight'>もも</span>しきや ふるきのきばの しのぶにも", lower: "なほあまりあるむかしなりけり" , length: 2}
]

const startBtn = document.getElementById('start-btn');
const upperStanza = document.getElementById('upper-stanza');
const cardContainer = document.getElementById('card-container');
const statusMessage = document.getElementById('status-message');
const checkboxes = document.querySelectorAll('.kimari-checkbox');
const selectAllBtn = document.getElementById('select-all-btn');
const clearAllBtn = document.getElementById('clear-all-btn');
const applyBtn = document.getElementById('apply-btn');

let currentCorrectLower = '';

function startNewRound() {
    const checkedValues = Array.from(checkboxes)
                               .filter(cb => cb.checked)
                               .map(cb => parseInt(cb.value));
    
    if (checkedValues.length === 0) {
        statusMessage.textContent = '⚠️ 請至少勾選一種枚札類別！';
        cardContainer.innerHTML = '';
        upperStanza.innerHTML = '請勾選上方類別';
        startBtn.disabled = false;
        return;
    }

    let availableKaruta = karutaData.filter(k => checkedValues.includes(k.length));

    if (availableKaruta.length === 0) {
        statusMessage.textContent = '⚠️ 所選類別中目前尚無卡牌資料！';
        cardContainer.innerHTML = '';
        upperStanza.innerHTML = '請切換其他類別組合';
        startBtn.disabled = false;
        return;
    }

    const correctKaruta = availableKaruta[Math.floor(Math.random() * availableKaruta.length)];
    currentCorrectLower = correctKaruta.lower;

    const allLower = karutaData.map(k => k.lower);
    const shuffledLower = allLower.filter(lower => lower !== currentCorrectLower)
                                 .sort(() => 0.5 - Math.random());
    const distractors = shuffledLower.slice(0, 3);

    let displayCards = [currentCorrectLower, ...distractors].sort(() => 0.5 - Math.random());

    upperStanza.innerHTML = correctKaruta.upper;
    statusMessage.textContent = '哪一張是下句？';
    
    renderCards(displayCards);
}

function renderCards(cardTexts) {
    cardContainer.innerHTML = '';
    
    cardTexts.forEach(text => {
        const card = document.createElement('div');
        card.classList.add('karuta-card');
        card.innerHTML = text;
        card.addEventListener('click', () => handleCardClick(card, text));
        cardContainer.appendChild(card);
    });
}

function handleCardClick(clickedCard, clickedText) {
    if (startBtn.disabled) return; 
    startBtn.disabled = true;

    if (clickedText === currentCorrectLower) {
        clickedCard.classList.add('correct');
        statusMessage.textContent = '✅ 正確！你成功搶下歌牌！';
    } else {
        clickedCard.classList.add('incorrect');
        statusMessage.textContent = '❌ 錯誤！那張牌不是正確答案。';
        Array.from(cardContainer.children).forEach(card => {
            if (card.innerHTML === currentCorrectLower) {
                card.classList.add('correct');
            }
        });
    }

    setTimeout(() => {
        startBtn.disabled = false;
        startNewRound();
    }, 1200);
}

// 綁定全選 / 取消全選按鈕 (不觸發自動換題)
selectAllBtn.addEventListener('click', () => {
    checkboxes.forEach(cb => cb.checked = true);
});

clearAllBtn.addEventListener('click', () => {
    checkboxes.forEach(cb => cb.checked = false);
});

// 綁定抽題按鈕
applyBtn.addEventListener('click', startNewRound);
startBtn.addEventListener('click', startNewRound);

// 初始化第一局
startNewRound();