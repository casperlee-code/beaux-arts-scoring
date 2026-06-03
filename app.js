/* ==========================================================================
   2026 BEAUX ARTS BALL - SCORING CORE ENGINE (v2.1)
   ========================================================================== */

// --- Global Constants & Token/PIN mappings ---
const VOTER_TOKENS = {
  // Professional Judges
  '9301': { id: 'judge_01', type: 'professional', name: '專業評審一 (J01)' },
  '9302': { id: 'judge_02', type: 'professional', name: '專業評審二 (J02)' },
  '9303': { id: 'judge_03', type: 'professional', name: '專業評審三 (J03)' },
  '9304': { id: 'judge_04', type: 'professional', name: '專業評審四 (J04)' },
  '9305': { id: 'judge_05', type: 'professional', name: '專業評審五 (J05)' },
  
  // Student Groups (Peer Evaluators)
  '2401': { id: 'team_01', type: 'peer', name: '第01組同儕評審 (T01)', teamId: 1 },
  '2402': { id: 'team_02', type: 'peer', name: '第02組同儕評審 (T02)', teamId: 2 },
  '2403': { id: 'team_03', type: 'peer', name: '第03組同儕評審 (T03)', teamId: 3 },
  '2404': { id: 'team_04', type: 'peer', name: '第04組同儕評審 (T04)', teamId: 4 },
  '2405': { id: 'team_05', type: 'peer', name: '第05組同儕評審 (T05)', teamId: 5 },
  '2406': { id: 'team_06', type: 'peer', name: '第06組同儕評審 (T06)', teamId: 6 },
  '2407': { id: 'team_07', type: 'peer', name: '第07組同儕評審 (T07)', teamId: 7 },
  '2408': { id: 'team_08', type: 'peer', name: '第08組同儕評審 (T08)', teamId: 8 },
  '2409': { id: 'team_09', type: 'peer', name: '第09組同儕評審 (T09)', teamId: 9 },
  '2410': { id: 'team_10', type: 'peer', name: '第10組同儕評審 (T10)', teamId: 10 },
  '2411': { id: 'team_11', type: 'peer', name: '第11組同儕評審 (T11)', teamId: 11 },
  '2412': { id: 'team_12', type: 'peer', name: '第12組同儕評審 (T12)', teamId: 12 },
  '2413': { id: 'team_13', type: 'peer', name: '第13組同儕評審 (T13)', teamId: 13 },
  '2414': { id: 'team_14', type: 'peer', name: '第14組同儕評審 (T14)', teamId: 14 },
  '2415': { id: 'team_15', type: 'peer', name: '第15組同儕評審 (T15)', teamId: 15 },
  '2416': { id: 'team_16', type: 'peer', name: '第16組同儕評審 (T16)', teamId: 16 },
  '2417': { id: 'team_17', type: 'peer', name: '第17組同儕評審 (T17)', teamId: 17 },
  '2418': { id: 'team_18', type: 'peer', name: '第18組同儕評審 (T18)', teamId: 18 },
  '2419': { id: 'team_19', type: 'peer', name: '第19組同儕評審 (T19)', teamId: 19 },
  '2420': { id: 'team_20', type: 'peer', name: '第20組同儕評審 (T20)', teamId: 20 },
  '2421': { id: 'team_21', type: 'peer', name: '第21組同儕評審 (T21)', teamId: 21 },
  '2422': { id: 'team_22', type: 'peer', name: '第22組同儕評審 (T22)', teamId: 22 },
  '2423': { id: 'team_23', type: 'peer', name: '第23組同儕評審 (T23)', teamId: 23 },
  '2424': { id: 'team_24', type: 'peer', name: '第24組同儕評審 (T24)', teamId: 24 }
};

