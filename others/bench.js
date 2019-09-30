const N = 100000;

let patOrig = /(?:ア(?:グノム|ゲハント|サナン|ズマオウ|チャモ|ノプス|ブソル|メ(?:タマ|モース)|リ(?:アドス|ゲイツ)|ルセウス|ンノーン|ー(?:ボ(?:|ック)|マルド))|イ(?:シツブテ|トマル|ノムー|ルミーゼ|ワーク|ーブイ)|ウ(?:インディ|ソ(?:ッキー|ハチ)|ツ(?:ドン|ボット)|パー|リムー)|エ(?:アームド|イパム|テボース|ネコ(?:|ロロ)|ビワラー|ムリット|ルレイド|レ(?:キ(?:ッド|ブル)|ブー)|ン(?:テイ|ペルト)|ーフィ)|オ(?:オ(?:スバメ|タチ)|クタン|コリザル|タチ|ドシシ|ニ(?:ゴーリ|スズメ|ドリル)|ム(?:スター|ナイト)|ーダイル)|カ(?:イ(?:オーガ|リ(?:キー|ュー)|ロス)|クレオン|ゲボウズ|バルドン|ビゴン|ブト(?:|プス)|ポエラー|メ(?:ックス|ール)|モネギ|ラ(?:カラ|サリス|ナクシ))|ガ(?:バイト|ブリアス|ラガラ|ルーラ|ー(?:ディ|メイル))|キ(?:ノ(?:ガッサ|ココ)|バニア|マワリ|モリ|ャ(?:タピー|モメ)|ュウコン|リンリキ|ルリア|レイハナ|ング(?:ドラ|ラー))|ギ(?:ャ(?:ラドス|ロップ)|ラティナ)|ク(?:サイハナ|チート|ヌギダマ|ラブ|レセリア|ロバット)|グ(?:ラ(?:イ(?:オン|ガー)|エナ|ンブル|ードン)|レ(?:イシア|ッグル))|ケ(?:イコウオ|ッキング|ムッソ|ンタロス|ーシィ)|ゲンガー|コ(?:イ(?:キング|ル)|クーン|コドラ|ダック|ドラ|ノハナ|モルー|ラッタ|リンク|ロ(?:トック|ボーシ)|ンパン|ータス)|ゴ(?:ウカザル|クリン|ニョニョ|マゾウ|ル(?:ダック|バット)|ロー(?:ニャ|ン)|ンベ|ー(?:ス(?:|ト)|リキー))|サ(?:イ(?:ドン|ホーン)|クラビス|ナギラス|ニーゴ|ボネア|マヨール|メハダー|ワムラー|ン(?:ダー(?:|ス)|ド(?:|パン))|ーナイト)|ザングース|シ(?:ェ(?:イミ|ルダー)|ザリガー|ャワーズ|ードラ)|ジ(?:グザグマ|バコイル|ュ(?:カイン|ゴン|プトル|ペッタ)|ラーチ|ーランス)|ス(?:イクン|カ(?:タンク|ンプー)|コルピ|ターミー|トライク|バメ|ピアー|ボミー|リー(?:パー|プ))|ズ(?:ガイドス|バット)|セレビィ|ゼニガメ|ソ(?:ルロック|ーナ(?:ノ|ンス))|タ(?:ッツー|ツベイ|テトプス|ネボー|マ(?:ザラシ|タマ|ンタ))|ダ(?:イノーズ|グトリオ|ンバル|ー(?:クライ|テング))|チ(?:ェリ(?:ム|ンボ)|コリータ|ャーレム|ョンチー|リーン|ル(?:タリス|ット))|ツ(?:チニン|ボツボ)|テッ(?:カニン|ポウオ)|デ(?:ィ(?:アルガ|グダ)|オキシス|リバード|ルビル|ンリュウ)|ト(?:ゲ(?:キッス|チック|ピー)|サキント|ド(?:グラー|ゼルガ)|ランセル|リ(?:デプス|トドン)|ロピウス)|ド(?:ガース|ク(?:クラゲ|ケイル|ロッグ)|ゴーム|サイドン|ジョッチ|タイトス|ラピオン|ン(?:カラス|ファン|メル)|ー(?:タクン|ド(?:リオ|ー)|ブル|ミラー))|ナ(?:エトル|ゾノクサ|ッ(?:クラー|シー)|マ(?:ケロ|ズン))|ニ(?:ド(?:キング|クイン|ラン(?:♀|♂)|リー(?:ナ|ノ))|ャ(?:ルマー|ース)|ューラ|ョロ(?:ゾ|トノ|ボン|モ))|ヌ(?:オー|ケニン|マクロー)|ネ(?:イティ(?:|オ)|オラント|ンドール)|ノ(?:クタス|コッチ|ズパス)|ハ(?:ガネール|クリュー|ス(?:ブレロ|ボー)|ッサム|ネッコ|ピナス|ブネーク|ヤシガメ|リ(?:テヤマ|ーセン)|ンテール)|バ(?:ク(?:オング|フーン|ーダ)|シャーモ|タフリー|ネブー|リヤード|ル(?:キー|ビート)|ンギラス)|パ(?:ウワウ|チリス|ッチール|ラ(?:ス|セクト)|ル(?:キア|シェン)|ールル)|ヒ(?:コザル|ト(?:カゲ|デマン)|ノアラシ|ポポタス|マナッツ|メグマ|ンバス|ードラン)|ビ(?:ッパ|ブラーバ|リリダマ|ー(?:クイン|ダル|ドル))|ピ(?:ィ|カチュウ|クシー|ジョ(?:ット|ン)|チュー|ッピ|ンプク)|フ(?:ァイヤー|ィオネ|ォレトス|カマル|シギ(?:ソウ|ダネ|バナ)|ライゴン|リーザー|ローゼル|ワ(?:ライド|ンテ)|ーディン)|ブ(?:イゼル|ニャット|ビィ|ラッキー|ルー|ー(?:スター|バー(?:|ン)|ピッグ))|プ(?:クリン|テラ|プリン|ラスル|リン)|ヘ(?:イガニ|ラクロス|ルガー)|ベ(?:イリーフ|トベ(?:ター|トン)|ロ(?:ベルト|リンガ))|ペ(?:ラップ|リッパー|ルシアン)|ホ(?:ウオウ|エル(?:オー|コ)|ーホー)|ボ(?:スゴドラ|ーマンダ)|ポ(?:チエナ|ッ(?:タイシ|チャマ|ポ)|ニータ|ポッコ|リゴン(?:|2|Z)|ワルン)|マ(?:イナン|クノシタ|グ(?:カルゴ|マ(?:ッグ|ラシ))|スキッパ|タドガス|ダツボミ|ッスグマ|ナフィ|ニューラ|ネネ|ユルド|リル(?:|リ)|ル(?:ノーム|マイン)|ン(?:キー|タイン|ムー))|ミ(?:カルゲ|ズゴロウ|ツハニー|ニリュウ|ノ(?:マダム|ムッチ)|ミロ(?:ップ|ル)|ュウ(?:|ツー)|ルタンク|ロカロス)|ム(?:ウマ(?:|ージ)|ク(?:バード|ホーク)|チュール|ックル)|メ(?:ガ(?:ニウム|ヤンマ)|タ(?:グロス|モン|ング)|ノクラゲ|リープ)|モ(?:ウカザル|ココ|ジャンボ|ルフォン|ンジャラ)|ヤ(?:ジロン|ド(?:キング|ラン|ン)|ミ(?:カラス|ラミ)|ルキモノ|ンヤンマ)|ユ(?:キ(?:カブリ|ノオー|メノコ|ワラシ)|クシー|レイドル|ンゲラー)|ヨ(?:ノワール|マワル|ルノズク|ーギラス)|ラ(?:イ(?:コウ|チュウ|ボルト)|クライ|グラージ|ッ(?:キー|タ)|ティ(?:アス|オス)|フレシア|ブカス|プラス|ムパルド|ルトス|ンターン)|リ(?:オル|ザード(?:|ン)|リーラ|ングマ|ー(?:シャン|フィア))|ル(?:カリオ|ギア|クシオ|ナトーン|リリ|ンパッパ|ージュラ)|レ(?:アコイル|ジ(?:アイス|ギガス|スチル|ロック)|ックウザ|ディ(?:アン|バ)|ントラー)|ロ(?:コン|ズレイド|ゼリア|トム)|ワ(?:カシャモ|タッコ|ニノコ|ンリキー))/;
let pat = patOrig.compile()

