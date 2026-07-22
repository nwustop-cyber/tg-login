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
  // Hit/account stats are fully local now — no account token or hit count
  // is fetched from the backend here. Just re-render the current local state.
  if (!varClockMean) {
    return;
  }
  funcAwayRailroad();
  funcDoingUp('\u2705 Refreshed', 'ok');
});
function funcInformationOut() {
  const varBecomeWrote = document.getElementById('proxyList');
  if (!varHurryPowerful.length) {
    varBecomeWrote.innerHTML = '<div style="text-align:center;color:#475569;font-size:11px;padding:16px">No proxies saved</div>';
    return;
  }
  varBecomeWrote.innerHTML = varHurryPowerful.map((argInstantReligious, argCoverThy) => {
    const varBlowWarn = argInstantReligious.host + ':' + argInstantReligious.port;
    const varBreadThing = varComposedMore[varBlowWarn];
    const varDiscoverSomeone = varCarriedTent && varCarriedTent.host === argInstantReligious.host && varCarriedTent.port === argInstantReligious.port;
    let varCottonThese = '';
    if (varBreadThing) {
      varCottonThese = varBreadThing.ok ? '<span class="latency ok">' + varBreadThing.ms + 'ms</span>' + (varBreadThing.exitIP ? ' <span class="latency ok" style="font-size:9px">' + varBreadThing.emoji + ' ' + varBreadThing.country + '</span>' : '') : '<span class="latency fail">\u2717 Dead</span>';
    }
    return '<div class="proxy-item">\n      <div class="proxy-info">\n        <span class="proxy-badge ' + argInstantReligious.type + '">' + argInstantReligious.type.toUpperCase() + '</span>\n        ' + argInstantReligious.host + ':' + argInstantReligious.port + (argInstantReligious.user ? ' \uD83D\uDD10' : '') + ' ' + varCottonThese + '\n      </div>\n      <div class="proxy-acts">\n        <button class="px-btn check" data-action="check" data-id="' + argCoverThy + '">\u26A1</button>\n        <button class="px-btn conn ' + (varDiscoverSomeone ? 'active' : '') + '" data-action="connect" data-id="' + argCoverThy + '">' + (varDiscoverSomeone ? 'ON' : 'Use') + '</button>\n        <button class="px-btn rm" data-action="remove" data-id="' + argCoverThy + '">\u2715</button>\n      </div>\n    </div>';
  }).join('');
}
function funcFeelVery() {
  const varFairPrize = document.getElementById('proxyDot');
  const varChickenMay = document.getElementById('proxyStatus');
  if (varCarriedTent) {
    varFairPrize.className = 'dot on';
    varChickenMay.textContent = varCarriedTent.type.toUpperCase() + ' ' + varCarriedTent.host + ':' + varCarriedTent.port;
    varChickenMay.style.color = '#86efac';
  } else {
    varFairPrize.className = 'dot off';
    varChickenMay.textContent = 'No proxy';
    varChickenMay.style.color = '#94a3b8';
  }
}
document.querySelectorAll('.tbtn').forEach(argHandSpin => {
  argHandSpin.addEventListener('click', () => {
    document.querySelectorAll('.tbtn').forEach(argClothingRubber => argClothingRubber.classList.remove('active'));
    argHandSpin.classList.add('active');
    varDesignRubbed = argHandSpin.dataset.type;
  });
});
document.getElementById('btnAdd').addEventListener('click', async () => {
  if (!varClockMean) {
    funcDoingUp('\u26D4 Login first', 'err');
    return;
  }
  const varBelievedRemarkable = document.getElementById('inpHost').value.trim();
  const varCrossWherever = document.getElementById('inpPort').value.trim();
  const varDullThee = document.getElementById('inpUser').value.trim();
  const varFasterMusical = document.getElementById('inpPass').value.trim();
  if (!varBelievedRemarkable || !varCrossWherever) {
    funcDoingUp('Host and port are required', 'err');
    return;
  }
  varHurryPowerful.push({
    type: varDesignRubbed,
    host: varBelievedRemarkable,
    port: parseInt(varCrossWherever),
    user: varDullThee,
    pass: varFasterMusical
  });
  chrome.storage.local.set({
    proxies: varHurryPowerful
  });
  funcInformationOut();
  ['inpHost', 'inpPort', 'inpUser', 'inpPass'].forEach(argListenSimplest => document.getElementById(argListenSimplest).value = '');
  funcDoingUp('\u2705 Proxy added', 'ok');
});
document.getElementById('btnImport').addEventListener('click', () => {
  if (!varClockMean) {
    funcDoingUp('\u26D4 Login first', 'err');
    return;
  }
  const varDiameterMuscle = document.getElementById('bulkTa').value.trim().split('\n');
  let varBatObtain = 0;
  varDiameterMuscle.forEach(argBecomingPole => {
    argBecomingPole = argBecomingPole.trim();
    if (!argBecomingPole) {
      return;
    }
    let varChickenWolf = 'http';
    let varAroundTake;
    let varEarnWar;
    let varBattleTip = '';
    let varDailyShinning = '';
    if (argBecomingPole.startsWith('socks5://')) {
      varChickenWolf = 'socks5';
      argBecomingPole = argBecomingPole.slice(9);
    } else {
      if (argBecomingPole.startsWith('socks4://')) {
        varChickenWolf = 'socks4';
        argBecomingPole = argBecomingPole.slice(9);
      } else {
        if (argBecomingPole.startsWith('http://')) {
          argBecomingPole = argBecomingPole.slice(7);
        }
      }
    }
    const varFactWatch = argBecomingPole.split(':');
    if (varFactWatch.length >= 2) {
      varAroundTake = varFactWatch[0];
      varEarnWar = parseInt(varFactWatch[1]);
      if (varFactWatch[2]) {
        varBattleTip = varFactWatch[2];
      }
      if (varFactWatch[3]) {
        varDailyShinning = varFactWatch[3];
      }
      varHurryPowerful.push({
        type: varChickenWolf,
        host: varAroundTake,
        port: varEarnWar,
        user: varBattleTip,
        pass: varDailyShinning
      });
      varBatObtain++;
    }
  });
  chrome.storage.local.set({
    proxies: varHurryPowerful
  });
  funcInformationOut();
  document.getElementById('bulkTa').value = '';
  funcDoingUp('\u2705 ' + varBatObtain + ' proxies imported', 'ok');
});
document.getElementById('btnCut').addEventListener('click', () => {
  chrome.runtime.sendMessage({
    action: 'clearProxy'
  });
  varCarriedTent = null;
  chrome.storage.local.set({
    activeProxy: null
  });
  funcFeelVery();
  funcInformationOut();
  funcDoingUp('Proxy disconnected');
});
document.getElementById('btnClearAll').addEventListener('click', () => {
  varHurryPowerful = [];
  chrome.storage.local.set({
    proxies: varHurryPowerful
  });
  funcInformationOut();
  funcDoingUp('Cleared');
});
document.getElementById('btnCheckAll').addEventListener('click', () => {
  varHurryPowerful.forEach((argMachineryWild, argAgainstToday) => funcBrassWriter(argAgainstToday));
});
document.getElementById('proxyList').addEventListener('click', argFartherNor => {
  const varDawnOf = argFartherNor.target.closest('[data-action]');
  if (!varDawnOf) {
    return;
  }
  const varDidSnow = Number(varDawnOf.dataset.id);
  if (varDawnOf.dataset.action === 'check') {
    funcBrassWriter(varDidSnow);
  } else {
    if (varDawnOf.dataset.action === 'connect') {
      funcAlsoSatellites(varDidSnow);
    } else {
      if (varDawnOf.dataset.action === 'remove') {
        varHurryPowerful.splice(varDidSnow, 1);
        chrome.storage.local.set({
          proxies: varHurryPowerful
        });
        funcInformationOut();
      }
    }
  }
});
function funcAlsoSatellites(argCitizenSingle) {
  const varHugeMother = varHurryPowerful[argCitizenSingle];
  chrome.runtime.sendMessage({
    action: 'setProxy',
    proxy: varHugeMother
  }, () => {
    varCarriedTent = varHugeMother;
    chrome.storage.local.set({
      activeProxy: varHugeMother
    });
    funcFeelVery();
    funcInformationOut();
    funcDoingUp('\u2705 Connected: ' + varHugeMother.host + ':' + varHugeMother.port, 'ok');
  });
}
async function funcBrassWriter(argBalloonStood) {
  const varCowWet = varHurryPowerful[argBalloonStood];
  const varCaveStronger = varCowWet.host + ':' + varCowWet.port;
  varDangerWish.add(varCaveStronger);
  funcDoingUp('\u23F3 Checking...', '');
  const varEmptyNot = await new Promise(argDesignTotal => chrome.runtime.sendMessage({
    action: 'checkProxy',
    proxy: varCowWet
  }, argDesignTotal));
  varDangerWish.delete(varCaveStronger);
  if (varEmptyNot && varEmptyNot.success) {
    try {
      // BUG FIX: previously fetched ip-api.com with no host argument, which
      // returns the CURRENT connection IP (user's own IP, not the proxy being
      // checked). The proxy is not connected yet at check time, so results
      // were always misleading. Fix: look up the proxy HOST directly.
      const varInsteadRespect = await fetch(
        'http://ip-api.com/json/' + (varCowWet.host || '') + '?fields=query,countryCode,proxy,hosting,isp'
      );
      const varIncomeStems = await varInsteadRespect.json();
      const varComplexMud = varIncomeStems.query || varCowWet.host;
      const varLanguageWatch = varIncomeStems.countryCode || '?';
      const varEarlyPond = varIncomeStems.proxy || varIncomeStems.hosting;
      varComposedMore[varCaveStronger] = {
        ok: true,
        ms: varEmptyNot.latency,
        exitIP: varComplexMud,
        country: varLanguageWatch,
        emoji: varEarlyPond ? '\uD83D\uDD34' : '\uD83D\uDFE2'
      };
      funcDoingUp((varEarlyPond ? '\uD83D\uDD34' : '\uD83D\uDFE2') + ' ' + varComplexMud + ' | ' + varLanguageWatch + ' | ' + varEmptyNot.latency + 'ms', 'ok');
    } catch (varEnvironmentMovement) {
      varComposedMore[varCaveStronger] = {
        ok: true,
        ms: varEmptyNot.latency
      };
      funcDoingUp('\u2705 ' + varEmptyNot.latency + 'ms', 'ok');
    }
  } else {
    varComposedMore[varCaveStronger] = {
      ok: false
    };
    funcDoingUp('\u274C Proxy dead', 'err');
  }
  funcInformationOut();
}
document.getElementById('btnMyIP').addEventListener('click', async () => {
  const varFigureSell = document.getElementById('myIPResult');
  varFigureSell.textContent = '\u23F3 Checking...';
  try {
    const varBridgeToy = await fetch('http://ip-api.com/json/?fields=query,country,countryCode,proxy,hosting,isp,org');
    const varBoneVisit = await varBridgeToy.json();
    const varImproveOffice = varBoneVisit.query || '?';
    const varBlewSometime = varBoneVisit.countryCode || '?';
    const varGravityStay = varBoneVisit.isp || varBoneVisit.org || '';
    const varEssentialSilver = varBoneVisit.proxy || varBoneVisit.hosting;
    varFigureSell.innerHTML = (varEssentialSilver ? '\uD83D\uDD34' : '\uD83D\uDFE2') + ' <b>' + varImproveOffice + '</b> | ' + varBlewSometime + ' | ' + (varEssentialSilver ? '\u26A0️ Proxy/VPN' : '\u2705 Clean') + '<br><span style="font-size:9px;opacity:0.6">' + varGravityStay + '</span>';
    varFigureSell.style.color = varEssentialSilver ? '#f87171' : '#86efac';
  } catch (varBlindStorm) {
    varFigureSell.textContent = '\u274C Failed';
  }
});
async function funcCleanWorld() {
  const varFightSometime = document.getElementById('tmUsageText');
  if (!varFightSometime) {
    return;
  }
  varFightSometime.textContent = '\u221E';
  varFightSometime.style.color = '#f59e0b';
}
let varHerselfWing = [];
let varCanalSyllable = 'windows';
function funcAnimalShorter() {
  const varFoundOver = document.getElementById('countrySelect');
  varFoundOver.innerHTML = '';
  chrome.runtime.sendMessage({
    action: 'listCountries'
  }, argElseShoot => {
    varHerselfWing = argElseShoot && argElseShoot.length ? argElseShoot : Object.entries(varHospitalTypical).map(([argGirlSand, argIncludeWhatever]) => ({
      code: argGirlSand,
      name: argIncludeWhatever,
      flag: ''
    }));
    varHerselfWing.sort((argFeltRather, argDivisionUnion) => argFeltRather.name.localeCompare(argDivisionUnion.name));
    varHerselfWing.forEach(argLaborMotion => {
      const varBaseballTomorrow = document.createElement('option');
      varBaseballTomorrow.value = argLaborMotion.code;
      varBaseballTomorrow.textContent = ((argLaborMotion.flag || '') + ' ' + argLaborMotion.name).trim();
      varFoundOver.appendChild(varBaseballTomorrow);
    });
  });
}
async function funcLipsTight() {
  const varCageShinning = document.getElementById('spoofUsageText');
  if (!varCageShinning) {
    return;
  }
  varCageShinning.textContent = '\u221E Unlimited';
  varCageShinning.style.color = '#f59e0b';
}
function funcFloorScientist() {
  const varKitchenOnce = document.getElementById('fpInfo');
  if (varIncludingScreen && varIncludingScreen.active) {
    const varFamilyPercent = varIncludingScreen.os === 'android' ? '\uD83E\uDD16' : '\uD83D\uDDA5️';
    varKitchenOnce.textContent = '\uD83C\uDFAD ' + varFamilyPercent + ' ' + varIncludingScreen.countryName;
    varKitchenOnce.style.color = '#c4b5fd';
  } else {
    varKitchenOnce.textContent = 'No spoofing active';
    varKitchenOnce.style.color = '#64748b';
  }
  funcLipsTight();
}
document.querySelectorAll('.os-btn').forEach(argGlobeSave => {
  argGlobeSave.addEventListener('click', () => {
    document.querySelectorAll('.os-btn').forEach(argHappilyNatural => {
      argHappilyNatural.classList.remove('active');
      argHappilyNatural.style.background = '#0f172a';
      argHappilyNatural.style.color = '#94a3b8';
    });
    argGlobeSave.classList.add('active');
    argGlobeSave.style.background = 'rgba(56,189,248,.1)';
    argGlobeSave.style.color = '#22d3ee';
    varCanalSyllable = argGlobeSave.dataset.os;
  });
});
document.getElementById('btnDetect').addEventListener('click', () => {
  const varListenTerrible = document.getElementById('btnDetect');
  if (varListenTerrible) {
    varListenTerrible.disabled = true;
    varListenTerrible.textContent = '\u2026';
  }
  funcDoingUp('Detecting from IP\u2026');
  chrome.runtime.sendMessage({
    action: 'detectCountry'
  }, argBlewPocket => {
    if (varListenTerrible) {
      varListenTerrible.disabled = false;
      varListenTerrible.textContent = 'Detect';
    }
    if (argBlewPocket && argBlewPocket.ok && argBlewPocket.code) {
      const varInsideScale = document.getElementById('countrySelect');
      if ([...varInsideScale.options].some(argDecideOpen => argDecideOpen.value === argBlewPocket.code)) {
        varInsideScale.value = argBlewPocket.code;
        const varDishMusical = argBlewPocket.source ? ' (' + argBlewPocket.source + ')' : '';
        funcDoingUp(('\uD83D\uDCCD Detected: ' + (argBlewPocket.flag || '') + ' ' + argBlewPocket.name + varDishMusical).trim(), 'ok');
      } else {
        funcDoingUp('Detected ' + argBlewPocket.code + ' (' + argBlewPocket.name + ') \u2014 country not in list, select manually', 'err');
      }
    } else {
      funcDoingUp(argBlewPocket?.error || 'Detection failed \u2014 select country manually', 'err');
    }
  });
});
async function funcExceptWilling(argEventuallyNew, argFarmerPartly) {
  if (!varClockMean) {
    funcDoingUp('\u26D4 Login first', 'err');
    return false;
  }
  return new Promise(argHisThrough => {
    chrome.runtime.sendMessage({
      action: 'buildFP',
      countryCode: argEventuallyNew,
      os: varCanalSyllable
    }, argDifficultRuler => {
      if (!argDifficultRuler) {
        funcDoingUp('Failed to build fingerprint', 'err');
        argHisThrough(false);
        return;
      }
      chrome.runtime.sendMessage({
        action: 'setFingerprint',
        fingerprint: argDifficultRuler
      }, async () => {
        varIncludingScreen = argDifficultRuler;
        funcFloorScientist();
        const varExistPot = varCanalSyllable === 'android' ? '\uD83E\uDD16 Android' : '\uD83D\uDDA5️ Desktop';
        funcDoingUp(argFarmerPartly + ' ' + varExistPot + ' \xB7 ' + argDifficultRuler.countryName, 'ok');
        argHisThrough(true);
      });
    });
  });
}
document.getElementById('btnApplyFp').addEventListener('click', async () => {
  const varCookiesTroops = document.getElementById('countrySelect').value;
  await funcExceptWilling(varCookiesTroops, '\u2705 Spoofing as');
});
document.getElementById('btnRandFp').addEventListener('click', async () => {
  if (!varHerselfWing.length) {
    funcDoingUp('Country list still loading\u2026', 'err');
    return;
  }
  const varAlthoughMostly = varHerselfWing[Math.floor(Math.random() * varHerselfWing.length)];
  document.getElementById('countrySelect').value = varAlthoughMostly.code;
  await funcExceptWilling(varAlthoughMostly.code, '\uD83C\uDFB2 Random');
});
document.getElementById('btnClearFp').addEventListener('click', () => {
  chrome.runtime.sendMessage({
    action: 'clearFingerprint'
  }, () => {
    varIncludingScreen = null;
    funcFloorScientist();
    funcDoingUp('Fingerprint cleared');
  });
});
document.getElementById('btnFpCut').addEventListener('click', () => document.getElementById('btnClearFp').click());
const varGoldTent = {};
async function funcAvailableNeighborhood(argBothRide) {
  const varGeneralNoise = argBothRide.replace(/\D/g, '').slice(0, 10);
  if (varGeneralNoise.length < 6) {
    throw new Error('Need at least 6 digits');
  }
  if (varGoldTent[varGeneralNoise]) {
    return varGoldTent[varGeneralNoise];
  }
  const varEagerSpring = varGeneralNoise.length > 6 ? [varGeneralNoise, varGeneralNoise.slice(0, 6)] : [varGeneralNoise];
  for (const varCoolPossible of varEagerSpring) {
    const varArmTerm = await funcEntirePush(varCoolPossible);
    if (varArmTerm) {
      varGoldTent[varGeneralNoise] = varArmTerm;
      return varArmTerm;
    }
  }
  throw new Error('BIN not found in any database');
}
async function funcEntirePush(argIfSomehow) {
  const varAgeThere = [async () => {
    const varBearRead = await fetch('https://bins.antipublic.cc/bins/' + argIfSomehow);
    if (!varBearRead.ok) {
      throw new Error('antipublic fail');
    }
    const varBrightNative = await varBearRead.json();
    if (!varBrightNative.brand && !varBrightNative.bank) {
      throw new Error('empty');
    }
    return {
      bin: argIfSomehow,
      scheme: varBrightNative.brand || 'Unknown',
      bank: varBrightNative.bank || 'Unknown',
      country_name: varBrightNative.country_name || '',
      country_flag: varBrightNative.country_flag || '',
      country_code: varBrightNative.country || '',
      type: varBrightNative.type || '\u2014',
      level: varBrightNative.level || '\u2014',
      phone: '\u2014',
      source: 'antipublic'
    };
  }, async () => {
    const varCombineRegion = await fetch('https://data.handyapi.com/bin/' + argIfSomehow);
    if (!varCombineRegion.ok) {
      throw new Error('handyapi fail');
    }
    const varCaughtPrimitive = await varCombineRegion.json();
    if (varCaughtPrimitive.Status !== 'SUCCESS' || !varCaughtPrimitive.Scheme) {
      throw new Error('empty');
    }
    return {
      bin: argIfSomehow,
      scheme: varCaughtPrimitive.Scheme,
      bank: varCaughtPrimitive.Issuer || 'Unknown',
      country_name: varCaughtPrimitive.Country?.Name || '',
      country_flag: '',
      country_code: varCaughtPrimitive.Country?.A2 || '',
      type: varCaughtPrimitive.Type || '\u2014',
      level: varCaughtPrimitive.CardTier || '\u2014',
      phone: '\u2014',
      source: 'handyapi'
    };
  }, async () => {
    const varCameNose = await fetch('https://lookup.binlist.net/' + argIfSomehow, {
      headers: {
        'Accept-Version': '3'
      }
    });
    if (!varCameNose.ok) {
      throw new Error('binlist fail');
    }
    const varKeyTall = await varCameNose.json();
    if (!varKeyTall.scheme && !varKeyTall.bank) {
      throw new Error('empty');
    }
    return {
      bin: argIfSomehow,
      scheme: varKeyTall.scheme || varKeyTall.brand || 'Unknown',
      bank: varKeyTall.bank?.name || 'Unknown',
      country_name: varKeyTall.country?.name || '',
      country_flag: varKeyTall.country?.emoji || '',
      country_code: varKeyTall.country?.alpha2 || '',
      type: varKeyTall.type || '\u2014',
      level: varKeyTall.brand || '\u2014',
      phone: varKeyTall.bank?.phone || '\u2014',
      source: 'binlist'
    };
  }];
  for (const varCoolRide of varAgeThere) {
    try {
      return await varCoolRide();
    } catch (varDoingSix) { /* silent */ }
  }
  return null;
}
let varDefinitionNervous = null;
document.getElementById('btnBinLookup').addEventListener('click', async () => {
  if (!varClockMean) {
    funcDoingUp('\u26D4 Login first', 'err');
    return;
  }
  const varDependSun = document.getElementById('binLookupInput').value.trim().replace(/\D/g, '');
  if (varDependSun.length < 6) {
    funcDoingUp('Enter at least 6 digits', 'err');
    return;
  }
  const varCenterStill = document.getElementById('btnBinLookup');
  varCenterStill.textContent = '\u23F3';
  varCenterStill.disabled = true;
  try {
    const varCloserPalace = await funcAvailableNeighborhood(varDependSun);
    varDefinitionNervous = varCloserPalace;
    const varAccurateTwice = funcAffectProperty(varCloserPalace.scheme);
    document.getElementById('blBrand').textContent = (varCloserPalace.scheme || '?').toUpperCase();
    document.getElementById('blBrand').className = 'bin-brand-badge ' + varAccurateTwice;
    document.getElementById('blBinNum').textContent = varCloserPalace.bin;
    document.getElementById('blBank').textContent = varCloserPalace.bank;
    document.getElementById('blCountry').textContent = varCloserPalace.country_flag || varCloserPalace.country_code ? (varCloserPalace.country_flag + ' ' + (varCloserPalace.country_name || varCloserPalace.country_code)).trim() : '\u2014';
    document.getElementById('blType').textContent = varCloserPalace.type ? String(varCloserPalace.type).charAt(0).toUpperCase() + String(varCloserPalace.type).slice(1).toLowerCase() : '\u2014';
    document.getElementById('blLevel').textContent = varCloserPalace.level || '\u2014';
    document.getElementById('blPrepaid').textContent = 'Source: ' + varCloserPalace.source;
    document.getElementById('blPhone').textContent = varCloserPalace.phone || '\u2014';
    document.getElementById('binLookupResult').style.display = 'block';
    funcDoingUp('\u2705 BIN found (' + varCloserPalace.source + ')', 'ok');
  } catch (varBestThee) {
    funcDoingUp('\u274C BIN not found in any database', 'err');
  }
  varCenterStill.textContent = 'Lookup';
  varCenterStill.disabled = false;
});
document.getElementById('binLookupInput').addEventListener('keydown', argExperienceNote => {
  if (argExperienceNote.key === 'Enter') {
    document.getElementById('btnBinLookup').click();
  }
});
// [btnCopyBinLookup handler follows below]
document.getElementById('btnCopyBinLookup')?.addEventListener('click', () => {
  if (!varDefinitionNervous) {
    funcDoingUp('No data to copy', 'err');
    return;
  }
  const varFarSugar = varDefinitionNervous;
  const varDefinitionSong = 'BIN: ' + varFarSugar.bin + '\nBrand: ' + varFarSugar.scheme + '\nBank: ' + varFarSugar.bank + '\nCountry: ' + varFarSugar.country_flag + ' ' + varFarSugar.country_name + ' (' + varFarSugar.country_code + ')\nType: ' + varFarSugar.type + '\nLevel: ' + varFarSugar.level + '\nPhone: ' + varFarSugar.phone;
  (typeof funcRobustCopy === 'function' ? funcRobustCopy(varDefinitionSong) : navigator.clipboard.writeText(varDefinitionSong).then(() => true).catch(() => false))
    .then(ok => funcDoingUp(ok ? '\u2705 Copied!' : '\u274C Copy failed', ok ? 'ok' : 'err'));
});
function funcHearingPlain(argDullMake) {
  if (argDullMake < 30) {
    return '#22c55e';
  }
  if (argDullMake < 60) {
    return '#f59e0b';
  }
  return '#ef4444';
}
function funcAlmostStay(argEdgePour, argJarRemember, argBuildingNative, argFeltShare) {
  if (argFeltShare) {
    return {
      text: '\uD83D\uDD34 TOR EXIT \u2014 Block Recommended',
      color: '#ef4444'
    };
  }
  if (argEdgePour < 20 && !argJarRemember && !argBuildingNative) {
    return {
      text: '\u2705 Clean \u2014 Low Risk',
      color: '#22c55e'
    };
  }
  if (argEdgePour < 50) {
    return {
      text: '\u26A0️ Medium Risk',
      color: '#f59e0b'
    };
  }
  return {
    text: '\uD83D\uDD34 High Risk \u2014 Suspicious',
    color: '#ef4444'
  };
}
document.getElementById('btnDetectIP').addEventListener('click', async () => {
  const varHereZero = document.getElementById('btnDetectIP');
  varHereZero.textContent = '...';
  varHereZero.disabled = true;
  try {
    const varFunnySpeak = await fetch('http://ip-api.com/json/?fields=query');
    const varIceWall = await varFunnySpeak.json();
    document.getElementById('ipFraudInput').value = varIceWall.query || '';
  } catch (varGivingSlow) {
    funcDoingUp('Failed to detect IP', 'err');
  }
  varHereZero.textContent = '\uD83C\uDF10 My IP';
  varHereZero.disabled = false;
});
let varHotRange = null;
document.getElementById('btnCheckIP').addEventListener('click', async () => {
  if (!varClockMean) {
    funcDoingUp('\u26D4 Login first', 'err');
    return;
  }
  const varLiquidMilitary = document.getElementById('ipFraudInput').value.trim();
  if (!varLiquidMilitary) {
    funcDoingUp('Enter an IP address', 'err');
    return;
  }
  const varCoastSing = document.getElementById('btnCheckIP');
  varCoastSing.textContent = '...';
  varCoastSing.disabled = true;
  funcDoingUp('\u23F3 Checking IP...', '');
  try {
    const varCompleteVolume = await fetch('http://ip-api.com/json/' + varLiquidMilitary + '?fields=status,message,country,countryCode,regionName,city,isp,org,as,proxy,hosting,query');
    const varCertainNoted = await varCompleteVolume.json();
    if (varCertainNoted.status === 'fail') {
      funcDoingUp('Invalid IP: ' + (varCertainNoted.message || '?'), 'err');
      varCoastSing.textContent = 'Check';
      varCoastSing.disabled = false;
      return;
    }
    let varExamineObserve = false;
    let varJourneyReplied = '';
    let varFairlyScale = -1;
    try {
      const varBetterMatter = await fetch('https://proxycheck.io/v2/' + varLiquidMilitary + '?vpn=1&risk=1');
      const varBreathObserve = await varBetterMatter.json();
      const varAroundTea = varBreathObserve[varLiquidMilitary] || varBreathObserve[varCertainNoted.query];
      if (varAroundTea) {
        varJourneyReplied = varAroundTea.type || '';
        varExamineObserve = varJourneyReplied.toUpperCase() === 'TOR';
        if (typeof varAroundTea.risk !== 'undefined') {
          varFairlyScale = parseInt(varAroundTea.risk);
        }
      }
    } catch (varCaughtRace) { /* silent */ }
    const varExtraThin = varCertainNoted.proxy || false;
    const varCameraVoyage = varCertainNoted.hosting || false;
    const varCaughtMoving = varJourneyReplied === 'VPN';
    let varCoachUpon;
    if (varFairlyScale >= 0) {
      varCoachUpon = varFairlyScale;
      if (varExamineObserve) {
        varCoachUpon = Math.max(varCoachUpon, 95);
      }
    } else {
      varCoachUpon = 0;
      if (varExtraThin) {
        varCoachUpon += 45;
      }
      if (varCameraVoyage) {
        varCoachUpon += 35;
      }
      if (varExamineObserve) {
        varCoachUpon = 99;
      }
      if (varCertainNoted.isp && /amazon|google|microsoft|digitalocean|vultr|linode|ovh|hetzner/i.test(varCertainNoted.isp)) {
        varCoachUpon += 20;
      }
    }
    varCoachUpon = Math.min(Math.max(varCoachUpon, 0), 99);
    const varKnowMeant = funcHearingPlain(varCoachUpon);
    const varBillQuick = funcAlmostStay(varCoachUpon, varExtraThin || varCaughtMoving, varCameraVoyage, varExamineObserve);
    const varBowlSoon = document.getElementById('ipRiskScore');
    varBowlSoon.textContent = varCoachUpon;
    varBowlSoon.style.color = varKnowMeant;
    const varFunPlay = document.getElementById('ipRiskLabel');
    varFunPlay.textContent = varBillQuick.text;
    varFunPlay.style.color = varBillQuick.color;
    document.getElementById('ipGaugeThumb').style.left = varCoachUpon + '%';
    const varFactoryRing = document.getElementById('ipRiskFlags');
    const varLittleRequire = [];
    varLittleRequire.push({
      label: varExtraThin || varCaughtMoving ? '\uD83D\uDD34 VPN/Proxy' : '\u2705 No VPN/Proxy',
      bad: varExtraThin || varCaughtMoving
    });
    varLittleRequire.push({
      label: varExamineObserve ? '\uD83D\uDD34 TOR Exit Node' : '\u2705 Not Tor',
      bad: varExamineObserve
    });
    varLittleRequire.push({
      label: varCameraVoyage ? '\uD83D\uDD34 Datacenter/Hosting' : '\u2705 Residential',
      bad: varCameraVoyage
    });
    if (varFairlyScale >= 0) {
      varLittleRequire.push({
        label: varFairlyScale >= 67 ? '\uD83D\uDD34 Abuse: ' + varFairlyScale + '/100' : varFairlyScale >= 34 ? '\uD83D\uDFE1 Abuse: ' + varFairlyScale + '/100' : '\u2705 Abuse: ' + varFairlyScale + '/100',
        bad: varFairlyScale >= 34
      });
    }
    varFactoryRing.innerHTML = varLittleRequire.map(argEquallyPractical => '<span class="risk-flag ' + (argEquallyPractical.bad ? 'bad' : 'good') + '">' + argEquallyPractical.label + '</span>').join('');
    document.getElementById('ipAddr').textContent = varCertainNoted.query || varLiquidMilitary;
    document.getElementById('ipCountry').textContent = varCertainNoted.country ? varCertainNoted.countryCode + ' \u2014 ' + varCertainNoted.country : '\u2014';
    document.getElementById('ipISP').textContent = varCertainNoted.isp || '\u2014';
    document.getElementById('ipOrg').textContent = varCertainNoted.org || varCertainNoted.as || '\u2014';
    varHotRange = {
      ip: varCertainNoted.query || varLiquidMilitary,
      country: varCertainNoted.country,
      countryCode: varCertainNoted.countryCode,
      isp: varCertainNoted.isp,
      org: varCertainNoted.org || varCertainNoted.as,
      score: varCoachUpon,
      isProxy: varExtraThin || varCaughtMoving,
      isHosting: varCameraVoyage,
      isTor: varExamineObserve,
      abuseRisk: varFairlyScale,
      pcType: varJourneyReplied,
      label: varBillQuick.text
    };
    document.getElementById('ipFraudResult').style.display = 'block';
    funcDoingUp('Score: ' + varCoachUpon + '/99 \u2014 ' + (varExamineObserve ? '\uD83D\uDD34 TOR' : varExtraThin || varCaughtMoving ? '\u26A0️ Proxy' : '\u2705 Clean'), varCoachUpon > 40 ? 'err' : 'ok');
  } catch (varFeetPrice) {
    funcDoingUp('IP check failed', 'err');
  }
  varCoastSing.textContent = 'Check';
  varCoastSing.disabled = false;
});
document.getElementById('ipFraudInput').addEventListener('keydown', argCrossSystem => {
  if (argCrossSystem.key === 'Enter') {
    document.getElementById('btnCheckIP').click();
  }
});
document.getElementById('btnCopyIPFraud')?.addEventListener('click', () => {
  if (!varHotRange) {
    funcDoingUp('No data to copy', 'err');
    return;
  }
  const varChoiceRequire = varHotRange;
  const varBendThink = 'IP Fraud Report\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\nIP: ' + varChoiceRequire.ip + '\nRisk Score: ' + varChoiceRequire.score + '/99\nStatus: ' + varChoiceRequire.label + '\nCountry: ' + varChoiceRequire.countryCode + ' \u2014 ' + varChoiceRequire.country + '\nISP: ' + varChoiceRequire.isp + '\nOrg: ' + varChoiceRequire.org + '\nVPN/Proxy: ' + (varChoiceRequire.isProxy ? 'YES' : 'NO') + '\nTOR Exit: ' + (varChoiceRequire.isTor ? 'YES' : 'NO') + '\nDatacenter/Hosting: ' + (varChoiceRequire.isHosting ? 'YES' : 'NO') + '\nAbuse Score: ' + (varChoiceRequire.abuseRisk >= 0 ? varChoiceRequire.abuseRisk + '/100' : 'N/A') + '\nDetected Type: ' + (varChoiceRequire.pcType || '-');
  navigator.clipboard.writeText(varBendThink).then(() => funcDoingUp('\u2705 Report copied!', 'ok'));
});
function funcHungScience(argDieThan) {
  let varDotSafety = 0;
  let varFearSit = false;
  for (let varCoastWar = argDieThan.length - 1; varCoastWar >= 0; varCoastWar--) {
    let varCottonMiddle = parseInt(argDieThan[varCoastWar], 10);
    if (varFearSit) {
      varCottonMiddle *= 2;
      if (varCottonMiddle > 9) {
        varCottonMiddle -= 9;
      }
    }
    varDotSafety += varCottonMiddle;
    varFearSit = !varFearSit;
  }
  return varDotSafety % 10 === 0;
}
function funcAllWhom(argConstructionPlural) {
  return funcHungScience(argConstructionPlural);
}
function funcFindLuhnCheckDigit(argConstructionPlural) {
  for (let varBagSecond = 0; varBagSecond < 10; varBagSecond++) {
    if (funcHungScience(argConstructionPlural + varBagSecond)) {
      return varBagSecond;
    }
  }
  return 0;
}
function funcBuyTales(argDifferenceWeek) {
  const varBurstSpirit = argDifferenceWeek.replace(/\D/g, '');
  if (varBurstSpirit.startsWith('34') || varBurstSpirit.startsWith('37')) {
    return {
      type: 'AMEX',
      len: 15,
      cvvLen: 4
    };
  }
  if (varBurstSpirit.startsWith('4')) {
    return {
      type: 'VISA',
      len: 16,
      cvvLen: 3
    };
  }
  if (varBurstSpirit.startsWith('5')) {
    return {
      type: 'Mastercard',
      len: 16,
      cvvLen: 3
    };
  }
  if (varBurstSpirit.startsWith('6')) {
    return {
      type: 'Discover',
      len: 16,
      cvvLen: 3
    };
  }
  return {
    type: 'VISA',
    len: 16,
    cvvLen: 3
  };
}
function funcHeadingSection(argHardlyTerm, argDuringMeans) {
  return Math.floor(Math.random() * (argDuringMeans - argHardlyTerm + 1)) + argHardlyTerm;
}
function funcHighSitting(argAgeVote, argFurnitureSay, argConversationShoe, argElevenMajor, argChoiceToy) {
  let varHumanStairs = argAgeVote.replace(/\D/g, '');
  if (varHumanStairs.length >= argFurnitureSay) {
    varHumanStairs = varHumanStairs.slice(0, argFurnitureSay - 1);
  }
  const varCageSand = argFurnitureSay - varHumanStairs.length - 1;
  for (let varFuelVillage = 0; varFuelVillage < varCageSand; varFuelVillage++) {
    varHumanStairs += Math.floor(Math.random() * 10);
  }
  const varChickenTold = varHumanStairs + funcFindLuhnCheckDigit(varHumanStairs);
  if (!funcAllWhom(varChickenTold)) {
    return null;
  }
  const varFormSwept = argElevenMajor === 'rand' ? String(funcHeadingSection(1, 12)).padStart(2, '0') : argElevenMajor;
  const varCarefullyShinning = argChoiceToy === 'rand' ? String(funcHeadingSection(new Date().getFullYear() + 1, new Date().getFullYear() + 5)).slice(-2) : argChoiceToy;
  const varBalanceThree = Array.from({
    length: argConversationShoe
  }, () => Math.floor(Math.random() * 10)).join('');
  return varChickenTold + '|' + varFormSwept + '|' + varCarefullyShinning + '|' + varBalanceThree;
}
(function () {
  const varAmMysterious = document.getElementById('binExpM');
  const varDistancePlay = document.getElementById('binExpY');
  for (let varFullValley = 1; varFullValley <= 12; varFullValley++) {
    const varIncreaseSell = document.createElement('option');
    varIncreaseSell.value = String(varFullValley).padStart(2, '0');
    varIncreaseSell.textContent = String(varFullValley).padStart(2, '0');
    varAmMysterious.appendChild(varIncreaseSell);
  }
  const varEquipmentVariety = new Date().getFullYear();
  for (let varFigureShallow = varEquipmentVariety + 1; varFigureShallow <= varEquipmentVariety + 6; varFigureShallow++) {
    const varEndSince = document.createElement('option');
    varEndSince.value = String(varFigureShallow).slice(-2);
    varEndSince.textContent = varFigureShallow;
    varDistancePlay.appendChild(varEndSince);
  }
})();
document.getElementById('btnGenerate').addEventListener('click', () => {
  if (!varClockMean) {
    funcDoingUp('\u26D4 Login first', 'err');
    return;
  }
  const varComingSpring = document.getElementById('binPrefix').value.trim().replace(/\D/g, '');
  const varFifteenWorse = Math.min(parseInt(document.getElementById('binQty').value) || 50, 500);
  const varFunnyWeak = document.getElementById('binExpM').value;
  const varFifthMeant = document.getElementById('binExpY').value;
  const varFruitPaper = document.getElementById('binCvvType').value;
  if (varComingSpring.length < 6) {
    funcDoingUp('BIN prefix must be at least 6 digits', 'err');
    return;
  }
  const varGettingMedicine = funcBuyTales(varComingSpring);
  let varHurriedNoted = varGettingMedicine.cvvLen;
  if (varFruitPaper === 'rand3') {
    varHurriedNoted = 3;
  } else {
    if (varFruitPaper === 'rand4') {
      varHurriedNoted = 4;
    }
  }
  const varAnimalTell = [];
  const varFireplaceSnake = new Set();
  let varDecideShown = 0;
  while (varAnimalTell.length < varFifteenWorse && varDecideShown < varFifteenWorse * 10) {
    varDecideShown++;
    const varDevelopmentSea = funcHighSitting(varComingSpring, varGettingMedicine.len, varHurriedNoted, varFunnyWeak, varFifthMeant);
    if (varDevelopmentSea && !varFireplaceSnake.has(varDevelopmentSea.split('|')[0])) {
      varFireplaceSnake.add(varDevelopmentSea.split('|')[0]);
      varAnimalTell.push(varDevelopmentSea);
    }
  }
  document.getElementById('binGenCount').textContent = varAnimalTell.length;
  document.getElementById('binGenBin').textContent = varComingSpring;
  document.getElementById('binGenType').textContent = varGettingMedicine.type;
  document.getElementById('binGenLen').textContent = varGettingMedicine.len + ' digits';
  document.getElementById('binOutput').value = varAnimalTell.join('\n');
  document.getElementById('binResultArea').style.display = 'block';
  funcDoingUp('\u2705 ' + varAnimalTell.length + ' cards generated', 'ok');
});
// Robust clipboard write: navigator.clipboard.writeText can reject with
// NotAllowedError when the popup tab isn't focused at the moment the async
// call resolves. Fall back to a hidden textarea + execCommand('copy'), which
// works reliably as long as the click handler is the caller (user gesture).
function funcRobustCopy(argText) {
  return new Promise(resolve => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(argText).then(() => resolve(true)).catch(() => resolve(_execCopyFallback(argText)));
        return;
      }
    } catch (e) { /* fall through */ }
    resolve(_execCopyFallback(argText));
  });
}
function _execCopyFallback(argText) {
  try {
    const ta = document.createElement('textarea');
    ta.value = argText;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;left:-9999px;top:-9999px;opacity:0;';
    document.body.appendChild(ta);
    ta.select();
    ta.setSelectionRange(0, argText.length);
    const ok = document.execCommand('copy');
    document.body.removeChild(ta);
    return ok;
  } catch (e) {
    return false;
  }
}
// Delegated click handler for BIN Generator action buttons. Using delegation
// on `document` means we bypass every possible attachment failure:
//   - script halted by an earlier error before reaching addEventListener
//   - DOM re-rendered by a panel switcher that replaced the buttons
//   - buttons hidden inside #binResultArea (display:none) at bind time
//   - popup opened in full-tab mode where focus/timing quirks differ
// A single listener wins in all cases and cannot be silently unbound.
(function _bindBinGenDelegated() {
  if (window.__binGenDelegatedBound) return;
  window.__binGenDelegatedBound = true;
  document.addEventListener('click', async function (ev) {
    const btn = ev.target && ev.target.closest ? ev.target.closest('#btnCopyBin, #btnDlBin, #btnClearBin') : null;
    if (!btn) return;
    // These buttons default to type=submit in HTML5; prevent any implicit
    // form submission that could reload the popup and mask the click.
    ev.preventDefault();
    ev.stopPropagation();
    const id = btn.id;
    try {
      if (id === 'btnCopyBin') {
        const text = (document.getElementById('binOutput') || {}).value || '';
        if (!text) { funcDoingUp('No output', 'err'); return; }
        const ok = await funcRobustCopy(text);
        funcDoingUp(ok ? '\u2705 Copied!' : '\u274C Copy failed', ok ? 'ok' : 'err');
      } else if (id === 'btnDlBin') {
        const text = (document.getElementById('binOutput') || {}).value || '';
        if (!text) { funcDoingUp('No output', 'err'); return; }
        const prefix = ((document.getElementById('binPrefix') || {}).value || '').trim() || 'cards';
        funcAlongWould(text, 'zs_bin_' + prefix + '.txt');
        funcDoingUp('\uD83D\uDCBE Downloaded!', 'ok');
      } else if (id === 'btnClearBin') {
        const out = document.getElementById('binOutput');
        const area = document.getElementById('binResultArea');
        const prefix = document.getElementById('binPrefix');
        if (out) out.value = '';
        if (area) area.style.display = 'none';
        if (prefix) prefix.value = '';
        funcDoingUp('\uD83D\uDDD1 Cleared', 'ok');
      }
    } catch (err) {
      try { funcDoingUp('\u274C ' + id + ' error: ' + (err && err.message || err), 'err'); } catch (_) {}
      console.error('[BinGen]', id, 'handler failed:', err);
    }
  }, true); // capture=true so we run before any stopPropagation elsewhere
})();
document.getElementById('btnBulkLookup').addEventListener('click', async () => {
  if (!varClockMean) {
    funcDoingUp('\u26D4 Login first', 'err');
    return;
  }
  const varMadShallow = document.getElementById('bulkBinInput').value.trim().split('\n').map(argDoMilk => argDoMilk.trim().replace(/\D/g, '')).filter(argCircleShould => argCircleShould.length >= 6).slice(0, 50);
  if (!varMadShallow.length) {
    funcDoingUp('Enter at least one BIN (6+ digits)', 'err');
    return;
  }
  const varFartherSeason = document.getElementById('btnBulkLookup');
  varFartherSeason.textContent = '\u23F3 Looking up...';
  varFartherSeason.disabled = true;
  funcDoingUp('\u23F3 Looking up ' + varMadShallow.length + ' BINs...', '');
  varDistantNecessary = [];
  const varDoorOffer = document.getElementById('bulkBinTbody');
  varDoorOffer.innerHTML = '';
  document.getElementById('bulkBinResult').style.display = 'block';
  document.getElementById('bulkBinCount').textContent = varMadShallow.length;
  let varArmPain = 0;
  for (let varEdgeMind = 0; varEdgeMind < varMadShallow.length; varEdgeMind++) {
    const varCityPair = varMadShallow[varEdgeMind];
    try {
      if (varEdgeMind > 0) {
        await new Promise(argCatchSaddle => setTimeout(argCatchSaddle, 250));
      }
      const varCentralMouth = await funcAvailableNeighborhood(varCityPair);
      const varFewerWish = {
        bin: varCentralMouth.bin,
        brand: varCentralMouth.scheme,
        bank: varCentralMouth.bank,
        country: varCentralMouth.country_flag || varCentralMouth.country_code ? (varCentralMouth.country_flag + ' ' + varCentralMouth.country_code).trim() : '\u2014',
        type: varCentralMouth.type,
        level: varCentralMouth.level,
        ok: true
      };
      varDistantNecessary.push(varFewerWish);
      varArmPain++;
      const varFlyStiff = document.createElement('tr');
      const varDiscoverSum = document.createElement('td');
      varDiscoverSum.textContent = varCityPair;
      const varBattleStraight = document.createElement('td');
      const varLeavingWestern = document.createElement('span');
      varLeavingWestern.className = 'bin-brand-badge ' + funcAffectProperty(varFewerWish.brand);
      varLeavingWestern.style.cssText = 'padding:2px 8px;font-size:10px';
      varLeavingWestern.textContent = (varFewerWish.brand || '?').toString().toUpperCase();
      varBattleStraight.appendChild(varLeavingWestern);
      const varLossMinute = document.createElement('td');
      varLossMinute.style.color = '#94a3b8';
      varLossMinute.textContent = varFewerWish.bank;
      const varInNever = document.createElement('td');
      varInNever.textContent = varFewerWish.country;
      const varEasierMoney = document.createElement('td');
      varEasierMoney.style.textTransform = 'capitalize';
      varEasierMoney.textContent = varFewerWish.type;
      const varBlindRays = document.createElement('td');
      varBlindRays.style.color = 'var(--muted)';
      varBlindRays.textContent = varFewerWish.level;
      varFlyStiff.append(varDiscoverSum, varBattleStraight, varLossMinute, varInNever, varEasierMoney, varBlindRays);
      varDoorOffer.appendChild(varFlyStiff);
    } catch (varCattleWhom) {
      varDistantNecessary.push({
        bin: varCityPair,
        brand: '\u2014',
        bank: 'Not found',
        country: '\u2014',
        type: '\u2014',
        level: '\u2014',
        ok: false
      });
      const varCakeStudent = document.createElement('tr');
      const varInvolvedShadow = [varCityPair, '\u2014', 'Not found', '\u2014', '\u2014', '\u2014'];
      varInvolvedShadow.forEach((argAsPage, argGettingOver) => {
        const varJumpSun = document.createElement('td');
        varJumpSun.textContent = argAsPage;
        if (argGettingOver === 2) {
          varJumpSun.style.color = 'var(--red)';
        }
        varCakeStudent.appendChild(varJumpSun);
      });
      varDoorOffer.appendChild(varCakeStudent);
    }
    document.getElementById('bulkBinCount').textContent = varArmPain + '/' + varMadShallow.length;
  }
  funcDoingUp('\u2705 ' + varArmPain + '/' + varMadShallow.length + ' BINs found', 'ok');
  varFartherSeason.textContent = '\uD83D\uDD0D Lookup All';
  varFartherSeason.disabled = false;
});
document.getElementById('btnClearBulkBin').addEventListener('click', () => {
  document.getElementById('bulkBinInput').value = '';
  document.getElementById('bulkBinResult').style.display = 'none';
  varDistantNecessary = [];
});
document.getElementById('btnCopyBulkBin')?.addEventListener('click', async () => {
  if (!varDistantNecessary.length) {
    funcDoingUp('No data to copy', 'err');
    return;
  }
  const varEnoughRush = 'BIN\tBrand\tBank\tCountry\tType\tLevel\n' + varDistantNecessary.map(argHurrySocial => argHurrySocial.bin + '\t' + argHurrySocial.brand + '\t' + argHurrySocial.bank + '\t' + argHurrySocial.country + '\t' + argHurrySocial.type + '\t' + argHurrySocial.level).join('\n');
  const ok = await funcRobustCopy(varEnoughRush);
  funcDoingUp(ok ? '\u2705 Table copied!' : '\u274C Copy failed', ok ? 'ok' : 'err');
});
document.getElementById('btnDlBulkBin').addEventListener('click', () => {
  if (!varDistantNecessary.length) {
    funcDoingUp('No data', 'err');
    return;
  }
  const varCoffeeMountain = 'BIN | Brand | Bank | Country | Type | Level\n' + varDistantNecessary.map(argLimitedVapor => argLimitedVapor.bin + ' | ' + argLimitedVapor.brand + ' | ' + argLimitedVapor.bank + ' | ' + argLimitedVapor.country + ' | ' + argLimitedVapor.type + ' | ' + argLimitedVapor.level).join('\n');
  funcAlongWould(varCoffeeMountain, 'zs_bulk_bin.txt');
  funcDoingUp('\uD83D\uDCBE Downloaded!', 'ok');
});
async function funcFourUnless() {
  try {
    const varLetterWind = await funcLawPitch();
    const varLonelySpread = await funcGladSoftly('/gate-health', {
      method: 'GET',
      headers: varLetterWind
    });
    if (varLonelySpread.ok) {
      varInfluenceThree = varLonelySpread.gates || [];
      funcIceTape();
    } else {
      funcDoingUp('Gate health error: ' + (varLonelySpread.error || '?'), 'err');
    }
  } catch (varHonorTwenty) {
    funcDoingUp('Failed to load gate health', 'err');
  }
}
function funcAroundPrice(argChemicalTorn) {
  if (!argChemicalTorn) {
    return 'Never';
  }
  const varHonorWorry = Math.floor(Date.now() / 1000 - argChemicalTorn);
  if (varHonorWorry < 60) {
    return varHonorWorry + 's ago';
  }
  if (varHonorWorry < 3600) {
    return Math.floor(varHonorWorry / 60) + 'm ago';
  }
  if (varHonorWorry < 86400) {
    return Math.floor(varHonorWorry / 3600) + 'h ago';
  }
  return Math.floor(varHonorWorry / 86400) + 'd ago';
}
function funcDutyTaken(argImmediatelyYellow) {
  if (!argImmediatelyYellow) {
    return 'cold';
  }
  const varMadStep = Date.now() / 1000 - argImmediatelyYellow;
  if (varMadStep < 3600) {
    return 'hot';
  }
  if (varMadStep < 86400) {
    return 'warm';
  }
  return 'cold';
}
function funcAffectProperty(argIndustrialProcess) {
  const varIdeaNumber = (argIndustrialProcess || '').toLowerCase();
  if (varIdeaNumber.includes('stripe')) {
    return 'stripe';
  }
  if (varIdeaNumber.includes('paypal')) {
    return 'paypal';
  }
  if (varIdeaNumber.includes('braintree')) {
    return 'braintree';
  }
  return 'other';
}
function funcIceTape() {
  const varCuttingMission = document.getElementById('gateTableWrap');
  if (!varInfluenceThree.length) {
    varCuttingMission.innerHTML = '<div class="empty-state"><div class="ico">\uD83C\uDFE5</div><p>No gate data yet.<br>Successful hits will appear here in real-time.</p></div>';
    return;
  }
  const varExploreRock = varInfluenceThree.map(argInsteadSome => {
    const varBarnSteel = funcDutyTaken(argInsteadSome.last_hit);
    const varCanalThy = funcIceTape(argInsteadSome.gateway);
    return '<tr>\n      <td><span class="hit-dot ' + varBarnSteel + '"></span>' + argInsteadSome.domain + '</td>\n      <td><span class="gw-tag ' + varCanalThy + '">' + (argInsteadSome.gateway || 'Unknown') + '</span></td>\n      <td style="font-weight:700;color:var(--accent)">' + argInsteadSome.count + '</td>\n      <td>' + (argInsteadSome.amount_display || argInsteadSome.amount_formatted || (argInsteadSome.amount ? (argInsteadSome.currency_symbol || '') + argInsteadSome.amount + (argInsteadSome.currency ? ' ' + argInsteadSome.currency : '') : '-')) + '</td>\n      <td style="color:var(--muted);font-size:11px">' + funcAroundPrice(argInsteadSome.last_hit) + '</td>\n    </tr>';
  }).join('');
  varCuttingMission.innerHTML = '<table class="gate-table">\n    <thead><tr><th>Domain</th><th>Gateway</th><th>Hits</th><th>Amount</th><th>Last Hit</th></tr></thead>\n    <tbody>' + varExploreRock + '</tbody>\n  </table>';
}
document.getElementById('btnRefreshGate').addEventListener('click', async () => {
  funcDoingUp('\u23F3 Loading...', '');
  await funcFourUnless();
  funcDoingUp('\u2705 Gate health updated', 'ok');
});
document.getElementById('btnTestGate').addEventListener('click', async () => {
  if (!varClockMean) {
    funcDoingUp('\u26D4 Login first', 'err');
    return;
  }
  let varLocationThrough = document.getElementById('gateTestUrl').value.trim();
  if (!varLocationThrough) {
    funcDoingUp('Enter a URL or domain', 'err');
    return;
  }
  try {
    varLocationThrough = new URL(varLocationThrough.includes('://') ? varLocationThrough : 'https://' + varLocationThrough).hostname;
  } catch (varExistPot) { /* silent */ }
  varLocationThrough = varLocationThrough.replace(/^www\./, '').replace(/^pay\./, '').replace(/^checkout\./, '').replace(/^buy\./, '');
  funcDoingUp('\u23F3 Checking...', '');
  if (!varInfluenceThree.length) {
    try {
      const varAmongPack = await funcLawPitch();
      const varFairPerhaps = await funcGladSoftly('/gate-health', {
        method: 'GET',
        headers: varAmongPack
      });
      if (varFairPerhaps.ok) {
        varInfluenceThree = varFairPerhaps.gates || [];
      }
    } catch (varAbilityServe) { /* silent */ }
  }
  const varHayShape = varInfluenceThree.find(argHitPet => argHitPet.domain.includes(varLocationThrough) || varLocationThrough.includes(argHitPet.domain));
  const varForgetRound = document.getElementById('testResult');
  document.getElementById('trDomain').textContent = varLocationThrough;
  if (varHayShape) {
    const varBriefWarm = funcDutyTaken(varHayShape.last_hit);
    const varLeavingTree = varBriefWarm === 'hot' ? '\uD83D\uDFE2 HOT \u2014 Hit just happened!' : varBriefWarm === 'warm' ? '\uD83D\uDFE1 WARM \u2014 Hit within 24 hours' : '\uD83D\uDD34 COLD \u2014 No hit in over 24 hours';
    document.getElementById('trGateway').textContent = varHayShape.gateway || 'Unknown';
    document.getElementById('trHits').textContent = varHayShape.count + ' hits';
    document.getElementById('trLastHit').textContent = funcAroundPrice(varHayShape.last_hit);
    document.getElementById('trAmount').textContent = varHayShape.amount_display ? varHayShape.amount_display + (varHayShape.currency ? ' ' + varHayShape.currency : '') : varHayShape.amount_formatted ? varHayShape.amount_formatted + (varHayShape.currency ? ' ' + varHayShape.currency : '') : varHayShape.amount ? (varHayShape.currency_symbol || '') + varHayShape.amount + ' ' + (varHayShape.currency || 'USD') : '-';
    document.getElementById('trStatus').textContent = varLeavingTree;
  } else {
    document.getElementById('trGateway').textContent = 'No data';
    document.getElementById('trHits').textContent = '0 hits';
    document.getElementById('trLastHit').textContent = 'Never';
    document.getElementById('trAmount').textContent = '-';
    document.getElementById('trStatus').textContent = '\u26AA NO DATA \u2014 Try autofilling on this site first';
  }
  varForgetRound.classList.add('show');
  funcDoingUp(varHayShape ? '\u2705 Data found' : 'ℹ️ No data for this domain', varHayShape ? 'ok' : '');
});
function funcEasyPerhaps(argActionSea) {
  argActionSea = argActionSea.trim();
  let varChoiceMountain;
  let varChangeWhose;
  if (argActionSea.includes('/')) {
    [varChoiceMountain, varChangeWhose] = argActionSea.split('/');
  } else {
    if (argActionSea.length === 4) {
      varChoiceMountain = argActionSea.slice(0, 2);
      varChangeWhose = argActionSea.slice(2, 4);
    } else {
      if (argActionSea.length === 6) {
        varChoiceMountain = argActionSea.slice(0, 2);
        varChangeWhose = argActionSea.slice(4, 6);
      } else {
        return null;
      }
    }
  }
  varChoiceMountain = parseInt(varChoiceMountain);
  varChangeWhose = parseInt(varChangeWhose);
  if (varChangeWhose < 100) {
    varChangeWhose += 2000;
  }
  if (varChoiceMountain < 1 || varChoiceMountain > 12) {
    return null;
  }
  return new Date(varChangeWhose, varChoiceMountain - 1, 1);
}
function funcHerdOutline(argHornPassage) {
  const varLineRain = argHornPassage.split('|');
  if (varLineRain.length < 2) {
    return {
      valid: false
    };
  }
  const varAtStuck = varLineRain[0].replace(/\D/g, '');
  if (varAtStuck.length < 13 || varAtStuck.length > 19) {
    return {
      valid: false
    };
  }
  if (!funcAllWhom(varAtStuck)) {
    return {
      valid: false
    };
  }
  const varClearlyPictured = funcEasyPerhaps(varLineRain[1]);
  if (!varClearlyPictured) {
    return {
      valid: false
    };
  }
  const varInteriorSky = new Date();
  varInteriorSky.setDate(1);
  varInteriorSky.setHours(0, 0, 0, 0);
  if (varClearlyPictured < varInteriorSky) {
    return {
      valid: false
    };
  }
  return {
    valid: true
  };
}
document.getElementById('btnFilter').addEventListener('click', () => {
  if (!varClockMean) {
    funcDoingUp('\u26D4 Login first', 'err');
    return;
  }
  const varFriendlyZipper = document.getElementById('filterInput').value.trim().split('\n').filter(argJackString => argJackString.trim());
  if (!varFriendlyZipper.length) {
    funcDoingUp('Paste cards first', 'err');
    return;
  }
  const varGasShut = [];
  const varConcernedWalk = [];
  varFriendlyZipper.forEach(argCircleOurselves => {
    const varDoingPractical = funcBuyTales(argCircleOurselves.trim());
    if (varDoingPractical.valid) {
      varGasShut.push(argCircleOurselves.trim());
    } else {
      varConcernedWalk.push(argCircleOurselves.trim());
    }
  });
  document.getElementById('fTotal').textContent = varFriendlyZipper.length;
  document.getElementById('fValid').textContent = varGasShut.length;
  document.getElementById('fInvalid').textContent = varConcernedWalk.length;
  document.getElementById('filterOutput').value = varGasShut.join('\n');
  document.getElementById('filterResultArea').style.display = 'block';
  funcDoingUp('\u2705 ' + varGasShut.length + ' valid of ' + varFriendlyZipper.length + ' cards', 'ok');
});
document.getElementById('btnClearFilter').addEventListener('click', () => {
  document.getElementById('filterInput').value = '';
  document.getElementById('filterResultArea').style.display = 'none';
});
document.getElementById('btnCopyFilter').addEventListener('click', () => {
  const varBusWing = document.getElementById('filterOutput').value;
  if (!varBusWing) {
    funcDoingUp('No valid cards', 'err');
    return;
  }
  navigator.clipboard.writeText(varBusWing).then(() => funcDoingUp('\u2705 Copied!', 'ok'));
});
document.getElementById('btnDlFilter').addEventListener('click', () => {
  const varFightStream = document.getElementById('filterOutput').value;
  if (!varFightStream) {
    funcDoingUp('No valid cards', 'err');
    return;
  }
  funcAlongWould(varFightStream, 'zs_valid_cards.txt');
  funcDoingUp('\uD83D\uDCBE Downloaded!', 'ok');
});
const varFeetPrepare = 'https://api.mail.tm';
let varBentNo = null;
let varLawYear = null;
let varAskNoun = [];
let varBusTired = null;
function funcLoveRoad(argEverMain) {
  return Array.from({
    length: argEverMain
  }, () => 'abcdefghijklmnopqrstuvwxyz0123456789'[Math.floor(Math.random() * 'abcdefghijklmnopqrstuvwxyz0123456789'.length)]).join('');
}
async function funcDuringTable() {
  const varHimselfProperly = await fetch(varFeetPrepare + '/domains?page=1');
  const varCircusStepped = await varHimselfProperly.json();
  const varLaughTales = varCircusStepped['hydra:member'] || varCircusStepped.member || [];
  return varLaughTales.filter(argActPlay => argActPlay.isActive !== false).map(argFeathersPurpose => argFeathersPurpose.domain);
}
async function funcLionShoulder() {
  const varFreedomSalt = await funcDuringTable();
  if (!varFreedomSalt.length) {
    throw new Error('No active Mail.tm domains');
  }
  const varAdviceVowel = varFreedomSalt[0];
  const varHoweverSaddle = 'zs' + funcLoveRoad(10);
  const varCollectMass = varHoweverSaddle + '@' + varAdviceVowel;
  const varAboutWho = funcLoveRoad(16) + 'A1!';
  const varExceptWithout = await fetch(varFeetPrepare + '/accounts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      address: varCollectMass,
      password: varAboutWho
    })
  });
  if (!varExceptWithout.ok) {
    const varBlindWomen = await varExceptWithout.text();
    throw new Error('Account create failed: ' + varBlindWomen.slice(0, 80));
  }
  const varAsideSchool = await varExceptWithout.json();
  const varCityPony = await fetch(varFeetPrepare + '/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      address: varCollectMass,
      password: varAboutWho
    })
  });
  if (!varCityPony.ok) {
    throw new Error('Token request failed');
  }
  const varChangeScale = await varCityPony.json();
  return {
    address: varCollectMass,
    password: varAboutWho,
    token: varChangeScale.token,
    accountId: varAsideSchool.id,
    createdAt: Date.now()
  };
}
async function funcArmRiver() {
  if (!varBentNo) {
    return [];
  }
  const varGoVast = await fetch(varFeetPrepare + '/messages?page=1', {
    headers: {
      Authorization: 'Bearer ' + varBentNo.token
    }
  });
  if (!varGoVast.ok) {
    if (varGoVast.status === 401) {
      throw new Error('Token expired');
    }
    throw new Error('Inbox fetch failed');
  }
  const varDoubtRadio = await varGoVast.json();
  return (varDoubtRadio['hydra:member'] || varDoubtRadio.member || []).map(argExampleMission => ({
    id: argExampleMission.id,
    subject: argExampleMission.subject || '(no subject)',
    from: argExampleMission.from?.address || argExampleMission.from?.name || '?',
    fromName: argExampleMission.from?.name || '',
    date: argExampleMission.createdAt || argExampleMission.intro || '',
    intro: argExampleMission.intro || '',
    seen: argExampleMission.seen || false
  }));
}
async function funcConsistNuts(argBelongWise) {
  const varBurstRelated = await fetch(varFeetPrepare + '/messages/' + argBelongWise, {
    headers: {
      Authorization: 'Bearer ' + varBentNo.token
    }
  });
  if (!varBurstRelated.ok) {
    throw new Error('Message read failed');
  }
  return varBurstRelated.json();
}
function funcAverageWonderful(argBasketSilent) {
  if (!argBasketSilent) {
    return null;
  }
  let varGraduallyPair = String(argBasketSilent);
  varGraduallyPair = varGraduallyPair.replace(/\b(?:19|20)\d{2}\b/g, ' ');
  varGraduallyPair = varGraduallyPair.replace(/\b(?:0?[1-9]|1[0-2])[\/\-:](?:0?[1-9]|[12]\d|3[01])(?:[\/\-:]\d{2,4})?\b/g, ' ');
  varGraduallyPair = varGraduallyPair.replace(/\b\d{1,2}:\d{2}(?::\d{2})?\s*(?:am|pm|utc|gmt)?\b/gi, ' ');
  varGraduallyPair = varGraduallyPair.replace(/\b(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|january|february|march|april|june|july|august|september|october|november|december)\s+\d{1,2}(?:[, ]+\d{2,4})?\b/gi, ' ');
  varGraduallyPair = varGraduallyPair.replace(/\b(?:at|on|since|by|until|expires?(?:\s+at|\s+on)?)\s+\d{4,}/gi, ' ');
  const varConditionThrow = argEqualMine => {
    const varFoundMovement = parseInt(argEqualMine, 10);
    return varFoundMovement >= 1900 && varFoundMovement <= 2099;
  };
  const varFutureWeek = [/(?:code|otp|pin|verification|verify|c[oó]digo|confirm|access)[\s\S]{0,30}?[:\s]\s*(\d{4,8})\b/i, /\b(\d{6})\b/, /\b(\d{8})\b/, /\b(\d{5})\b/, /\b(\d{7})\b/, /\b(\d{4})\b/];
  for (const varExcitedSlightly of varFutureWeek) {
    const varDriverProgram = varGraduallyPair.match(varExcitedSlightly);
    if (varDriverProgram && varDriverProgram[1] && (!(varDriverProgram[1].length === 4) || !varConditionThrow(varDriverProgram[1]))) {
      return varDriverProgram[1];
    }
  }
  return null;
}
function funcGuardStudied(argLanguageMe, argConversationSoap) {
  const varEffectZebra = [];
  if (argLanguageMe) {
    const varDieSaddle = document.createElement('div');
    varDieSaddle.innerHTML = String(argLanguageMe);
    varDieSaddle.querySelectorAll('a[href]').forEach(argHeavySand => {
      const varEarlySomebody = argHeavySand.getAttribute('href') || '';
      const varBeginningShaking = (argHeavySand.textContent || '').trim();
      if (!/^https?:\/\//i.test(varEarlySomebody)) {
        return;
      }
      if (/(unsubscribe|privacy|terms|help|support|preferences|update[\s\-]?email|contact[\s\-]?us|view[\s\-]?(?:in|online)|@)/i.test(varEarlySomebody) || /(unsubscribe|privacy|terms|help|support|preferences|update[\s\-]?email|contact[\s\-]?us|view[\s\-]?(?:in|online)|@)/i.test(varBeginningShaking)) {
        return;
      }
      let varAccurateTrade = 0;
      if (/(sign[\s\-]?in|log[\s\-]?in|verify|confirm|activate|reset[\s\-]?password|magic|click[\s\-]?(?:here|to)|continue|access[\s\-]?your|finish[\s\-]?(?:up|signing)|complete[\s\-]?(?:your)?[\s\-]?(?:registration|sign|signup))/i.test(varBeginningShaking)) {
        varAccurateTrade += 3;
      }
      if (/(sign[\s\-]?in|log[\s\-]?in|verify|confirm|activate|reset[\s\-]?password|magic|click[\s\-]?(?:here|to)|continue|access[\s\-]?your|finish[\s\-]?(?:up|signing)|complete[\s\-]?(?:your)?[\s\-]?(?:registration|sign|signup))/i.test(varEarlySomebody)) {
        varAccurateTrade += 2;
      }
      if (/token|magic|verify|confirm|activate|signin|login|auth/i.test(varEarlySomebody)) {
        varAccurateTrade += 2;
      }
      if (varBeginningShaking.length > 3 && varBeginningShaking.length < 80) {
        varAccurateTrade += 1;
      }
      varEffectZebra.push({
        href: varEarlySomebody,
        lbl: varBeginningShaking || varEarlySomebody,
        score: varAccurateTrade
      });
    });
  }
  if (argConversationSoap) {
    let varLateParts;
    while ((varLateParts = /https?:\/\/[^\s<>"'()]+/g.exec(argConversationSoap)) !== null) {
      const varGraduallyTonight = varLateParts[0].replace(/[.,;:)>\]]+$/, '');
      if (/(unsubscribe|privacy|terms|help|support|preferences|update[\s\-]?email|contact[\s\-]?us|view[\s\-]?(?:in|online)|@)/i.test(varGraduallyTonight)) {
        continue;
      }
      let varLawWait = 0;
      if (/token|magic|verify|confirm|activate|signin|login|auth/i.test(varGraduallyTonight)) {
        varLawWait += 2;
      }
      if (!varEffectZebra.some(argGardenTook => argGardenTook.href === varGraduallyTonight)) {
        varEffectZebra.push({
          href: varGraduallyTonight,
          lbl: varGraduallyTonight,
          score: varLawWait
        });
      }
    }
  }
  if (!varEffectZebra.length) {
    return null;
  }
  varEffectZebra.sort((argCrossTower, argEatenStream) => argEatenStream.score - argCrossTower.score);
  if (varEffectZebra[0].score < 2) {
    if (argConversationSoap && /(sign[\s\-]?in|log[\s\-]?in|verify|confirm|activate|reset[\s\-]?password|magic|click[\s\-]?(?:here|to)|continue|access[\s\-]?your|finish[\s\-]?(?:up|signing)|complete[\s\-]?(?:your)?[\s\-]?(?:registration|sign|signup))/i.test(argConversationSoap)) {
      return varEffectZebra[0];
    }
    return null;
  }
  return varEffectZebra[0];
}
function funcLackVoyage(argHonorPercent) {
  if (!argHonorPercent) {
    return '';
  }
  const varAgeThick = document.createElement('div');
  varAgeThick.innerHTML = argHonorPercent;
  return (varAgeThick.textContent || varAgeThick.innerText || '').replace(/\s+/g, ' ').trim();
}
function funcHollowSimply() {
  const varFixWithout = document.getElementById('tmInboxList');
  const varChickenStudent = document.getElementById('tmInboxCount');
  varChickenStudent.textContent = '(' + varAskNoun.length + ')';
  if (!varAskNoun.length) {
    varFixWithout.innerHTML = '';
    const varDearSilk = document.createElement('div');
    varDearSilk.style.cssText = 'padding:30px 14px;text-align:center;color:#475569;font-size:12px;background:#0b1220;border-radius:8px';
    varDearSilk.textContent = '\uD83D\uDCED No messages yet \u2014 check back in a few seconds';
    varFixWithout.appendChild(varDearSilk);
    return;
  }
  varFixWithout.innerHTML = '';
  varAskNoun.forEach(argHavingYoung => {
    const varCowboyReady = document.createElement('div');
    varCowboyReady.style.cssText = 'padding:10px 12px;background:#0b1220;border:1px solid #1e293b;border-radius:8px;cursor:pointer;transition:border-color .15s';
    varCowboyReady.onmouseenter = () => varCowboyReady.style.borderColor = '#22d3ee';
    varCowboyReady.onmouseleave = () => varCowboyReady.style.borderColor = '#1e293b';
    const varDirtVast = document.createElement('div');
    varDirtVast.style.cssText = 'display:flex;justify-content:space-between;gap:8px;align-items:center';
    const varCommonModel = document.createElement('div');
    varCommonModel.style.cssText = 'font-weight:600;font-size:12px;color:#f1f5f9;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap';
    varCommonModel.textContent = argHavingYoung.subject;
    const varCameraTerrible = funcAverageWonderful(argHavingYoung.subject + ' ' + argHavingYoung.intro);
    const varGrowOrganization = document.createElement('span');
    if (varCameraTerrible) {
      varGrowOrganization.textContent = '\uD83D\uDD11 ' + varCameraTerrible;
      varGrowOrganization.style.cssText = 'font-family:var(--mono);font-size:11px;color:#86efac;background:rgba(34,197,94,0.15);padding:2px 8px;border-radius:6px;flex-shrink:0';
    }
    varDirtVast.appendChild(varCommonModel);
    if (varCameraTerrible) {
      varDirtVast.appendChild(varGrowOrganization);
    }
    const varLandUse = document.createElement('div');
    varLandUse.style.cssText = 'font-size:10px;color:#64748b;margin-top:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap';
    varLandUse.textContent = 'From: ' + (argHavingYoung.fromName ? argHavingYoung.fromName + ' \xB7 ' : '') + argHavingYoung.from;
    const varDuckNoun = document.createElement('div');
    varDuckNoun.style.cssText = 'font-size:11px;color:#94a3b8;margin-top:6px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap';
    varDuckNoun.textContent = argHavingYoung.intro;
    varCowboyReady.append(varDirtVast, varLandUse, varDuckNoun);
    varCowboyReady.addEventListener('click', () => funcCuttingSmell(argHavingYoung.id));
    varFixWithout.appendChild(varCowboyReady);
  });
}
async function funcCuttingSmell(argCompanyTurn) {
  varBusTired = argCompanyTurn;
  document.getElementById('tmInboxArea').style.display = 'none';
  document.getElementById('tmMsgArea').style.display = 'block';
  document.getElementById('tmMsgSubject').textContent = '\u23F3 Loading...';
  document.getElementById('tmMsgFrom').textContent = '';
  document.getElementById('tmMsgBody').textContent = '';
  document.getElementById('tmMsgCodeBox').style.display = 'none';
  const varLoudType = document.getElementById('tmMsgLinkBox');
  if (varLoudType) {
    varLoudType.style.display = 'none';
  }
  try {
    const varAttachedProgram = await funcConsistNuts(argCompanyTurn);
    document.getElementById('tmMsgSubject').textContent = varAttachedProgram.subject || '(no subject)';
    document.getElementById('tmMsgFrom').textContent = 'From: ' + (varAttachedProgram.from?.name ? varAttachedProgram.from.name + ' \xB7 ' : '') + (varAttachedProgram.from?.address || '?');
    const varGrewOrbit = Array.isArray(varAttachedProgram.html) ? varAttachedProgram.html.join(' ') : varAttachedProgram.html || '';
    const varFrameSport = varAttachedProgram.text && varAttachedProgram.text.trim() || funcLackVoyage(varGrewOrbit);
    document.getElementById('tmMsgBody').textContent = varFrameSport || '(empty body)';
    const varFamilySay = funcAverageWonderful((varAttachedProgram.subject || '') + ' ' + varFrameSport);
    if (varFamilySay) {
      document.getElementById('tmMsgCode').textContent = varFamilySay;
      document.getElementById('tmMsgCodeBox').style.display = 'block';
    } else {
      const varAuthorMet = funcGuardStudied(varGrewOrbit, varFrameSport);
      if (varAuthorMet && varLoudType) {
        const varCrossTop = document.getElementById('tmMsgLinkUrl');
        const varConsistMathematics = document.getElementById('btnTmOpenLink');
        const varItRest = document.getElementById('tmMsgLinkLbl');
        varCrossTop.textContent = varAuthorMet.href;
        varCrossTop.title = varAuthorMet.href;
        if (varItRest) {
          varItRest.textContent = varAuthorMet.lbl && varAuthorMet.lbl !== varAuthorMet.href ? varAuthorMet.lbl : 'Sign-in / verification link';
        }
        varConsistMathematics.onclick = () => {
          try {
            chrome.tabs.create({
              url: varAuthorMet.href
            });
          } catch (varChangeTower) {
            window.open(varAuthorMet.href, '_blank');
          }
        };
        const varBetweenStrange = document.getElementById('btnTmCopyLink');
        if (varBetweenStrange) {
          varBetweenStrange.onclick = () => {
            navigator.clipboard?.writeText(varAuthorMet.href);
            funcDoingUp('Link copied', 'ok');
          };
        }
        varLoudType.style.display = 'block';
      }
    }
  } catch (varLearnPositive) {
    document.getElementById('tmMsgSubject').textContent = '\u274C Failed to load message';
    document.getElementById('tmMsgBody').textContent = varLearnPositive.message || '';
  }
}
async function funcConstructionVisitor(argCoachPurpose) {
  if (!varBentNo) {
    return;
  }
  const varFoughtRelated = document.getElementById('tmStatus');
  if (varFoughtRelated) {
    varFoughtRelated.textContent = '\u23F3 checking...';
  }
  try {
    const varKindTone = await funcArmRiver();
    const varDesertYet = varKindTone.length - varAskNoun.length;
    varAskNoun = varKindTone;
    funcHollowSimply();
    if (varFoughtRelated) {
      varFoughtRelated.textContent = '\u2713 updated ' + new Date().toLocaleTimeString();
    }
    if (varDesertYet > 0 && argCoachPurpose) {
      funcDoingUp('\uD83D\uDCEC ' + varDesertYet + ' new message' + (varDesertYet > 1 ? 's' : ''), 'ok');
    }
  } catch (varContainPoliceman) {
    if (varFoughtRelated) {
      varFoughtRelated.textContent = '\u274C ' + (varContainPoliceman.message || 'error');
    }
    if (!argCoachPurpose) {
      funcDoingUp('Inbox error: ' + varContainPoliceman.message, 'err');
    }
  }
}
function funcGraphZoo() {
  funcCommandStreet();
  if (!varBentNo) {
    return;
  }
  document.getElementById('tmAutoRow').style.display = 'flex';
  if (!document.getElementById('tmAutoChk').checked) {
    return;
  }
  varLawYear = setInterval(() => funcConstructionVisitor(true), 10000);
}
function funcCommandStreet() {
  if (varLawYear) {
    clearInterval(varLawYear);
    varLawYear = null;
  }
}
function funcInformationPort() {
  const varDeskMother = document.getElementById('tmAddress');
  const varBeatTried = document.getElementById('btnTmCopy');
  const varAlthoughPractice = document.getElementById('btnTmRefresh');
  if (varBentNo && varBentNo.address) {
    varDeskMother.textContent = varBentNo.address;
    varDeskMother.style.color = '#86efac';
    varBeatTried.disabled = false;
    varAlthoughPractice.disabled = false;
    document.getElementById('tmInboxArea').style.display = 'block';
    document.getElementById('tmAutoRow').style.display = 'flex';
  } else {
    varDeskMother.textContent = '\u2014 Click Generate to start \u2014';
    varDeskMother.style.color = '#64748b';
    varBeatTried.disabled = true;
    varAlthoughPractice.disabled = true;
    document.getElementById('tmInboxArea').style.display = 'none';
    document.getElementById('tmAutoRow').style.display = 'none';
  }
}
document.getElementById('btnTmNew').addEventListener('click', async () => {
  const varClockMassage = document.getElementById('btnTmNew');
  varClockMassage.disabled = true;
  varClockMassage.textContent = '\u23F3 Generating...';
  try {
    varBentNo = await funcLionShoulder();
    await varHorseShoot.set({
      tempMail: varBentNo
    });
    varAskNoun = [];
    await funcCleanWorld();
    funcInformationPort();
    funcHollowSimply();
    funcGraphZoo();
    funcDoingUp('\u2705 Temp email ready', 'ok');
  } catch (varLossSeed) {
    funcDoingUp('\u274C ' + (varLossSeed.message || 'Failed to create temp email'), 'err');
  }
  varClockMassage.disabled = false;
  varClockMassage.textContent = '\u26A1 Generate New';
});
document.getElementById('btnTmRefresh').addEventListener('click', () => funcConstructionVisitor(false));
document.getElementById('btnTmCopy').addEventListener('click', () => {
  if (!varBentNo) {
    return;
  }
  navigator.clipboard.writeText(varBentNo.address).then(() => {
    funcDoingUp('\uD83D\uDCCB Email copied!', 'ok');
  });
});
document.getElementById('btnTmBack').addEventListener('click', () => {
  document.getElementById('tmMsgArea').style.display = 'none';
  document.getElementById('tmInboxArea').style.display = 'block';
  varBusTired = null;
});
document.getElementById('btnTmCopyCode').addEventListener('click', () => {
  const varFunWhy = document.getElementById('tmMsgCode').textContent;
  if (!varFunWhy || varFunWhy === '\u2014') {
    return;
  }
  navigator.clipboard.writeText(varFunWhy).then(() => funcDoingUp('\uD83D\uDCCB Code copied: ' + varFunWhy, 'ok'));
});
document.getElementById('tmAutoChk').addEventListener('change', () => {
  if (document.getElementById('tmAutoChk').checked) {
    funcGraphZoo();
  } else {
    funcCommandStreet();
  }
});
async function funcLawPitch() {
  return new Promise(argLastSolid => chrome.storage.local.get(['zs_token', 'zs_uid', 'zs_user', 'kimtim_token', 'kimtim_user_id'], argAccordingPrimitive => argLastSolid({
    'Content-Type': 'application/json',
    'X-ZS-Token': argAccordingPrimitive.zs_token || argAccordingPrimitive.kimtim_token || '',
    'X-ZS-UID': String(argAccordingPrimitive.zs_uid || argAccordingPrimitive.kimtim_user_id || argAccordingPrimitive.zs_user && argAccordingPrimitive.zs_user.user_id || '')
  })));
}
function funcAlongWould(argDrinkThroughout, argFaceTin) {
  const varAgePossible = new Blob([argDrinkThroughout], {
    type: 'text/plain'
  });
  const varIncludingPen = document.createElement('a');
  const varBlobUrl = URL.createObjectURL(varAgePossible);
  varIncludingPen.href = varBlobUrl;
  varIncludingPen.download = argFaceTin;
  // Anchor MUST be in the DOM for click() to trigger a download reliably in
  // Chrome MV3 extension pages; revoking synchronously cancels the download,
  // so defer revoke to the next task.
  varIncludingPen.style.display = 'none';
  document.body.appendChild(varIncludingPen);
  varIncludingPen.click();
  setTimeout(() => {
    try { URL.revokeObjectURL(varBlobUrl); } catch (e) { /* ignore */ }
    try { varIncludingPen.remove(); } catch (e) { /* ignore */ }
  }, 1500);
}
// ── Telegram OTP Auth ─────────────────────────────────────────────────────
const TG_API = 'https://tg-login-api.water6k.workers.dev';
const TG_DASHBOARD = 'https://tg-login-30e.pages.dev/dashboard.html';
let _tgTelegramId = null;