// --- Classical Architectures Default Roster ---
const DEFAULT_ROSTER = [
  { teamId: 1, id: 'team_01', team_name: '帕德嫩神組', architecture: '帕德嫩神廟 (Parthenon)', members: ['張安琪', '林小明'], total_percentage: 0.00 },
  { teamId: 2, id: 'team_02', team_name: '羅馬競技組', architecture: '羅馬競技場 (Colosseum)', members: ['陳冠宇', '黃莉婷'], total_percentage: 0.00 },
  { teamId: 3, id: 'team_03', team_name: '聖索菲亞組', architecture: '聖索菲亞大教堂 (Hagia Sophia)', members: ['趙敏妤', '王家豪'], total_percentage: 0.00 },
  { teamId: 4, id: 'team_04', team_name: '巴黎聖母組', architecture: '巴黎聖母院 (Notre-Dame de Paris)', members: ['李思賢', '謝佳穎'], total_percentage: 0.00 },
  { teamId: 5, id: 'team_05', team_name: '佛羅倫斯組', architecture: '佛羅倫斯主教座堂 (Florence Cathedral)', members: ['張俊傑', '吳宛婷'], total_percentage: 0.00 },
  { teamId: 6, id: 'team_06', team_name: '聖彼得組', architecture: '聖彼得大教堂 (St. Peter\'s Basilica)', members: ['許智凱', '蔡雅婷'], total_percentage: 0.00 },
  { teamId: 7, id: 'team_07', team_name: '凡爾賽組', architecture: '凡爾賽宮 (Palace of Versailles)', members: ['劉建志', '鄭淑芬'], total_percentage: 0.00 },
  { teamId: 8, id: 'team_08', team_name: '水晶宮組', architecture: '倫敦水晶宮 (Crystal Palace)', members: ['楊斯皓', '羅婉琪'], total_percentage: 0.00 },
  { teamId: 9, id: 'team_09', team_name: '鐵塔組', architecture: '巴黎艾菲爾鐵塔 (Eiffel Tower)', members: ['林雅婷', '郭博文'], total_percentage: 0.00 },
  { teamId: 10, id: 'team_10', team_name: '聖家組', architecture: '巴塞隆納聖家堂 (Sagrada Família)', members: ['周杰勳', '梁家綺'], total_percentage: 0.00 },
  { teamId: 11, id: 'team_11', team_name: '大笨鐘組', architecture: '倫敦大笨鐘 (Big Ben)', members: ['曾偉倫', '董欣怡'], total_percentage: 0.00 },
  { teamId: 12, id: 'team_12', team_name: '帝國大廈組', architecture: '紐約帝國大廈 (Empire State Building)', members: ['吳俊宏', '高雅雯'], total_percentage: 0.00 },
  { teamId: 13, id: 'team_13', team_name: '雪梨歌劇組', architecture: '雪梨歌劇院 (Sydney Opera House)', members: ['蔡冠宏', '蘇怡婷'], total_percentage: 0.00 },
  { teamId: 14, id: 'team_14', team_name: '薩伏瓦別墅組', architecture: '薩伏瓦別墅 (Villa Savoye)', members: ['詹詠晴', '盧冠廷'], total_percentage: 0.00 },
  { teamId: 15, id: 'team_15', team_name: '流水別墅組', architecture: '流水別墅 (Fallingwater)', members: ['賴建宏', '馮玉婷'], total_percentage: 0.00 },
  { teamId: 16, id: 'team_16', team_name: '古根漢紐約組', architecture: '紐約古根漢美術館 (Guggenheim Museum)', members: ['沈哲宇', '潘雨潔'], total_percentage: 0.00 },
  { teamId: 17, id: 'team_17', team_name: '海港大橋組', architecture: '雪梨海港大橋 (Sydney Harbour Bridge)', members: ['彭聖博', '江美玲'], total_percentage: 0.00 },
  { teamId: 18, id: 'team_18', team_name: '龐畢度組', architecture: '巴黎龐畢度中心 (Centre Pompidou)', members: ['柯冠廷', '丁雅筑'], total_percentage: 0.00 },
  { teamId: 19, id: 'team_19', team_name: '廊香組', architecture: '廊香教堂 (Chapelle Notre-Dame)', members: ['蕭明達', '簡家妤'], total_percentage: 0.00 },
  { teamId: 20, id: 'team_20', team_name: '克萊斯勒組', architecture: '紐約克萊斯勒大樓 (Chrysler Building)', members: ['林哲宇', '翁毓婷'], total_percentage: 0.00 },
  { teamId: 21, id: 'team_21', team_name: '東京聖瑪利亞組', architecture: '東京聖瑪利亞大教堂 (St. Mary\'s Cathedral)', members: ['馬嘉豪', '徐瑞玲'], total_percentage: 0.00 },
  { teamId: 22, id: 'team_22', team_name: '羅浮宮金字塔組', architecture: '羅浮宮金字塔 (Louvre Pyramid)', members: ['傅家駿', '葉子瑄'], total_percentage: 0.00 },
  { teamId: 23, id: 'team_23', team_name: '古根漢畢爾包組', architecture: '畢爾包古根漢美術館 (Guggenheim Bilbao)', members: ['魏哲賢', '戴巧筑'], total_percentage: 0.00 },
  { teamId: 24, id: 'team_24', team_name: '聖保羅組', architecture: '倫敦聖保羅大教堂 (St. Paul\'s Cathedral)', members: ['施韋廷', '孫若晴'], total_percentage: 0.00 }
];

