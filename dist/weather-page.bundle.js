(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(48);
            var content = __webpack_require__(104);

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

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(50);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".weather-title {\n  margin: 20px 0px;\n  text-align: center;\n  font-family: 'Kaushan Script', cursive;\n  color: #333333;\n  font-weight: 800;\n  font-size: 30px; }\n\n.weather-button {\n  margin-left: 10px;\n  cursor: pointer;\n  font-weight: 600;\n  font-size: 18px;\n  background-color: #e7e7e7;\n  opacity: 0.6;\n  border: 1px solid transparent;\n  padding: 15px;\n  transition: all ease-in-out 0.2s;\n  border-radius: 2px;\n  outline: none; }\n  .weather-button:hover {\n    opacity: 1; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WeatherHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);

/* harmony default export */ __webpack_exports__["default"] = (_WeatherHeader__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
/* harmony import */ var _WeatherHeader_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(107);
/* harmony import */ var _WeatherHeader_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_WeatherHeader_scss__WEBPACK_IMPORTED_MODULE_2__);



var WeatherHeader = function (_a) {
    var match = _a.match, location = _a.location;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", { className: "WeatherHeader" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", { className: "WeatherHeader-list" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { className: "WeatherHeader-list-item" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { className: "WeatherHeader-list-link", activeClassName: "WeatherHeader-list-link__active", to: {
                        pathname: match.url + "/today",
                        search: location.search,
                    } }, "Today")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { className: "WeatherHeader-list-item" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], { className: "WeatherHeader-list-link", activeClassName: "WeatherHeader-list-link__active", to: {
                        pathname: match.url + "/future",
                        search: location.search,
                    } }, "Future")))));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(WeatherHeader));


/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(48);
            var content = __webpack_require__(108);

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

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(50);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".WeatherHeader-list {\n  margin: 0;\n  list-style-type: none;\n  box-shadow: 0px 7px 12px 1px rgba(0, 0, 0, 0.75);\n  display: flex;\n  align-items: center; }\n  .WeatherHeader-list-item {\n    padding: 25px;\n    color: #333333;\n    font-size: 22px;\n    font-weight: 700; }\n  .WeatherHeader-list-link {\n    text-decoration: none;\n    color: black;\n    transition: color ease-in-out 0.3s; }\n    .WeatherHeader-list-link:hover {\n      color: #b81149; }\n    .WeatherHeader-list-link__active {\n      color: #b81149; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodayForecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(110);

/* harmony default export */ __webpack_exports__["default"] = (_TodayForecast__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _ForecastList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(111);
/* harmony import */ var _redux_forecast_forecastSelectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);




var mapStateToProps = function (store) { return ({
    weatherList: Object(_redux_forecast_forecastSelectors__WEBPACK_IMPORTED_MODULE_3__["getCurrentWeather"])(store),
}); };
var TodayForecast = function (_a) {
    var weatherList = _a.weatherList;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ForecastList__WEBPACK_IMPORTED_MODULE_2__["default"], { forecastList: weatherList })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(TodayForecast));


/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForecastList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(112);