async function tgApiFetch(path, body) {
  const stored = await varHorseShoot.get('tg_token');
  const token = stored.tg_token || '';
  const headers = { 'content-type': 'application/json' };
  if (token) headers['Authorization'] = 'Bearer ' + token;
  return fetch(TG_API + path, {
    method: body !== undefined ? 'POST' : 'GET',
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
}

// Returns { user, hadToken, networkError }
async function tgVerifyStoredSession() {
  const stored = await varHorseShoot.get(['tg_token', 'zs_user']);
  if (!stored.tg_token) return { user: null, hadToken: false, networkError: false };
  try {
    const r = await fetch(TG_API + '/me', {
      headers: { 'Authorization': 'Bearer ' + stored.tg_token },
      signal: AbortSignal.timeout(5000)
    });
    if (!r.ok) return { user: null, hadToken: true, networkError: false };
    const data = await r.json();
    return { user: data.user || null, hadToken: true, networkError: false };
  } catch {
    // Network error — assume session still valid, use cached user
    return { user: null, hadToken: true, networkError: true, cached: stored.zs_user };
  }
}

function tgShowLoginStep(n) {
  document.getElementById('loginStep1').style.display = n === 1 ? '' : 'none';
  document.getElementById('loginStep2').style.display = n === 2 ? '' : 'none';
  document.getElementById('loginError1').style.display = 'none';
  document.getElementById('loginError2').style.display = 'none';
}

function tgSetError(step, msg) {
  const el = document.getElementById('loginError' + step);
  el.textContent = msg;
  el.style.display = 'block';
}

document.getElementById('btnSendOtp').addEventListener('click', async () => {
  const identifier = (document.getElementById('tgIdentifier').value || '').trim();
  if (!identifier) { tgSetError(1, 'Please enter your Telegram username or ID.'); return; }
  const btn = document.getElementById('btnSendOtp');
  btn.disabled = true; btn.textContent = 'Sending…';
  document.getElementById('loginError1').style.display = 'none';
  try {
    const r = await tgApiFetch('/auth/otp/request', { identifier });
    const data = await r.json();
    if (!r.ok) { tgSetError(1, data.message || 'Failed to send OTP. Try again.'); return; }
    _tgTelegramId = data.telegram_id;
    tgShowLoginStep(2);
    document.getElementById('tgOtp').focus();
  } catch { tgSetError(1, 'Network error — check your connection.'); }
  finally { btn.disabled = false; btn.textContent = '📨 Send OTP to Telegram'; }
});

document.getElementById('tgIdentifier').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('btnSendOtp').click();
});

