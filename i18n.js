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

  /* Play版の書き出し(共有の画面)で 保存できなかったとき(2026-09-30・record.js)。全12言語。 */
  var SAVEFAILKEYS = {
    ja:{ saveFail:"保存できませんでした" }, en:{ saveFail:"Could not save" }, de:{ saveFail:"Speichern nicht möglich" },
    fr:{ saveFail:"Impossible d'enregistrer" }, es:{ saveFail:"No se pudo guardar" }, it:{ saveFail:"Impossibile salvare" },
    pt:{ saveFail:"Não foi possível salvar" }, nl:{ saveFail:"Opslaan is niet gelukt" }, sv:{ saveFail:"Kunde inte spara" },
    ko:{ saveFail:"저장하지 못했어요" }, zh:{ saveFail:"无法保存" }, ar:{ saveFail:"تعذّر الحفظ" }
  };
  for (var _l5 in SAVEFAILKEYS) { if (I18N[_l5]) { for (var _k5 in SAVEFAILKEYS[_l5]) { I18N[_l5][_k5] = SAVEFAILKEYS[_l5][_k5]; } } }

  /* はじめての 遊びかた(2026-09-30・index.html の openGuide)。全12言語。
     g_heads / g_bodies は ページの配列(ja と同じ数)。本文の {play} などは openGuide が その言語の画面の文字に さしかえる(ボタン名が画面と かならず同じ)。
     さいごの ボタンは タイトルと同じ「▶ + start」(押すと 案内を とじて はじめる)。g_again は タイトルの「? 遊びかた」の文字 */
  var GUIDEKEYS = {
    ja: { g_title:'遊びかた', g_step:'{n} / {m}', g_prev:'まえ', g_next:'つぎ', g_again:'遊びかた',
      g_heads:[
        '音の箱庭へ ようこそ',
        '「{play}」: 画面をタップして音を出す',
        '自動で降らす・速さ・音量',
        '「{edit}」: 盤面を自分で組む',
        '「{spout}」と保存',
        '「{rec}」: 録音して保存する',
        'つくった物と、もう一度見る場所'
      ],
      g_bodies:[
        'このアプリは、上から落ちる球がペグや板に当たって音が鳴る、音の箱庭です。\n音はいつも音階にそろうので、どこに当たっても きれいに響きます。ヘッドフォンがおすすめです。\n言語は、上の「{lang}」でえらべます。',
        '「{play}」では、上の盤面をタップすると、そこから球が落ちて音が鳴ります。\n「{material}」で音色(「{m_glass}」「{m_piano}」など)を、「{scale}」で雰囲気(「{s_bright}」「{s_japan}」など)をえらべます。\n「{ambient}」の「{a_rain}」「{a_wave}」などを重ねることもできます。',
        '「{dropBtn}」を押すと、球が自動で落ちつづけます。もう一度押すと止まります。\n「{speed}」で落とす速さを、「{volume}」で音の大きさを変えられます。',
        '「{edit}」に切りかえると、盤面に物を置けます。「{tool}」で「{peg}」「{poly}」「{star}」「{board}」をえらび、盤面をタップして置きます。\n置いた物はドラッグで動かし、スライダーで大きさや かたむきを変えます。「{erase}」で消せます。\n「{clearAll}」で全部消え、「{reset}」で はじめの並びに戻ります。',
        '「{spout}」をタップで置くと、そこから球が落ちます(5つまで)。「{flow}」で落ちる順番をえらべます。\n「{sv_save}」のあいている枠を押すと、今の盤面を保存します。入っている枠を押すと読み込みます。\n「{sv_show}」で出るコードをのこしておくと、ほかの端末でも「{sv_import}」から読み込めます。',
        '「{recStart}」を押すと、鳴っている音を録音します。「{recStop}」で止めます。\n止めたあと、波の形の上で使う範囲をえらび、「{preview}」で聞いて、「{saveWav}」で保存します。\nつくった音の使い方(CC BY-SA 4.0)は、録音の欄の下に書いてあります。',
        'つくった盤面は、この端末の中だけに保存され、どこにも送られません。登録もいりません。\n「{backTitle}」でタイトルに戻れます。この遊びかたは、タイトルの「{g_again}」で いつでも もう一度 見られます。'
      ] },
    en: { g_title:'How to play', g_step:'{n} / {m}', g_prev:'Back', g_next:'Next', g_again:'How to play',
      g_heads:[
        'Welcome to Oto no Hakoniwa',
        '"{play}": tap the screen to make sound',
        'Auto drop, speed and volume',
        '"{edit}": build your own board',
        '"{spout}" and saving',
        '"{rec}": record and save',
        'Your creations, and seeing this again'
      ],
      g_bodies:[
        'In this app, balls fall from the top, hit pegs and boards, and make sounds: a little garden of sound.\nThe notes always fit a musical scale, so wherever a ball hits, it sounds nice together. Headphones are recommended.\nChoose your language above, in "{lang}".',
        'In "{play}", tap the board at the top and a ball drops from there and makes a sound.\nChoose the tone with "{material}" ("{m_glass}", "{m_piano}" and more) and the mood with "{scale}" ("{s_bright}", "{s_japan}" and more).\nYou can also layer sounds from "{ambient}", such as "{a_rain}" or "{a_wave}".',
        'Tap "{dropBtn}" and balls keep falling on their own. Tap it again to stop.\nChange how fast they drop with "{speed}" and how loud they are with "{volume}".',
        'Switch to "{edit}" to place things on the board. Under "{tool}", choose "{peg}", "{poly}", "{star}" or "{board}", then tap the board to place it.\nDrag a placed item to move it, and use the sliders to change its size or tilt. Remove things with "{erase}".\n"{clearAll}" removes everything, and "{reset}" brings back the starting layout.',
        'Tap to place a "{spout}" and balls fall from there (up to 5). Choose the order they fall in with "{flow}".\nTap an empty slot under "{sv_save}" to save the current board. Tap a filled slot to load it.\nKeep the code from "{sv_show}" and you can load it on another device with "{sv_import}".',
        'Tap "{recStart}" to record the sound that is playing. Tap "{recStop}" to stop.\nThen choose the part to use on the waveform, listen with "{preview}", and save with "{saveWav}".\nHow you may use the sounds you make (CC BY-SA 4.0) is written below the recording area.',
        'Your boards are stored only on this device and are never sent anywhere. No sign-up is needed.\n"{backTitle}" takes you back to the title. You can see this guide again at any time with "{g_again}" on the title screen.'
      ] },
    de: { g_title:'Spielanleitung', g_step:'{n} / {m}', g_prev:'Zurück', g_next:'Weiter', g_again:'Spielanleitung',
      g_heads:[
        'Willkommen bei Oto no Hakoniwa',
        '„{play}“: auf den Bildschirm tippen und Töne machen',
        'Automatisch fallen lassen, Tempo und Lautstärke',
        '„{edit}“: das eigene Spielfeld bauen',
        '„{spout}“ und Speichern',
        '„{rec}“: aufnehmen und speichern',
        'Deine Werke und diese Anleitung'
      ],
      g_bodies:[
        'In dieser App fallen Kugeln von oben, treffen Pins und Bretter und erzeugen Töne: ein kleiner Klanggarten.\nDie Töne passen immer zu einer Tonleiter, deshalb klingt es überall schön zusammen. Kopfhörer werden empfohlen.\nDie Sprache wählst du oben bei „{lang}“.',
        'Tippst du bei „{play}“ auf das Spielfeld oben, fällt dort eine Kugel und erzeugt einen Ton.\nMit „{material}“ wählst du den Klang („{m_glass}“, „{m_piano}“ und mehr), mit „{scale}“ die Stimmung („{s_bright}“, „{s_japan}“ und mehr).\nUnter „{ambient}“ kannst du Klänge wie „{a_rain}“ oder „{a_wave}“ dazulegen.',
        'Tippe auf „{dropBtn}“, dann fallen die Kugeln von selbst weiter. Noch einmal tippen hält sie an.\nMit „{speed}“ änderst du, wie schnell sie fallen, mit „{volume}“, wie laut sie klingen.',
        'Wechsle zu „{edit}“, um Dinge auf das Spielfeld zu setzen. Wähle unter „{tool}“ „{peg}“, „{poly}“, „{star}“ oder „{board}“ und tippe dann auf das Spielfeld.\nGesetzte Teile verschiebst du durch Ziehen, mit den Reglern änderst du Größe und Neigung. Mit „{erase}“ entfernst du sie.\n„{clearAll}“ löscht alles, „{reset}“ stellt die Anfangsanordnung wieder her.',
        'Setze durch Tippen einen „{spout}“, dann fallen die Kugeln dort heraus (bis zu 5). Unter „{flow}“ wählst du die Reihenfolge.\nTippe unter „{sv_save}“ auf einen leeren Platz, um das aktuelle Spielfeld zu speichern. Ein belegter Platz lädt es.\nBewahre den Code aus „{sv_show}“ auf, dann kannst du ihn auf einem anderen Gerät mit „{sv_import}“ laden.',
        'Tippe auf „{recStart}“, um die Töne aufzunehmen, die gerade erklingen. Mit „{recStop}“ hältst du an.\nDanach wählst du auf der Wellenform den Teil aus, hörst ihn mit „{preview}“ an und speicherst ihn mit „{saveWav}“.\nWie du die Klänge nutzen darfst (CC BY-SA 4.0), steht unter dem Aufnahmebereich.',
        'Deine Spielfelder bleiben nur auf diesem Gerät und werden nirgendwohin gesendet. Eine Anmeldung ist nicht nötig.\nMit „{backTitle}“ kommst du zum Titelbildschirm. Diese Anleitung siehst du dort jederzeit wieder mit „{g_again}“.'
      ] },
    fr: { g_title:'Comment jouer', g_step:'{n} / {m}', g_prev:'Retour', g_next:'Suivant', g_again:'Comment jouer',
      g_heads:[
        'Bienvenue dans Oto no Hakoniwa',
        '« {play} » : touchez l’écran pour faire du son',
        'Lâcher automatique, vitesse et volume',
        '« {edit} » : construire votre plateau',
        '« {spout} » et sauvegarde',
        '« {rec} » : enregistrer et sauvegarder',
        'Vos créations et ce guide'
      ],
      g_bodies:[
        'Dans cette appli, des billes tombent d’en haut, touchent des picots et des planches et font des sons : un petit jardin sonore.\nLes notes suivent toujours une gamme, alors tout sonne bien ensemble, où que la bille touche. Un casque est recommandé.\nChoisissez la langue en haut, dans « {lang} ».',
        'En mode « {play} », touchez le plateau en haut : une bille tombe de là et fait un son.\nChoisissez le timbre avec « {material} » (« {m_glass} », « {m_piano} », etc.) et l’ambiance avec « {scale} » (« {s_bright} », « {s_japan} », etc.).\nVous pouvez aussi ajouter des sons de « {ambient} », comme « {a_rain} » ou « {a_wave} ».',
        'Touchez « {dropBtn} » et les billes tombent toutes seules. Touchez encore pour arrêter.\nRéglez leur rythme avec « {speed} » et le niveau sonore avec « {volume} ».',
        'Passez en mode « {edit} » pour placer des éléments sur le plateau. Dans « {tool} », choisissez « {peg} », « {poly} », « {star} » ou « {board} », puis touchez le plateau.\nFaites glisser un élément pour le déplacer, et réglez sa taille ou son inclinaison avec les curseurs. « {erase} » permet d’en retirer.\n« {clearAll} » retire tout, et « {reset} » remet la disposition de départ.',
        'Touchez pour placer une « {spout} » : les billes tombent de là (5 au maximum). Choisissez l’ordre avec « {flow} ».\nDans « {sv_save} », touchez un emplacement vide pour enregistrer le plateau. Un emplacement rempli le recharge.\nGardez le code de « {sv_show} » : vous pourrez le charger sur un autre appareil avec « {sv_import} ».',
        'Touchez « {recStart} » pour enregistrer le son en cours. Touchez « {recStop} » pour arrêter.\nEnsuite, choisissez la partie à garder sur la forme d’onde, écoutez-la avec « {preview} » et sauvegardez-la avec « {saveWav} ».\nLes conditions d’utilisation des sons créés (CC BY-SA 4.0) sont écrites sous la zone d’enregistrement.',
        'Vos plateaux restent uniquement sur cet appareil et ne sont jamais envoyés. Aucune inscription n’est nécessaire.\n« {backTitle} » ramène à l’écran titre. Vous pouvez y revoir ce guide à tout moment avec « {g_again} ».'
      ] },
    es: { g_title:'Cómo jugar', g_step:'{n} / {m}', g_prev:'Atrás', g_next:'Siguiente', g_again:'Cómo jugar',
      g_heads:[
        'Te damos la bienvenida a Oto no Hakoniwa',
        '"{play}": toca la pantalla para hacer sonar',
        'Soltar solo, velocidad y volumen',
        '"{edit}": arma tu propio tablero',
        '"{spout}" y guardar',
        '"{rec}": grabar y guardar',
        'Lo que creas y esta guía'
      ],
      g_bodies:[
        'En esta app, unas bolas caen desde arriba, chocan con clavijas y tablas y suenan: un pequeño jardín de sonidos.\nLas notas siempre encajan en una escala, así que suena bien toque donde toque. Se recomiendan auriculares.\nElige el idioma arriba, en "{lang}".',
        'En "{play}", toca el tablero de arriba y caerá una bola desde ahí que suena.\nElige el timbre con "{material}" ("{m_glass}", "{m_piano}", etc.) y el ambiente con "{scale}" ("{s_bright}", "{s_japan}", etc.).\nTambién puedes sumar sonidos de "{ambient}", como "{a_rain}" u "{a_wave}".',
        'Toca "{dropBtn}" y las bolas siguen cayendo solas. Tócalo otra vez para parar.\nCambia lo rápido que caen con "{speed}" y lo fuerte que suenan con "{volume}".',
        'Cambia a "{edit}" para poner cosas en el tablero. En "{tool}" elige "{peg}", "{poly}", "{star}" o "{board}" y toca el tablero para colocarlo.\nArrastra lo que pusiste para moverlo y usa los deslizadores para su tamaño o inclinación. Quítalo con "{erase}".\n"{clearAll}" lo quita todo y "{reset}" vuelve a la disposición inicial.',
        'Toca para poner una "{spout}" y las bolas caerán desde ahí (hasta 5). Elige el orden con "{flow}".\nEn "{sv_save}", toca un espacio vacío para guardar el tablero actual. Un espacio lleno lo carga.\nGuarda el código de "{sv_show}" y podrás cargarlo en otro dispositivo con "{sv_import}".',
        'Toca "{recStart}" para grabar lo que está sonando. Toca "{recStop}" para parar.\nLuego elige la parte que quieres en la forma de onda, escúchala con "{preview}" y guárdala con "{saveWav}".\nCómo puedes usar los sonidos que creas (CC BY-SA 4.0) está escrito debajo de la zona de grabación.',
        'Tus tableros se guardan solo en este dispositivo y nunca se envían a ningún sitio. No hace falta registrarse.\n"{backTitle}" te lleva a la pantalla de título. Allí puedes ver esta guía otra vez cuando quieras con "{g_again}".'
      ] },
    it: { g_title:'Come si gioca', g_step:'{n} / {m}', g_prev:'Indietro', g_next:'Avanti', g_again:'Come si gioca',
      g_heads:[
        'Ti diamo il benvenuto in Oto no Hakoniwa',
        '«{play}»: tocca lo schermo per fare suoni',
        'Caduta automatica, velocità e volume',
        '«{edit}»: costruisci il tuo tavolo',
        '«{spout}» e salvataggio',
        '«{rec}»: registrare e salvare',
        'Le tue creazioni e questa guida'
      ],
      g_bodies:[
        'In questa app delle palline cadono dall’alto, colpiscono pioli e barre e fanno suoni: un piccolo giardino di suoni.\nLe note seguono sempre una scala, quindi suona bene insieme ovunque la pallina colpisca. Sono consigliate le cuffie.\nScegli la lingua in alto, in «{lang}».',
        'In «{play}», tocca il tavolo in alto: da lì cade una pallina che suona.\nScegli il timbro con «{material}» («{m_glass}», «{m_piano}» e altri) e l’atmosfera con «{scale}» («{s_bright}», «{s_japan}» e altre).\nPuoi anche aggiungere suoni da «{ambient}», come «{a_rain}» o «{a_wave}».',
        'Tocca «{dropBtn}» e le palline continuano a cadere da sole. Toccalo di nuovo per fermarle.\nCambia quanto spesso cadono con «{speed}» e quanto forte suonano con «{volume}».',
        'Passa a «{edit}» per mettere oggetti sul tavolo. In «{tool}» scegli «{peg}», «{poly}», «{star}» o «{board}», poi tocca il tavolo per posizionarlo.\nTrascina un oggetto per spostarlo e usa i cursori per dimensione e inclinazione. Toglilo con «{erase}».\n«{clearAll}» toglie tutto e «{reset}» riporta la disposizione iniziale.',
        'Tocca per mettere una «{spout}»: le palline cadranno da lì (fino a 5). Scegli l’ordine con «{flow}».\nIn «{sv_save}», tocca uno spazio vuoto per salvare il tavolo attuale. Uno spazio pieno lo carica.\nConserva il codice di «{sv_show}» e potrai caricarlo su un altro dispositivo con «{sv_import}».',
        'Tocca «{recStart}» per registrare ciò che sta suonando. Tocca «{recStop}» per fermare.\nPoi scegli la parte da tenere sulla forma d’onda, ascoltala con «{preview}» e salvala con «{saveWav}».\nCome puoi usare i suoni che crei (CC BY-SA 4.0) è scritto sotto l’area di registrazione.',
        'I tuoi tavoli restano solo su questo dispositivo e non vengono mai inviati. Non serve registrarsi.\n«{backTitle}» riporta alla schermata del titolo. Lì puoi rivedere questa guida quando vuoi con «{g_again}».'
      ] },
    pt: { g_title:'Como jogar', g_step:'{n} / {m}', g_prev:'Voltar', g_next:'Próximo', g_again:'Como jogar',
      g_heads:[
        'Boas-vindas ao Oto no Hakoniwa',
        '"{play}": toque na tela para fazer som',
        'Soltar automático, velocidade e volume',
        '"{edit}": monte seu próprio tabuleiro',
        '"{spout}" e salvar',
        '"{rec}": gravar e salvar',
        'O que você cria e este guia'
      ],
      g_bodies:[
        'Neste app, bolas caem de cima, batem em pinos e placas e fazem sons: um pequeno jardim de sons.\nAs notas sempre seguem uma escala, então tudo soa bem junto, onde quer que a bola bata. Fones de ouvido são recomendados.\nEscolha o idioma acima, em "{lang}".',
        'Em "{play}", toque no tabuleiro em cima e uma bola cai dali fazendo som.\nEscolha o timbre em "{material}" ("{m_glass}", "{m_piano}" e outros) e o clima em "{scale}" ("{s_bright}", "{s_japan}" e outras).\nVocê também pode somar sons de "{ambient}", como "{a_rain}" ou "{a_wave}".',
        'Toque em "{dropBtn}" e as bolas continuam caindo sozinhas. Toque de novo para parar.\nMude a rapidez da queda em "{speed}" e o volume do som em "{volume}".',
        'Mude para "{edit}" para colocar peças no tabuleiro. Em "{tool}", escolha "{peg}", "{poly}", "{star}" ou "{board}" e toque no tabuleiro para colocar.\nArraste uma peça para movê-la e use os controles deslizantes para o tamanho ou a inclinação. Tire peças com "{erase}".\n"{clearAll}" tira tudo e "{reset}" traz de volta o arranjo inicial.',
        'Toque para colocar uma "{spout}" e as bolas cairão dali (até 5). Escolha a ordem em "{flow}".\nEm "{sv_save}", toque num espaço vazio para salvar o tabuleiro atual. Um espaço cheio carrega o tabuleiro.\nGuarde o código de "{sv_show}" e você poderá carregá-lo em outro aparelho com "{sv_import}".',
        'Toque em "{recStart}" para gravar o som que está tocando. Toque em "{recStop}" para parar.\nDepois escolha a parte que quer na forma de onda, ouça com "{preview}" e salve com "{saveWav}".\nComo você pode usar os sons que cria (CC BY-SA 4.0) está escrito abaixo da área de gravação.',
        'Seus tabuleiros ficam só neste aparelho e nunca são enviados. Não precisa de cadastro.\n"{backTitle}" leva você à tela de título. Lá você pode ver este guia de novo quando quiser em "{g_again}".'
      ] },
    nl: { g_title:'Zo speel je', g_step:'{n} / {m}', g_prev:'Vorige', g_next:'Volgende', g_again:'Zo speel je',
      g_heads:[
        'Welkom bij Oto no Hakoniwa',
        '"{play}": tik op het scherm voor geluid',
        'Vanzelf laten vallen, snelheid en volume',
        '"{edit}": bouw je eigen bord',
        '"{spout}" en opslaan',
        '"{rec}": opnemen en opslaan',
        'Wat je maakt, en deze uitleg'
      ],
      g_bodies:[
        'In deze app vallen ballen van boven, raken pennen en planken en maken geluid: een kleine geluidstuin.\nDe tonen passen altijd in een toonladder, dus waar een bal ook raakt, het klinkt mooi samen. Een koptelefoon is aan te raden.\nKies de taal bovenaan bij "{lang}".',
        'Tik bij "{play}" op het bord bovenaan: daar valt een bal die geluid maakt.\nKies de klank met "{material}" ("{m_glass}", "{m_piano}" en meer) en de sfeer met "{scale}" ("{s_bright}", "{s_japan}" en meer).\nJe kunt ook geluiden uit "{ambient}" toevoegen, zoals "{a_rain}" of "{a_wave}".',
        'Tik op "{dropBtn}" en de ballen blijven vanzelf vallen. Tik nog eens om te stoppen.\nMet "{speed}" verander je hoe snel ze vallen, met "{volume}" hoe hard ze klinken.',
        'Schakel naar "{edit}" om dingen op het bord te zetten. Kies bij "{tool}" "{peg}", "{poly}", "{star}" of "{board}" en tik op het bord om te plaatsen.\nSleep iets om het te verplaatsen en gebruik de schuiven voor grootte of helling. Met "{erase}" haal je het weg.\n"{clearAll}" haalt alles weg en "{reset}" zet de beginopstelling terug.',
        'Tik om een "{spout}" te plaatsen: daar vallen de ballen uit (tot 5). Kies de volgorde bij "{flow}".\nTik bij "{sv_save}" op een leeg vak om het huidige bord op te slaan. Een gevuld vak laadt het.\nBewaar de code van "{sv_show}", dan kun je hem op een ander apparaat laden met "{sv_import}".',
        'Tik op "{recStart}" om op te nemen wat er klinkt. Tik op "{recStop}" om te stoppen.\nKies daarna op de golfvorm het stuk dat je wilt, luister met "{preview}" en sla op met "{saveWav}".\nHoe je de geluiden die je maakt mag gebruiken (CC BY-SA 4.0), staat onder het opnamevak.',
        'Je borden blijven alleen op dit apparaat en worden nergens naartoe gestuurd. Aanmelden is niet nodig.\nMet "{backTitle}" ga je terug naar het titelscherm. Daar kun je deze uitleg altijd opnieuw bekijken met "{g_again}".'
      ] },
    sv: { g_title:'Så spelar du', g_step:'{n} / {m}', g_prev:'Tillbaka', g_next:'Nästa', g_again:'Så spelar du',
      g_heads:[
        'Välkommen till Oto no Hakoniwa',
        '"{play}": tryck på skärmen för att göra ljud',
        'Släpp automatiskt, hastighet och volym',
        '"{edit}": bygg din egen bräda',
        '"{spout}" och att spara',
        '"{rec}": spela in och spara',
        'Det du skapar, och den här guiden'
      ],
      g_bodies:[
        'I den här appen faller bollar uppifrån, träffar pinnar och plattor och gör ljud: en liten ljudträdgård.\nTonerna följer alltid en skala, så var bollen än träffar låter det fint tillsammans. Hörlurar rekommenderas.\nVälj språk högst upp, i "{lang}".',
        'I "{play}" trycker du på brädan högst upp, så faller en boll därifrån och gör ljud.\nVälj klang med "{material}" ("{m_glass}", "{m_piano}" med flera) och stämning med "{scale}" ("{s_bright}", "{s_japan}" med flera).\nDu kan också lägga till ljud från "{ambient}", till exempel "{a_rain}" eller "{a_wave}".',
        'Tryck på "{dropBtn}" så fortsätter bollarna att falla av sig själva. Tryck igen för att stoppa.\nÄndra hur fort de faller med "{speed}" och hur starkt de låter med "{volume}".',
        'Byt till "{edit}" för att placera saker på brädan. Välj "{peg}", "{poly}", "{star}" eller "{board}" under "{tool}" och tryck på brädan för att placera.\nDra en sak för att flytta den och använd reglagen för storlek eller lutning. Ta bort saker med "{erase}".\n"{clearAll}" tar bort allt och "{reset}" tar tillbaka startuppställningen.',
        'Tryck för att placera ett "{spout}", så faller bollarna därifrån (upp till 5). Välj ordningen med "{flow}".\nTryck på en tom plats under "{sv_save}" för att spara brädan. En fylld plats läser in den.\nSpara koden från "{sv_show}", så kan du läsa in den på en annan enhet med "{sv_import}".',
        'Tryck på "{recStart}" för att spela in det som låter. Tryck på "{recStop}" för att stoppa.\nVälj sedan delen du vill ha på vågformen, lyssna med "{preview}" och spara med "{saveWav}".\nHur du får använda ljuden du gör (CC BY-SA 4.0) står under inspelningsområdet.',
        'Dina brädor sparas bara på den här enheten och skickas aldrig någonstans. Ingen registrering behövs.\n"{backTitle}" tar dig tillbaka till titelskärmen. Där kan du se den här guiden igen när som helst med "{g_again}".'
      ] },
    ko: { g_title:'플레이 방법', g_step:'{n} / {m}', g_prev:'이전', g_next:'다음', g_again:'플레이 방법',
      g_heads:[
        'Oto no Hakoniwa에 오신 것을 환영해요',
        '"{play}": 화면을 눌러 소리 내기',
        '자동으로 떨어뜨리기, 속도와 음량',
        '"{edit}": 판을 직접 꾸미기',
        '"{spout}"과 저장',
        '"{rec}": 녹음하고 저장하기',
        '만든 것과 이 안내'
      ],
      g_bodies:[
        '이 앱은 위에서 떨어지는 공이 페그나 판에 부딪혀 소리가 나는, 작은 소리 정원이에요.\n음은 항상 음계에 맞춰지기 때문에 어디에 부딪혀도 예쁘게 울려요. 헤드폰을 권장해요.\n언어는 위의 "{lang}"에서 고를 수 있어요.',
        '"{play}"에서 위쪽 판을 누르면 거기서 공이 떨어지며 소리가 나요.\n"{material}"로 음색("{m_glass}", "{m_piano}" 등)을, "{scale}"로 분위기("{s_bright}", "{s_japan}" 등)를 고를 수 있어요.\n"{ambient}"의 "{a_rain}", "{a_wave}" 같은 소리를 겹칠 수도 있어요.',
        '"{dropBtn}"를 누르면 공이 자동으로 계속 떨어져요. 한 번 더 누르면 멈춰요.\n"{speed}"로 떨어지는 빠르기를, "{volume}"으로 소리 크기를 바꿀 수 있어요.',
        '"{edit}"로 바꾸면 판 위에 물건을 놓을 수 있어요. "{tool}"에서 "{peg}", "{poly}", "{star}", "{board}" 중에서 고르고 판을 눌러 놓아요.\n놓은 것은 끌어서 옮기고, 슬라이더로 크기나 기울기를 바꿔요. "{erase}"로 지울 수 있어요.\n"{clearAll}"로 모두 지우고, "{reset}"를 누르면 처음 배치로 돌아가요.',
        '"{spout}"을 눌러 놓으면 거기서 공이 떨어져요(최대 5개). "{flow}"에서 떨어지는 순서를 고를 수 있어요.\n"{sv_save}"의 빈 칸을 누르면 지금 판을 저장해요. 채워진 칸을 누르면 불러와요.\n"{sv_show}"로 나오는 코드를 남겨 두면, 다른 기기에서 "{sv_import}"로 불러올 수 있어요.',
        '"{recStart}"를 누르면 울리고 있는 소리를 녹음해요. "{recStop}"로 멈춰요.\n멈춘 뒤 파형 위에서 쓸 부분을 고르고, "{preview}"로 듣고, "{saveWav}"으로 저장해요.\n만든 소리의 사용 방법(CC BY-SA 4.0)은 녹음 칸 아래에 적혀 있어요.',
        '만든 판은 이 기기 안에만 저장되고 어디에도 보내지지 않아요. 가입도 필요 없어요.\n"{backTitle}"를 누르면 타이틀로 돌아가요. 이 안내는 타이틀의 "{g_again}"에서 언제든 다시 볼 수 있어요.'
      ] },
    zh: { g_title:'玩法', g_step:'{n} / {m}', g_prev:'上一步', g_next:'下一步', g_again:'玩法',
      g_heads:[
        '欢迎来到 Oto no Hakoniwa',
        '“{play}”：点按屏幕发出声音',
        '自动落球、速度和音量',
        '“{edit}”：自己搭建盘面',
        '“{spout}”和保存',
        '“{rec}”：录音并保存',
        '你的作品与本说明'
      ],
      g_bodies:[
        '在这个应用里，球从上方落下，碰到圆钉和挡板就会发出声音，就像一个小小的声音庭院。\n音符总是落在音阶上，所以无论碰到哪里，声音都很和谐。建议佩戴耳机。\n可以在上方的“{lang}”中选择语言。',
        '在“{play}”模式下点按上方的盘面，球就会从那里落下并发出声音。\n用“{material}”选择音色（“{m_glass}”“{m_piano}”等），用“{scale}”选择氛围（“{s_bright}”“{s_japan}”等）。\n还可以叠加“{ambient}”里的“{a_rain}”“{a_wave}”等声音。',
        '点“{dropBtn}”，球会自动不断落下。再点一次就会停止。\n用“{speed}”调整落下的快慢，用“{volume}”调整声音大小。',
        '切换到“{edit}”，就可以在盘面上摆放东西。在“{tool}”中选择“{peg}”“{poly}”“{star}”或“{board}”，再点按盘面放置。\n拖动已放置的东西可以移动，用滑块调整大小和倾斜。用“{erase}”可以删除。\n“{clearAll}”会全部删除，“{reset}”会回到最初的布局。',
        '点按放置“{spout}”，球就会从那里落下（最多5个）。在“{flow}”中选择落下的顺序。\n点“{sv_save}”里的空格子，就会保存当前盘面。点已有内容的格子则会读取。\n保存好“{sv_show}”显示的代码，就能在其他设备上用“{sv_import}”读取。',
        '点“{recStart}”，就会录下正在播放的声音。点“{recStop}”停止。\n停止后在波形上选择要用的部分，用“{preview}”试听，再用“{saveWav}”保存。\n制作的声音如何使用（CC BY-SA 4.0），写在录音区域的下方。',
        '你搭建的盘面只保存在本设备中，不会发送到任何地方。也不需要注册。\n点“{backTitle}”回到标题画面。本说明随时可以在标题画面点“{g_again}”再次查看。'
      ] },
    ar: { g_title:'طريقة اللعب', g_step:'{n} / {m}', g_prev:'السابق', g_next:'التالي', g_again:'طريقة اللعب',
      g_heads:[
        'مرحباً بك في Oto no Hakoniwa',
        '«{play}»: المس الشاشة لتُصدر صوتاً',
        'الإسقاط التلقائي والسرعة والصوت',
        '«{edit}»: ابنِ لوحك بنفسك',
        '«{spout}» والحفظ',
        '«{rec}»: سجّل واحفظ',
        'ما تصنعه وهذا الدليل'
      ],
      g_bodies:[
        'في هذا التطبيق تسقط كرات من الأعلى، فتصطدم بالأوتاد والألواح وتُصدر أصواتاً: حديقة صغيرة من الأصوات.\nالنغمات تتبع دائماً سلّماً موسيقياً، لذلك يبدو الصوت متناغماً أينما اصطدمت الكرة. يُنصح بسماعات الرأس.\nاختر اللغة في الأعلى من «{lang}».',
        'في «{play}» المس اللوح في الأعلى، فتسقط كرة من هناك وتُصدر صوتاً.\nاختر النغمة من «{material}» («{m_glass}» و«{m_piano}» وغيرها) والجو من «{scale}» («{s_bright}» و«{s_japan}» وغيرها).\nويمكنك أيضاً إضافة أصوات من «{ambient}» مثل «{a_rain}» أو «{a_wave}».',
        'المس «{dropBtn}» فتستمر الكرات في السقوط وحدها. المسه مرة أخرى للإيقاف.\nغيّر سرعة سقوطها من «{speed}» وارتفاع صوتها من «{volume}».',
        'انتقل إلى «{edit}» لتضع أشياء على اللوح. اختر من «{tool}» «{peg}» أو «{poly}» أو «{star}» أو «{board}»، ثم المس اللوح لوضعها.\nاسحب الشيء لتحريكه، واستخدم أشرطة التمرير لحجمه أو ميله. أزِله بـ«{erase}».\n«{clearAll}» يزيل كل شيء، و«{reset}» يعيد الترتيب الأول.',
        'المس لتضع «{spout}» فتسقط الكرات منها (حتى 5). اختر ترتيب السقوط من «{flow}».\nفي «{sv_save}» المس خانة فارغة لحفظ اللوح الحالي. والخانة الممتلئة تحمّله.\nاحتفظ بالرمز من «{sv_show}» لتحمّله على جهاز آخر من «{sv_import}».',
        'المس «{recStart}» لتسجيل الصوت الذي يعمل الآن. المس «{recStop}» للإيقاف.\nبعدها اختر الجزء الذي تريده على شكل الموجة، واستمع إليه بـ«{preview}»، واحفظه بـ«{saveWav}».\nطريقة استخدام الأصوات التي تصنعها (CC BY-SA 4.0) مكتوبة أسفل منطقة التسجيل.',
        'ألواحك تبقى على هذا الجهاز فقط ولا تُرسل إلى أي مكان. لا يلزم أي حساب.\n«{backTitle}» يعيدك إلى شاشة العنوان. ومن هناك يمكنك رؤية هذا الدليل مرة أخرى في أي وقت من «{g_again}».'
      ] }
  };
  for (var _l6 in GUIDEKEYS) { if (I18N[_l6]) { for (var _k6 in GUIDEKEYS[_l6]) { I18N[_l6][_k6] = GUIDEKEYS[_l6][_k6]; } } }

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
