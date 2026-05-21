const homePage = document.getElementById("homePage");
const pageView = document.getElementById("pageView");
const backBtn = document.getElementById("backBtn");
const pageTitle = document.getElementById("pageTitle");
const pageContent = document.getElementById("pageContent");

const pages = {
  student:{
    title:"🎓 Student yordam",
    content:`
      <button class="sub" onclick="studentTool('kurs')">📘 Kurs ishi tayyorlash</button>
      <button class="sub" onclick="studentTool('referat')">📄 Referat tayyorlash</button>
      <button class="sub" onclick="studentTool('mustaqil')">📝 Mustaqil ish tayyorlash</button>
      <button class="sub" onclick="studentTool('test')">✅ Test savollari yaratish</button>
      <button class="sub" onclick="studentTool('hemis')">🎓 HEMIS yordam</button>
      <button class="sub" onclick="studentTool('kontrakt')">💳 Kontrakt EDU yordam</button>
    `
  },

  library:{
    title: APP_DATA.library.title,
    content: APP_DATA.library.items.map(item => `
      <div class="book">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <span>${item.type}</span>
      </div>
    `).join("")
  },

  ai:{
    title:"🤖 AI yordamchi",
    content:`
      <button class="sub" onclick="studentTool('ai_text')">Matn yozish</button>
      <button class="sub" onclick="studentTool('ai_translate')">Tarjima</button>
      <button class="sub" onclick="studentTool('ai_plan')">Reja tuzish</button>
    `
  },

  docs:{
    title:"📄 Hujjatlar",
    content:`
      <button class="sub" onclick="docTool('ariza')">Ariza</button>
      <button class="sub" onclick="docTool('tilxat')">Tilxat</button>
      <button class="sub" onclick="docTool('rezyume')">Rezyume</button>
      <button class="sub" onclick="docTool('shartnoma')">Shartnoma</button>
    `
  },

  chess:{
    title:"♟ Shaxmat",
    content:`
      <button class="sub">Bot bilan o‘ynash</button>
      <button class="sub">Online o‘ynash</button>
      <button class="sub">Reyting</button>
      <p>♟ Shaxmat keyingi bosqichda to‘liq o‘yin sifatida qo‘shiladi.</p>
    `
  },

  checkers:{
  title:"⚫ Shashka",
  content:`
    <button class="sub" onclick="startCheckersBot()">🤖 Bot bilan o‘ynash</button>
    <button class="sub" onclick="startOnlineCheckers()">🌐 Online o‘ynash</button>
    <button class="sub">🏆 Reyting</button>
  `
},

  calc:{
    title:"🧮 Hisob-kitob",
    content:`
      <input id="sumInput" class="input" placeholder="Summa kiriting">
      <input id="percentInput" class="input" placeholder="Foiz kiriting">
      <button class="sub" onclick="calcPercent()">Foiz hisoblash</button>
      <div id="calcResult" class="result"></div>
    `
  },

  profile:{
    title:"👤 Profil",
    content:`
      <button class="sub">Mening ma’lumotlarim</button>
      <button class="sub">Premium holati</button>
      <button class="sub">Sozlamalar</button>
    `
  },

  premium:{
    title:"⭐ VELTOR Premium",
    content:`
      <button class="sub">AI Premium</button>
      <button class="sub">Premium kitoblar</button>
      <button class="sub">VIP xizmatlar</button>
      <button class="sub">Obuna olish</button>
    `
  }
};

function openPage(name){
  const p = pages[name];

  pageTitle.innerHTML = p.title;
  pageContent.innerHTML = p.content;

  homePage.classList.add("hidden");
  pageView.classList.remove("hidden");
  backBtn.classList.remove("hidden");
}

document.querySelectorAll(".card").forEach(btn => {
  btn.onclick = () => openPage(btn.dataset.page);
});

document.getElementById("premiumBtn").onclick = () => {
  openPage("premium");
};

backBtn.onclick = () => {
  pageView.classList.add("hidden");
  homePage.classList.remove("hidden");
  backBtn.classList.add("hidden");
};

document.getElementById("themeBtn").onclick = () => {
  document.body.classList.toggle("light");
};