// --- Dual-Mode State Synchronizer Class ---
class DualModeSynchronizer {
  constructor() {
    this.useFirebase = false;
    this.firebaseConfig = null;
    this.db = null;
    this.broadcastChannel = new BroadcastChannel('beaux_arts_sync');
    this.listeners = [];
    this.offlineCallbacks = [];
    
    // Load config if exists in LocalStorage
    const savedConfig = localStorage.getItem('firebase_config');
    const savedUseFirebase = localStorage.getItem('use_firebase') === 'true';
    if (savedConfig) {
      this.firebaseConfig = JSON.parse(savedConfig);
      this.useFirebase = savedUseFirebase;
    }

    // Initialize LocalSync variables
    this.initLocalSync();

    // Listen to local BroadcastChannel for multi-tab updates
    this.broadcastChannel.onmessage = (event) => {
      if (!this.useFirebase) {
        // Trigger listeners on Broadcast message
        this.triggerUpdate(event.data.type, event.data.data);
      }
    };

    // Attempt Firebase initialization if activated
    if (this.useFirebase && this.firebaseConfig) {
      this.initFirebase();
    }
  }

  // Set up local storage states if empty
  initLocalSync() {
    if (!localStorage.getItem('global_state')) {
      const initialGlobal = {
        view: 'standby',
        current_team_id: 1,
        active_judges_count: 29 // 24 teams + 5 judges
      };
      localStorage.setItem('global_state', JSON.stringify(initialGlobal));
    }
    if (!localStorage.getItem('roster')) {
      localStorage.setItem('roster', JSON.stringify(DEFAULT_ROSTER));
    }
    if (!localStorage.getItem('votes')) {
      localStorage.setItem('votes', JSON.stringify([]));
    }
    if (!localStorage.getItem('connected_voters')) {
      localStorage.setItem('connected_voters', JSON.stringify({}));
    }
  }

  // Load and bind Firebase SDK scripts on-the-fly
  initFirebase() {
    if (typeof firebase !== 'undefined') {
      this.setupFirebaseApp();
      return;
    }

    // Dynamically inject Firebase Client SDKs
    const scriptApp = document.createElement('script');
    scriptApp.src = 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js';
    scriptApp.onload = () => {
      const scriptDb = document.createElement('script');
      scriptDb.src = 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore-compat.js';
      scriptDb.onload = () => {
        this.setupFirebaseApp();
      };
      document.head.appendChild(scriptDb);
    };
    document.head.appendChild(scriptApp);
  }

  setupFirebaseApp() {
    try {
      if (firebase.apps.length === 0) {
        firebase.initializeApp(this.firebaseConfig);
      }
      this.db = firebase.firestore();
      
      // Enable Firestore offline persistence
      this.db.enablePersistence().catch((err) => {
        console.warn("Firestore persistence failed:", err.code);
      });

      console.log("Firebase Firestore connected successfully.");
      
      // Bind live database listeners to mirror Firestore to local UI
      this.bindFirebaseListeners();
    } catch (e) {
      console.error("Firebase setup error, falling back to LocalSync:", e);
      this.useFirebase = false;
      this.triggerOffline(true);
    }
  }

