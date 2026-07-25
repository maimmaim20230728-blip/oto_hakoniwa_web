/* 音の箱庭 / Oto no Hakoniwa 多言語テーブル
   ・var I18N = { ja, en, de, fr, es, it, pt, nl, sv, ko, zh, ar }(全12言語・フラット辞書)
   ・ja が正。他言語は i18n_translations.json 由来。キー構造は全言語一致
   ・言語判定 = localStorage 優先 → navigator.language 先頭2文字 → ja
   ・window.OtoI18n = { t, applyLang, langs } を公開
   ・ar のみ dir=rtl(他は ltr)。Canvas 座標は反転しない(UIのみ反転) */
(function () {
  'use strict';

  var I18N = {
    ja: {
      play: '遊ぶ', edit: 'つくる', mode: 'モード', material: '材質', scale: '音階', ambient: '環境音', auto: '自動', volume: '音量', dropBtn: '降らす', speed: '速さ',
      start: 'はじめる', startSub: '音を出す', startNote: 'ヘッドフォン推奨。「遊ぶ」で画面タップ＝球が落ちて音が鳴る。「つくる」でペグや板を自由に置けます。',
      tool: '道具', spout: '落とし口', peg: 'ペグ', poly: '多角形', star: '星', board: '板', erase: '消しゴム',
      flow: '流れ', order: '順番', rand: 'ランダム', randall: '全体ランダム',
      size: '大きさ', yoko: 'よこ', tate: 'たて', kaiten: 'かいてん', length: '長さ', thick: '太さ', tilt: 'かたむき', sides: '角数',
      place: '配置', snap: 'ぴたっと整列', delSel: '選択を消す', clearAll: '全部消す', reset: '自動配置に戻す',
      m_glass: 'ガラス', m_iron: '鉄', m_china: '陶器', m_wood: '木', m_techno: '電子', m_guitar: 'ギター', m_bass: 'ベース', m_piano: 'ピアノ', m_wind: '笛', m_koto: '琴', m_drum: 'ドラム', m_taiko: '和太鼓', m_sax: 'サックス', m_trumpet: 'トランペット', m_shamisen: '三味線',
      s_bright: '明るい', s_sad: '切ない', s_japan: '和風', s_okinawa: '沖縄', s_ritsu: '律', s_chinese: '中華', s_spanish: 'スペイン', s_blues: 'ブルース', s_miyako: '都節', s_chinese2: '中華角', s_hungarian: 'ハンガリー', s_bhairavi: 'バイラヴィ',
      a_rain: '雨', a_furin: '風鈴', a_reverb: '響き', a_wave: '波', a_insect: '虫の音', a_bird: '小鳥', a_fire: '焚き火', a_frog: 'かえる', a_stream: 'せせらぎ'
    },
    en: {
      play: 'Play', edit: 'Build', mode: 'Mode', material: 'Sound', scale: 'Scale', ambient: 'Ambient', auto: 'Auto', volume: 'Volume', dropBtn: 'Drop', speed: 'Speed',
      start: 'Start', startSub: 'Enable sound', startNote: 'Headphones recommended. In Play, tap the screen and a ball drops to make sound. In Build, freely place pegs and boards.',
      tool: 'Tool', spout: 'Spout', peg: 'Peg', poly: 'Polygon', star: 'Star', board: 'Board', erase: 'Eraser',
      flow: 'Flow', order: 'In order', rand: 'Random', randall: 'Random all',
      size: 'Size', yoko: 'Width', tate: 'Height', kaiten: 'Rotation', length: 'Length', thick: 'Thickness', tilt: 'Tilt', sides: 'Sides',
      place: 'Placement', snap: 'Snap to grid', delSel: 'Delete selected', clearAll: 'Clear all', reset: 'Reset layout',
      m_glass: 'Glass', m_iron: 'Metal', m_china: 'Ceramic', m_wood: 'Wood', m_techno: 'Synth', m_guitar: 'Guitar', m_bass: 'Bass', m_piano: 'Piano', m_wind: 'Flute', m_koto: 'Koto', m_drum: 'Drum', m_taiko: 'Taiko', m_sax: 'Sax', m_trumpet: 'Trumpet', m_shamisen: 'Shamisen',
      s_bright: 'Bright', s_sad: 'Wistful', s_japan: 'Japanese', s_okinawa: 'Okinawan', s_ritsu: 'Ritsu', s_chinese: 'Chinese', s_spanish: 'Spanish', s_blues: 'Blues', s_miyako: 'Miyako-bushi', s_chinese2: 'Chinese (Jue)', s_hungarian: 'Hungarian', s_bhairavi: 'Bhairavi',
      a_rain: 'Rain', a_furin: 'Wind chime', a_reverb: 'Reverb', a_wave: 'Waves', a_insect: 'Crickets', a_bird: 'Birds', a_fire: 'Campfire', a_frog: 'Frogs', a_stream: 'Stream'
    },
    de: {
      play: 'Spielen', edit: 'Bauen', mode: 'Modus', material: 'Material', scale: 'Tonleiter', ambient: 'Klangkulisse', auto: 'Auto', volume: 'Lautstärke', dropBtn: 'Fallen lassen', speed: 'Tempo',
      start: 'Loslegen', startSub: 'Ton an', startNote: 'Kopfhörer empfohlen. Bei „Spielen“ tippst du auf den Bildschirm – eine Kugel fällt und erzeugt einen Ton. Bei „Bauen“ platzierst du Pins und Bretter frei.',
      tool: 'Werkzeug', spout: 'Auslass', peg: 'Pin', poly: 'Vieleck', star: 'Stern', board: 'Brett', erase: 'Radierer',
      flow: 'Ablauf', order: 'Der Reihe nach', rand: 'Zufällig', randall: 'Ganz zufällig',
      size: 'Größe', yoko: 'Breite', tate: 'Höhe', kaiten: 'Drehung', length: 'Länge', thick: 'Dicke', tilt: 'Neigung', sides: 'Ecken',
      place: 'Anordnen', snap: 'Am Raster ausrichten', delSel: 'Auswahl löschen', clearAll: 'Alles löschen', reset: 'Auto-Anordnung',
      m_glass: 'Glas', m_iron: 'Metall', m_china: 'Keramik', m_wood: 'Holz', m_techno: 'Elektronik', m_guitar: 'Gitarre', m_bass: 'Bass', m_piano: 'Klavier', m_wind: 'Flöte', m_koto: 'Koto', m_drum: 'Drum', m_taiko: 'Taiko', m_sax: 'Saxofon', m_trumpet: 'Trompete', m_shamisen: 'Shamisen',
      s_bright: 'Fröhlich', s_sad: 'Wehmütig', s_japan: 'Japanisch', s_okinawa: 'Okinawa', s_ritsu: 'Ritsu', s_chinese: 'Chinesisch', s_spanish: 'Spanisch', s_blues: 'Blues', s_miyako: 'Miyako-bushi', s_chinese2: 'Chinesisch (Jiao)', s_hungarian: 'Ungarisch', s_bhairavi: 'Bhairavi',
      a_rain: 'Regen', a_furin: 'Windspiel', a_reverb: 'Hall', a_wave: 'Wellen', a_insect: 'Grillenzirpen', a_bird: 'Vögel', a_fire: 'Lagerfeuer', a_frog: 'Frösche', a_stream: 'Bach'
    },
    fr: {
      play: 'Jouer', edit: 'Créer', mode: 'Mode', material: 'Matière', scale: 'Gamme', ambient: 'Ambiance', auto: 'Auto', volume: 'Volume', dropBtn: 'Lâcher', speed: 'Vitesse',
      start: 'Commencer', startSub: 'Activer le son', startNote: 'Casque recommandé. En mode « Jouer », touchez l’écran : une bille tombe et fait un son. En mode « Créer », placez librement des picots et des planches.',
      tool: 'Outil', spout: 'Sortie', peg: 'Picot', poly: 'Polygone', star: 'Étoile', board: 'Planche', erase: 'Gomme',
      flow: 'Flux', order: 'En ordre', rand: 'Aléatoire', randall: 'Tout aléatoire',
      size: 'Taille', yoko: 'Largeur', tate: 'Hauteur', kaiten: 'Rotation', length: 'Longueur', thick: 'Épaisseur', tilt: 'Inclinaison', sides: 'Côtés',
      place: 'Disposition', snap: 'Aligner sur grille', delSel: 'Supprimer la sélection', clearAll: 'Tout effacer', reset: 'Disposition auto',
      m_glass: 'Verre', m_iron: 'Fer', m_china: 'Porcelaine', m_wood: 'Bois', m_techno: 'Électro', m_guitar: 'Guitare', m_bass: 'Basse', m_piano: 'Piano', m_wind: 'Flûte', m_koto: 'Koto', m_drum: 'Grosse caisse', m_taiko: 'Taiko', m_sax: 'Saxophone', m_trumpet: 'Trompette', m_shamisen: 'Shamisen',
      s_bright: 'Joyeux', s_sad: 'Mélancolique', s_japan: 'Japonais', s_okinawa: 'Okinawa', s_ritsu: 'Ritsu', s_chinese: 'Chinois', s_spanish: 'Espagnol', s_blues: 'Blues', s_miyako: 'Miyako-bushi', s_chinese2: 'Chinois (jiao)', s_hungarian: 'Hongrois', s_bhairavi: 'Bhairavi',
      a_rain: 'Pluie', a_furin: 'Carillon', a_reverb: 'Réverbération', a_wave: 'Vagues', a_insect: 'Grillons', a_bird: 'Oiseaux', a_fire: 'Feu de camp', a_frog: 'Grenouilles', a_stream: 'Ruisseau'
    },
    es: {
      play: 'Jugar', edit: 'Crear', mode: 'Modo', material: 'Material', scale: 'Escala', ambient: 'Ambiente', auto: 'Auto', volume: 'Volumen', dropBtn: 'Soltar', speed: 'Velocidad',
      start: 'Empezar', startSub: 'Activar sonido', startNote: 'Se recomiendan auriculares. En «Jugar», toca la pantalla y caerá una bola que suena. En «Crear» puedes colocar clavijas y tablas libremente.',
      tool: 'Herramienta', spout: 'Salida', peg: 'Clavija', poly: 'Polígono', star: 'Estrella', board: 'Tabla', erase: 'Borrador',
      flow: 'Flujo', order: 'En orden', rand: 'Aleatorio', randall: 'Aleatorio total',
      size: 'Tamaño', yoko: 'Ancho', tate: 'Alto', kaiten: 'Rotación', length: 'Largo', thick: 'Grosor', tilt: 'Inclinación', sides: 'Lados',
      place: 'Colocar', snap: 'Ajustar a cuadrícula', delSel: 'Borrar selección', clearAll: 'Borrar todo', reset: 'Restaurar auto',
      m_glass: 'Vidrio', m_iron: 'Metal', m_china: 'Cerámica', m_wood: 'Madera', m_techno: 'Electrónico', m_guitar: 'Guitarra', m_bass: 'Bajo', m_piano: 'Piano', m_wind: 'Flauta', m_koto: 'Koto', m_drum: 'Batería', m_taiko: 'Taiko', m_sax: 'Saxofón', m_trumpet: 'Trompeta', m_shamisen: 'Shamisen',
      s_bright: 'Alegre', s_sad: 'Melancólica', s_japan: 'Japonesa', s_okinawa: 'Okinawa', s_ritsu: 'Ritsu', s_chinese: 'China', s_spanish: 'Española', s_blues: 'Blues', s_miyako: 'Miyako-bushi', s_chinese2: 'China (jue)', s_hungarian: 'Húngara', s_bhairavi: 'Bhairavi',
      a_rain: 'Lluvia', a_furin: 'Campanilla', a_reverb: 'Reverb', a_wave: 'Olas', a_insect: 'Grillos', a_bird: 'Pájaros', a_fire: 'Fogata', a_frog: 'Ranas', a_stream: 'Arroyo'
    },
    it: {
      play: 'Gioca', edit: 'Crea', mode: 'Modalità', material: 'Materiale', scale: 'Scala', ambient: 'Ambiente', auto: 'Auto', volume: 'Volume', dropBtn: 'Rilascia', speed: 'Velocità',
      start: 'Inizia', startSub: 'Attiva l’audio', startNote: 'Consigliate le cuffie. In "Gioca" tocca lo schermo: una pallina cade e suona. In "Crea" puoi posizionare liberamente pioli e barre.',
      tool: 'Strumento', spout: 'Bocchetta', peg: 'Piolo', poly: 'Poligono', star: 'Stella', board: 'Barra', erase: 'Gomma',
      flow: 'Flusso', order: 'In ordine', rand: 'Casuale', randall: 'Tutto casuale',
      size: 'Dimensione', yoko: 'Larghezza', tate: 'Altezza', kaiten: 'Rotazione', length: 'Lunghezza', thick: 'Spessore', tilt: 'Inclinazione', sides: 'Lati',
      place: 'Posiziona', snap: 'Allinea alla griglia', delSel: 'Elimina selezione', clearAll: 'Cancella tutto', reset: 'Ripristina disposizione',
      m_glass: 'Vetro', m_iron: 'Ferro', m_china: 'Ceramica', m_wood: 'Legno', m_techno: 'Elettronico', m_guitar: 'Chitarra', m_bass: 'Basso', m_piano: 'Pianoforte', m_wind: 'Flauto', m_koto: 'Koto', m_drum: 'Batteria', m_taiko: 'Taiko', m_sax: 'Sax', m_trumpet: 'Tromba', m_shamisen: 'Shamisen',
      s_bright: 'Allegra', s_sad: 'Malinconica', s_japan: 'Giapponese', s_okinawa: 'Okinawa', s_ritsu: 'Ritsu', s_chinese: 'Cinese', s_spanish: 'Spagnola', s_blues: 'Blues', s_miyako: 'Miyako-bushi', s_chinese2: 'Cinese (jiao)', s_hungarian: 'Ungherese', s_bhairavi: 'Bhairavi',
      a_rain: 'Pioggia', a_furin: 'Campanello a vento', a_reverb: 'Riverbero', a_wave: 'Onde', a_insect: 'Grilli', a_bird: 'Uccellini', a_fire: 'Falò', a_frog: 'Rane', a_stream: 'Ruscello'
    },
    pt: {
      play: 'Tocar', edit: 'Criar', mode: 'Modo', material: 'Material', scale: 'Escala', ambient: 'Som ambiente', auto: 'Auto', volume: 'Volume', dropBtn: 'Soltar', speed: 'Velocidade',
      start: 'Começar', startSub: 'Ativar som', startNote: 'Fones recomendados. Em "Tocar", toque na tela: a bola cai e faz som. Em "Criar", posicione pinos e placas livremente.',
      tool: 'Ferramenta', spout: 'Saída', peg: 'Pino', poly: 'Polígono', star: 'Estrela', board: 'Placa', erase: 'Borracha',
      flow: 'Fluxo', order: 'Em ordem', rand: 'Aleatório', randall: 'Aleatório total',
      size: 'Tamanho', yoko: 'Largura', tate: 'Altura', kaiten: 'Rotação', length: 'Comprimento', thick: 'Espessura', tilt: 'Inclinação', sides: 'Lados',
      place: 'Posicionar', snap: 'Alinhar à grade', delSel: 'Excluir seleção', clearAll: 'Limpar tudo', reset: 'Voltar ao automático',
      m_glass: 'Vidro', m_iron: 'Ferro', m_china: 'Cerâmica', m_wood: 'Madeira', m_techno: 'Eletrônico', m_guitar: 'Guitarra', m_bass: 'Baixo', m_piano: 'Piano', m_wind: 'Flauta', m_koto: 'Koto', m_drum: 'Bumbo', m_taiko: 'Taiko', m_sax: 'Saxofone', m_trumpet: 'Trompete', m_shamisen: 'Shamisen',
      s_bright: 'Alegre', s_sad: 'Melancólica', s_japan: 'Japonesa', s_okinawa: 'Okinawa', s_ritsu: 'Ritsu', s_chinese: 'Chinesa', s_spanish: 'Espanhola', s_blues: 'Blues', s_miyako: 'Miyako-bushi', s_chinese2: 'Chinesa (jiao)', s_hungarian: 'Húngara', s_bhairavi: 'Bhairavi',
      a_rain: 'Chuva', a_furin: 'Sino de vento', a_reverb: 'Reverb', a_wave: 'Ondas', a_insect: 'Grilos', a_bird: 'Passarinhos', a_fire: 'Fogueira', a_frog: 'Sapos', a_stream: 'Riacho'
    },
    nl: {
      play: 'Spelen', edit: 'Maken', mode: 'Modus', material: 'Materiaal', scale: 'Toonladder', ambient: 'Omgevingsgeluid', auto: 'Automatisch', volume: 'Volume', dropBtn: 'Laten vallen', speed: 'Snelheid',
      start: 'Beginnen', startSub: 'Geluid aan', startNote: 'Koptelefoon aanbevolen. Tik in "Spelen" op het scherm en er valt een bal die geluid maakt. In "Maken" plaats je vrij pennen en planken.',
      tool: 'Gereedschap', spout: 'Valopening', peg: 'Pen', poly: 'Veelhoek', star: 'Ster', board: 'Plank', erase: 'Gum',
      flow: 'Stroom', order: 'Op volgorde', rand: 'Willekeurig', randall: 'Overal willekeurig',
      size: 'Grootte', yoko: 'Breedte', tate: 'Hoogte', kaiten: 'Draaiing', length: 'Lengte', thick: 'Dikte', tilt: 'Helling', sides: 'Hoeken',
      place: 'Plaatsen', snap: 'Uitlijnen op raster', delSel: 'Selectie wissen', clearAll: 'Alles wissen', reset: 'Terug naar automatisch',
      m_glass: 'Glas', m_iron: 'IJzer', m_china: 'Aardewerk', m_wood: 'Hout', m_techno: 'Elektronisch', m_guitar: 'Gitaar', m_bass: 'Bas', m_piano: 'Piano', m_wind: 'Fluit', m_koto: 'Koto', m_drum: 'Drum', m_taiko: 'Taiko', m_sax: 'Saxofoon', m_trumpet: 'Trompet', m_shamisen: 'Shamisen',
      s_bright: 'Vrolijk', s_sad: 'Weemoedig', s_japan: 'Japans', s_okinawa: 'Okinawa', s_ritsu: 'Ritsu', s_chinese: 'Chinees', s_spanish: 'Spaans', s_blues: 'Blues', s_miyako: 'Miyako-bushi', s_chinese2: 'Chinees (jiao)', s_hungarian: 'Hongaars', s_bhairavi: 'Bhairavi',
      a_rain: 'Regen', a_furin: 'Windklokje', a_reverb: 'Galm', a_wave: 'Golven', a_insect: 'Krekels', a_bird: 'Vogeltjes', a_fire: 'Kampvuur', a_frog: 'Kikkers', a_stream: 'Beekje'
    },
    sv: {
      play: 'Spela', edit: 'Skapa', mode: 'Läge', material: 'Material', scale: 'Skala', ambient: 'Omgivningsljud', auto: 'Auto', volume: 'Volym', dropBtn: 'Släpp', speed: 'Hastighet',
      start: 'Börja', startSub: 'Sätt på ljud', startNote: 'Hörlurar rekommenderas. I "Spela" trycker du på skärmen så faller en boll och spelar ett ljud. I "Skapa" placerar du pinnar och plattor fritt.',
      tool: 'Verktyg', spout: 'Utlopp', peg: 'Pinne', poly: 'Polygon', star: 'Stjärna', board: 'Platta', erase: 'Radera',
      flow: 'Flöde', order: 'I ordning', rand: 'Slumpvis', randall: 'Slump överallt',
      size: 'Storlek', yoko: 'Bredd', tate: 'Höjd', kaiten: 'Rotation', length: 'Längd', thick: 'Tjocklek', tilt: 'Lutning', sides: 'Hörn',
      place: 'Placering', snap: 'Fäst mot rutnät', delSel: 'Ta bort valt', clearAll: 'Rensa allt', reset: 'Återställ',
      m_glass: 'Glas', m_iron: 'Järn', m_china: 'Keramik', m_wood: 'Trä', m_techno: 'Elektronisk', m_guitar: 'Gitarr', m_bass: 'Bas', m_piano: 'Piano', m_wind: 'Flöjt', m_koto: 'Koto', m_drum: 'Trumma', m_taiko: 'Taiko', m_sax: 'Saxofon', m_trumpet: 'Trumpet', m_shamisen: 'Shamisen',
      s_bright: 'Ljus', s_sad: 'Vemodig', s_japan: 'Japansk', s_okinawa: 'Okinawa', s_ritsu: 'Ritsu', s_chinese: 'Kinesisk', s_spanish: 'Spansk', s_blues: 'Blues', s_miyako: 'Miyako-bushi', s_chinese2: 'Kinesisk (jiao)', s_hungarian: 'Ungersk', s_bhairavi: 'Bhairavi',
      a_rain: 'Regn', a_furin: 'Vindspel', a_reverb: 'Eko', a_wave: 'Vågor', a_insect: 'Syrsor', a_bird: 'Fåglar', a_fire: 'Lägereld', a_frog: 'Grodor', a_stream: 'Porlande bäck'
    },
    ko: {
      play: '플레이', edit: '만들기', mode: '모드', material: '재질', scale: '음계', ambient: '환경음', auto: '자동', volume: '음량', dropBtn: '떨어뜨리기', speed: '속도',
      start: '시작하기', startSub: '소리 켜기', startNote: '헤드폰을 권장합니다. ‘플레이’에서 화면을 탭하면 공이 떨어지며 소리가 납니다. ‘만들기’에서 페그나 판을 자유롭게 배치할 수 있어요.',
      tool: '도구', spout: '배출구', peg: '페그', poly: '다각형', star: '별', board: '판', erase: '지우개',
      flow: '흐름', order: '순서대로', rand: '랜덤', randall: '전체 랜덤',
      size: '크기', yoko: '가로', tate: '세로', kaiten: '회전', length: '길이', thick: '두께', tilt: '기울기', sides: '각 수',
      place: '배치', snap: '격자 정렬', delSel: '선택 삭제', clearAll: '전체 삭제', reset: '자동 배치로',
      m_glass: '유리', m_iron: '철', m_china: '도자기', m_wood: '나무', m_techno: '전자음', m_guitar: '기타', m_bass: '베이스', m_piano: '피아노', m_wind: '피리', m_koto: '고토', m_drum: '드럼', m_taiko: '다이코', m_sax: '색소폰', m_trumpet: '트럼펫', m_shamisen: '샤미센',
      s_bright: '밝게', s_sad: '애틋하게', s_japan: '일본풍', s_okinawa: '오키나와', s_ritsu: '리쓰', s_chinese: '중국풍', s_spanish: '스패니시', s_blues: '블루스', s_miyako: '미야코부시', s_chinese2: '중국풍(각)', s_hungarian: '헝가리안', s_bhairavi: '바이라비',
      a_rain: '비', a_furin: '풍경', a_reverb: '울림', a_wave: '파도', a_insect: '풀벌레 소리', a_bird: '새소리', a_fire: '모닥불', a_frog: '개구리', a_stream: '시냇물'
    },
    zh: {
      play: '玩', edit: '制作', mode: '模式', material: '音色', scale: '音阶', ambient: '环境音', auto: '自动', volume: '音量', dropBtn: '落球', speed: '速度',
      start: '开始', startSub: '发声', startNote: '建议佩戴耳机。在“玩”模式点击屏幕，球会落下并发出声音。在“制作”模式可自由摆放圆钉和挡板。',
      tool: '工具', spout: '落球口', peg: '圆钉', poly: '多边形', star: '星形', board: '挡板', erase: '橡皮擦',
      flow: '落法', order: '依次', rand: '随机', randall: '全屏随机',
      size: '大小', yoko: '宽', tate: '高', kaiten: '旋转', length: '长度', thick: '粗细', tilt: '倾斜', sides: '边数',
      place: '摆放', snap: '对齐网格', delSel: '删除所选', clearAll: '全部清除', reset: '恢复默认布局',
      m_glass: '玻璃', m_iron: '铁', m_china: '陶瓷', m_wood: '木', m_techno: '电子', m_guitar: '吉他', m_bass: '贝斯', m_piano: '钢琴', m_wind: '长笛', m_koto: '筝', m_drum: '鼓', m_taiko: '和太鼓', m_sax: '萨克斯', m_trumpet: '小号', m_shamisen: '三味线',
      s_bright: '明亮', s_sad: '忧伤', s_japan: '和风', s_okinawa: '冲绳', s_ritsu: '律', s_chinese: '中华', s_spanish: '西班牙', s_blues: '布鲁斯', s_miyako: '都节', s_chinese2: '中华角', s_hungarian: '匈牙利', s_bhairavi: '拜拉维',
      a_rain: '雨', a_furin: '风铃', a_reverb: '混响', a_wave: '海浪', a_insect: '虫鸣', a_bird: '小鸟', a_fire: '篝火', a_frog: '青蛙', a_stream: '溪流'
    },
    ar: {
      play: 'لعب', edit: 'إنشاء', mode: 'الوضع', material: 'الخامة', scale: 'السلّم', ambient: 'صوت محيط', auto: 'تلقائي', volume: 'الصوت', dropBtn: 'إسقاط', speed: 'السرعة',
      start: 'ابدأ', startSub: 'تشغيل الصوت', startNote: 'يُنصح بسماعات الرأس. في وضع «لعب» انقر الشاشة لإسقاط كرة تُصدر صوتاً. في وضع «إنشاء» يمكنك وضع الأوتاد والألواح بحرية.',
      tool: 'أداة', spout: 'فتحة الإسقاط', peg: 'وتد', poly: 'مضلّع', star: 'نجمة', board: 'لوح', erase: 'ممحاة',
      flow: 'التدفّق', order: 'بالترتيب', rand: 'عشوائي', randall: 'عشوائي كلّي',
      size: 'الحجم', yoko: 'العرض', tate: 'الارتفاع', kaiten: 'الدوران', length: 'الطول', thick: 'السماكة', tilt: 'الميل', sides: 'عدد الأضلاع',
      place: 'الوضع', snap: 'محاذاة للشبكة', delSel: 'حذف المحدّد', clearAll: 'مسح الكل', reset: 'استعادة التلقائي',
      m_glass: 'زجاج', m_iron: 'حديد', m_china: 'خزف', m_wood: 'خشب', m_techno: 'إلكتروني', m_guitar: 'غيتار', m_bass: 'باص', m_piano: 'بيانو', m_wind: 'ناي', m_koto: 'كوتو', m_drum: 'طبل', m_taiko: 'تايكو', m_sax: 'ساكسفون', m_trumpet: 'بوق', m_shamisen: 'شاميسن',
      s_bright: 'مبهج', s_sad: 'حزين', s_japan: 'ياباني', s_okinawa: 'أوكيناوا', s_ritsu: 'ريتسو', s_chinese: 'صيني', s_spanish: 'إسباني', s_blues: 'بلوز', s_miyako: 'مياكو-بوشي', s_chinese2: 'صيني (كاكو)', s_hungarian: 'هنغاري', s_bhairavi: 'بهايرافي',
      a_rain: 'مطر', a_furin: 'جرس هوائي', a_reverb: 'صدى', a_wave: 'أمواج', a_insect: 'صرير الحشرات', a_bird: 'عصافير', a_fire: 'نار مخيّم', a_frog: 'ضفادع', a_stream: 'جدول ماء'
    }
  };

  /* ---- 追加キー(s_lively/言語切替/録音UI/CCライセンス/編集ヒント)を全12言語へ後付けマージ ----
     既存の検証済み訳には触れず、ここでまとめて足す。値は二重引用符(アポストロフィ対策)。 */
  var NEWKEYS = {
    ja: {
      s_lively:"賑やか", lang:"言語", rec:"録音", recStart:"● 録音する", recStop:"■ 停止", range:"範囲", selection:"選択", selAll:"全体", preview:"▶ 試聴", exportLbl:"書き出し", saveWav:"WAVで保存", saveMp3:"MP3で保存", redo:"やり直す", secUnit:"秒", converting:"変換中…",
      errNoRec:"この端末は録音に未対応です。", errDecode:"録音の変換に失敗しました。もう一度お試しください。", errMp3:"MP3エンコーダを読み込めませんでした。WAVでの保存をご利用ください。",
      cc_line1:"つくった音源は クリエイティブ・コモンズ 表示-継承 4.0（CC BY-SA 4.0）で提供します。イベントでも商用でも自由に使えます。", cc_line2:"お願い：クレジット「介護と支援の相談どころ　そよぎ」の表示と、改変・再配布時の同一ライセンス（継承）でのご共有を。", cc_full:"ライセンス全文",
      editHint:"「落とし口」＝タップで設置(最大5)＋試し落下、既存タップで再テスト。ペグ(楕円・たて=よこで丸)/多角形(角数3〜8)/星/板はタップで置く→選んでドラッグ・スライダーで大きさや傾き。消しゴムは全部タップで消去(なぞって連続も)。流れ＝順番/ランダム/全体ランダム。多角形や星を組んで、それでも鳴る配置を工夫しよう。"
    },
    en: {
      s_lively:"Lively", lang:"Language", rec:"Record", recStart:"● Record", recStop:"■ Stop", range:"Range", selection:"Selection", selAll:"All", preview:"▶ Preview", exportLbl:"Export", saveWav:"Save as WAV", saveMp3:"Save as MP3", redo:"Start over", secUnit:"sec", converting:"Converting…",
      errNoRec:"This device does not support recording.", errDecode:"Failed to process the recording. Please try again.", errMp3:"Could not load the MP3 encoder. Please save as WAV instead.",
      cc_line1:"The sounds you create are provided under Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0). Feel free to use them anywhere, including at events and commercially.", cc_line2:"Please show the credit \"介護と支援の相談どころ　そよぎ\" and, when modifying or redistributing, share under the same license (ShareAlike).", cc_full:"Full license text",
      editHint:"Spout = tap to place (up to 5) and drop a test ball; tap an existing one to test it again. Peg (ellipse; equal height and width = round) / Polygon (3-8 sides) / Star / Board: tap to place, then select and drag; use the sliders for size and tilt. Eraser: tap anything to delete (drag to erase several in a row). Flow = In order / Random / Random all. Try combining polygons and stars, and find layouts that still make sound."
    },
    de: {
      s_lively:"Lebhaft", lang:"Sprache", rec:"Aufnahme", recStart:"● Aufnehmen", recStop:"■ Stopp", range:"Bereich", selection:"Auswahl", selAll:"Alles", preview:"▶ Anhören", exportLbl:"Export", saveWav:"Als WAV speichern", saveMp3:"Als MP3 speichern", redo:"Neu beginnen", secUnit:"Sek.", converting:"Wird umgewandelt…",
      errNoRec:"Dieses Gerät unterstützt keine Aufnahme.", errDecode:"Die Aufnahme konnte nicht verarbeitet werden. Bitte versuche es noch einmal.", errMp3:"Der MP3-Encoder konnte nicht geladen werden. Bitte speichere stattdessen als WAV.",
      cc_line1:"Die Klänge, die du erstellst, werden unter Creative Commons Namensnennung-Weitergabe unter gleichen Bedingungen 4.0 (CC BY-SA 4.0) bereitgestellt. Frei nutzbar, auch bei Veranstaltungen und kommerziell.", cc_line2:"Bitte: Zeige die Namensnennung „介護と支援の相談どころ　そよぎ\" an und teile bei Änderung oder Weitergabe unter derselben Lizenz (Weitergabe unter gleichen Bedingungen).", cc_full:"Vollständiger Lizenztext",
      editHint:"Auslass = zum Platzieren tippen (bis zu 5) und eine Testkugel fallen lassen; tippe einen vorhandenen an, um erneut zu testen. Pin (Ellipse; gleiche Höhe und Breite = rund) / Vieleck (3 bis 8 Ecken) / Stern / Brett: zum Platzieren tippen, dann auswählen und ziehen; mit den Reglern Größe und Neigung einstellen. Radierer: alles antippen zum Löschen (zum durchgehenden Löschen darüberziehen). Ablauf = Der Reihe nach / Zufällig / Ganz zufällig. Kombiniere Vielecke und Sterne und finde Anordnungen, die trotzdem klingen."
    },
    fr: {
      s_lively:"Animé", lang:"Langue", rec:"Enregistrement", recStart:"● Enregistrer", recStop:"■ Arrêter", range:"Plage", selection:"Sélection", selAll:"Tout", preview:"▶ Écouter", exportLbl:"Exportation", saveWav:"Sauvegarder en WAV", saveMp3:"Sauvegarder en MP3", redo:"Recommencer", secUnit:"s", converting:"Conversion…",
      errNoRec:"Cet appareil ne prend pas en charge l'enregistrement.", errDecode:"Le traitement de l'enregistrement a échoué. Veuillez réessayer.", errMp3:"Impossible de charger l'encodeur MP3. Veuillez sauvegarder en WAV.",
      cc_line1:"Les sons que vous créez sont fournis sous licence Creative Commons Attribution - Partage dans les mêmes conditions 4.0 (CC BY-SA 4.0). Vous pouvez les utiliser librement, y compris lors d'événements et à des fins commerciales.", cc_line2:"Merci d'afficher le crédit 「介護と支援の相談どころ　そよぎ」 et, en cas de modification ou de redistribution, de partager sous la même licence (Partage dans les mêmes conditions).", cc_full:"Texte complet de la licence",
      editHint:"Sortie = touchez pour placer (5 max) et lâcher une bille d'essai ; touchez une sortie existante pour la retester. Picot (ellipse ; hauteur = largeur pour un rond) / Polygone (3 à 8 côtés) / Étoile / Planche : touchez pour placer, puis sélectionnez et faites glisser ; réglez la taille et l'inclinaison avec les curseurs. Gomme : touchez n'importe quel élément pour l'effacer (glissez pour effacer en continu). Enchaînement = En ordre / Aléatoire / Tout aléatoire. Assemblez des polygones et des étoiles, et trouvez des dispositions qui sonnent quand même."
    },
    es: {
      s_lively:"Animada", lang:"Idioma", rec:"Grabación", recStart:"● Grabar", recStop:"■ Detener", range:"Rango", selection:"Selección", selAll:"Todo", preview:"▶ Escuchar", exportLbl:"Exportar", saveWav:"Guardar como WAV", saveMp3:"Guardar como MP3", redo:"Empezar de nuevo", secUnit:"seg", converting:"Convirtiendo…",
      errNoRec:"Este dispositivo no admite la grabación.", errDecode:"No se pudo procesar la grabación. Inténtalo de nuevo.", errMp3:"No se pudo cargar el codificador de MP3. Guarda como WAV en su lugar.",
      cc_line1:"Los sonidos que crees se ofrecen bajo Creative Commons Atribución-CompartirIgual 4.0 (CC BY-SA 4.0). Puedes usarlos libremente, también en eventos y con fines comerciales.", cc_line2:"Te pedimos: muestra el crédito 「介護と支援の相談どころ　そよぎ」 y, al modificar o redistribuir, compártelo bajo la misma licencia (CompartirIgual).", cc_full:"Texto completo de la licencia",
      editHint:"«Salida» = toca para colocar (hasta 5) y soltar una bola de prueba; toca una ya puesta para volver a probar. Clavija (elipse; alto igual a ancho = redonda) / Polígono (3 a 8 lados) / Estrella / Tabla: toca para colocar, luego selecciona y arrastra; usa los deslizadores para el tamaño y la inclinación. Borrador: toca cualquier cosa para borrar (arrastra para borrar de forma continua). Flujo = En orden / Aleatorio / Aleatorio total. Combina polígonos y estrellas y busca disposiciones que aun así suenen."
    },
    it: {
      s_lively:"Vivace", lang:"Lingua", rec:"Registrazione", recStart:"● Registra", recStop:"■ Ferma", range:"Intervallo", selection:"Selezione", selAll:"Tutto", preview:"▶ Ascolta", exportLbl:"Esporta", saveWav:"Salva in WAV", saveMp3:"Salva in MP3", redo:"Ricomincia", secUnit:"sec", converting:"Conversione…",
      errNoRec:"Questo dispositivo non supporta la registrazione.", errDecode:"Non è stato possibile elaborare la registrazione. Riprova.", errMp3:"Non è stato possibile caricare l'encoder MP3. Salva invece in WAV.",
      cc_line1:"I suoni che crei sono forniti con licenza Creative Commons Attribuzione-Condividi allo stesso modo 4.0 (CC BY-SA 4.0). Puoi usarli liberamente, anche in eventi e per scopi commerciali.", cc_line2:"Ti chiediamo: mostra il credito 「介護と支援の相談どころ　そよぎ」 e, in caso di modifica o ridistribuzione, condividi con la stessa licenza (Condividi allo stesso modo).", cc_full:"Testo completo della licenza",
      editHint:"Bocchetta = tocca per posizionarla (max 5) e far cadere una pallina di prova; tocca una bocchetta esistente per riprovare. Piolo (ellisse; altezza = larghezza per un tondo) / Poligono (da 3 a 8 lati) / Stella / Barra si posizionano toccando, poi seleziona e trascina; con i cursori regoli dimensione e inclinazione. La gomma cancella tutto con un tocco (trascina per cancellare di seguito). Flusso = In ordine / Casuale / Tutto casuale. Prova a comporre poligoni e stelle e trova la disposizione che li faccia comunque suonare."
    },
    pt: {
      s_lively:"Animada", lang:"Idioma", rec:"Gravação", recStart:"● Gravar", recStop:"■ Parar", range:"Intervalo", selection:"Seleção", selAll:"Tudo", preview:"▶ Ouvir", exportLbl:"Exportar", saveWav:"Salvar em WAV", saveMp3:"Salvar em MP3", redo:"Recomeçar", secUnit:"s", converting:"Convertendo…",
      errNoRec:"Este dispositivo não é compatível com gravação.", errDecode:"Não foi possível processar a gravação. Tente novamente.", errMp3:"Não foi possível carregar o codificador de MP3. Salve em WAV.",
      cc_line1:"Os sons que você criar são disponibilizados sob a licença Creative Commons Atribuição-CompartilhaIgual 4.0 (CC BY-SA 4.0). Podem ser usados livremente, inclusive em eventos e para fins comerciais.", cc_line2:"Pedimos: mostre o crédito \"介護と支援の相談どころ　そよぎ\" e, ao modificar ou redistribuir, compartilhe sob a mesma licença (CompartilhaIgual).", cc_full:"Texto completo da licença",
      editHint:"Saída = toque para colocar (até 5) e soltar uma bola de teste; toque em uma já existente para testar de novo. Pino (elipse; altura e largura iguais = redondo) / Polígono (3 a 8 lados) / Estrela / Placa: toque para colocar, depois selecione e arraste; use os controles deslizantes para o tamanho e a inclinação. Borracha: toque em qualquer coisa para apagar (arraste para apagar em sequência). Fluxo = Em ordem / Aleatório / Aleatório total. Combine polígonos e estrelas e descubra arranjos que ainda assim produzam som."
    },
    nl: {
      s_lively:"Levendig", lang:"Taal", rec:"Opname", recStart:"● Opnemen", recStop:"■ Stoppen", range:"Bereik", selection:"Selectie", selAll:"Alles", preview:"▶ Beluisteren", exportLbl:"Exporteren", saveWav:"Opslaan als WAV", saveMp3:"Opslaan als MP3", redo:"Opnieuw", secUnit:"sec", converting:"Omzetten…",
      errNoRec:"Dit apparaat ondersteunt geen opname.", errDecode:"Het verwerken van de opname is mislukt. Probeer het opnieuw.", errMp3:"De MP3-encoder kon niet worden geladen. Sla het op als WAV.",
      cc_line1:"De geluiden die je maakt, worden aangeboden onder Creative Commons Naamsvermelding-GelijkDelen 4.0 (CC BY-SA 4.0). Vrij te gebruiken, ook bij evenementen en commercieel.", cc_line2:"Verzoek: vermeld de credit 「介護と支援の相談どころ　そよぎ」 en deel bij aanpassing of herdistributie onder dezelfde licentie (GelijkDelen).", cc_full:"Volledige licentietekst",
      editHint:"Valopening = tik om te plaatsen (max. 5) en laat een testbal vallen; tik op een bestaande om opnieuw te testen. Pen (ellips; gelijke hoogte en breedte = rond) / Veelhoek (3 tot 8 hoeken) / Ster / Plank: tik om te plaatsen, selecteer daarna en sleep; gebruik de schuiven voor grootte en helling. Gum: tik op iets om het te wissen (sleep om door te blijven wissen). Verloop = Op volgorde / Willekeurig / Overal willekeurig. Combineer veelhoeken en sterren en zoek opstellingen die tóch geluid maken."
    },
    sv: {
      s_lively:"Livlig", lang:"Språk", rec:"Inspelning", recStart:"● Spela in", recStop:"■ Stoppa", range:"Område", selection:"Markering", selAll:"Allt", preview:"▶ Förhandslyssna", exportLbl:"Exportera", saveWav:"Spara som WAV", saveMp3:"Spara som MP3", redo:"Börja om", secUnit:"sek", converting:"Konverterar…",
      errNoRec:"Den här enheten stöder inte inspelning.", errDecode:"Det gick inte att bearbeta inspelningen. Försök igen.", errMp3:"Det gick inte att läsa in MP3-kodaren. Spara som WAV i stället.",
      cc_line1:"Ljuden du skapar tillhandahålls under Creative Commons Erkännande-DelaLika 4.0 (CC BY-SA 4.0). Fria att använda, även på evenemang och kommersiellt.", cc_line2:"En önskan: visa krediteringen ”介護と支援の相談どころ　そよぎ” och dela under samma licens (DelaLika) när du ändrar eller vidaredistribuerar.", cc_full:"Fullständig licenstext",
      editHint:"Utlopp = tryck för att placera (max 5) och släpp en testboll, tryck på ett befintligt för att testa igen. Pinne (ellips, lika höjd och bredd = rund) / Polygon (3-8 hörn) / Stjärna / Platta: tryck för att placera, markera sedan och dra, använd reglagen för storlek och lutning. Radera: tryck på vad som helst för att ta bort (dra för att radera i följd). Flöde = I ordning / Slumpvis / Slump överallt. Kombinera polygoner och stjärnor och hitta placeringar som ändå ger ljud."
    },
    ko: {
      s_lively:"경쾌함", lang:"언어", rec:"녹음", recStart:"● 녹음하기", recStop:"■ 정지", range:"범위", selection:"선택", selAll:"전체", preview:"▶ 미리 듣기", exportLbl:"내보내기", saveWav:"WAV로 저장", saveMp3:"MP3로 저장", redo:"다시 하기", secUnit:"초", converting:"변환 중…",
      errNoRec:"이 기기는 녹음을 지원하지 않습니다.", errDecode:"녹음 변환에 실패했습니다. 다시 시도해 주세요.", errMp3:"MP3 인코더를 불러오지 못했습니다. WAV로 저장해 주세요.",
      cc_line1:"만든 음원은 크리에이티브 커먼즈 저작자표시-동일조건변경허락 4.0(CC BY-SA 4.0)으로 제공됩니다. 행사에서도 상업적으로도 자유롭게 사용할 수 있어요.", cc_line2:"부탁드려요: 크레딧 「介護と支援の相談どころ　そよぎ」를 표시해 주시고, 변경하거나 재배포할 때는 같은 라이선스(동일조건변경허락)로 공유해 주세요.", cc_full:"라이선스 전문",
      editHint:"「배출구」＝탭해서 설치(최대 5개)하고 시험 삼아 공을 떨어뜨려요. 기존 것을 탭하면 다시 테스트. 페그(타원·세로=가로면 원형)/다각형(각 수 3~8)/별/판은 탭해서 놓은 뒤 선택해서 드래그하고, 슬라이더로 크기나 기울기를 조절해요. 지우개는 아무거나 탭하면 삭제(문지르면 연속으로도). 흐름＝순서대로/랜덤/전체 랜덤. 다각형이나 별을 조합해서, 그래도 소리가 나는 배치를 궁리해 보세요."
    },
    zh: {
      s_lively:"热闹", lang:"语言", rec:"录音", recStart:"● 录音", recStop:"■ 停止", range:"范围", selection:"选择", selAll:"全部", preview:"▶ 试听", exportLbl:"导出", saveWav:"保存为 WAV", saveMp3:"保存为 MP3", redo:"重新开始", secUnit:"秒", converting:"转换中…",
      errNoRec:"此设备不支持录音。", errDecode:"录音转换失败。请再试一次。", errMp3:"无法加载 MP3 编码器。请改用 WAV 保存。",
      cc_line1:"您制作的音源以 知识共享 署名-相同方式共享 4.0（CC BY-SA 4.0）提供。无论是活动还是商用，都可以自由使用。", cc_line2:"恳请：标注署名「介護と支援の相談どころ　そよぎ」，并在修改或再分发时以相同的许可（相同方式共享）进行共享。", cc_full:"许可证全文",
      editHint:"「落球口」＝点按放置（最多5个）并试落小球，点按已有的可重新测试。圆钉（椭圆，高=宽时为圆）/多边形（边数3〜8）/星形/挡板：点按放置→选中后拖动，用滑块调整大小和倾斜。橡皮擦：点按任意物体删除（拖动可连续擦除）。流程＝依次/随机/全屏随机。试着组合多边形和星形，找出仍能发出声音的布局吧。"
    },
    ar: {
      s_lively:"حيوي", lang:"اللغة", rec:"التسجيل", recStart:"● تسجيل", recStop:"■ إيقاف", range:"النطاق", selection:"التحديد", selAll:"الكل", preview:"▶ استماع", exportLbl:"التصدير", saveWav:"حفظ كـ WAV", saveMp3:"حفظ كـ MP3", redo:"البدء من جديد", secUnit:"ث", converting:"جارٍ التحويل…",
      errNoRec:"هذا الجهاز لا يدعم التسجيل.", errDecode:"تعذّرت معالجة التسجيل. يُرجى المحاولة مرة أخرى.", errMp3:"تعذّر تحميل مُرمِّز MP3. يُرجى الحفظ بصيغة WAV بدلاً من ذلك.",
      cc_line1:"المقاطع الصوتية التي تصنعها متاحة بموجب رخصة المشاع الإبداعي: نَسب المُصنَّف-الترخيص بالمثل 4.0 (CC BY-SA 4.0). يمكنك استخدامها بحرية، في الفعاليات وللأغراض التجارية أيضاً.", cc_line2:"رجاءً: اعرض حقوق النَّسب 「介護と支援の相談どころ　そよぎ」، وعند التعديل أو إعادة التوزيع شارِكها بالترخيص نفسه (الترخيص بالمثل).", cc_full:"النص الكامل للرخصة",
      editHint:"«فتحة الإسقاط» = انقر للإضافة (حتى 5) مع إسقاط كرة تجريبية، وانقر على واحدة موجودة لإعادة الاختبار. الوتد (بيضاوي؛ عندما يتساوى الطول مع العرض يصبح دائرياً) / المضلّع (عدد الأضلاع من 3 إلى 8) / النجمة / اللوح: انقر لوضعها ثم اخترها واسحبها، واستخدم أشرطة التمرير لضبط الحجم والميل. الممحاة: انقر على أي شيء لمسحه (اسحب للمسح المتواصل). التدفّق = بالترتيب / عشوائي / عشوائي كلّي. جرّب تركيب المضلّعات والنجوم وابتكر ترتيباً يظل يُصدر الصوت."
    }
  };
  for (var _lc in NEWKEYS) { if (I18N[_lc]) { var _dd = NEWKEYS[_lc]; for (var _kk in _dd) { I18N[_lc][_kk] = _dd[_kk]; } } }

  /* 起動画面の開発クレジット(dev_credit=ラベルのみ・末尾に区切り)。団体名はHTML側で固定リンク(日本語のまま)。 */
  var SPLASH = {
    ja: { dev_credit: 'アプリ開発:' },
    en: { dev_credit: 'App developed by ' },
    de: { dev_credit: 'App entwickelt von ' },
    fr: { dev_credit: 'Application développée par ' },
    es: { dev_credit: 'App desarrollada por ' },
    it: { dev_credit: 'App sviluppata da ' },
    pt: { dev_credit: 'App desenvolvido por ' },
    nl: { dev_credit: 'App ontwikkeld door ' },
    sv: { dev_credit: 'Appen är utvecklad av ' },
    ko: { dev_credit: '앱 개발: ' },
    zh: { dev_credit: '应用开发：' },
    ar: { dev_credit: 'تطوير التطبيق: ' }
  };
  for (var _l2 in SPLASH) { if (I18N[_l2]) { for (var _k2 in SPLASH[_l2]) { I18N[_l2][_k2] = SPLASH[_l2][_k2]; } } }

  /* つくるモードの「保存(10枠)/譲渡・バックアップ用コード」のUI文言。全12言語。 */
  var SAVEKEYS = {
    ja: { sv_save:"保存", sv_del:"消す", sv_show:"コードを見る", sv_import:"コードで読む", sv_copy:"コピー", sv_load:"読み込む", sv_saved:"保存しました", sv_loaded:"読み込みました", sv_bad:"コードが正しくありません", sv_full:"枠がいっぱいです", sv_hint:"あいてる枠=今の盤面を保存 / 入っている枠=読み込み。コードにすれば、ゆずる・バックアップができます" },
    en: { sv_save:"Save", sv_del:"Delete", sv_show:"Show code", sv_import:"Load code", sv_copy:"Copy", sv_load:"Load", sv_saved:"Saved", sv_loaded:"Loaded", sv_bad:"Invalid code", sv_full:"All slots are full", sv_hint:"Empty slot = save this board / filled slot = load it. Turn it into a code to share or back up." },
    de: { sv_save:"Speichern", sv_del:"Löschen", sv_show:"Code zeigen", sv_import:"Code laden", sv_copy:"Kopieren", sv_load:"Laden", sv_saved:"Gespeichert", sv_loaded:"Geladen", sv_bad:"Ungültiger Code", sv_full:"Alle Plätze belegt", sv_hint:"Leerer Platz = dieses Brett speichern / belegt = laden. Als Code zum Teilen oder Sichern." },
    fr: { sv_save:"Enregistrer", sv_del:"Supprimer", sv_show:"Voir le code", sv_import:"Charger un code", sv_copy:"Copier", sv_load:"Charger", sv_saved:"Enregistré", sv_loaded:"Chargé", sv_bad:"Code invalide", sv_full:"Tous les emplacements sont pleins", sv_hint:"Emplacement vide = enregistrer ce plateau / rempli = charger. En code pour partager ou sauvegarder." },
    es: { sv_save:"Guardar", sv_del:"Borrar", sv_show:"Ver código", sv_import:"Cargar código", sv_copy:"Copiar", sv_load:"Cargar", sv_saved:"Guardado", sv_loaded:"Cargado", sv_bad:"Código no válido", sv_full:"Todos los espacios están llenos", sv_hint:"Espacio vacío = guardar este tablero / lleno = cargar. Conviértelo en código para compartir o respaldar." },
    it: { sv_save:"Salva", sv_del:"Elimina", sv_show:"Mostra codice", sv_import:"Carica codice", sv_copy:"Copia", sv_load:"Carica", sv_saved:"Salvato", sv_loaded:"Caricato", sv_bad:"Codice non valido", sv_full:"Tutti gli spazi sono pieni", sv_hint:"Spazio vuoto = salva questo tavolo / pieno = carica. In codice per condividere o salvare." },
    pt: { sv_save:"Salvar", sv_del:"Excluir", sv_show:"Ver código", sv_import:"Carregar código", sv_copy:"Copiar", sv_load:"Carregar", sv_saved:"Salvo", sv_loaded:"Carregado", sv_bad:"Código inválido", sv_full:"Todos os espaços estão cheios", sv_hint:"Espaço vazio = salvar este tabuleiro / cheio = carregar. Em código para compartilhar ou fazer backup." },
    nl: { sv_save:"Opslaan", sv_del:"Verwijderen", sv_show:"Code tonen", sv_import:"Code laden", sv_copy:"Kopiëren", sv_load:"Laden", sv_saved:"Opgeslagen", sv_loaded:"Geladen", sv_bad:"Ongeldige code", sv_full:"Alle plekken zijn vol", sv_hint:"Leeg vak = dit bord opslaan / gevuld = laden. Als code om te delen of back-uppen." },
    sv: { sv_save:"Spara", sv_del:"Ta bort", sv_show:"Visa kod", sv_import:"Läs in kod", sv_copy:"Kopiera", sv_load:"Läs in", sv_saved:"Sparat", sv_loaded:"Inläst", sv_bad:"Ogiltig kod", sv_full:"Alla platser är fulla", sv_hint:"Tom plats = spara denna bräda / fylld = läs in. Som kod för att dela eller säkerhetskopiera." },
    ko: { sv_save:"저장", sv_del:"삭제", sv_show:"코드 보기", sv_import:"코드로 불러오기", sv_copy:"복사", sv_load:"불러오기", sv_saved:"저장했어요", sv_loaded:"불러왔어요", sv_bad:"코드가 올바르지 않아요", sv_full:"칸이 가득 찼어요", sv_hint:"빈 칸=지금 판을 저장 / 채워진 칸=불러오기. 코드로 만들면 남에게 주거나 백업할 수 있어요." },
    zh: { sv_save:"保存", sv_del:"删除", sv_show:"查看代码", sv_import:"用代码读取", sv_copy:"复制", sv_load:"读取", sv_saved:"已保存", sv_loaded:"已读取", sv_bad:"代码无效", sv_full:"所有格子已满", sv_hint:"空格子=保存当前布局 / 已用格子=读取。做成代码即可赠送或备份。" },
    ar: { sv_save:"حفظ", sv_del:"حذف", sv_show:"عرض الرمز", sv_import:"تحميل رمز", sv_copy:"نسخ", sv_load:"تحميل", sv_saved:"تم الحفظ", sv_loaded:"تم التحميل", sv_bad:"رمز غير صالح", sv_full:"كل الخانات ممتلئة", sv_hint:"خانة فارغة = احفظ هذا اللوح / ممتلئة = حمّله. حوّله إلى رمز للمشاركة أو النسخ الاحتياطي." }
  };
  for (var _l3 in SAVEKEYS) { if (I18N[_l3]) { for (var _k3 in SAVEKEYS[_l3]) { I18N[_l3][_k3] = SAVEKEYS[_l3][_k3]; } } }

  /* 起動後にタイトル(言語設定)へ戻るボタン。全12言語。 */
  var MOREKEYS = {
    ja:{ backTitle:"タイトルに戻る" }, en:{ backTitle:"Back to title" }, de:{ backTitle:"Zum Titel" },
    fr:{ backTitle:"Au titre" }, es:{ backTitle:"Al título" }, it:{ backTitle:"Al titolo" },
    pt:{ backTitle:"Ao título" }, nl:{ backTitle:"Naar titel" }, sv:{ backTitle:"Till titeln" },
    ko:{ backTitle:"타이틀로" }, zh:{ backTitle:"返回标题" }, ar:{ backTitle:"إلى العنوان" }
  };
  for (var _l4 in MOREKEYS) { if (I18N[_l4]) { for (var _k4 in MOREKEYS[_l4]) { I18N[_l4][_k4] = MOREKEYS[_l4][_k4]; } } }

  /* 言語コード → 自称ラベル(切替UIの表示名) */
  var LABELS = {
    ja: '日本語', en: 'English', de: 'Deutsch', fr: 'Français', es: 'Español', it: 'Italiano',
    pt: 'Português', nl: 'Nederlands', sv: 'Svenska', ko: '한국어', zh: '中文', ar: 'العربية'
  };
  var LANGS = ['ja', 'en', 'de', 'fr', 'es', 'it', 'pt', 'nl', 'sv', 'ko', 'zh', 'ar'];
  var STORE_KEY = 'oto_lang';

  /* ---- 言語判定: localStorage → navigator.language 先頭2文字 → ja ---- */
  function detectLang() {
    try {
      var saved = localStorage.getItem(STORE_KEY);
      if (saved && I18N[saved]) return saved;
    } catch (e) {}
    var nav = (navigator.language || navigator.userLanguage || 'ja').slice(0, 2).toLowerCase();
    if (I18N[nav]) return nav;
    return 'ja';
  }

  var currentLang = detectLang();

  /* ---- t(key): 現在言語 → ja → key ---- */
  function t(key) {
    var cur = I18N[currentLang];
    if (cur && cur[key] != null) return cur[key];
    if (I18N.ja[key] != null) return I18N.ja[key];
    return key;
  }

  /* ---- applyLang(lang): lang/dir 設定・[data-i18n]置換・保存 ---- */
  function applyLang(lang) {
    if (!I18N[lang]) lang = 'ja';
    currentLang = lang;
    var doc = document.documentElement;
    doc.lang = lang;
    doc.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var k = nodes[i].getAttribute('data-i18n');
      nodes[i].textContent = t(k);
    }
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
    /* 切替UIの選択状態を同期 */
    var sel = document.getElementById('otoLangSelect');
    if (sel && sel.value !== lang) sel.value = lang;
  }

  /* ---- 言語切替UI(コンパクトな select)を生成して返す ----
     置き場所は呼び出し側で自由に append(推奨=設定パネル先頭)。
     見つからなければ何もしない安全設計。 */
  function buildSelect() {
    var sel = document.createElement('select');
    sel.id = 'otoLangSelect';
    sel.setAttribute('aria-label', 'Language');
    for (var i = 0; i < LANGS.length; i++) {
      var code = LANGS[i];
      var opt = document.createElement('option');
      opt.value = code;
      opt.textContent = LABELS[code];
      if (code === currentLang) opt.selected = true;
      sel.appendChild(opt);
    }
    sel.addEventListener('change', function () { applyLang(sel.value); });
    return sel;
  }

  /* DOM 準備後: 既存の #otoLangSelect が空なら自動生成して挿入、
     さらに現在言語を適用。呼び出し側が明示配置したい場合は
     data-oto-langhost 属性を持つ要素に入れる。 */
  function init() {
    var host = document.querySelector('[data-oto-langhost]');
    if (host && !document.getElementById('otoLangSelect')) {
      host.appendChild(buildSelect());
    }
    applyLang(currentLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.OtoI18n = {
    t: t,
    applyLang: applyLang,
    langs: LANGS,
    labels: LABELS,
    buildSelect: buildSelect,
    dict: I18N,               /* スモーク/検証用: 全言語辞書への参照 */
    get lang() { return currentLang; }
  };
})();
