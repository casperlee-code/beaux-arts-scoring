/**
 * ==========================================================================
 * Google Apps Script - Beaux-Arts Ball Scoring double-sync Integration Script
 * ==========================================================================
 * 
 * 部署指引 (SOP Deployment Instructions):
 * ----------------------------------------------------
 * 1. 建立一個全新的 Google 試算表 (Google Sheet)。
 * 2. 點擊頂部選單的「擴充功能 (Extensions)」 -> 「Apps Script」。
 * 3. 刪除編輯器內所有預設程式碼，並將本檔案內容全部複製貼上。
 * 4. 點擊上方的「儲存 (Save)」圖示。
 * 5. 點擊右上角「部署 (Deploy)」 -> 「新增部署 (New deployment)」。
 * 6. 選取類型為「網頁應用程式 (Web app)」。
 * 7. 設定參數：
 *    - 說明：Beaux Arts scoring API v2.1
 *    - 執行身分：我 (您的 Google 帳戶)
 *    - 誰有權限存取：所有人 (Anyone) <--- 重要：這能免去 OAuth 繁瑣登入！
 * 8. 點擊「部署」，授權 Google 權限，部署成功後複製產生的「網頁應用程式 URL」。
 * 9. 將該 URL 貼入本系統 Admin Panel 的「Google Apps Script Web App URL」欄位中，即可開始雙向同步！
 */

function doPost(e) {
  try {
    var request = JSON.parse(e.postData.contents);
    var action = request.action;
    var result;
    
    if (action === 'initialize') {
      result = initializeSheets();
    } else if (action === 'fetch_roster') {
      result = fetchRoster();
    } else if (action === 'save_scoreboard') {
      result = saveScoreboard(request.roster);
    } else {
      result = { status: 'error', message: '未定義的操作動作 (Invalid Action)' };
    }
    
    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 支援 CORS GET 預檢
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: 'success', message: 'Beaux-Arts Ball API v2.1 Web App is active.' }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * 1. 初始化工作表結構 (Initialize Sheets Structure)
 */
function initializeSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 建立或取得 Roster 工作表
  var rosterSheet = ss.getSheetByName("Roster");
  if (!rosterSheet) {
    rosterSheet = ss.insertSheet("Roster");
  }
  
  rosterSheet.clear();
  // 寫入標題列
  var headers = ["teamId", "id", "team_name", "architecture", "members", "total_percentage"];
  rosterSheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  rosterSheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#d4af37").setFontColor("#ffffff");
  
  // 寫入 25 組預設範本資料
  var defaultRoster = [
    [1, "team_01", "帕德嫩神組", "帕德嫩神廟 (Parthenon)", "張安琪, 林小明", 0.00],
    [2, "team_02", "羅馬競技組", "羅馬競技場 (Colosseum)", "陳冠宇, 黃莉婷", 0.00],
    [3, "team_03", "聖索菲亞組", "聖索菲亞大教堂 (Hagia Sophia)", "趙敏妤, 王家豪", 0.00],
    [4, "team_04", "巴黎聖母組", "巴黎聖母院 (Notre-Dame de Paris)", "李思賢, 謝佳穎", 0.00],
    [5, "team_05", "佛羅倫斯組", "佛羅倫斯主教座堂 (Florence Cathedral)", "張俊傑, 吳宛婷", 0.00],
    [6, "team_06", "聖彼得組", "聖彼得大教堂 (St. Peter's Basilica)", "許智凱, 蔡雅婷", 0.00],
    [7, "team_07", "凡爾賽組", "凡爾賽宮 (Palace of Versailles)", "劉建志, 鄭淑芬", 0.00],
    [8, "team_08", "水晶宮組", "倫敦水晶宮 (Crystal Palace)", "楊斯皓, 羅婉琪", 0.00],
    [9, "team_09", "鐵塔組", "巴黎艾菲爾鐵塔 (Eiffel Tower)", "林雅婷, 郭博文", 0.00],
    [10, "team_10", "聖家組", "巴塞隆納聖家堂 (Sagrada Família)", "周杰勳, 梁家綺", 0.00],
    [11, "team_11", "大笨鐘組", "倫敦大笨鐘 (Big Ben)", "曾偉倫, 董欣怡", 0.00],
    [12, "team_12", "帝國大廈組", "紐約帝國大廈 (Empire State Building)", "吳俊宏, 高雅雯", 0.00],
    [13, "team_13", "雪梨歌劇組", "雪梨歌劇院 (Sydney Opera House)", "蔡冠宏, 蘇怡婷", 0.00],
    [14, "team_14", "薩伏瓦別墅組", "薩伏瓦別墅 (Villa Savoye)", "詹詠晴, 盧冠廷", 0.00],
    [15, "team_15", "流水別墅組", "流水別墅 (Fallingwater)", "賴建宏, 馮玉婷", 0.00],
    [16, "team_16", "古根漢紐約組", "紐約古根漢美術館 (Guggenheim Museum)", "沈哲宇, 潘雨潔", 0.00],
    [17, "team_17", "海港大橋組", "雪梨海港大橋 (Sydney Harbour Bridge)", "彭聖博, 江美玲", 0.00],
    [18, "team_18", "龐畢度組", "巴黎龐畢度中心 (Centre Pompidou)", "柯冠廷, 丁雅筑", 0.00],
    [19, "team_19", "廊香組", "廊香教堂 (Chapelle Notre-Dame)", "蕭明達, 簡家妤", 0.00],
    [20, "team_20", "克萊斯勒組", "紐約克萊斯勒大樓 (Chrysler Building)", "林哲宇, 翁毓婷", 0.00],
    [21, "team_21", "東京聖瑪利亞組", "東京聖瑪利亞大教堂 (St. Mary's Cathedral)", "馬嘉豪, 徐瑞玲", 0.00],
    [22, "team_22", "羅浮宮金字塔組", "羅浮宮金字塔 (Louvre Pyramid)", "傅家駿, 葉子瑄", 0.00],
    [23, "team_23", "古根漢畢爾包組", "畢爾包古根漢美術館 (Guggenheim Bilbao)", "魏哲賢, 戴巧筑", 0.00],
    [24, "team_24", "聖保羅組", "倫敦聖保羅大教堂 (St. Paul's Cathedral)", "施韋廷, 孫若晴", 0.00],
    [25, "team_25", "第25組", "未指定建築", "", 0.00]
  ];
  
  rosterSheet.getRange(2, 1, defaultRoster.length, defaultRoster[0].length).setValues(defaultRoster);
  
  return {
    status: 'success',
    message: 'Google Sheet 初始化成功，已自動生成 Roster 分頁與 25 組範本數據。'
  };
}