  bindFirebaseListeners() {
    // 1. global_state listener
    this.db.collection('global').doc('state').onSnapshot((doc) => {
      if (doc.exists) {
        const state = doc.data();
        localStorage.setItem('global_state', JSON.stringify(state));
        this.triggerUpdate('global_state', state);
      } else {
        // Initialize global state in firestore if empty
        const initialGlobal = JSON.parse(localStorage.getItem('global_state'));
        this.db.collection('global').doc('state').set(initialGlobal);
      }
    }, (err) => this.handleFirestoreError(err));

    // 2. roster listener
    this.db.collection('roster').onSnapshot((snapshot) => {
      const rosterList = [];
      snapshot.forEach(doc => {
        rosterList.push({ id: doc.id, ...doc.data() });
      });
      if (rosterList.length > 0) {
        rosterList.sort((a,b) => a.teamId - b.teamId);
        localStorage.setItem('roster', JSON.stringify(rosterList));
        this.triggerUpdate('roster', rosterList);
      } else {
        // Initialize roster in firestore if empty
        const initialRoster = JSON.parse(localStorage.getItem('roster'));
        initialRoster.forEach(team => {
          this.db.collection('roster').doc(team.id).set(team);
        });
      }
    }, (err) => this.handleFirestoreError(err));

    // 3. votes listener
    this.db.collection('votes').onSnapshot((snapshot) => {
      const votesList = [];
      snapshot.forEach(doc => {
        votesList.push({ id: doc.id, ...doc.data() });
      });
      localStorage.setItem('votes', JSON.stringify(votesList));
      this.triggerUpdate('votes', votesList);
    }, (err) => this.handleFirestoreError(err));

    // 4. connected voters list listener
    this.db.collection('connected_voters').onSnapshot((snapshot) => {
      const connected = {};
      snapshot.forEach(doc => {
        connected[doc.id] = doc.data();
      });
      localStorage.setItem('connected_voters', JSON.stringify(connected));
      this.triggerUpdate('connected_voters', connected);
    }, (err) => this.handleFirestoreError(err));
  }

  handleFirestoreError(err) {
    console.error("Firestore connection error caught:", err);
    this.triggerOffline(true);
  }

  triggerOffline(isOffline) {
    this.offlineCallbacks.forEach(cb => cb(isOffline));
  }

  // Toggle active Sync engine
  setSyncMode(firebaseMode, config = null) {
    this.useFirebase = firebaseMode;
    localStorage.setItem('use_firebase', firebaseMode);
    
    if (config) {
      this.firebaseConfig = config;
      localStorage.setItem('firebase_config', JSON.stringify(config));
    }
    
    if (firebaseMode && this.firebaseConfig) {
      this.initFirebase();
    } else {
      console.log("Switched to Simulated LocalSync Mode.");
      this.db = null;
      this.triggerOffline(false);
      
      // Manually trigger local sync reload
      this.triggerUpdate('global_state', this.getGlobalState());
      this.triggerUpdate('roster', this.getRoster());
      this.triggerUpdate('votes', this.getVotes());
      this.triggerUpdate('connected_voters', this.getConnectedVoters());
    }
  }

  // --- CRUD API Methods supporting both Firestore and LocalSync fallback ---
  
  // Register observer updates
  subscribe(callback) {
    this.listeners.push(callback);
    // Execute immediately on subscribe to load initial state
    callback('global_state', this.getGlobalState());
    callback('roster', this.getRoster());
    callback('votes', this.getVotes());
    callback('connected_voters', this.getConnectedVoters());
  }

  onOfflineStateChange(callback) {
    this.offlineCallbacks.push(callback);
  }

  triggerUpdate(type, data) {
    this.listeners.forEach(cb => cb(type, data));
  }

  // Synchronize dynamic local operation and broadcast
  saveLocalAndBroadcast(type, data) {
    localStorage.setItem(type, JSON.stringify(data));
    this.broadcastChannel.postMessage({ type, data });
    this.triggerUpdate(type, data);
  }

  // 1. Global State Controls
  getGlobalState() {
    return JSON.parse(localStorage.getItem('global_state')) || { view: 'standby', current_team_id: 1, active_judges_count: 29 };
  }

  updateGlobalState(fields) {
    const currentState = this.getGlobalState();
    const updated = { ...currentState, ...fields };
    
    if (this.useFirebase && this.db) {
      this.db.collection('global').doc('state').update(fields).catch(e => {
        console.error("Firebase write failed, using local backup", e);
        this.saveLocalAndBroadcast('global_state', updated);
      });
    } else {
      this.saveLocalAndBroadcast('global_state', updated);
    }
  }

  // 2. Roster Controls
  getRoster() {
    return JSON.parse(localStorage.getItem('roster')) || DEFAULT_ROSTER;
  }