function studentTool(type){
  let titles = {
    kurs:"📘 Kurs ishi",
    referat:"📄 Referat",
    mustaqil:"📝 Mustaqil ish",
    test:"✅ Test savollari",
    hemis:"🎓 HEMIS yordam",
    kontrakt:"💳 Kontrakt EDU yordam",
    ai_text:"🤖 Matn yozish",
    ai_translate:"🌐 Tarjima",
    ai_plan:"🧠 Reja tuzish"
  };

  pageTitle.innerHTML = titles[type];

  if(type === "hemis"){
    pageContent.innerHTML = `
      <button class="sub">HEMIS login qilish</button>
      <button class="sub">Baholarni ko‘rish</button>
      <button class="sub">Davomat</button>
      <button class="sub">Fanlar</button>
      <p>⚠️ HEMIS rasmiy API bo‘lsa ulanadi. Hozircha yo‘riqnoma va link qo‘shiladi.</p>
    `;
    return;
  }

  if(type === "kontrakt"){
    pageContent.innerHTML = `
      <button class="sub">Kontrakt to‘lov tekshirish</button>
      <button class="sub">To‘lov kvitansiyasi</button>
      <button class="sub">Bank rekvizitlari</button>
      <p>⚠️ Kontrakt EDU uchun rasmiy ulanish kerak bo‘ladi.</p>
    `;
    return;
  }

  pageContent.innerHTML = `
    <input id="topicInput" class="input" placeholder="Mavzuni yozing...">
    <button class="sub" onclick="makePrompt('${type}')">🤖 AI prompt yaratish</button>
    <div id="aiResult" class="result"></div>
  `;
}

function makePrompt(type){
  let topic = document.getElementById("topicInput").value;

  if(!topic){
    alert("Avval mavzuni yozing");
    return;
  }

  let names = {
    kurs:"kurs ishi",
    referat:"referat",
    mustaqil:"mustaqil ish",
    test:"test savollari",
    ai_text:"matn",
    ai_translate:"tarjima",
    ai_plan:"reja"
  };

  let prompt = `
Menga "${topic}" mavzusida ${names[type]} tayyorlab ber.

Talablar:
1. O‘zbek tilida bo‘lsin
2. Tartibli bo‘lsin
3. Studentga mos bo‘lsin
4. Kerak bo‘lsa reja, kirish, asosiy qism, xulosa va adabiyotlar bo‘lsin
  `;

  document.getElementById("aiResult").innerText = prompt;
}

function docTool(type){
  pageTitle.innerHTML = "📄 Hujjat tayyorlash";

  pageContent.innerHTML = `
    <input id="nameInput" class="input" placeholder="Ism Familiya">
    <input id="reasonInput" class="input" placeholder="Maqsad yoki sabab">
    <button class="sub" onclick="makeDoc('${type}')">Hujjat matni yaratish</button>
    <div id="docResult" class="result"></div>
  `;
}

function makeDoc(type){
  let name = document.getElementById("nameInput").value;
  let reason = document.getElementById("reasonInput").value;

  if(!name || !reason){
    alert("Ma’lumotlarni to‘ldiring");
    return;
  }

  let text = `
${type.toUpperCase()}

Men, ${name}, ushbu hujjat orqali quyidagini bildiraman:

${reason}

Sana: ____________
Imzo: ____________
  `;

  document.getElementById("docResult").innerText = text;
}

function calcPercent(){
  let sum = Number(document.getElementById("sumInput").value);
  let percent = Number(document.getElementById("percentInput").value);

  if(!sum || !percent){
    alert("Summa va foizni kiriting");
    return;
  }

  let p = sum * percent / 100;

  document.getElementById("calcResult").innerHTML = `
    ${sum} ning ${percent}% i = <b>${p}</b><br>
    Qo‘shilsa: <b>${sum + p}</b><br>
    Ayirilsa: <b>${sum - p}</b>
  `;
}

let board = [];
let selected = null;
let currentPlayer = "white";

let checkersBoard = [];
let checkersSelected = null;
let humanColor = "white";
let botColor = "black";
let turn = "white";
let botLevel = "easy";
let possibleMoves = [];
let mustContinueCapture = null;