/**
 * 2. 拉取小組名單 (Fetch Roster)
 */
function fetchRoster() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Roster");
  if (!sheet) {
    return { status: 'error', message: '找不到 Roster 工作表，請先初始化！' };
  }
  
  var values = sheet.getDataRange().getValues();
  var rosterData = [];
  
  // 排除標題列 (idx = 0)
  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    if (!row[0]) continue; // 排除空列
    
    // 將成員以逗號分割為陣列
    var membersArr = [];
    if (row[4]) {
      membersArr = row[4].toString().split(',').map(function(s) { return s.trim(); });
    }
    
    rosterData.push({
      teamId: parseInt(row[0]),
      id: row[1].toString(),
      team_name: row[2].toString(),
      architecture: row[3].toString(),
      members: membersArr,
      total_percentage: parseFloat(row[5] || 0.00)
    });
  }
  
  return {
    status: 'success',
    data: rosterData
  };
}

/**
 * 3. 跨週儲存備份 (Save Scoreboard Backup)
 */
function saveScoreboard(rosterList) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 建立一個帶有時間戳記的備份分頁，確保歷史不遺失
  var formattedDate = Utilities.formatDate(new Date(), "GMT+8", "yyyyMMdd_HHmm");
  var backupName = "Scoreboard_" + formattedDate;
  var backupSheet = ss.insertSheet(backupName);
  
  var headers = ["teamId", "id", "team_name", "architecture", "members", "total_percentage"];
  backupSheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  backupSheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#220, 20%, 9%").setFontColor("#d4af37");
  
  var rows = [];
  rosterList.forEach(function(team) {
    rows.push([
      team.teamId,
      team.id,
      team.team_name,
      team.architecture,
      team.members.join(', '),
      team.total_percentage
    ]);
  });
  
  backupSheet.getRange(2, 1, rows.length, rows[0].length).setValues(rows);
  
  // 同步回寫最新累計總分至 Roster 工作表的最後一列
  var rosterSheet = ss.getSheetByName("Roster");
  if (rosterSheet) {
    var rosterValues = rosterSheet.getDataRange().getValues();
    for (var i = 1; i < rosterValues.length; i++) {
      var teamId = parseInt(rosterValues[i][0]);
      var matchingTeam = rosterList.find(function(t) { return t.teamId === teamId; });
      if (matchingTeam) {
        // 更新 Roster 工作表中 total_percentage 的值 (第6欄)
        rosterSheet.getRange(i + 1, 6).setValue(matchingTeam.total_percentage);
      }
    }
  }
  
  return {
    status: 'success',
    message: '得分數據備份至工作表 [' + backupName + '] 成功！並已同步更新 Roster 累計總分。'
  };
}