/* harmony default export */ __webpack_exports__["default"] = (_ForecastList__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ForecastList_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(113);
/* harmony import */ var _ForecastList_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ForecastList_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ForecastListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(115);



var ForecastList = function (_a) {
    var forecastList = _a.forecastList;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", { className: "ForecastList" }, forecastList.map(function (item) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ForecastListItem__WEBPACK_IMPORTED_MODULE_2__["default"], { key: item.dt, forecast: item })); })));
};
/* harmony default export */ __webpack_exports__["default"] = (ForecastList);


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(48);
            var content = __webpack_require__(114);

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

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(50);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ForecastList {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 90%; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ForecastListItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(116);

/* harmony default export */ __webpack_exports__["default"] = (_ForecastListItem__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ForecastListItem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(117);
/* harmony import */ var _ForecastListItem_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ForecastListItem_scss__WEBPACK_IMPORTED_MODULE_1__);


var getIcon = function (icon) {
    if (icon === void 0) { icon = ''; }
    return "https://openweathermap.org/img/wn/" + icon + "@2x.png";
};
var ForecastListItem = function (_a) {
    var forecast = _a.forecast;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", { className: "ForecastListItem" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "ForecastListItem-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "ForecastListItem-main" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { alt: forecast.weather[0].main, src: getIcon(forecast.weather[0].icon) }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, forecast.main.temp + " \u00B0C")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", { className: "ForecastListItem-date" }, forecast.dt_txt)),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "ForecastListItem-stat" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: "ForecastListItem-stat-text" }, "Min: " + forecast.main.temp_min + "\u00B0"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: "ForecastListItem-stat-text" }, "Max: " + forecast.main.temp_max + "\u00B0"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: "ForecastListItem-stat-text" }, "Feels: " + forecast.main.feels_like + "\u00B0"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: "ForecastListItem-stat-text" }, "Humidity: " + forecast.main.humidity + "%"))));
};
/* harmony default export */ __webpack_exports__["default"] = (ForecastListItem);


/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(48);
            var content = __webpack_require__(118);

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

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(50);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ForecastListItem {\n  display: flex;\n  flex-direction: column;\n  min-width: 95%;\n  margin-top: 15px;\n  padding: 25px;\n  box-shadow: 13px 12px 12px -7px rgba(0, 0, 0, 0.75);\n  color: #333333; }\n  .ForecastListItem-wrapper {\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n  .ForecastListItem-main {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 700;\n    font-size: 20px; }\n  .ForecastListItem-stat {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n    color: #333333;\n    font-weight: 600;\n    font-size: 18px; }\n    .ForecastListItem-stat-text {\n      padding-right: 15px; }\n  .ForecastListItem-date {\n    font-size: 20px;\n    font-weight: 700; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FutureForecast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(120);

/* harmony default export */ __webpack_exports__["default"] = (_FutureForecast__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _ForecastList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(111);
/* harmony import */ var _redux_forecast_forecastSelectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);




var mapStateToProps = function (store) { return ({
    weatherList: Object(_redux_forecast_forecastSelectors__WEBPACK_IMPORTED_MODULE_3__["getWeekWeather"])(store),
}); };
var FutureForecast = function (_a) {
    var weatherList = _a.weatherList;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ForecastList__WEBPACK_IMPORTED_MODULE_2__["default"], { forecastList: weatherList })));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(FutureForecast));


/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forecastActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _services_weatherAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(122);
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(150);



var getWeather = function (query) { return function (dispatch) {
    dispatch(_forecastActions__WEBPACK_IMPORTED_MODULE_0__["currentWeatherStart"]());
    dispatch(_forecastActions__WEBPACK_IMPORTED_MODULE_0__["weekWeatherStart"]());
    Object(_services_weatherAPI__WEBPACK_IMPORTED_MODULE_1__["default"])(query)
        .then(function (res) {
        var list = res.data.list;
        var currentForecast = list.filter(function (listItem) { return Object(_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["default"])(listItem); });
        dispatch(_forecastActions__WEBPACK_IMPORTED_MODULE_0__["currentWeatherSuccess"](currentForecast));
        dispatch(_forecastActions__WEBPACK_IMPORTED_MODULE_0__["weekWeatherSuccess"](list));
    })
        .catch(function (err) {
        dispatch(_forecastActions__WEBPACK_IMPORTED_MODULE_0__["currentWeatherError"](err));
        dispatch(_forecastActions__WEBPACK_IMPORTED_MODULE_0__["weekWeatherError"](err));
    });
}; };
/* harmony default export */ __webpack_exports__["default"] = (getWeather);


/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var APIkey = 'd123024470f09ca0e7431a75e6756167';
var getWeatherForecast = function (city) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric&appid=" + APIkey);
};
/* harmony default export */ __webpack_exports__["default"] = (getWeatherForecast);


