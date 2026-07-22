if (!location.search.includes('full=1')) {
  /* global toast,showView,vis,renderProxies,switchNav,applyBlur,stopAP,startAP,renderAccount,setV,updateBillingLabel,sleep,zsApi,safeSendMessage,safeStorageGet,safeStorageSet,getAuthHeaders,markOwnWrite,MouseEvent,KeyboardEvent,Image,ClipboardItem, Blob,_todayKey,_tryBinSources,applySpoofWithLimit,binBrandClass,bindPayCopyButtons,bumpSpoofUsage,bumpTempMailUsage,checkOne,closeSidebar,connectProxy,detectCardType,dlText,fetchGateHealth,gateHotness,generateOneCard,getRiskColor,getRiskLabel,getSpoofUsage,getTempMailUsage,gwTagClass,handlePanelNav,loadPaymentWallets,lookupBinMulti,luhnCheck,luhnCheckDigit,parseExpiry,populateCountries,refreshSpoofUsageUI,refreshTempMailUsageUI,renderGateTable,renderPaymentWallets,rnd,timeAgo,tmCreateAccount,tmExtractCode,tmExtractMagicLink,tmFetchDomains,tmListMessages,tmRandStr,tmReadMessage,tmRefreshInbox,tmRenderAddress,tmRenderInbox,tmShowMessage,tmStartAuto,tmStopAuto,tmStripHtml,todayStr,updateFPUI,updateProxyStatus,validateCardLine */

  chrome.tabs.create({
    url: chrome.runtime.getURL('popup/popup.html?full=1')
  });
  window.close();
}
const varCenturyThere = 'https://noblusss.com/zs-api';
function funcGladSoftly(argCutThrew, {
  argGrownSing = 'POST',
  body: argCowWire,
  headers: argAbilityValuable
} = {}) {
  const varCertainSend = argCutThrew.startsWith('/') ? argCutThrew : '/' + argCutThrew;
  return new Promise((argElementWater, argLoosePressure) => {
    chrome.runtime.sendMessage({
      action: 'zsApi',
      path: varCertainSend,
      method: argGrownSing,
      body: argCowWire,
      headers: argAbilityValuable
    }, argAnimalWife => {
      if (chrome.runtime.lastError) {
        return argLoosePressure(new Error(chrome.runtime.lastError.message));
      }
      if (!argAnimalWife) {
        return argLoosePressure(new Error('Background not responding \u2014 reload extension'));
      }
      if (argAnimalWife.netError) {
        return argLoosePressure(new Error(argAnimalWife.netError));
      }
      argElementWater(argAnimalWife.data);
    });
  });
}
const varHospitalTypical = {
  ID: '\uD83C\uDDEE\uD83C\uDDE9 Indonesia',
  SG: '\uD83C\uDDF8\uD83C\uDDEC Singapore',
  MY: '\uD83C\uDDF2\uD83C\uDDFE Malaysia',
  TH: '\uD83C\uDDF9\uD83C\uDDED Thailand',
  VN: '\uD83C\uDDFB\uD83C\uDDF3 Vietnam',
  PH: '\uD83C\uDDF5\uD83C\uDDED Philippines',
  JP: '\uD83C\uDDEF\uD83C\uDDF5 Japan',
  KR: '\uD83C\uDDF0\uD83C\uDDF7 South Korea',
  CN: '\uD83C\uDDE8\uD83C\uDDF3 China',
  HK: '\uD83C\uDDED\uD83C\uDDF0 Hong Kong',
  TW: '\uD83C\uDDF9\uD83C\uDDFC Taiwan',
  IN: '\uD83C\uDDEE\uD83C\uDDF3 India',
  US: '\uD83C\uDDFA\uD83C\uDDF8 United States',
  GB: '\uD83C\uDDEC\uD83C\uDDE7 United Kingdom',
  DE: '\uD83C\uDDE9\uD83C\uDDEA Germany',
  FR: '\uD83C\uDDEB\uD83C\uDDF7 France',
  NL: '\uD83C\uDDF3\uD83C\uDDF1 Netherlands',
  BR: '\uD83C\uDDE7\uD83C\uDDF7 Brazil',
  RU: '\uD83C\uDDF7\uD83C\uDDFA Russia',
  TR: '\uD83C\uDDF9\uD83C\uDDF7 Turkey',
  AE: '\uD83C\uDDE6\uD83C\uDDEA UAE',
  AU: '\uD83C\uDDE6\uD83C\uDDFA Australia'
};
let varClockMean = null;
let varHurryPowerful = [];
let varCarriedTent = null;
let varDesignRubbed = 'http';
let varComposedMore = {};
let varDangerWish = new Set();
let varIncludingScreen = null;
let varInfluenceThree = [];
let varDistantNecessary = [];
const varHorseShoot = {
  get: argColonySilly => new Promise(argCircusSouthern => chrome.storage.local.get(argColonySilly, argCircusSouthern)),
  set: argForgotTill => new Promise(argAvoidPeriod => chrome.storage.local.set(argForgotTill, argAvoidPeriod)),
  remove: argEarthThink => new Promise(argCreateSaid => chrome.storage.local.remove(argEarthThink, argCreateSaid))
};
let varByThose;
function funcDoingUp(argAgreeSpring, argAnnouncedSurprise = '') {
  const varComingUp = document.getElementById('toast');
  varComingUp.textContent = argAgreeSpring;
  varComingUp.className = 'toast show ' + argAnnouncedSurprise;
  clearTimeout(varByThose);
  varByThose = setTimeout(() => varComingUp.className = 'toast', 2800);
}
function funcHelpfulScientist(argBlueSky) {
  if (!argBlueSky) {
    return;
  }
  funcChartWild(argBlueSky);
  if (argBlueSky === 'tempmail') {
    funcCleanWorld();
  }
  funcLittleRegion();
}
document.getElementById('sbNav').addEventListener('click', argMailName => {
  const varDiseaseTraffic = argMailName.target.closest('.nav-item');
  if (!varDiseaseTraffic) {
    return;
  }
  funcHelpfulScientist(varDiseaseTraffic.dataset.panel);
});
document.getElementById('viewMain').addEventListener('click', argGravitySuccessful => {
  const varFlewShelter = argGravitySuccessful.target.closest('.qa-btn');
  if (!varFlewShelter) {
    return;
  }
  funcHelpfulScientist(varFlewShelter.dataset.panel);
});
function funcChartWild(argGraduallySeed) {
  // Handle main view switching (viewLogin / viewMain)
  const mainViews = ['viewLogin', 'viewMain'];
  if (mainViews.includes(argGraduallySeed)) {
    mainViews.forEach(v => {
      const el = document.getElementById(v);
      if (el) el.style.display = v === argGraduallySeed ? 'block' : 'none';
    });
    // Update auth-dependent UI
    const isLoggedIn = argGraduallySeed !== 'viewLogin';
    const sbUser = document.getElementById('sbUserSection');
    const btnOut = document.getElementById('btnLogout');
    if (sbUser) sbUser.style.display = isLoggedIn ? 'flex' : 'none';
    if (btnOut) btnOut.style.display = isLoggedIn ? 'block' : 'none';
    return;
  }
  // Handle sidebar panel switching
  document.querySelectorAll('.nav-item').forEach(argAloneOrange => argAloneOrange.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(argGraduallyResearch => argGraduallyResearch.classList.remove('active'));
  const varLimitedRespect = document.querySelector('.nav-item[data-panel="' + argGraduallySeed + '"]');
  const varCertainTeach = document.getElementById('panel-' + argGraduallySeed);
  if (varLimitedRespect) {
    varLimitedRespect.classList.add('active');
  }
  if (varCertainTeach) {
    varCertainTeach.classList.add('active');
  }
}
function funcBicyclePour() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sbOverlay').classList.add('active');
}
function funcLittleRegion() {
  const varGateWish = document.getElementById('sidebar');
  const varJudgeMap = document.getElementById('sbOverlay');
  if (varGateWish) {
    varGateWish.classList.remove('open');
  }
  if (varJudgeMap) {
    varJudgeMap.classList.remove('active');
  }
}
document.getElementById('btnMenu').addEventListener('click', funcBicyclePour);
document.getElementById('sbClose').addEventListener('click', funcLittleRegion);
document.getElementById('sbOverlay').addEventListener('click', funcLittleRegion);
function funcAwayRailroad() {
  const varAutomobileMe = document.getElementById('topBar');
  const varClearlySix = document.getElementById('btnMenu');
  if (!varClockMean) {
    funcChartWild('viewMain');
    if (varAutomobileMe) {
      varAutomobileMe.style.display = 'flex';
    }
    if (varClearlySix) {
      varClearlySix.style.visibility = 'hidden';
    }
    funcLittleRegion();
    return;
  }
  if (varAutomobileMe) {
    varAutomobileMe.style.display = 'flex';
  }
  if (varClearlySix) {
    varClearlySix.style.visibility = 'visible';
  }
  document.getElementById('sbUserSection').style.display = 'flex';
  document.getElementById('sbUsername').textContent = '@' + (varClockMean.username || 'user');
  const varBuildingValuable = document.getElementById('sbPlanBadge');
  if (varBuildingValuable) {
    varBuildingValuable.textContent = 'FREE';
    varBuildingValuable.className = 'plan-badge free';
  }
  document.getElementById('statSuccess').textContent = varClockMean.total_success || 0;
  const varAuthorWhere = document.getElementById('statHits');
  varAuthorWhere.textContent = '\u221E';
  varAuthorWhere.className = 'sval accent';
  const varHurtUnknown = document.getElementById('statSpoof');
  varHurtUnknown.textContent = '\u221E';
  varHurtUnknown.className = 'sval amber';
  funcChartWild('viewMain');
}
document.getElementById('btnRefresh').addEventListener('click', () => {
  if (!varClockMean) return;
  tgRefreshStats();
  const ub = document.getElementById('dm-users-body');
  const hb = document.getElementById('dm-hits-body');
  if (ub) { delete ub.dataset.loaded; ub.innerHTML = ''; }
  if (hb) { delete hb.dataset.loaded; hb.innerHTML = ''; }
  const activeTab = document.querySelector('.dm-tab[style*="var(--gold)"]');
  if (activeTab && activeTab.dataset.tab === 'users') tgLoadUsers();
  if (activeTab && activeTab.dataset.tab === 'hits')  tgLoadHits();
  funcAwayRailroad();
  funcDoingUp('✅ Refreshed', 'ok');
});

