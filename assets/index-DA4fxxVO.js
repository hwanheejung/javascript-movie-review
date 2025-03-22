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
var _parentElement, _props, _SearchBar_instances, render_fn, addEventListeners_fn, _parentElement2, _props2, _Header_instances, render_fn2, renderSearchBar_fn, addEventListeners_fn2, _baseURL, _headers, _errorRenderer, _HttpClient_instances, buildUrl_fn, _client, _message, _parentElement3, _props3, _button, _MoreMoviesButton_instances, render_fn3, addEventListeners_fn3, _movies, _MovieList_instances, posterImage_fn, _movie, _parentElement4, _page, _api, _moreMoviesButton, _PopularMovieBoard_instances, renderInitialLayout_fn, fetchAndRenderMovies_fn, renderTopRatedMovie_fn, renderMovies_fn, movieData_fn, loadMoreMovies_fn, initMoreMoviesButton_fn, hideMoreMoviesButton_fn, _parentElement5, _props4, _page2, _api2, _moreMoviesButton2, _SearchMovieBoard_instances, renderInitialLayout_fn2, fetchAndRenderMovies_fn2, renderMovies_fn2, movieData_fn2, loadMoreMovies_fn2, renderNoResult_fn, initMoreMoviesButton_fn2, hideMoreMoviesButton_fn2, _App_instances, renderHeader_fn, renderSearchResult_fn, renderPopularMovies_fn, renderFooter_fn;
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
    <footer class="footer">
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
          <h1>
              <img src="./images/logo.png" alt="MovieList" />
          </h1>
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
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: __privateGet(this, _headers)
      });
      if (!res.ok)
        throw new Error(`HTTP Error: ${res.status} ${res.statusText}`);
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
  fetchPopularMovies(page = 1) {
    return __privateGet(this, _client).get(`${_TMDBApi.BASE_URL}/movie/popular`, {
      page,
      language: "ko-KR"
    });
  }
  searchMovies(query, page = 1) {
    return __privateGet(this, _client).get(`${_TMDBApi.BASE_URL}/search/movie`, {
      query,
      page,
      include_adult: false,
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
class ErrorScreen {
  constructor(message) {
    __privateAdd(this, _message);
    __privateSet(this, _message, message);
  }
  render() {
    const $main = document.querySelector("main");
    if (!isHTMLElement($main)) return;
    $main.innerHTML = /*html*/
    `<div class="fallback-screen">
        <img src="./images/dizzy_planet.png"/>
        <p>${__privateGet(this, _message)}</p>
      </div>`;
  }
}
_message = new WeakMap();
class MoreMoviesButton {
  constructor(parentElement, props) {
    __privateAdd(this, _MoreMoviesButton_instances);
    __privateAdd(this, _parentElement3);
    __privateAdd(this, _props3);
    __privateAdd(this, _button, null);
    __privateSet(this, _parentElement3, parentElement);
    __privateSet(this, _props3, props);
    __privateMethod(this, _MoreMoviesButton_instances, render_fn3).call(this);
    __privateMethod(this, _MoreMoviesButton_instances, addEventListeners_fn3).call(this);
  }
  setLoading(loading) {
    if (!__privateGet(this, _button)) return;
    __privateGet(this, _button).disabled = loading;
    __privateGet(this, _button).textContent = loading ? "로딩 중..." : "더보기";
  }
}
_parentElement3 = new WeakMap();
_props3 = new WeakMap();
_button = new WeakMap();
_MoreMoviesButton_instances = new WeakSet();
render_fn3 = function() {
  __privateGet(this, _parentElement3).innerHTML = /*html*/
  `
        <button class="more-movies-button">더보기</button>
    `;
  __privateSet(this, _button, __privateGet(this, _parentElement3).querySelector(".more-movies-button"));
};
addEventListeners_fn3 = function() {
  const moreButton = document.querySelector(".more-movies-button");
  moreButton == null ? void 0 : moreButton.addEventListener("click", () => __privateGet(this, _props3).refetchMovies());
};
const _MovieList = class _MovieList {
  constructor(movies) {
    __privateAdd(this, _MovieList_instances);
    __privateAdd(this, _movies);
    __privateSet(this, _movies, movies);
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
  get ui() {
    return (
      /*html*/
      `
      ${__privateGet(this, _movies).map(
        ({ poster_path, title, vote_average }) => (
          /*html*/
          `
            <li>
              <div class="item">
                <img 
                  class="thumbnail" 
                  src="${__privateMethod(this, _MovieList_instances, posterImage_fn).call(this, poster_path)}" alt="${title}" 
                  onerror="this.onerror=null; this.src='./images/dizzy_planet.png';"
                  />
                <div class="item-desc">
                  <p class="rate">
                    <img src="./images/star_empty.png" class="star" />
                    <span>${vote_average}</span>
                  </p>
                  <strong>${title}</strong>
                </div>
              </div>
            </li>
          `
        )
      ).join("")}
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
          <button class="primary detail">자세히 보기</button>
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
            <span class="rate-value">${__privateGet(this, _movie).vote_average}</span>
        </div>
        <div class="title">${__privateGet(this, _movie).title}</div>
        <button class="primary detail">자세히 보기</button>
      </div>
    </div>
    `
    );
  }
};
_movie = new WeakMap();
__publicField(_TopRatedMovie, "IMAGE_BASE_URL", "https://image.tmdb.org/t/p/original");
let TopRatedMovie = _TopRatedMovie;
const _PopularMovieBoard = class _PopularMovieBoard {
  constructor(parentElement) {
    __privateAdd(this, _PopularMovieBoard_instances);
    __privateAdd(this, _parentElement4);
    __privateAdd(this, _page);
    __privateAdd(this, _api);
    __privateAdd(this, _moreMoviesButton, null);
    __privateSet(this, _parentElement4, parentElement);
    __privateSet(this, _page, 1);
    const errorRenderer = () => new ErrorScreen("오류가 발생했습니다.").render();
    __privateSet(this, _api, createApi(errorRenderer));
    __privateMethod(this, _PopularMovieBoard_instances, renderInitialLayout_fn).call(this);
    __privateMethod(this, _PopularMovieBoard_instances, fetchAndRenderMovies_fn).call(this);
  }
};
_parentElement4 = new WeakMap();
_page = new WeakMap();
_api = new WeakMap();
_moreMoviesButton = new WeakMap();
_PopularMovieBoard_instances = new WeakSet();
renderInitialLayout_fn = function() {
  __privateGet(this, _parentElement4).innerHTML = /*html*/
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
          <ul class='thumbnail-list'>${new MovieList([]).skeleton}</ul> 
          <div class="more-button-container"></div>
      </section>
    `;
};
fetchAndRenderMovies_fn = async function() {
  const { movies } = await __privateMethod(this, _PopularMovieBoard_instances, movieData_fn).call(this);
  if (!movies) return;
  __privateMethod(this, _PopularMovieBoard_instances, renderTopRatedMovie_fn).call(this, movies[0]);
  __privateMethod(this, _PopularMovieBoard_instances, renderMovies_fn).call(this, movies);
  __privateMethod(this, _PopularMovieBoard_instances, initMoreMoviesButton_fn).call(this);
};
renderTopRatedMovie_fn = function(movie) {
  const $topRated = document.querySelector(".top-rated-container");
  if (isHTMLElement($topRated))
    $topRated.innerHTML = new TopRatedMovie(movie).ui;
};
renderMovies_fn = function(movies) {
  const ul = document.querySelector(".thumbnail-list");
  if (!isHTMLElement(ul)) return;
  if (__privateGet(this, _page) === 1) {
    ul.innerHTML = new MovieList(movies).ui;
    return;
  }
  ul == null ? void 0 : ul.insertAdjacentHTML("beforeend", new MovieList(movies).ui);
};
movieData_fn = async function() {
  try {
    const data = await __privateGet(this, _api).fetchPopularMovies(__privateGet(this, _page));
    return {
      movies: data.results,
      total_pages: data.total_pages
    };
  } catch (e) {
    console.log(e);
    return { movies: [], total_pages: 0 };
  }
};
loadMoreMovies_fn = async function() {
  var _a, _b;
  (_a = __privateGet(this, _moreMoviesButton)) == null ? void 0 : _a.setLoading(true);
  __privateSet(this, _page, __privateGet(this, _page) + 1);
  const { movies: newMovies, total_pages } = await __privateMethod(this, _PopularMovieBoard_instances, movieData_fn).call(this);
  if (!newMovies) return;
  (_b = __privateGet(this, _moreMoviesButton)) == null ? void 0 : _b.setLoading(false);
  __privateMethod(this, _PopularMovieBoard_instances, renderMovies_fn).call(this, newMovies);
  if (__privateGet(this, _page) >= _PopularMovieBoard.MAX_PAGE || __privateGet(this, _page) >= total_pages) {
    __privateMethod(this, _PopularMovieBoard_instances, hideMoreMoviesButton_fn).call(this);
    return;
  }
};
initMoreMoviesButton_fn = function() {
  const $moreMoviesButton = document.querySelector(".more-button-container");
  if (!isHTMLElement($moreMoviesButton)) return;
  __privateSet(this, _moreMoviesButton, new MoreMoviesButton($moreMoviesButton, {
    refetchMovies: () => __privateMethod(this, _PopularMovieBoard_instances, loadMoreMovies_fn).call(this)
  }));
};
hideMoreMoviesButton_fn = function() {
  var _a;
  (_a = document.querySelector(".more-movies-button")) == null ? void 0 : _a.remove();
};
__publicField(_PopularMovieBoard, "MAX_PAGE", 500);
let PopularMovieBoard = _PopularMovieBoard;
const _SearchMovieBoard = class _SearchMovieBoard {
  constructor(parentElement, props) {
    __privateAdd(this, _SearchMovieBoard_instances);
    __privateAdd(this, _parentElement5);
    __privateAdd(this, _props4);
    __privateAdd(this, _page2);
    __privateAdd(this, _api2);
    __privateAdd(this, _moreMoviesButton2, null);
    __privateSet(this, _parentElement5, parentElement);
    __privateSet(this, _props4, props);
    __privateSet(this, _page2, 1);
    const errorRenderer = () => new ErrorScreen("오류가 발생했습니다.").render();
    __privateSet(this, _api2, createApi(errorRenderer));
    __privateMethod(this, _SearchMovieBoard_instances, renderInitialLayout_fn2).call(this);
    __privateMethod(this, _SearchMovieBoard_instances, fetchAndRenderMovies_fn2).call(this);
  }
};
_parentElement5 = new WeakMap();
_props4 = new WeakMap();
_page2 = new WeakMap();
_api2 = new WeakMap();
_moreMoviesButton2 = new WeakMap();
_SearchMovieBoard_instances = new WeakSet();
renderInitialLayout_fn2 = function() {
  __privateGet(this, _parentElement5).innerHTML = /*html*/
  `
      <section class="movie-list-container search-movie-list-container">
          <h2>"${__privateGet(this, _props4).searchParams}" 검색 결과 </h2>
          <ul class='thumbnail-list'>${new MovieList([]).skeleton}</ul>
          <div class="more-button-container"></div>
      </section>
    `;
};
fetchAndRenderMovies_fn2 = async function() {
  const { movies } = await __privateMethod(this, _SearchMovieBoard_instances, movieData_fn2).call(this);
  if (movies.length === 0) {
    __privateMethod(this, _SearchMovieBoard_instances, renderNoResult_fn).call(this);
    return;
  }
  __privateMethod(this, _SearchMovieBoard_instances, renderMovies_fn2).call(this, movies);
  if (movies.length < _SearchMovieBoard.LOAD_COUNT) return;
  __privateMethod(this, _SearchMovieBoard_instances, initMoreMoviesButton_fn2).call(this);
};
renderMovies_fn2 = function(movies) {
  const ul = document.querySelector(".thumbnail-list");
  if (!isHTMLElement(ul)) return;
  if (__privateGet(this, _page2) === 1) {
    ul.innerHTML = new MovieList(movies).ui;
  } else {
    ul == null ? void 0 : ul.insertAdjacentHTML("beforeend", new MovieList(movies).ui);
  }
};
movieData_fn2 = async function() {
  try {
    const data = await __privateGet(this, _api2).searchMovies(
      __privateGet(this, _props4).searchParams,
      __privateGet(this, _page2)
    );
    return { movies: data.results, total_pages: data.total_pages };
  } catch (e) {
    return { movies: [], total_pages: 0 };
  }
};
loadMoreMovies_fn2 = async function() {
  var _a, _b;
  (_a = __privateGet(this, _moreMoviesButton2)) == null ? void 0 : _a.setLoading(true);
  __privateSet(this, _page2, __privateGet(this, _page2) + 1);
  const { movies: newMovies, total_pages } = await __privateMethod(this, _SearchMovieBoard_instances, movieData_fn2).call(this);
  (_b = __privateGet(this, _moreMoviesButton2)) == null ? void 0 : _b.setLoading(false);
  __privateMethod(this, _SearchMovieBoard_instances, renderMovies_fn2).call(this, newMovies);
  if (newMovies.length < _SearchMovieBoard.LOAD_COUNT || __privateGet(this, _page2) >= total_pages) {
    __privateMethod(this, _SearchMovieBoard_instances, hideMoreMoviesButton_fn2).call(this);
  }
};
renderNoResult_fn = function() {
  const h2 = document.querySelector(".movie-list-container h2");
  const ul = document.querySelector("ul.thumbnail-list");
  if (isHTMLElement(ul)) ul.innerHTML = "";
  if (isHTMLElement(h2))
    h2.insertAdjacentHTML(
      "afterend",
      `<div class="fallback-screen">
            <img src="./images/dizzy_planet.png"/>
            <p>검색 결과가 없습니다</p>
        </div>`
    );
};
initMoreMoviesButton_fn2 = function() {
  const $moreMoviesButton = document.querySelector(".more-button-container");
  if (!isHTMLElement($moreMoviesButton)) return;
  __privateSet(this, _moreMoviesButton2, new MoreMoviesButton($moreMoviesButton, {
    refetchMovies: () => __privateMethod(this, _SearchMovieBoard_instances, loadMoreMovies_fn2).call(this)
  }));
};
hideMoreMoviesButton_fn2 = function() {
  var _a;
  (_a = document.querySelector(".more-movies-button")) == null ? void 0 : _a.remove();
};
__publicField(_SearchMovieBoard, "LOAD_COUNT", 20);
let SearchMovieBoard = _SearchMovieBoard;
class App {
  constructor() {
    __privateAdd(this, _App_instances);
  }
  render() {
    __privateMethod(this, _App_instances, renderHeader_fn).call(this);
    __privateMethod(this, _App_instances, renderPopularMovies_fn).call(this);
    __privateMethod(this, _App_instances, renderFooter_fn).call(this);
  }
}
_App_instances = new WeakSet();
renderHeader_fn = function() {
  const $header = document.querySelector("header");
  if (isHTMLElement($header))
    new Header($header, {
      onSearchSubmitted: (params) => __privateMethod(this, _App_instances, renderSearchResult_fn).call(this, params),
      onLogoClicked: () => __privateMethod(this, _App_instances, renderPopularMovies_fn).call(this)
    });
};
renderSearchResult_fn = function(searchParams) {
  const $section = document.querySelector("main");
  if (isHTMLElement($section))
    new SearchMovieBoard($section, { searchParams });
};
renderPopularMovies_fn = function() {
  const $section = document.querySelector("main");
  if (isHTMLElement($section)) new PopularMovieBoard($section);
};
renderFooter_fn = function() {
  const root = document.querySelector("body");
  root == null ? void 0 : root.insertAdjacentHTML("beforeend", Footer());
};
const app = new App();
app.render();