function startCheckersBot(){
  pageTitle.innerHTML = "⚫ Shashka — Bot bilan";
  pageContent.innerHTML = `
    <div class="result">
      <b>Rang tanlang:</b>
      <button class="sub" onclick="setCheckersColor('white')">⚪ Oq</button>
      <button class="sub" onclick="setCheckersColor('black')">⚫ Qora</button>

      <b>Qiyinlik:</b>
      <button class="sub" onclick="setCheckersLevel('easy')">🟢 Oson</button>
      <button class="sub" onclick="setCheckersLevel('medium')">🟡 O‘rta</button>
      <button class="sub" onclick="setCheckersLevel('hard')">🔴 Qiyin</button>

      <button class="sub" onclick="startCheckersGame()">▶️ Boshlash</button>
    </div>
  `;
}

function setCheckersColor(color){
  humanColor = color;
  botColor = color === "white" ? "black" : "white";
  alert(color === "white" ? "Siz oq rangni tanladingiz" : "Siz qora rangni tanladingiz");
}

function setCheckersLevel(level){
  botLevel = level;
  alert("Qiyinlik: " + level);
}

function startCheckersGame(){
  pageTitle.innerHTML = "⚫ Shashka";
  pageContent.innerHTML = `
    <p>Siz: ${humanColor === "white" ? "⚪ Oq" : "⚫ Qora"} | Bot: ${botColor === "white" ? "⚪ Oq" : "⚫ Qora"} | Daraja: ${botLevel}</p>
    <div id="checkersBoard" class="checkers-board"></div>
    <div id="gameStatus" class="result"></div>
  `;

  initCheckersBoard();
  drawCheckersBoard();

  if(turn === botColor){
    setStatus("Bot boshlayapti...");
    setTimeout(botCheckersMove, 700);
  }else{
    setStatus("Sizning yurishingiz");
  }
}

function initCheckersBoard(){
  checkersBoard = Array.from({length:8}, () => Array(8).fill(null));

  for(let r=0; r<3; r++){
    for(let c=0; c<8; c++){
      if((r+c)%2 === 1) checkersBoard[r][c] = {color:"black", king:false};
    }
  }

  for(let r=5; r<8; r++){
    for(let c=0; c<8; c++){
      if((r+c)%2 === 1) checkersBoard[r][c] = {color:"white", king:false};
    }
  }

  checkersSelected = null;
  possibleMoves = [];
  mustContinueCapture = null;
  turn = "white";
}

function drawCheckersBoard(){
  const boardEl = document.getElementById("checkersBoard");
  boardEl.innerHTML = "";

  for(let r=0; r<8; r++){
    for(let c=0; c<8; c++){
      const cell = document.createElement("div");
      cell.className = "cell " + (((r+c)%2===0) ? "light-cell" : "dark-cell");
      cell.onclick = () => checkersCellClick(r,c);

      if(possibleMoves.some(m => m.tr === r && m.tc === c)){
        cell.classList.add("possible");
      }

      const piece = checkersBoard[r][c];

      if(piece){
        const p = document.createElement("div");
        p.className = "piece " + piece.color + (piece.king ? " king-piece" : "");
        p.innerHTML = piece.king ? `<span>${piece.color === "white" ? "⚪" : "⚫"}</span><b>♛</b>` : (piece.color === "white" ? "⚪" : "⚫");
        cell.appendChild(p);
      }

      if(checkersSelected && checkersSelected.r === r && checkersSelected.c === c){
        cell.classList.add("selected");
      }

      boardEl.appendChild(cell);
    }
  }
}

function checkersCellClick(r,c){
  if(turn !== humanColor) return;

  const piece = checkersBoard[r][c];

  if(piece && piece.color === humanColor){
    if(mustContinueCapture && (mustContinueCapture.r !== r || mustContinueCapture.c !== c)) return;

    checkersSelected = {r,c};
    possibleMoves = getMovesForPiece(r,c,humanColor);
    drawCheckersBoard();
    return;
  }

  if(checkersSelected){
    const move = possibleMoves.find(m => m.tr === r && m.tc === c);

    if(move){
      applyCheckersMove(move);
      drawCheckersBoard();

      if(checkWinner()) return;

      if(move.capture){
        const nextCaptures = getMovesForPiece(move.tr, move.tc, humanColor).filter(m => m.capture);

        if(nextCaptures.length > 0){
          mustContinueCapture = {r:move.tr, c:move.tc};
          checkersSelected = {r:move.tr, c:move.tc};
          possibleMoves = nextCaptures;
          setStatus("Yana urishingiz mumkin");
          drawCheckersBoard();
          return;
        }
      }

      checkersSelected = null;
      possibleMoves = [];
      mustContinueCapture = null;
      turn = botColor;

      setStatus("Bot o‘ylayapti...");
      setTimeout(botCheckersMove, 700);
    }
  }
}