// ── Tab switching ──────────────────────────────────────────────────────────────
(function initDashboardTabs() {
  document.addEventListener('click', e => {
    const tab = e.target.closest('.dm-tab');
    if (!tab) return;
    const name = tab.dataset.tab;
    document.querySelectorAll('.dm-tab').forEach(t => {
      const active = t.dataset.tab === name;
      t.style.borderBottomColor = active ? 'var(--gold)' : 'transparent';
      t.style.color = active ? 'var(--gold)' : 'var(--muted)';
    });
    document.querySelectorAll('.dm-tab-panel').forEach(p => {
      p.style.display = p.id === 'dm-tab-' + name ? '' : 'none';
    });
    // Lazy-load data when tab first opened
    if (name === 'users' && !document.getElementById('dm-users-body').dataset.loaded) {
      tgLoadUsers();
    }
    if (name === 'hits' && !document.getElementById('dm-hits-body').dataset.loaded) {
      tgLoadHits();
    }
  });
})();

// ── Helpers ─────────────────────────────────────────────────────────────────────
const dmFmt = t => t ? new Date(t * 1000).toLocaleDateString('en-GB', {day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}) : '—';
const dmSrcColor = { widget:'#2b7cff', bot:'#3fb950', extension:'#d2a8ff' };
const dmBadge = (s='') => `<span style="padding:1px 7px;border-radius:999px;font-size:9px;font-weight:700;background:${(dmSrcColor[s]||'#8b949e')}22;color:${dmSrcColor[s]||'#8b949e'};border:1px solid ${(dmSrcColor[s]||'#8b949e')}44">${s}</span>`;