  updateRosterTeamScore(teamIdString, totalPercentage) {
    const roster = this.getRoster();
    const teamIndex = roster.findIndex(t => t.id === teamIdString);
    if (teamIndex !== -1) {
      roster[teamIndex].total_percentage = parseFloat(totalPercentage);
      
      if (this.useFirebase && this.db) {
        this.db.collection('roster').doc(teamIdString).update({ total_percentage: parseFloat(totalPercentage) });
      } else {
        this.saveLocalAndBroadcast('roster', roster);
      }
    }
  }

  updateTeamArchitecture(teamIdString, newArchitecture) {
    const roster = this.getRoster();
    const teamIndex = roster.findIndex(t => t.id === teamIdString);
    if (teamIndex !== -1) {
      roster[teamIndex].architecture = newArchitecture;
      
      if (this.useFirebase && this.db) {
        this.db.collection('roster').doc(teamIdString).update({ architecture: newArchitecture });
      } else {
        this.saveLocalAndBroadcast('roster', roster);
      }
    }
  }

  overwriteFullRoster(newRoster) {
    // Standardize IDs and fields
    const formatted = newRoster.map((t, idx) => ({
      teamId: t.teamId || (idx + 1),
      id: t.id || `team_${String(idx + 1).padStart(2, '0')}`,
      team_name: t.team_name || `第${idx + 1}組`,
      architecture: t.architecture || '未指定建築',
      members: Array.isArray(t.members) ? t.members : (typeof t.members === 'string' ? t.members.split(',') : []),
      total_percentage: parseFloat(t.total_percentage || 0.00)
    }));

    if (this.useFirebase && this.db) {
      // Clear old collection and add new items
      formatted.forEach(team => {
        this.db.collection('roster').doc(team.id).set(team);
      });
    } else {
      this.saveLocalAndBroadcast('roster', formatted);
    }
  }

  // 3. Votes (Round score records) Controls
  getVotes() {
    return JSON.parse(localStorage.getItem('votes')) || [];
  }

  submitVote(voteDocId, voteData) {
    const votes = this.getVotes();
    const index = votes.findIndex(v => v.id === voteDocId);
    
    const formattedVote = {
      id: voteDocId,
      ...voteData,
      submitted_at: Date.now()
    };

    if (index !== -1) {
      votes[index] = formattedVote;
    } else {
      votes.push(formattedVote);
    }

    if (this.useFirebase && this.db) {
      this.db.collection('votes').doc(voteDocId).set(formattedVote).catch(e => {
        console.error("Firebase write failed, using local backup", e);
        this.saveLocalAndBroadcast('votes', votes);
      });
    } else {
      this.saveLocalAndBroadcast('votes', votes);
    }
  }

  clearRoundVotes() {
    if (this.useFirebase && this.db) {
      this.db.collection('votes').get().then(snapshot => {
        const batch = this.db.batch();
        snapshot.forEach(doc => {
          batch.delete(doc.ref);
        });
        batch.commit();
      });
    } else {
      this.saveLocalAndBroadcast('votes', []);
    }
  }

  deleteSingleVote(voteDocId) {
    const votes = this.getVotes();
    const filtered = votes.filter(v => v.id !== voteDocId);
    
    if (this.useFirebase && this.db) {
      this.db.collection('votes').doc(voteDocId).delete();
    } else {
      this.saveLocalAndBroadcast('votes', filtered);
    }
  }

  // 4. connected voters monitor
  getConnectedVoters() {
    return JSON.parse(localStorage.getItem('connected_voters')) || {};
  }

  updateVoterConnection(voterId, isConnected) {
    const connected = this.getConnectedVoters();
    connected[voterId] = {
      connected: isConnected,
      last_active: Date.now()
    };
    
    if (this.useFirebase && this.db) {
      this.db.collection('connected_voters').doc(voterId).set({
        connected: isConnected,
        last_active: Date.now()
      });
    } else {
      this.saveLocalAndBroadcast('connected_voters', connected);
    }
  }
}

// Global synchronizer instance
const syncManager = new DualModeSynchronizer();

// ==========================================================================
// BUSINESS RULES & SCORING MATHEMATICAL FUNCTIONS
// ==========================================================================