function getMovesForPiece(r,c,color){
  let moves = [];
  const piece = checkersBoard[r][c];
  if(!piece || piece.color !== color) return moves;

  if(piece.king){
    const dirs = [[1,1],[1,-1],[-1,1],[-1,-1]];

    dirs.forEach(d => {
      let enemyFound = null;

      for(let step=1; step<8; step++){
        let tr = r + d[0]*step;
        let tc = c + d[1]*step;

        if(tr<0 || tr>7 || tc<0 || tc>7) break;

        const target = checkersBoard[tr][tc];

        if(!target){
          moves.push({sr:r,sc:c,tr,tc,capture:enemyFound});
        }else{
          if(target.color === color) break;
          if(enemyFound) break;
          enemyFound = {r:tr,c:tc};
        }
      }
    });

    return moves;
  }

  const simpleDirs = color === "white" ? [[-1,1],[-1,-1]] : [[1,1],[1,-1]];
  const captureDirs = [[1,1],[1,-1],[-1,1],[-1,-1]];

  simpleDirs.forEach(d => {
    let tr = r + d[0];
    let tc = c + d[1];

    if(isInside(tr,tc) && !checkersBoard[tr][tc]){
      moves.push({sr:r,sc:c,tr,tc,capture:null});
    }
  });

  captureDirs.forEach(d => {
    let mr = r + d[0];
    let mc = c + d[1];
    let tr = r + d[0]*2;
    let tc = c + d[1]*2;

    if(isInside(tr,tc) && checkersBoard[mr][mc] && checkersBoard[mr][mc].color !== color && !checkersBoard[tr][tc]){
      moves.push({sr:r,sc:c,tr,tc,capture:{r:mr,c:mc}});
    }
  });

  return moves;
}

function isInside(r,c){
  return r>=0 && r<8 && c>=0 && c<8;
}

function applyCheckersMove(move){
  const piece = checkersBoard[move.sr][move.sc];

  checkersBoard[move.tr][move.tc] = piece;
  checkersBoard[move.sr][move.sc] = null;

  if(move.capture){
    checkersBoard[move.capture.r][move.capture.c] = null;
  }

  if(piece.color === "white" && move.tr === 0) piece.king = true;
  if(piece.color === "black" && move.tr === 7) piece.king = true;
}

function getAllMoves(color){
  let all = [];

  for(let r=0; r<8; r++){
    for(let c=0; c<8; c++){
      if(checkersBoard[r][c] && checkersBoard[r][c].color === color){
        all.push(...getMovesForPiece(r,c,color));
      }
    }
  }

  const captures = all.filter(m => m.capture);
  return captures.length ? captures : all;
}

function botCheckersMove(){
  let moves = getAllMoves(botColor);

  if(moves.length === 0){
    finishGame("Siz yutdingiz ✅");
    return;
  }

  let move;

  if(botLevel === "easy"){
    move = moves[Math.floor(Math.random() * moves.length)];
  }

  if(botLevel === "medium"){
    const captures = moves.filter(m => m.capture);
    move = captures.length ? captures[Math.floor(Math.random()*captures.length)] : moves[Math.floor(Math.random()*moves.length)];
  }

  if(botLevel === "hard"){
    move = chooseBestMove(moves);
  }

  applyCheckersMove(move);
  drawCheckersBoard();

  if(checkWinner()) return;

  if(move.capture){
    let next = getMovesForPiece(move.tr, move.tc, botColor).filter(m => m.capture);

    if(next.length > 0){
      setTimeout(botCheckersMove, 600);
      return;
    }
  }

  turn = humanColor;
  setStatus("Sizning yurishingiz");
}