document.getElementById('btnVerifyOtp').addEventListener('click', async () => {
  const otp = (document.getElementById('tgOtp').value || '').replace(/\D/g, '');
  if (otp.length !== 6) { tgSetError(2, 'Enter the 6-digit code from Telegram.'); return; }
  const btn = document.getElementById('btnVerifyOtp');
  btn.disabled = true; btn.textContent = 'Verifying…';
  document.getElementById('loginError2').style.display = 'none';
  try {
    const r = await tgApiFetch('/auth/otp/verify', { telegram_id: _tgTelegramId, otp });
    const data = await r.json();
    if (!r.ok) { tgSetError(2, data.message || 'Invalid or expired OTP.'); return; }
    // Store token and user
    await varHorseShoot.set({ tg_token: data.token, zs_user: {
      user_id: String(data.user.id),
      username: data.user.username || 'user',
      plan: data.user.is_admin ? 'admin' : 'free',
      total_success: 0,
    }});
    varClockMean = (await varHorseShoot.get('zs_user')).zs_user;
    funcChartWild('viewMain');
    funcAwayRailroad();
    funcDoingUp('✅ Logged in as @' + (data.user.username || data.user.id), 'ok');
  } catch { tgSetError(2, 'Network error — check your connection.'); }
  finally { btn.disabled = false; btn.textContent = 'Verify →'; }
});