// ── Load Users ──────────────────────────────────────────────────────────────
let _dmAllUsers = [];
async function tgLoadUsers() {
  const tbody = document.getElementById('dm-users-body');
  const empty = document.getElementById('dm-users-empty');
  tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;padding:16px;color:var(--muted)">Loading…</td></tr>';
  try {
    const r = await tgApiFetch('/admin/users');
    if (!r.ok) { tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;padding:16px;color:var(--red)">Admin only</td></tr>'; return; }
    const { users } = await r.json();
    _dmAllUsers = users || [];
    tbody.dataset.loaded = '1';
    dmRenderUsers(_dmAllUsers);
    // update spoof/users counter
    const spoof = document.getElementById('statSpoof');
    if (spoof) { spoof.textContent = _dmAllUsers.length; }
  } catch(e) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center;padding:16px;color:var(--red)">Error: ${e.message}</td></tr>`;
  }
}

function dmRenderUsers(users) {
  const tbody = document.getElementById('dm-users-body');
  const empty = document.getElementById('dm-users-empty');
  if (!users.length) { tbody.innerHTML = ''; empty.style.display = ''; return; }
  empty.style.display = 'none';
  tbody.innerHTML = users.map(u => {
    const name = [u.first_name, u.last_name].filter(Boolean).join(' ') || '—';
    const uname = u.username ? '@' + u.username : '—';
    const hitColor = u.hit_count > 0 ? '#3fb950' : 'var(--muted)';
    return `<tr style="border-bottom:1px solid rgba(212,175,55,.07)">
      <td style="padding:7px 8px">
        <div style="font-size:11px;font-weight:600;color:var(--text)">${name}</div>
        <div style="font-size:10px;color:var(--muted)">${uname}</div>
      </td>
      <td style="padding:7px 8px;font-family:var(--mono);font-size:10px;color:var(--muted)">${u.telegram_id}</td>
      <td style="padding:7px 8px;text-align:center;font-weight:700;color:${hitColor}">${u.hit_count||0}</td>
      <td style="padding:7px 8px;text-align:center;color:var(--muted)">${u.login_count}</td>
      <td style="padding:7px 8px">${dmBadge(u.source)}</td>
    </tr>`;
  }).join('');
}