function chooseBestMove(moves){
  let best = moves[0];
  let bestScore = -999;

  moves.forEach(m => {
    let score = 0;
    const piece = checkersBoard[m.sr][m.sc];

    if(m.capture) score += 20;
    if(piece && !piece.king && ((piece.color==="white" && m.tr===0) || (piece.color==="black" && m.tr===7))) score += 30;
    if(m.tr>1 && m.tr<6 && m.tc>1 && m.tc<6) score += 5;

    if(score > bestScore){
      bestScore = score;
      best = m;
    }
  });

  return best;
}

function checkWinner(){
  const white = countPieces("white");
  const black = countPieces("black");

  if(white === 0){
    finishGame(humanColor === "black" ? "Siz yutdingiz ✅" : "Siz yutqazdingiz ❌");
    return true;
  }

  if(black === 0){
    finishGame(humanColor === "white" ? "Siz yutdingiz ✅" : "Siz yutqazdingiz ❌");
    return true;
  }

  return false;
}

function countPieces(color){
  let count = 0;

  for(let r=0; r<8; r++){
    for(let c=0; c<8; c++){
      if(checkersBoard[r][c] && checkersBoard[r][c].color === color) count++;
    }
  }

  return count;
}

function finishGame(text){
  setStatus(text + "\nQaytadan boshlash mumkin.");
  pageContent.innerHTML += `<button class="sub" onclick="startCheckersGame()">🔄 Qaytadan boshlash</button>`;
}

function setStatus(text){
  const status = document.getElementById("gameStatus");
  if(status) status.innerText = text;
}

// ================= REAL FIREBASE ONLINE SYSTEM =================

let onlinePlayerId = sessionStorage.getItem("veltor_player_id");

if(!onlinePlayerId){
    onlinePlayerId = "player_" + Math.floor(Math.random() * 999999999);
    sessionStorage.setItem("veltor_player_id", onlinePlayerId);
}

function startOnlineCheckers(){
  pageTitle.innerHTML = "🌍 Online Shashka";

  pageContent.innerHTML = `
    <div class="result">
      <h3>Online rejim</h3>

      <button class="sub" onclick="createOnlineRoom()">🏠 Xona yaratish</button>

      <input id="roomCode" class="input" placeholder="Xona kodi">

      <button class="sub" onclick="joinOnlineRoom()">🚪 Xonaga kirish</button>

      <button class="sub" onclick="findOnlinePlayer()">🎮 O‘yinchi qidirish</button>

      <div id="onlineStatus" class="result"></div>
    </div>
  `;
}

async function createOnlineRoom(){
  const roomId = Math.floor(100000 + Math.random() * 900000).toString();

  const roomData = {
    id: roomId,
    status: "waiting",
    createdAt: Date.now(),
    players: {
      white: onlinePlayerId,
      black: null
    },
    turn: "white",
    board: "new",
    chat: {}
  };

  await firebase.database().ref("rooms/" + roomId).set(roomData);

  window.currentRoom = roomId;
  window.myOnlineColor = "white";

  document.getElementById("onlineStatus").innerHTML = `
    ✅ Xona yaratildi<br><br>
    Kod: <b>${roomId}</b><br><br>
    Do‘stingiz shu kod bilan kirsin.
  `;

  listenRoom(roomId);
}

async function joinOnlineRoom(){

    const roomId = document.getElementById("roomCode").value.trim();

    if(!roomId){
        alert("Xona kodini kiriting");
        return;
    }

    const roomRef = firebase.database().ref("rooms/" + roomId);

    const snap = await roomRef.get();

    if(!snap.exists()){
        alert("Xona topilmadi");
        return;
    }

    const room = snap.val();

    if(room.players.black){
        alert("Xona to'lgan");
        return;
    }

    await roomRef.child("players/black").set(onlinePlayerId);

    await roomRef.child("status").set("playing");

    window.currentRoom = roomId;
    window.myOnlineColor = "black";

    const updatedSnap = await roomRef.get();

    showOnlineGame(roomId, updatedSnap.val());

    listenRoom(roomId);
}