UnmatchString = `
五稜郭（ごりょうかく）は、江戸時代末期に江戸幕府により蝦夷地の箱館（現在の北海道函館市）郊外に建造された稜堡式の城郭である。同時期に築城された長野県佐久市の龍岡城も稜堡式城郭であり「五稜郭」と呼ばれるが[1]、単に「五稜郭」といえば函館の城郭とする場合も多い[注釈 1]。
予算書時点から五稜郭の名称は用いられていた[3]が、築造中は、亀田役所土塁（かめだやくしょどるい）[4]または亀田御役所土塁（かめだおんやくしょどるい）[5]とも呼ばれた[注釈 2]。元は湿地でネコヤナギが多く生えていた土地であることから、柳野城（やなぎのじょう）の別名を持つ[6]。
五稜郭は箱館開港時に函館山の麓に置かれた箱館奉行所の移転先として築造された。しかし、1866年（慶応2年）の完成からわずか2年後に幕府が崩壊、短期間箱館府が使用した後、箱館戦争で旧幕府軍に占領され、その本拠となった。明治に入ると郭内の建物は1棟を除いて解体され、陸軍の練兵場として使用された。その後、1914年（大正3年）から五稜郭公園として一般開放され、以来、函館市民の憩いの場とともに函館を代表する観光地となっている。
国の特別史跡に指定され、「五稜郭と箱館戦争の遺構」として北海道遺産に選定されている。なお五稜郭は文化庁所管の国有財産[7]であり、函館市が貸与を受け、函館市住宅都市施設公社（指定管理者）が管理している[8]。

沿革
築造

1854年（安政元年）3月、日米和親条約の締結により箱館開港が決定すると、江戸幕府は松前藩領だった箱館周辺を上知し、同年6月に箱館奉行を再置した[10]。箱館奉行所は前幕領時代（1802年-1807年）と同じ基坂（当時は松前藩の箱館奉行詰役所があった[11]）に置かれた。初代奉行の竹内保徳は松前藩の建物を増改築して引き続き使用する方針を示したが、続いて奉行に任命された堀利煕は、同所は箱館湾内から至近かつ遮るものがなく、加えて外国人の遊歩区域内の箱館山に登れば奉行所を眼下に見下ろすことができるので防御に適さず、亀田方面への移転が必要だと上申。そして竹内と堀は江戸に戻ると、箱館湾内からの艦砲射撃の射程外に位置する鍛冶村中道に「御役所四方土塁」を築いて奉行所を移転する意見書を老中・阿部正弘に出した。これが幕閣に受理され、五稜郭の建設が決定した[11]。
併せて、矢不来（やぎらい、現在の北斗市矢不来（やふらい））・押付・山背泊（やませどまり）・弁天岬・立待岬・築島・沖の口番所の7か所の台場の新改築からなる箱館港の防御策も上申されたが、阿部はこれらを同時に築造するのは困難なので、まず弁天岬（弁天台場）と築島（着工されず）に着手するよう指示している[11]。
1855年（安政2年）7月にフランスの軍艦「コンスタンティーヌ号」が箱館に入港[注釈 3]した際、箱館奉行所で器械製造と弾薬製造の御用取扱を務めていた[13]武田斐三郎が同艦の副艦長から指導を受け、大砲設計図や稜堡の絵図面を写し取った[14]。武田は、この絵図面を基に五稜郭と弁天台場の設計を行っている[15]。そして五稜郭と弁天・築島・沖の口台場の築造からなる総工費41万両の予算書が作成された[4]。当初は工期20年の計画だったが、蝦夷地警備を命じられた松前藩（戸切地陣屋）・津軽藩（津軽陣屋）・南部藩（南部陣屋）・仙台藩（白老陣屋）の各陣屋が既に完成していたことから、五稜郭や台場の工事が遅れると箱館市民や外国人に対して幕府の権威を失うことになるので、弁天台場と五稜郭の築造を急ぐこととなった[3]。
1856年（安政3年）11月、組頭・河津祐邦、調役並・鈴木孫四郎、下役元締・山口顕之進、諸術教授役・武田斐三郎らを台場並亀田役所土塁普請掛に任命[4]し、1857年（安政4年）7月に五稜郭の築造を開始[16]。建物については、1856年（安政5年）から郭外北側に役宅を建設、1861年（文久元年）に奉行所庁舎建設を開始した。施工は土木工事を松川弁之助、石垣工事を井上喜三郎、奉行所の建築を江戸在住の小普請方鍛冶方石方請負人中川伝蔵が請け負った[17]。当初は、まず掘割と土塁工事、続いて建物工事、最後に石垣工事を行う計画だったが、この地は地盤が脆弱で冬季の凍結・融解により掘割の壁面が崩落したため、急遽石垣工事を先行させた[16]。
1864年（元治元年）に竣工、6月15日に箱館奉行・小出秀実が奉行所を五稜郭内に移転し業務を開始した。引き続き防風林や庭木としてのアカマツの植樹[注釈 4]や付帯施設の工事も行われ、1866年（慶応2年）に全ての工事が完了した[19]。
五稜郭の総工費は10万4090両（予算14万3千両）、その内訳は堀割・土塁・石垣などの土木工事に5万3144両（予算9万8千両）、建物の建築工事に4万4854両（予算2万5千両）、水道の敷設工事に6092両（予算2万両）というもので、これとは別に弁天台場が10万7277両（予算10万両）を費やして築かれた[20]。この大事業に最繁期で5〜6千人の人夫が使われたといわれ、箱館には人が満ちて街は大いに潤った[21]。
`;

console.log(`[Baseline] benchmarking v8's regexp (${N} times).`);

const beg = Date.now();

{
  for (let i = 0; i < N; i++) {
    pat.exec(UnmatchString);
  }
}

const end = Date.now();
console.log(` - result: ${(end-beg) * 1000.0 / N} us / op`);
