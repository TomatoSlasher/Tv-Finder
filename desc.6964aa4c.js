// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4oxrz":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "69b02b985665ff2fbf2403b96964aa4c";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"2gh6s":[function(require,module,exports) {
"use strict";
var _modelJs = require("./model.js");
const showDesc = document.querySelector(".show-desc");
const castList = document.querySelector(".cast-list");
const bookmarkTab = document.querySelector(".bookmark-tab");
const select = document.querySelector(".select");
const epContainer = document.querySelector(".ep-container");
const seasonCounter = document.querySelector(".season-counter");
const seasonContainer = document.querySelector(".season-container");
const year = document.querySelector(".year");
const prevBtn = document.querySelector(".bg-color-prev");
const nextBtn = document.querySelector(".bg-color-next");
const bookmarkList = document.querySelector(".bookmark-list");
const cast = document.querySelector(".cast");
const bookmarkUl = document.querySelector(".bookmark-ul");
const bookmarkClear = document.querySelector(".bookmark-clear");
const noBookmarksContainer = document.querySelector(".no-bookmarks-container");
const seasonEpContainer = document.querySelector(".season-ep-container");
const fullCast = document.querySelector(".full-cast");
const showTv = async function (show1) {
  try {
    await _modelJs.loadTv(show1);
    const {tv} = _modelJs.state;
    let {bookmark} = _modelJs.state;
    if (tv.ep.length === 0) {
      seasonEpContainer.innerHTML = "";
    }
    if (tv.cast.length === 0) {
      fullCast.classList.add("block");
    }
    const markup = `

 <div class="show-desc">
        <!-- <p>Could not find Show info</p> -->
        <div class="overlay">
          <img class="bg-image" src="${tv.bg}" alt="" />
        </div>
        <div class="bottom">
          <div class="poster-premier">
            <div class="ended">
              <p>${tv.status}</p>
            </div>
            <img class="poster-image" src="${tv.orgImage}" alt="" />
          </div>

          <div class="show-text">
            <div class="h1-rating">
              <div class="title">
                <h1>${tv.title}</h1>
                <p>${tv.genre} | ${tv.duration}m | ${tv.premier}</p>
              </div>
            </div>
            <div class="rating-bookmark">
            <div class="box">
              <div class="rating-circle">
                <div class="whole-circ">
                  <svg class="outer-circ">


                    <circle class="circ" cx="22" cy="22" r="37"></circle>
                  </svg>

                  <div class="percent">
                    <svg>
                      <circle cx="30" cy="30" r="30"></circle>
                      <linearGradient id="linearColors" x1="0" y1="0" x2="1" y2="1">
       <stop offset="0%" stop-color="#833ab4"></stop>
       <stop offset="100%" stop-color="#fd1d1d"></stop>

    </linearGradient>
                <circle id="sec-circ" cx="30" cy="30" r="30" stroke-width="4"
                  stroke='url(#linearColors)'
                ></circle>
                    </svg>
                    <div class="num">
                      <h2 class="show-rating">${tv.rating}<i class='fas fa-percentage'></i></h2>
                    </div>
                  </div>
                </div>
                <div class="user-txt">
                  <p class="text">User Rating</p>
                </div>
              </div>
            </div>
                <div class="bookmark">
                    <i class="bookmark-icon far fa-bookmark"></i>
                  </div>
          </div>
            <div class="desc">
              <h2>Overview</h2>
              <p class="description">
               ${tv.overview}
              </p>
            </div>
          </div>
        </div>
      </div>


      </div>
      `;
    showDesc.insertAdjacentHTML("beforeend", markup);
    const descBg = document.querySelector(".bg-image");
    const posterpremier = document.querySelector(".poster-premier");
    const findJpg = descBg.src.substring(descBg.src.length - 3);
    if (findJpg != "jpg") {
      descBg.classList.add("block");
      posterpremier.classList.add("poster-fix");
    }
    const box = document.querySelector(".box");
    const epMap = tv.ep.map((x, i) => x.season);
    const epSeasons = [...new Set(epMap)];
    if (epSeasons.length == 1) {
      nextBtn.classList.add("hidden");
    }
    const seasonListMarkup = epSeasons.map((x, i) => `<option class="option" value="${i + 1}">Season ${i + 1}</option>`).join("");
    select.insertAdjacentHTML("afterbegin", seasonListMarkup);
    const dynamicEpisodeConter = num => {
      const epCounterMarkup = `<h2>Episodes (${num}) <span class='s-stick'>|</span></h2>`;
      return seasonCounter.insertAdjacentHTML("afterbegin", epCounterMarkup);
    };
    const showEpCounter = num => {
      const epFilter = tv.ep.filter(x => x.season == num);
      return epFilter.length;
    };
    dynamicEpisodeConter(showEpCounter(1));
    const dynamicYearCounter = num => {
      const yearCounterMarkup = `<h2>${num}</h2>`;
      return year.insertAdjacentHTML("afterbegin", yearCounterMarkup);
    };
    const showYear = num => {
      const epFilter = tv.ep.filter(x => x.season == num);
      const year = epFilter[0].airdate.slice(0, 4);
      return year;
    };
    if (tv.ep.length > 0) {
      dynamicYearCounter(showYear(1));
    }
    const dynamicEp = season => {
      const epMarkup = season.map((x, i) => {
        return `<li class="ep-list">
        <img src="${x.image.original}" alt="photo" />
        <div class="ep-header">
          <h2>${i + 1}.${x.name}</h2>
          <p class="ep-min">${x.runtime}m</p>
        </div>

          <div class='epdesc'>
                ${x.summary ? x.summary.slice(0, 115) : ""}
          </div>
      </li>`;
      }).join("");
      epContainer.insertAdjacentHTML("afterbegin", epMarkup);
    };
    const showEp = num => {
      const epFilter = tv.ep.filter(x => x.season == num);
      return dynamicEp(epFilter);
    };
    showEp(1);
    const epFilter1 = tv.ep.filter(x => x.season == 1);
    select.addEventListener("change", e => {
      epContainer.innerHTML = "";
      seasonCounter.innerHTML = "";
      year.innerHTML = "";
      if (+select.value == 1) {
        prevBtn.classList.add("hidden");
      }
      if (+select.value != 1) {
        prevBtn.classList.remove("hidden");
      }
      if (+select.value == epSeasons.length) {
        nextBtn.classList.add("hidden");
      }
      if (+select.value != epSeasons.length) {
        nextBtn.classList.remove("hidden");
      }
      showEp(select.value);
      dynamicYearCounter(showYear(select.value));
      dynamicEpisodeConter(showEpCounter(select.value));
    });
    prevBtn.addEventListener("click", () => {
      select.scrollIntoView({
        behavior: "smooth"
      });
      seasonCounter.innerHTML = "";
      year.innerHTML = "";
      epContainer.innerHTML = "";
      if (+select.value != epSeasons.length - 1) {
        nextBtn.classList.remove("hidden");
      }
      if (+select.value == 2) {
        prevBtn.classList.add("hidden");
      }
      let change = +select.value - 1;
      select.value = change;
      showEp(+select.value);
      dynamicYearCounter(showYear(+select.value));
      dynamicEpisodeConter(showEpCounter(+select.value));
    });
    nextBtn.addEventListener("click", () => {
      select.scrollIntoView({
        behavior: "smooth"
      });
      seasonCounter.innerHTML = "";
      year.innerHTML = "";
      epContainer.innerHTML = "";
      if (+select.value == epSeasons.length - 1) {
        nextBtn.classList.add("hidden");
      }
      if (+select.value > 0) {
        prevBtn.classList.remove("hidden");
      }
      let change = +select.value + 1;
      select.value = change;
      showEp(+select.value);
      dynamicYearCounter(showYear(+select.value));
      dynamicEpisodeConter(showEpCounter(+select.value));
    });
    if (tv.cast.length <= 5) {
      cast.classList.add("white-space-normal");
    }
    const castMarkup = tv.cast.map(x => {
      return `
             <li class="cast-li">
                <img src="${x.person.image.medium}" alt="" />
                <h2>${x.person.name}</h2>
                <p>${x.character.name}</p>
              </li>
        `;
    }).join("");
    castList.insertAdjacentHTML("afterbegin", castMarkup);
    const showRating = document.querySelectorAll(".show-rating");
    const secCircle = document.querySelectorAll("#sec-circ");
    const showRatingslice = showRating[0].innerText.slice(0, 2);
    const decsRatin = e => {
      secCircle[0].style.strokeDashoffset = `calc(186 - (186 * ${e}) / 100`;
    };
    decsRatin(showRatingslice);
    const bookmarkDiv = document.querySelector(".bookmark");
    const bookmarkIcon = document.querySelector(".bookmark-icon");
    function addBookmark() {
      var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
      if (existingEntries == null) existingEntries = [];
      const entry = {
        id: tv.id,
        title: tv.title,
        desc: tv.overview,
        image: tv.orgImage,
        premier: tv.premier
      };
      localStorage.setItem("entry", JSON.stringify(entry));
      // Save allEntries back to local storage
      existingEntries.push(entry);
      localStorage.setItem("allEntries", JSON.stringify(existingEntries));
    }
    const items = JSON.parse(localStorage.getItem("allEntries"));
    if (!items) {
      const noBookmarksMarkup = `
      <h2 class="no-bookmark">
          No bookmarks added
          <i class="far fa-frown-open"></i>
        </h2>
      `;
      noBookmarksContainer.insertAdjacentHTML("afterbegin", noBookmarksMarkup);
    }
    bookmarkTab.addEventListener("click", () => {
      bookmarkList.classList.toggle("display-block");
    });
    bookmarkDiv.addEventListener("click", () => {
      bookmarkIcon.classList.toggle("fas");
      if (bookmarkIcon.classList.contains("fas")) {
        addBookmark();
      }
    });
    function bookmarkAll(params) {
      const itemsFilter = items.map(x => x.id);
      const cleanItemsId = [...new Set(itemsFilter)];
      bookmarkDiv.addEventListener("click", () => {
        if (bookmarkIcon.classList.contains("fas") == false) {
          items.splice(cleanItemsId.indexOf(tv.id), 1);
          localStorage.setItem("allEntries", JSON.stringify(items));
        }
      });
      if (cleanItemsId.includes(tv.id)) {
        bookmarkIcon.classList.add("fas");
      }
    }
    if (items) {
      bookmarkAll();
    }
    if (items) {
      const bookmarkMarkup = items.map((x, i) => {
        return `
        <a href='desc.html?result=${x.id}'>
        <li>
              <img src="${x.image}" alt="" />
              <div class="bookmark-el-txt">
                <h2>${x.title} (${x.premier})</h2>

              </div>
            </li>
            `;
      }).join("");
      bookmarkUl.insertAdjacentHTML("afterbegin", bookmarkMarkup);
    }
    bookmarkClear.addEventListener("click", () => {
      localStorage.clear();
      bookmarkUl.innerHTML = "";
      bookmarkIcon.classList.remove("fas");
    });
    if (showRating[0].innerText == 0) {
      box.innerHTML = "";
      bookmarkDiv.classList.add("bookmark-fix");
    }
  } catch (err) {
    console.log(err);
  }
};
const resultQuery = window.location.search.split("=")[1];
showTv(resultQuery);
const searchForm = document.querySelector(".search");
const searchBar = document.querySelector(".search-bar");
const fun = function () {
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const search = searchBar.value;
    if (search) {
      window.document.location = "./result.html" + "?search=" + search;
    }
  });
};
fun();

},{"./model.js":"53sO2"}],"53sO2":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "state", function () {
  return state;
});
_parcelHelpers.export(exports, "loadTv", function () {
  return loadTv;
});
_parcelHelpers.export(exports, "loadSearchResaults", function () {
  return loadSearchResaults;
});
const desc = document.querySelector(".show-desc");
const state = {
  tv: {},
  search: {
    query: "",
    results: []
  },
  bookmark: []
};
const loadTv = async function (show) {
  try {
    const res = await fetch(`https://api.tvmaze.com/shows/${show}`);
    const data = await res.json();
    const tv = data;
    const res2 = await fetch(`https://api.tvmaze.com/shows/${tv.id}/images`);
    const images = await res2.json();
    let bgImages = images.filter(i => i.type == "background");
    if (!bgImages[0]) {
      bgImages = images.filter(i => i.type == "banner");
    }
    const descHTML = `
    <p> Could not find Show info</p>
    `;
    let bgImage = [];
    if (bgImages[0]) {
      bgImage = bgImages[0].resolutions.original.url;
    } else {
      bgImage = "";
    }
    const premier = tv.premiered.substring(0, 4);
    const castData = await fetch(`https://api.tvmaze.com/shows/${tv.id}/cast`);
    const castJson = await castData.json();
    const epData = await fetch(`https://api.tvmaze.com/shows/${tv.id}/episodes`);
    const epJson = await epData.json();
    console.log(epJson);
    const cleanEpData = epJson.filter(src => {
      if (!src.image) {
        return;
      }
      return src;
    });
    // console.log(cleanEpData);
    state.tv = {
      id: tv.id,
      language: tv.language,
      title: tv.name,
      medImage: tv.image.medium,
      orgImage: tv.image.original,
      // network: tv.network.name,
      website: tv.officialSite,
      premier: premier,
      rating: tv.rating.average * 10,
      duration: tv.runtime,
      status: tv.status,
      overview: tv.summary,
      type: tv.type,
      bg: bgImage,
      genre: tv.genres,
      cast: castJson,
      ep: cleanEpData
    };
  } catch (err) {
    console.error(err);
  }
};
const loadSearchResaults = async function (query) {
  try {
    state.search.query = query;
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}}`);
    const data = await res.json();
    const cleanData = data.filter(src => {
      if (!src.show.image) {
        return;
      }
      return src;
    });
    state.search.results = cleanData.map(rec => {
      const object = {
        id: rec.show.id,
        title: rec.show.name,
        medImage: rec.show.image.medium,
        orgImage: rec.show.image.original,
        rating: rec.show.rating
      };
      return object;
    });
  } catch (err) {
    console.log(err);
  }
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}]},["4oxrz","2gh6s"], "2gh6s", "parcelRequireef1d")

//# sourceMappingURL=desc.6964aa4c.js.map