// Search filter
document.addEventListener('input', e => {
  if (e.target.id !== 'dm-user-search') return;
  const q = e.target.value.toLowerCase();
  const filtered = _dmAllUsers.filter(u =>
    String(u.telegram_id).includes(q) ||
    (u.username||'').toLowerCase().includes(q) ||
    [u.first_name, u.last_name].filter(Boolean).join(' ').toLowerCase().includes(q)
  );
  dmRenderUsers(filtered);
});

// ── Load Hits ──────────────────────────────────────────────────────────────
async function tgLoadHits() {
  const tbody = document.getElementById('dm-hits-body');
  const empty = document.getElementById('dm-hits-empty');
  tbody.innerHTML = '<tr><td colspan="4" style="text-align:center;padding:16px;color:var(--muted)">Loading…</td></tr>';
  try {
    const r = await tgApiFetch('/admin/hits?limit=50');
    if (!r.ok) {
      // non-admin: load personal hits
      const sr = await tgApiFetch('/stats');
      if (sr.ok) {
        const { recent } = await sr.json();
        dmRenderHits(recent || [], true);
        tbody.dataset.loaded = '1';
      }
      return;
    }
    const { hits } = await r.json();
    tbody.dataset.loaded = '1';
    dmRenderHits(hits || [], false);
  } catch(e) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center;padding:16px;color:var(--red)">Error: ${e.message}</td></tr>`;
  }
}