document.getElementById('tgOtp').addEventListener('input', () => {
  const el = document.getElementById('tgOtp');
  el.value = el.value.replace(/\D/g, '').slice(0, 6);
  if (el.value.length === 6) document.getElementById('btnVerifyOtp').click();
});

document.getElementById('tgOtp').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('btnVerifyOtp').click();
});

document.getElementById('btnLoginBack').addEventListener('click', () => {
  _tgTelegramId = null;
  document.getElementById('tgOtp').value = '';
  tgShowLoginStep(1);
});

// Add logout button to sidebar if it exists
const existingLogout = document.getElementById('btnLogout');
if (existingLogout) {
  existingLogout.addEventListener('click', async () => {
    await varHorseShoot.remove(['tg_token', 'zs_user']);
    varClockMean = null;
    document.getElementById('tgIdentifier').value = '';
    document.getElementById('tgOtp').value = '';
    tgShowLoginStep(1);
    funcChartWild('viewLogin');
  });
}

// Open dashboard button in sidebar (optional — add div#btnDashboard to HTML if wanted)
const btnDash = document.getElementById('btnOpenDashboard');
if (btnDash) {
  btnDash.addEventListener('click', async () => {
    const stored = await varHorseShoot.get('tg_token');
    const url = TG_DASHBOARD + (stored.tg_token ? '?token=' + encodeURIComponent(stored.tg_token) : '');
    chrome.tabs.create({ url });
  });
}

// ── Init ────────────────────────────────────────────────────────────────────
// Fetch hit stats and update dashboard boxes
async function tgRefreshStats() {
  try {
    // Local stats (always available)
    const local = await varHorseShoot.get(['kim_local_hits', 'kim_local_attempts', 'kim_local_history']);
    const localHits = local.kim_local_hits || 0;

    // Remote stats (may fail if offline)
    let remoteTotal = 0, remoteToday = 0;
    try {
      const r = await tgApiFetch('/stats');
      if (r.ok) { const d = await r.json(); remoteTotal = d.total||0; remoteToday = d.today||0; }
    } catch {}

    const totalHits = Math.max(localHits, remoteTotal);
    const el = document.getElementById('statSuccess');
    const elD = document.getElementById('statHits');
    if (el) { el.textContent = totalHits; el.className = 'sval accent'; }
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