async function findOnlinePlayer(){
  document.getElementById("onlineStatus").innerHTML = "⏳ O‘yinchi qidirilmoqda...";

  const queueRef = firebase.database().ref("queue");
  const queueSnap = await queueRef.get();

  if(queueSnap.exists()){
    const queue = queueSnap.val();
    const otherId = Object.keys(queue)[0];

    if(otherId && otherId !== onlinePlayerId){
      await firebase.database().ref("queue/" + otherId).remove();

      const roomId = Math.floor(100000 + Math.random() * 900000).toString();

      await firebase.database().ref("rooms/" + roomId).set({
        id: roomId,
        status: "playing",
        createdAt: Date.now(),
        players: {
          white: otherId,
          black: onlinePlayerId
        },
        turn: "white",
        board: "new",
        chat: {}
      });

      window.currentRoom = roomId;
      window.myOnlineColor = "black";

      document.getElementById("onlineStatus").innerHTML = `
        🎮 O‘yinchi topildi!<br>
        Xona: <b>${roomId}</b>
      `;

      listenRoom(roomId);
      return;
    }
  }

  await firebase.database().ref("queue/" + onlinePlayerId).set({
    time: Date.now()
  });

  document.getElementById("onlineStatus").innerHTML = `
    ⏳ Siz navbatga qo‘shildingiz.<br>
    Boshqa o‘yinchi kutilyapti...
  `;
}

function listenRoom(roomId){
  firebase.database().ref("rooms/" + roomId).on("value", snap => {
    if(!snap.exists()) return;

    const room = snap.val();

    if(room.status === "waiting"){
      document.getElementById("onlineStatus").innerHTML = `
        🏠 Xona: <b>${roomId}</b><br>
        Ikkinchi o‘yinchi kutilmoqda...
      `;
    }

    if(room.status === "playing"){
      showOnlineGame(roomId, room);
    }
  });
}

function showOnlineGame(roomId, room){
  pageTitle.innerHTML = "🌍 Online Shashka";

  let color = window.myOnlineColor;

  let boardHTML = "";

  for(let y = 0; y < 8; y++){
    boardHTML += `<div class="row">`;

    for(let x = 0; x < 8; x++){
      let dark = (x + y) % 2 === 1;

      boardHTML += `
        <div class="cell ${dark ? "dark" : "light"}"
             id="c-${x}-${y}"
             onclick="clickCell(${x},${y})"></div>
      `;
    }

    boardHTML += `</div>`;
  }

  pageContent.innerHTML = `
    <div class="result">
      ✅ Online o‘yin boshlandi<br>
      Xona: <b>${roomId}</b><br>
      Siz: <b>${color}</b><br>
      Navbat: <b>${room.turn}</b>
    </div>

    <div id="board" class="board">
      ${boardHTML}
    </div>

    <div class="result">
      <h3>💬 Chat</h3>
      <div id="chatBox"></div>
      <input id="chatInput" class="input" placeholder="Xabar yozing...">
      <button class="sub" onclick="sendRoomMessage('${roomId}')">Yuborish</button>
    </div>
  `;

  drawPieces();
  showRoomChat(roomId);
}

function sendRoomMessage(roomId){
  const input = document.getElementById("chatInput");
  const text = input.value.trim();

  if(!text) return;

  firebase.database().ref("rooms/" + roomId + "/chat").push({
    player: onlinePlayerId,
    text: text,
    time: Date.now()
  });

  input.value = "";
}

function showRoomChat(roomId){
  firebase.database().ref("rooms/" + roomId + "/chat").on("value", snap => {
    const chatBox = document.getElementById("chatBox");
    if(!chatBox) return;

    chatBox.innerHTML = "";

    if(!snap.exists()) return;

    const messages = snap.val();

    Object.values(messages).forEach(msg => {
      chatBox.innerHTML += `
        <div class="book">
         <b>${msg.player === onlinePlayerId ? "Siz" : "U"}:</b>
          ${msg.text}
        </div>
      `;
    });
  });
}

function drawPieces(){
  for(let y = 0; y < 3; y++){
    for(let x = 0; x < 8; x++){
      if((x + y) % 2 === 1){
        document.getElementById(`c-${x}-${y}`).innerHTML =
          `<div class="piece black-piece"></div>`;
      }
    }
  }

  for(let y = 5; y < 8; y++){
    for(let x = 0; x < 8; x++){
      if((x + y) % 2 === 1){
        document.getElementById(`c-${x}-${y}`).innerHTML =
          `<div class="piece white-piece"></div>`;
      }
    }
  }
}

function clickCell(x,y){
  console.log("Bosildi:", x, y);
}
