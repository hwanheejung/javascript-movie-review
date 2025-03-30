var __defProp = Object.defineProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var _parentElement, _props, _SearchBar_instances, render_fn, addEventListeners_fn, _parentElement2, _props2, _Header_instances, render_fn2, renderSearchBar_fn, addEventListeners_fn2, _baseURL, _headers, _errorRenderer, _HttpClient_instances, buildUrl_fn, _client, _message, _year, _month, _date, _RATING_MESSAGES, _movieId, _MyRate_instances, updateStarUI_fn, _myRate, _MovieDetailModalContent_instances, initialRender_fn, imageSection_fn, descriptionSection_fn, mainInfoSection_fn, overviewSection_fn, attachMyRateEvents_fn, _dialogElement, _api, _MovieDetailModal_instances, dialogTemplate_fn, attachEventListeners_fn, fetchAndDisplayDetail_fn, updateModalContent_fn, renderError_fn, close_fn, _movies, _MovieList_instances, posterImage_fn, _BaseMovieBoard_instances, initialize_fn, attachMovieItemClickListener_fn, renderNoResult_fn, _movie, _App_instances, renderInitialLayout_fn, renderHeader_fn, renderSearchResult_fn, renderPopularMovies_fn;
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const Footer = () => {
  return (
    /*html*/
    `
    <footer>
        <p>&copy; 우아한테크코스 All Rights Reserved.</p>
        <p><img src="./images/woowacourse_logo.png" width="180" /></p>
    </footer>
    `
  );
};
const isHTMLElement = (target) => {
  return target instanceof HTMLElement;
};
class SearchBar {
  constructor(parentElement, props) {
    __privateAdd(this, _SearchBar_instances);
    __privateAdd(this, _parentElement);
    __privateAdd(this, _props);
    __privateSet(this, _parentElement, parentElement);
    __privateSet(this, _props, props);
    __privateMethod(this, _SearchBar_instances, render_fn).call(this);
    __privateMethod(this, _SearchBar_instances, addEventListeners_fn).call(this);
  }
}
_parentElement = new WeakMap();
_props = new WeakMap();
_SearchBar_instances = new WeakSet();
render_fn = function() {
  __privateGet(this, _parentElement).innerHTML = `
    <form class="search-bar">
        <input placeholder="검색어를 입력하세요"/>
        <button type="submit">
          <img src="./images/search_button.png" />
        </button>
    </form >
  `;
};
addEventListeners_fn = function() {
  const searchForm = document.querySelector("form.search-bar");
  searchForm == null ? void 0 : searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputElement = searchForm.querySelector("input");
    const params = inputElement == null ? void 0 : inputElement.value.trim();
    if (!params) return;
    __privateGet(this, _props).onSearchSubmitted(params);
  });
};
class Header {
  constructor(parentElement, props) {
    __privateAdd(this, _Header_instances);
    __privateAdd(this, _parentElement2);
    __privateAdd(this, _props2);
    __privateSet(this, _parentElement2, parentElement);
    __privateSet(this, _props2, props);
    __privateMethod(this, _Header_instances, render_fn2).call(this);
    __privateMethod(this, _Header_instances, renderSearchBar_fn).call(this);
    __privateMethod(this, _Header_instances, addEventListeners_fn2).call(this);
  }
}
_parentElement2 = new WeakMap();
_props2 = new WeakMap();
_Header_instances = new WeakSet();
render_fn2 = function() {
  __privateGet(this, _parentElement2).innerHTML = /*html*/
  `
        <button class="logo">
          <h1><img src="./images/logo.png" alt="MovieList" /></h1>
        </button>
        <div class="search-bar-container"></div>
    `;
};
renderSearchBar_fn = function() {
  const $searchBar = document.querySelector(".search-bar-container");
  if (isHTMLElement($searchBar))
    new SearchBar($searchBar, {
      onSearchSubmitted: (params) => __privateGet(this, _props2).onSearchSubmitted(params)
    });
};
addEventListeners_fn2 = function() {
  const $logo = document.querySelector(".logo");
  if (isHTMLElement($logo)) {
    $logo.addEventListener("click", () => __privateGet(this, _props2).onLogoClicked());
  }
};
class HttpClient {
  constructor(baseURL, headers, errorRenderer) {
    __privateAdd(this, _HttpClient_instances);
    __privateAdd(this, _baseURL);
    __privateAdd(this, _headers);
    __privateAdd(this, _errorRenderer);
    __privateSet(this, _baseURL, baseURL);
    __privateSet(this, _headers, headers);
    __privateSet(this, _errorRenderer, errorRenderer);
  }
  async get(endpoint, params) {
    const url = __privateMethod(this, _HttpClient_instances, buildUrl_fn).call(this, endpoint, params);
    const fetchPromise = fetch(url, {
      method: "GET",
      headers: __privateGet(this, _headers)
    });
    const timeoutPromise = new Promise(
      (_, reject) => setTimeout(() => reject(new Error("타임아웃 에러 발생")), 1e4)
    );
    try {
      const res = await Promise.race([fetchPromise, timeoutPromise]);
      if (!res.ok) {
        throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
      }
      return await res.json();
    } catch (error) {
      console.error("HttpClient GET Error:", error);
      __privateGet(this, _errorRenderer).call(this);
      throw error;
    }
  }
}
_baseURL = new WeakMap();
_headers = new WeakMap();
_errorRenderer = new WeakMap();
_HttpClient_instances = new WeakSet();
buildUrl_fn = function(endpoint, params) {
  const query = params && Object.keys(params).length ? "?" + new URLSearchParams(params).toString() : "";
  return `${__privateGet(this, _baseURL)}${endpoint}${query}`;
};
const _TMDBApi = class _TMDBApi {
  constructor(client) {
    __privateAdd(this, _client);
    __privateSet(this, _client, client);
  }
  popularMovies(page = 1) {
    return __privateGet(this, _client).get(`${_TMDBApi.BASE_URL}/movie/popular`, {
      page,
      language: "ko-KR"
    });
  }
  searchedMovies(query, page = 1) {
    return __privateGet(this, _client).get(`${_TMDBApi.BASE_URL}/search/movie`, {
      query,
      page,
      include_adult: false,
      language: "ko-KR"
    });
  }
  movieDetail(id) {
    return __privateGet(this, _client).get(`${_TMDBApi.BASE_URL}/movie/${id}`, {
      language: "ko-KR"
    });
  }
};
_client = new WeakMap();
__publicField(_TMDBApi, "BASE_URL", "https://api.themoviedb.org/3");
let TMDBApi = _TMDBApi;
const createApi = (errorRenderer) => {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTYzYTkyNzMzZTEwODVjOGE2ZmRjODRiZGI1ZmJjNCIsIm5iZiI6MTc0MjI3NTg3Ny45NDQsInN1YiI6IjY3ZDkwNTI1YWIyNTllMDNhN2M2YTJlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Hc9ub007PNxPdNSwS1doghQTFrfO8DItpLNnlaGQ2L0"}`
  };
  const client = new HttpClient("", headers, errorRenderer);
  return new TMDBApi(client);
};
function c(n, ...t) {
  return (r) => t.reduce((n2, t2) => t2(n2), n(r));
}
const Spinner = (scale = 1) => {
  return (
    /*html*/
    `
  <div class="orbit-spinner" style="scale: ${scale}">
      <div class="planet"></div>
      <div class="orbit">
        <div class="satellite satellite-1"></div>
        <div class="satellite satellite-2"></div>
      </div>
    </div>
  `
  );
};
class ErrorScreen {
  constructor(message) {
    __privateAdd(this, _message);
    __privateSet(this, _message, message);
  }
  render() {
    const $main = document.querySelector("main");
    if (!isHTMLElement($main)) return;
    $main.innerHTML = /*html*/
    `<div class="fallback-screen error-screen">
        <img src="./images/dizzy_planet.png"/>
        <p>${__privateGet(this, _message)}</p>
      </div>`;
  }
}
_message = new WeakMap();
class Date {
  constructor(dateString) {
    __privateAdd(this, _year);
    __privateAdd(this, _month);
    __privateAdd(this, _date);
    const parts = dateString.split("-");
    if (parts.length < 3) {
      throw new Error("올바른 형식이 아닙니다. YYYY-M-D");
    }
    __privateSet(this, _year, parseInt(parts[0], 10));
    __privateSet(this, _month, parseInt(parts[1], 10));
    __privateSet(this, _date, parseInt(parts[2], 10));
  }
  get year() {
    return __privateGet(this, _year);
  }
  get month() {
    return __privateGet(this, _month);
  }
  get date() {
    return __privateGet(this, _date);
  }
}
_year = new WeakMap();
_month = new WeakMap();
_date = new WeakMap();
const createStorage = (engine) => ({
  get(key) {
    const raw = engine.getItem(key);
    try {
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },
  set(key, value) {
    engine.setItem(key, JSON.stringify(value));
  }
});
const localStorageEngine = {
  getItem: (key) => localStorage.getItem(key),
  setItem: (key, value) => localStorage.setItem(key, value)
};
const localStorageStore = createStorage(localStorageEngine);
const myRateStorage = {
  getRate(movieId) {
    const key = `myRate-${movieId}`;
    const rate = localStorageStore.get(key);
    return rate !== null ? rate : 0;
  },
  setRate(movieId, rate) {
    const key = `myRate-${movieId}`;
    localStorageStore.set(key, rate);
  }
};
const _MyRate = class _MyRate {
  constructor(movieId) {
    __privateAdd(this, _MyRate_instances);
    __privateAdd(this, _movieId);
    __privateSet(this, _movieId, movieId);
  }
  get ui() {
    const currentRate = myRateStorage.getRate(__privateGet(this, _movieId));
    const message = currentRate === 0 ? __privateGet(_MyRate, _RATING_MESSAGES)[0] : `${__privateGet(_MyRate, _RATING_MESSAGES)[currentRate]} (${currentRate}/10)`;
    const stars = Array.from({ length: 5 }).map((_, i) => {
      return `
          <img 
            src="./images/star_empty.png" 
            class="star" 
            alt="Star" 
            data-value="${(i + 1) * 2}"
          />
        `;
    }).join("");
    return (
      /*html*/
      `
      <div class="modal-section myRate">
        <h3>내 별점</h3>
        <div class="myRate-container">
          <div class="star-wrapper">
            ${stars}
          </div>
          <p class="myRate-message">${message}</p>
        </div>
      </div>
    `
    );
  }
  attachEvents() {
    const container = document.querySelector(".star-wrapper");
    if (!container) return;
    const starNodes = Array.from(container.querySelectorAll(".star"));
    if (!starNodes.length) return;
    starNodes.forEach((starNode, index) => {
      starNode.addEventListener("click", () => {
        const handleStarClick = c(
          (i) => (i + 1) * 2,
          (newRating) => {
            myRateStorage.setRate(__privateGet(this, _movieId), newRating);
            return newRating;
          },
          (newRating) => __privateMethod(this, _MyRate_instances, updateStarUI_fn).call(this, starNodes, newRating)
        );
        handleStarClick(index);
      });
    });
    __privateMethod(this, _MyRate_instances, updateStarUI_fn).call(this, starNodes, myRateStorage.getRate(__privateGet(this, _movieId)));
  }
};
_RATING_MESSAGES = new WeakMap();
_movieId = new WeakMap();
_MyRate_instances = new WeakSet();
updateStarUI_fn = function(starNodes, rating) {
  const filledCount = rating / 2;
  starNodes.forEach((starNode, index) => {
    const img = starNode;
    img.src = index < filledCount ? "./images/star_filled.png" : "./images/star_empty.png";
  });
  c(
    () => starNodes[0].closest(".myRate-container"),
    (parent) => parent ? parent.querySelector(".myRate-message") : null,
    (messageElem) => {
      if (messageElem) {
        const text = rating === 0 ? __privateGet(_MyRate, _RATING_MESSAGES)[0] : `${__privateGet(_MyRate, _RATING_MESSAGES)[rating]} (${rating}/10)`;
        messageElem.textContent = text;
      }
    }
  )(null);
};
__privateAdd(_MyRate, _RATING_MESSAGES, {
  0: "아직 평가가 없어요",
  2: "최악이예요",
  4: "별로예요",
  6: "보통이에요",
  8: "재미있어요",
  10: "명작이에요"
});
let MyRate = _MyRate;
class MovieDetailModalContent {
  constructor(parentElement, detail) {
    __privateAdd(this, _MovieDetailModalContent_instances);
    __privateAdd(this, _myRate);
    this.parentElement = parentElement;
    this.detail = detail;
    __privateSet(this, _myRate, new MyRate(this.detail.id));
    __privateMethod(this, _MovieDetailModalContent_instances, initialRender_fn).call(this);
    __privateMethod(this, _MovieDetailModalContent_instances, attachMyRateEvents_fn).call(this);
  }
}
_myRate = new WeakMap();
_MovieDetailModalContent_instances = new WeakSet();
initialRender_fn = function() {
  this.parentElement.innerHTML = `
      ${__privateMethod(this, _MovieDetailModalContent_instances, imageSection_fn).call(this)}
      ${__privateMethod(this, _MovieDetailModalContent_instances, descriptionSection_fn).call(this)}
    `;
};
imageSection_fn = function() {
  const imageUrl = this.detail.poster_path ? "https://image.tmdb.org/t/p/original" + this.detail.poster_path : "./images/null_image.png";
  return `
      <div class="modal-image">
        <img src="${imageUrl}" alt="${this.detail.title}"/>
      </div>
    `;
};
descriptionSection_fn = function() {
  return `
      <div class="modal-description">
        ${__privateMethod(this, _MovieDetailModalContent_instances, mainInfoSection_fn).call(this)}
        ${__privateGet(this, _myRate).ui}
        ${__privateMethod(this, _MovieDetailModalContent_instances, overviewSection_fn).call(this)}
      </div>
    `;
};
mainInfoSection_fn = function() {
  const releaseYear = new Date(this.detail.release_date).year;
  const genres = this.detail.genres.map((g) => g.name).join(", ") || "";
  return (
    /*html*/
    `
      <h2>${this.detail.title}</h2>
      <div class="modal-description--yearCategory">
        <span>${releaseYear}</span>
        <span>•</span>
        <p class="category">${genres}</p>
      </div>
      <p class="rate">
        <span>평균</span>
        <img src="./images/star_filled.png" class="star" alt="Star"/>
        <span>${this.detail.vote_average.toFixed(1).toString()}</span>
      </p>
      <div class="divider"></div>
    `
  );
};
overviewSection_fn = function() {
  if (!this.detail.overview) return "";
  return `
      <div class="divider"></div>
      <div class="modal-section detail">
        <h3>줄거리</h3>
        <p>${this.detail.overview}</p>
      </div>
    `;
};
attachMyRateEvents_fn = function() {
  __privateGet(this, _myRate).attachEvents();
};
class MovieDetailModal {
  constructor(movieId) {
    __privateAdd(this, _MovieDetailModal_instances);
    __privateAdd(this, _dialogElement);
    __privateAdd(this, _api, createApi(
      () => new ErrorScreen("상세 정보를 불러오는 중 오류가 발생했습니다.").render()
    ));
    this.movieId = movieId;
    __privateSet(this, _dialogElement, __privateMethod(this, _MovieDetailModal_instances, dialogTemplate_fn).call(this));
    document.body.appendChild(__privateGet(this, _dialogElement));
    document.body.classList.add("modal-open");
    __privateMethod(this, _MovieDetailModal_instances, attachEventListeners_fn).call(this);
    __privateMethod(this, _MovieDetailModal_instances, fetchAndDisplayDetail_fn).call(this);
    __privateGet(this, _dialogElement).showModal();
  }
}
_dialogElement = new WeakMap();
_api = new WeakMap();
_MovieDetailModal_instances = new WeakSet();
dialogTemplate_fn = function() {
  const dialog = document.createElement("dialog");
  dialog.classList.add("modal-background");
  dialog.id = "modalBackground";
  dialog.innerHTML = /*html*/
  `
        <div class="modal">
          <button class="close-modal" id="closeModal">
            <img src="./images/modal_button_close.png" alt="Close"/>
          </button>
          <div class="modal-container">
            <div class="modal-spinner">
              ${Spinner(1)}
            </div>
          </div>
        </div>
      `;
  return dialog;
};
attachEventListeners_fn = function() {
  const closeButton = __privateGet(this, _dialogElement).querySelector("#closeModal");
  if (closeButton && isHTMLElement(closeButton)) {
    closeButton.addEventListener("click", () => __privateMethod(this, _MovieDetailModal_instances, close_fn).call(this));
  }
  __privateGet(this, _dialogElement).addEventListener("click", (event) => {
    if (event.target === __privateGet(this, _dialogElement)) {
      __privateMethod(this, _MovieDetailModal_instances, close_fn).call(this);
    }
  });
  __privateGet(this, _dialogElement).addEventListener("cancel", () => __privateMethod(this, _MovieDetailModal_instances, close_fn).call(this));
  __privateGet(this, _dialogElement).addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      __privateMethod(this, _MovieDetailModal_instances, close_fn).call(this);
    }
  });
};
fetchAndDisplayDetail_fn = async function() {
  try {
    const detail = await __privateGet(this, _api).movieDetail(this.movieId);
    __privateMethod(this, _MovieDetailModal_instances, updateModalContent_fn).call(this, detail);
  } catch (error) {
    console.error("영화 상세 정보를 불러오는 중 오류 발생:", error);
    __privateMethod(this, _MovieDetailModal_instances, renderError_fn).call(this);
  }
};
updateModalContent_fn = function(detail) {
  const container = __privateGet(this, _dialogElement).querySelector(".modal-container");
  if (!isHTMLElement(container)) return;
  new MovieDetailModalContent(container, detail);
};
renderError_fn = function() {
  const container = __privateGet(this, _dialogElement).querySelector(".modal-container");
  if (isHTMLElement(container)) {
    container.innerHTML = `<div class="modal-error"><p>상세 정보를 불러오는 데 실패했습니다.</p></div>`;
  }
};
close_fn = function() {
  __privateGet(this, _dialogElement).close();
  __privateGet(this, _dialogElement).remove();
  document.body.classList.remove("modal-open");
};
const _MovieList = class _MovieList {
  constructor(movies) {
    __privateAdd(this, _MovieList_instances);
    __privateAdd(this, _movies);
    __privateSet(this, _movies, movies);
  }
  get ui() {
    return (
      /*html*/
      `
      ${__privateGet(this, _movies).map(
        ({ id, poster_path, title, vote_average }) => (
          /*html*/
          `
            <li class="item" data-id="${id}">
                <img 
                  class="thumbnail" 
                  src="${__privateMethod(this, _MovieList_instances, posterImage_fn).call(this, poster_path)}" alt="${title}" 
                  onerror="this.onerror=null; this.src='./images/dizzy_planet.png';"
                  />
                <div class="item-desc">
                  <p class="rate">
                    <img src="./images/star_empty.png" class="star" />
                    <span>${vote_average.toFixed(1).toString()}</span>
                  </p>
                  <strong>${title}</strong>
                </div>
            </li>
          `
        )
      ).join("")}
    `
    );
  }
  get skeleton() {
    return (
      /*html*/
      `
      <li>
        <div class="skeleton-item">
          <div class="skeleton-thumbnail"></div>
          <div class="skeleton-item-desc">
            <div class="skeleton-text"></div>
            <div class="skeleton-text" style="width: 50%"></div>
          </div>
        </div>
      </li>
    `.repeat(10).trim()
    );
  }
  get fallback() {
    return (
      /*html*/
      `
      <div class="fallback-screen">
        <img src="./images/dizzy_planet.png" alt="영화 정보 없음"/>
        <p>현재 표시할 영화가 없습니다</p>
      </div>
    `
    );
  }
};
_movies = new WeakMap();
_MovieList_instances = new WeakSet();
posterImage_fn = function(poster_path) {
  return poster_path ? `${_MovieList.IMAGE_BASE_URL}${poster_path}` : "./images/null_image.png";
};
__publicField(_MovieList, "IMAGE_BASE_URL", "https://image.tmdb.org/t/p/original");
let MovieList = _MovieList;
class BaseMovieBoard {
  constructor(config) {
    __privateAdd(this, _BaseMovieBoard_instances);
    __publicField(this, "parentElement");
    __publicField(this, "currentPage", 1);
    __publicField(this, "totalPages", 0);
    __publicField(this, "isLoading", false);
    __publicField(this, "observer", null);
    this.config = config;
    this.parentElement = config.parentElement;
    __privateMethod(this, _BaseMovieBoard_instances, initialize_fn).call(this);
  }
  async fetchAndRenderMovies() {
    if (this.isLoading) return;
    this.isLoading = true;
    try {
      const { movies, total_pages } = await this.config.fetchMovies(
        this.currentPage
      );
      this.totalPages = total_pages;
      if (movies.length === 0 && this.currentPage === 1) {
        __privateMethod(this, _BaseMovieBoard_instances, renderNoResult_fn).call(this);
        this.disableInfiniteScroll();
        return;
      }
      this.renderMovies(movies);
      this.currentPage++;
      if (this.currentPage > this.totalPages) {
        this.disableInfiniteScroll();
      }
    } catch (error) {
      console.error("영화 데이터를 불러오는 중 오류 발생:", error);
      this.disableInfiniteScroll();
    } finally {
      this.isLoading = false;
    }
  }
  renderMovies(movies) {
    const movieListContainer = this.parentElement.querySelector(".thumbnail-list");
    if (!isHTMLElement(movieListContainer)) return;
    if (this.currentPage === 1) {
      movieListContainer.innerHTML = this.config.renderMovieList(movies);
    } else {
      movieListContainer.insertAdjacentHTML(
        "beforeend",
        this.config.renderMovieList(movies)
      );
    }
  }
  initInfiniteScroll() {
    const sentinel = document.createElement("div");
    sentinel.className = "scroll-sentinel";
    this.parentElement.appendChild(sentinel);
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.isLoading && this.currentPage <= this.totalPages) {
          this.fetchAndRenderMovies();
        }
      });
    });
    this.observer.observe(sentinel);
  }
  disableInfiniteScroll() {
    if (!this.observer) return;
    this.observer.disconnect();
    this.observer = null;
    const sentinel = this.parentElement.querySelector(".scroll-sentinel");
    if (sentinel && isHTMLElement(sentinel)) {
      sentinel.remove();
    }
  }
}
_BaseMovieBoard_instances = new WeakSet();
initialize_fn = function() {
  this.config.initialRender();
  this.fetchAndRenderMovies();
  this.initInfiniteScroll();
  __privateMethod(this, _BaseMovieBoard_instances, attachMovieItemClickListener_fn).call(this);
};
attachMovieItemClickListener_fn = function() {
  const container = this.parentElement.querySelector(".thumbnail-list");
  if (!isHTMLElement(container)) return;
  container.addEventListener(
    "click",
    c(
      (event) => event.target,
      (target) => target.closest(".item"),
      (item) => item ? item.getAttribute("data-id") : null,
      (idStr) => idStr ? parseInt(idStr, 10) : null,
      (movieId) => {
        if (movieId !== null) {
          new MovieDetailModal(movieId);
        }
      }
    )
  );
};
renderNoResult_fn = function() {
  const container = this.config.parentElement.querySelector(
    ".movie-list-container"
  );
  if (!container) return;
  const ul = container.querySelector("ul.thumbnail-list");
  if (!isHTMLElement(ul)) return;
  ul.innerHTML = "";
  const h2 = container.querySelector("h2");
  if (!isHTMLElement(h2)) return;
  h2.insertAdjacentHTML("afterend", new MovieList([]).fallback);
};
const _TopRatedMovie = class _TopRatedMovie {
  constructor(movie) {
    __privateAdd(this, _movie);
    __privateSet(this, _movie, movie);
  }
  get skeleton() {
    return (
      /*html*/
      `
    <div class="background-container">
      <div class="overlay" aria-hidden="true"></div>
      <div class="top-rated-movie">
          <div class="rate">
              <img src="./images/star_empty.png" class="star" />
              <span class="rate-value">${__privateGet(this, _movie).vote_average}</span>
          </div>
          <div class="title">${__privateGet(this, _movie).title}</div>
      </div>
    </div>
    `
    );
  }
  get ui() {
    return (
      /*html*/
      `
    <div class="background-container" style="background-image: url(${_TopRatedMovie.IMAGE_BASE_URL}${__privateGet(this, _movie).poster_path})">
      <div class="overlay" aria-hidden="true"></div>
      <div class="top-rated-movie">
        <div class="rate">
          <img src="./images/star_empty.png" class="star" />
          <span class="rate-value">${__privateGet(this, _movie).vote_average.toFixed(1).toString()}</span>
        </div>
        <div class="title">${__privateGet(this, _movie).title}</div>
      </div>
    </div>
    `
    );
  }
};
_movie = new WeakMap();
__publicField(_TopRatedMovie, "IMAGE_BASE_URL", "https://image.tmdb.org/t/p/original");
let TopRatedMovie = _TopRatedMovie;
class PopularMovieBoard extends BaseMovieBoard {
  constructor(parentElement) {
    const apiInstance = createApi(
      () => new ErrorScreen("오류가 발생했습니다.").render()
    );
    const config = {
      parentElement,
      initialRender: () => {
        parentElement.innerHTML = /*html*/
        `
          <section class="top-rated-container">
            ${new TopRatedMovie({
          id: 0,
          title: "로딩중...",
          vote_average: 0,
          poster_path: ""
        }).skeleton}
          </section>
          <section class="movie-list-container">
            <h2>지금 인기 있는 영화</h2>
            <ul class="thumbnail-list">
              ${new MovieList([]).skeleton}
            </ul>
          </section>
        `;
      },
      fetchMovies: async (page) => {
        const data = await apiInstance.popularMovies(page);
        return { movies: data.results, total_pages: data.total_pages };
      },
      renderMovieList: (movies) => new MovieList(movies).ui
    };
    super(config);
  }
  renderMovies(movies) {
    if (this.currentPage === 1 && movies.length > 0) {
      const topRatedContainer = this.config.parentElement.querySelector(
        ".top-rated-container"
      );
      if (!isHTMLElement(topRatedContainer)) return;
      topRatedContainer.innerHTML = new TopRatedMovie(movies[0]).ui;
    }
    super.renderMovies(movies);
  }
}
class SearchMovieBoard extends BaseMovieBoard {
  constructor(parentElement, props) {
    const apiInstance = createApi(
      () => new ErrorScreen("오류가 발생했습니다.").render()
    );
    const config = {
      parentElement,
      initialRender: () => {
        parentElement.innerHTML = /*html*/
        `
          <section class="movie-list-container search-movie-list-container">
              <h2>"${props.searchParams}" 검색 결과</h2>
              <ul class="thumbnail-list">
                ${new MovieList([]).skeleton}
              </ul>
          </section>
        `;
      },
      fetchMovies: async (page) => {
        const data = await apiInstance.searchedMovies(props.searchParams, page);
        return { movies: data.results, total_pages: data.total_pages };
      },
      renderMovieList: (movies) => new MovieList(movies).ui
    };
    super(config);
  }
}
class App {
  constructor() {
    __privateAdd(this, _App_instances);
    __privateMethod(this, _App_instances, renderInitialLayout_fn).call(this);
  }
  render() {
    __privateMethod(this, _App_instances, renderHeader_fn).call(this);
    __privateMethod(this, _App_instances, renderPopularMovies_fn).call(this);
  }
}
_App_instances = new WeakSet();
renderInitialLayout_fn = function() {
  const $body = document.querySelector("body");
  if (!isHTMLElement($body)) return;
  $body.innerHTML = /*html*/
  `
      <header></header>
      <main></main>
      ${Footer()}
    `;
};
renderHeader_fn = function() {
  const $header = document.querySelector("header");
  if (!isHTMLElement($header)) return;
  new Header($header, {
    onSearchSubmitted: (params) => __privateMethod(this, _App_instances, renderSearchResult_fn).call(this, params),
    onLogoClicked: () => __privateMethod(this, _App_instances, renderPopularMovies_fn).call(this)
  });
};
renderSearchResult_fn = function(searchParams) {
  const $section = document.querySelector("main");
  window.scrollTo(0, 0);
  if (!isHTMLElement($section)) return;
  new SearchMovieBoard($section, { searchParams });
};
renderPopularMovies_fn = function() {
  const $section = document.querySelector("main");
  if (isHTMLElement($section)) new PopularMovieBoard($section);
};
const app = new App();
app.render();