// Calculate final percentage score for a specific round target
function calculateTeamScore(targetTeamId, roster, votesList, globalState, connectedVoters = {}) {
  const team = roster.find(t => t.teamId === parseInt(targetTeamId));
  if (!team) return { scorePercent: 0.00, details: null };

  // Filter votes belonging to this team's performance
  const teamVotes = votesList.filter(v => parseInt(v.target_team_id) === parseInt(targetTeamId));

  // Determine active judges base (denominator)
  // Base attendees = 24 peer teams + 5 pro judges = 29 maximum voters
  let maxVotersCount = globalState.active_judges_count || 29;
  
  // Exclude absent groups: check all voters and reduce if flagged absent/unconnected in list
  // If the voter card connection is set to off or un-checked by the coordinator, deduct
  let absentCount = 0;
  
  // Note: Only deduct if voter has never submitted a vote (if they submitted, they are active!)
  // Peer-lockout: performing team itself is locked out and cannot vote. If it has terminal role, deduct 1.
  const hasPerformingTeamVoter = Object.values(VOTER_TOKENS).some(v => v.type === 'peer' && v.teamId === parseInt(targetTeamId));
  const peerLockoutDeduction = hasPerformingTeamVoter ? 1 : 0;

  // Final Denominator (voter count)
  let effectiveVotersDenominator = maxVotersCount - peerLockoutDeduction;
  if (effectiveVotersDenominator <= 0) effectiveVotersDenominator = 1; // Safeguard

  // Max possible score denominator = effective voters * 30 points
  const maxPossibleScore = effectiveVotersDenominator * 30;

  // Sum total actual scores
  let actualScoreSum = 0;
  const submissionsMap = {};

  teamVotes.forEach(v => {
    // Map token details
    const voter = Object.values(VOTER_TOKENS).find(t => t.id === v.id.split('_')[1] || t.id === v.judge_token);
    
    // Safety check: skip if peer evaluation tries to vote for themselves (should be blocked by UI but double check here)
    if (voter && voter.type === 'peer' && voter.teamId === parseInt(targetTeamId)) {
      return; // Skip self vote
    }

    const voteTotal = (parseInt(v.score_coherency) || 0) + 
                      (parseInt(v.score_communication) || 0) + 
                      (parseInt(v.score_originality) || 0);
    actualScoreSum += voteTotal;
    submissionsMap[v.id.split('_')[1] || v.judge_token] = voteTotal;
  });

  // Calculate percentage
  let scorePercent = (actualScoreSum / maxPossibleScore) * 100;
  if (scorePercent > 100) scorePercent = 100;
  
  return {
    scorePercent: parseFloat(scorePercent.toFixed(2)),
    details: {
      team_id: targetTeamId,
      team_name: team.team_name,
      architecture: team.architecture,
      actual_sum: actualScoreSum,
      voters_denominator: effectiveVotersDenominator,
      max_possible: maxPossibleScore,
      peer_lockout: peerLockoutDeduction,
      submissions: submissionsMap
    }
  };
}

// Kahoot 3D Podium Placement sorter supporting duplicate ranks (Ties)
function resolvePodiumPlacements(roster) {
  // Sort descending by total score percentage, only including teams that have performed (total_percentage > 0)
  const ranked = roster
    .filter(t => t.total_percentage > 0)
    .sort((a, b) => b.total_percentage - a.total_percentage);
    
  if (ranked.length === 0) return { first: [], second: [], third: [] };

  const podium = {
    first: [],
    second: [],
    third: []
  };

  // Group equal values to handle ties
  const scoreGroups = [];
  ranked.forEach(team => {
    let group = scoreGroups.find(g => g.score === team.total_percentage);
    if (!group) {
      group = { score: team.total_percentage, teams: [] };
      scoreGroups.push(group);
    }
    group.teams.push(team);
  });

  // Assign groups to podium places
  if (scoreGroups.length > 0) {
    // 1st place group
    podium.first = scoreGroups[0].teams;
  }
  
  if (scoreGroups.length > 1) {
    // 2nd place group: only visible if 1st place doesn't tie
    if (podium.first.length === 1) {
      podium.second = scoreGroups[1].teams;
    } else {
      // If 1st place ties, there is NO second place. The next best group becomes 3rd!
      podium.third = scoreGroups[1].teams;
    }
  }

  if (scoreGroups.length > 2 && podium.third.length === 0) {
    // 3rd place group
    podium.third = scoreGroups[2].teams;
  }

  return podium;
}