function dmRenderHits(hits, personal) {
  const tbody = document.getElementById('dm-hits-body');
  const empty = document.getElementById('dm-hits-empty');
  if (!hits.length) { tbody.innerHTML = ''; empty.style.display = ''; return; }
  empty.style.display = 'none';
  tbody.innerHTML = hits.map(h => {
    const who = personal ? 'Me' : (h.username ? '@' + h.username : String(h.telegram_id));
    const card = h.card_bin ? `<span style="font-family:var(--mono);font-size:10px;background:rgba(8,7,16,.7);padding:1px 5px;border-radius:4px">${h.card_bin}…${h.card_last4||'????'}</span>` : '';
    return `<tr style="border-bottom:1px solid rgba(212,175,55,.07)">
      <td style="padding:7px 8px">
        <div style="font-size:11px;font-weight:600;color:var(--green)">${who}</div>
        <div>${card}</div>
      </td>
      <td style="padding:7px 8px;font-size:10px;color:var(--muted);max-width:90px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${h.gate||'—'}</td>
      <td style="padding:7px 8px;font-size:11px;font-weight:700;color:var(--gold)">${h.amount||'—'}</td>
      <td style="padding:7px 8px;font-size:10px;color:var(--muted)">${dmFmt(h.created_at)}</td>
    </tr>`;
  }).join('');
}

// ── Stats refresh ───────────────────────────────────────────────────────────
async function tgRefreshStats() {
  try {
    const local = await varHorseShoot.get(['kim_local_hits', 'kim_local_attempts']);
    const localHits = local.kim_local_hits || 0;
    let remoteTotal = 0, remoteToday = 0;
    try {
      const r = await tgApiFetch('/stats');
      if (r.ok) { const d = await r.json(); remoteTotal = d.total||0; remoteToday = d.today||0; }
    } catch {}
    const totalHits = Math.max(localHits, remoteTotal);
    const el = document.getElementById('statSuccess');
    const elD = document.getElementById('statHits');
    if (el) { el.textContent = totalHits; }
    if (elD) { elD.textContent = remoteToday || localHits; }
  } catch {}
}

async function funcLengthVillage() {
  const varAnywhereSo = await varHorseShoot.get(['zs_user', 'proxies', 'activeProxy', 'fingerprint', 'tempMail']);
  varHurryPowerful = varAnywhereSo.proxies || [];
  varCarriedTent = varAnywhereSo.activeProxy || null;
  varIncludingScreen = varAnywhereSo.fingerprint || null;
  varBentNo = varAnywhereSo.tempMail || null;

  // Check for existing Telegram session
  const sessionResult = await tgVerifyStoredSession();

  if (sessionResult.hadToken) {
    // Has token (valid session or network error) — always show main
    varClockMean = sessionResult.user
      ? {
          user_id: String(sessionResult.user.sub),
          username: sessionResult.user.username || 'user',
          plan: sessionResult.user.is_admin ? 'admin' : 'free',
          total_success: 0,
        }
      : (sessionResult.cached || varAnywhereSo.zs_user || { user_id: 'tg', username: 'user', plan: 'free', total_success: 0 });

    funcAnimalShorter();
    funcChartWild('viewMain');
    document.getElementById('sbUserSection').style.display = 'flex';
    funcAwayRailroad();
    funcInformationOut();
    funcFeelVery();
    funcFloorScientist();
    funcLipsTight();
    funcInformationPort();
    funcCleanWorld();
    tgRefreshStats(); // load hit stats async
    if (varBentNo && varBentNo.token) {
      funcConstructionVisitor(true).catch(() => {});
      funcGraphZoo();
    }
  } else {
    // Definitively no token — show Telegram login
    await varHorseShoot.remove(['tg_token', 'zs_user']);
    tgShowLoginStep(1);
    funcChartWild('viewLogin');
  }
}
funcLengthVillage();