/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(151);

var currentForecastFilter = function (timeWeather) {
    var startDay = _getDate__WEBPACK_IMPORTED_MODULE_0__["default"].getStartDay() <= Date.parse(timeWeather.dt_txt);
    var endDay = _getDate__WEBPACK_IMPORTED_MODULE_0__["default"].getStartDay(1) > Date.parse(timeWeather.dt_txt);
    return startDay && endDay;
};
/* harmony default export */ __webpack_exports__["default"] = (currentForecastFilter);


/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    getStartDay: function (days) {
        if (days === void 0) { days = 0; }
        var date = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + days).toString();
        return Date.parse(date);
    },
});


/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentWeather", function() { return getCurrentWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeekWeather", function() { return getWeekWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchHistory", function() { return getSearchHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSearchQuery", function() { return getSearchQuery; });
var getCurrentWeather = function (store) { return store.forecast.currentWeather; };
var getWeekWeather = function (store) { return store.forecast.weekWeather; };
var getSearchHistory = function (store) { return store.forecast.searchHistory; };
var getSearchQuery = function (store) { return store.forecast.searchQuery; };


/***/ }),

/***/ 84:
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


/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WeatherPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);

/* harmony default export */ __webpack_exports__["default"] = (_WeatherPage__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53);
/* harmony import */ var _WeatherPage_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(103);
/* harmony import */ var _WeatherPage_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_WeatherPage_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_WeatherHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(105);
/* harmony import */ var _components_TodayForecast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(109);
/* harmony import */ var _components_FutureForecast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(119);
/* harmony import */ var _redux_forecast_forecastOperations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(121);
/* harmony import */ var _redux_forecast_forecastSelectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(83);
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










var getCategoryFromLocation = function (location) {
    return query_string__WEBPACK_IMPORTED_MODULE_1___default.a.parse(location.search).city;
};
var mapStateToProps = function (store) { return ({
    todayForecast: Object(_redux_forecast_forecastSelectors__WEBPACK_IMPORTED_MODULE_9__["getCurrentWeather"])(store),
}); };
var mapDispatchToProps = {
    getWeatherProp: _redux_forecast_forecastOperations__WEBPACK_IMPORTED_MODULE_8__["default"],
};
var WeatherPage = /** @class */ (function (_super) {
    __extends(WeatherPage, _super);
    function WeatherPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleOnClick = function (e) {
            e.preventDefault();
            var history = _this.props.history;
            history.push('/');
        };
        return _this;
    }
    WeatherPage.prototype.componentDidMount = function () {
        var _a = this.props, location = _a.location, getWeatherProp = _a.getWeatherProp;
        var query = getCategoryFromLocation(location);
        if (query) {
            getWeatherProp(query.toString());
        }
    };
    WeatherPage.prototype.render = function () {
        var _a = this.props, match = _a.match, todayForecast = _a.todayForecast, location = _a.location;
        var query = getCategoryFromLocation(location);
        return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", { className: "weather" },
            todayForecast.length > 0 ? (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_WeatherHeader__WEBPACK_IMPORTED_MODULE_5__["default"], null)) : (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", { className: "weather--title" }, "We don't have a weather forecast for that city.")),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null,
                todayForecast.length > 0 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", { className: "weather-title" }, "Weather forecast of " + query),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", { type: "button", onClick: this.handleOnClick, className: "weather-button" }, "Back to search")),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { path: match.path + "/today", component: _components_TodayForecast__WEBPACK_IMPORTED_MODULE_6__["default"] }),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], { path: match.path + "/future", component: _components_FutureForecast__WEBPACK_IMPORTED_MODULE_7__["default"] })));
    };
    return WeatherPage;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["connect"])(mapStateToProps, mapDispatchToProps)(WeatherPage));


/***/ })

}]);
//# sourceMappingURL=weather-page.bundle.js.map