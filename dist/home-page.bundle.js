(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);

/* harmony default export */ __webpack_exports__["default"] = (_HomePage__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HomePage_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77);
/* harmony import */ var _HomePage_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HomePage_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SearchHistory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79);
/* harmony import */ var _components_WeatherSearcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92);




var HomePage = function (_a) {
    var history = _a.history;
    var handleSearchQueryGet = function (query) {
        if (query) {
            history.push({
                pathname: '/weather/today',
                search: "city=" + query,
            });
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", { className: "home-wrapper" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", { className: "home-title" }, "Find out the weather of your city"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_WeatherSearcher__WEBPACK_IMPORTED_MODULE_3__["default"], { onSearchGet: handleSearchQueryGet }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SearchHistory__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (HomePage);


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(48);
            var content = __webpack_require__(78);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(50);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".home-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 15%; }\n\n.home-title {\n  padding: 0;\n  margin: 0;\n  font-family: 'Kaushan Script', cursive;\n  font-size: 24px;\n  font-weight: 700;\n  color: #333333;\n  margin-bottom: 15px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);

/* harmony default export */ __webpack_exports__["default"] = (_SearchHistory__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _SearchHistory_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81);
/* harmony import */ var _SearchHistory_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SearchHistory_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SearchHistoryList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var _redux_forecast_forecastSelectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91);





var mapStateToProps = function (store) { return ({
    searchHistory: Object(_redux_forecast_forecastSelectors__WEBPACK_IMPORTED_MODULE_4__["getSearchHistory"])(store),
}); };
var SearchHistory = function (_a) {
    var searchHistory = _a.searchHistory;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", { className: "SearchHistory" }, searchHistory.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchHistoryList__WEBPACK_IMPORTED_MODULE_3__["default"], { searchHistory: searchHistory })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(SearchHistory));


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(48);
            var content = __webpack_require__(82);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(50);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".SearchHistory {\n  width: 40%; }\n\n@media (max-width: 780px) {\n  .SearchHistory {\n    width: 60%; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchHistoryList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);

/* harmony default export */ __webpack_exports__["default"] = (_SearchHistoryList__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchHistoryList_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85);
/* harmony import */ var _SearchHistoryList_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SearchHistoryList_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchHistoryListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87);



var SearchHistoryList = function (_a) {
    var searchHistory = _a.searchHistory;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", { className: "SearchHistory-list" }, searchHistory.map(function (city) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchHistoryListItem__WEBPACK_IMPORTED_MODULE_2__["default"], { key: city, city: city })); })));
};
/* harmony default export */ __webpack_exports__["default"] = (SearchHistoryList);


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(48);
            var content = __webpack_require__(86);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(50);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".SearchHistory-list {\n  padding: 0;\n  margin: 10px 0px 0px 0px;\n  display: flex;\n  justify-content: center;\n  list-style-type: none; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchHistoryListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);

/* harmony default export */ __webpack_exports__["default"] = (_SearchHistoryListItem__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
/* harmony import */ var _SearchHistoryListItem_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89);
/* harmony import */ var _SearchHistoryListItem_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SearchHistoryListItem_scss__WEBPACK_IMPORTED_MODULE_2__);



var SearchHistoryListItem = function (_a) {
    var city = _a.city, history = _a.history;
    var handleSearchQueryGet = function (query) {
        if (query) {
            history.push({
                pathname: '/weather/today',
                search: "city=" + query,
            });
        }
    };
    var handleOnClick = function (e) {
        e.preventDefault();
        handleSearchQueryGet(city);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { className: "SearchHistoryListItem" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { type: "button", onClick: handleOnClick, className: "SearchHistoryListItem-button" }, city)));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(SearchHistoryListItem));


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(48);
            var content = __webpack_require__(90);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(50);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".SearchHistoryListItem {\n  padding-right: 5px; }\n  .SearchHistoryListItem-button {\n    cursor: pointer;\n    font-weight: 600;\n    font-size: 18px;\n    background-color: #e7e7e7;\n    opacity: 0.6;\n    border: 1px solid transparent;\n    padding: 8px;\n    transition: all ease-in-out 0.2s;\n    border-radius: 5px;\n    outline: none; }\n    .SearchHistoryListItem-button:hover {\n      opacity: 1; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentWeather", function() { return getCurrentWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekWeather", function() { return getWeekWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchHistory", function() { return getSearchHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchQuery", function() { return getSearchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoading", function() { return getIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
var getCurrentWeather = function (store) { return store.forecast.currentWeather; };
var getWeekWeather = function (store) { return store.forecast.weekWeather; };
var getSearchHistory = function (store) { return store.forecast.searchHistory; };
var getSearchQuery = function (store) { return store.forecast.searchQuery; };
var getIsLoading = function (store) { return store.forecast.isLoading; };
var getError = function (store) { return store.forecast.error; };


/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WeatherSearcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);

/* harmony default export */ __webpack_exports__["default"] = (_WeatherSearcher__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WeatherSearcher_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94);
/* harmony import */ var _WeatherSearcher_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_WeatherSearcher_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_forecast_forecastSelectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91);
/* harmony import */ var _redux_forecast_forecastActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var mapStateToProps = function (store) { return ({
    searchHistoryGet: Object(_redux_forecast_forecastSelectors__WEBPACK_IMPORTED_MODULE_3__["getSearchHistory"])(store),
}); };
var mapDispatchToProps = function (dispatch) { return ({
    onSearch: function (query) { return dispatch(Object(_redux_forecast_forecastActions__WEBPACK_IMPORTED_MODULE_4__["searchQuery"])(query)); },
    setSearchHistory: function (query) { return dispatch(Object(_redux_forecast_forecastActions__WEBPACK_IMPORTED_MODULE_4__["searchHistory"])(query)); },
    deleteSearchItem: function (city) { return dispatch(Object(_redux_forecast_forecastActions__WEBPACK_IMPORTED_MODULE_4__["deleteFirstSearchHistory"])(city)); },
}); };
var WeatherSearcher = /** @class */ (function (_super) {
    __extends(WeatherSearcher, _super);
    function WeatherSearcher() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            query: '',
        };
        _this.handleChangeQuery = function (e) {
            _this.setState({ query: e.target.value });
        };
        _this.handleSubmitSearchForm = function (e) {
            e.preventDefault();
            var query = _this.state.query;
            var parseQuery = query.toLowerCase();
            if (!query) {
                alert('Type some city');
                return;
            }
            var _a = _this.props, onSearch = _a.onSearch, onSearchGet = _a.onSearchGet, setSearchHistory = _a.setSearchHistory, deleteSearchItem = _a.deleteSearchItem, searchHistoryGet = _a.searchHistoryGet;
            if (!searchHistoryGet.includes(parseQuery)) {
                if (searchHistoryGet.length === 5) {
                    deleteSearchItem(searchHistoryGet[0]);
                }
                setSearchHistory(parseQuery);
            }
            onSearch(parseQuery);
            onSearchGet(parseQuery);
        };
        return _this;
    }
    WeatherSearcher.prototype.render = function () {
        var query = this.state.query;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", { className: "Searchbar" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", { onSubmit: this.handleSubmitSearchForm, className: "SearchForm" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { onChange: this.handleChangeQuery, className: "SearchForm-input", value: query, type: "text", placeholder: "Search city...", autoComplete: "off" }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { type: "submit", className: "SearchForm-button" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "SearchForm-button-label" }, "Search")))));
    };
    return WeatherSearcher;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(WeatherSearcher));


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(48);
            var content = __webpack_require__(95);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(50);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".Searchbar {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding: 24px, 12px, 24px, 12px; }\n\n.SearchForm {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  color: #333333;\n  border-radius: 3px;\n  overflow: hidden;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n  .SearchForm-button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-image: url(\"https://image.flaticon.com/icons/svg/149/149852.svg\");\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none; }\n    .SearchForm-button:hover {\n      opacity: 1; }\n  .SearchForm-button-label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0; }\n  .SearchForm-input {\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px; }\n    .SearchForm-input::placeholder {\n      font: inherit;\n      font-size: 18px; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchQuery", function() { return searchQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchHistory", function() { return searchHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFirstSearchHistory", function() { return deleteFirstSearchHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentWeatherStart", function() { return currentWeatherStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentWeatherSuccess", function() { return currentWeatherSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentWeatherError", function() { return currentWeatherError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekWeatherStart", function() { return weekWeatherStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekWeatherSuccess", function() { return weekWeatherSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weekWeatherError", function() { return weekWeatherError; });
/* harmony import */ var _forecastTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);

// Search Query
var searchQuery = function (query) { return ({
    type: _forecastTypes__WEBPACK_IMPORTED_MODULE_0__["SEARCH_QUERY"],
    payload: { query: query },
}); };
// Search History
var searchHistory = function (history) { return ({
    type: _forecastTypes__WEBPACK_IMPORTED_MODULE_0__["SEARCH_HISTORY"],
    payload: { history: history },
}); };
var deleteFirstSearchHistory = function (city) { return ({
    type: _forecastTypes__WEBPACK_IMPORTED_MODULE_0__["DELETE_FIRST_SEARCH_HISTORY"],
    payload: { city: city },
}); };
// Current Weather
var currentWeatherStart = function () { return ({
    type: _forecastTypes__WEBPACK_IMPORTED_MODULE_0__["CURRENT_WEATHER_START"],
}); };
var currentWeatherSuccess = function (weather) { return ({
    type: _forecastTypes__WEBPACK_IMPORTED_MODULE_0__["CURRENT_WEATHER_SUCCESS"],
    payload: { weather: weather },
}); };
var currentWeatherError = function (error) { return ({
    type: _forecastTypes__WEBPACK_IMPORTED_MODULE_0__["CURRENT_WEATHER_ERROR"],
    payload: { error: error },
}); };
// Week Weather
var weekWeatherStart = function () { return ({
    type: _forecastTypes__WEBPACK_IMPORTED_MODULE_0__["WEEK_WEATHER_START"],
}); };
var weekWeatherSuccess = function (weather) { return ({
    type: _forecastTypes__WEBPACK_IMPORTED_MODULE_0__["WEEK_WEATHER_SUCCESS"],
    payload: { weather: weather },
}); };
var weekWeatherError = function (error) { return ({
    type: _forecastTypes__WEBPACK_IMPORTED_MODULE_0__["WEEK_WEATHER_ERROR"],
    payload: { error: error },
}); };


/***/ })

}]);
//# sourceMappingURL=home-page.bundle.js.map