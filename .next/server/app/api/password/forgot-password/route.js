/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/password/forgot-password/route";
exports.ids = ["app/api/password/forgot-password/route"];
exports.modules = {

/***/ "(rsc)/./app/api/password/forgot-password/route.js":
/*!***************************************************!*\
  !*** ./app/api/password/forgot-password/route.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\nasync function POST(req) {\n    try {\n        const { email } = await req.json();\n        const response = await fetch(`${\"http://localhost:5076\"}/api/change/ResetPasswordRequest`, {\n            method: \"POST\",\n            credentials: \"include\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                email\n            })\n        });\n        if (response.ok) {\n            const data = await response.json();\n            const token = data.token;\n            (0,next_headers__WEBPACK_IMPORTED_MODULE_0__.cookies)().set('otp_token', token, {\n                httpOnly: true,\n                sameSite: 'strict',\n                path: '/',\n                maxAge: 60 * 60 * 24 * 7,\n                secure: \"development\" === \"production\"\n            });\n            return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(JSON.stringify('Request Sent'), {\n                status: 200\n            });\n        } else {\n            return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(JSON.stringify('Error Sending the Request'), {\n                status: 400\n            });\n        }\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse(JSON.stringify('Invalid Request'), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Bhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUM7QUFDSTtBQUVwQyxlQUFlRSxLQUFLQyxHQUFHO0lBQzVCLElBQUk7UUFDRixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1ELElBQUlFLElBQUk7UUFFaEMsTUFBTUMsV0FBVyxNQUFNQyxNQUNyQixHQUFHQyx1QkFBK0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUNwRTtZQUNFRyxRQUFRO1lBQ1JDLGFBQWE7WUFDYkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7WUFDOUNDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRVo7WUFBTTtRQUMvQjtRQUdGLElBQUlFLFNBQVNXLEVBQUUsRUFBRTtZQUNmLE1BQU1DLE9BQU8sTUFBTVosU0FBU0QsSUFBSTtZQUNoQyxNQUFNYyxRQUFRRCxLQUFLQyxLQUFLO1lBQ3hCbkIscURBQU9BLEdBQUdvQixHQUFHLENBQUMsYUFBYUQsT0FBTztnQkFDaENFLFVBQVU7Z0JBQ1ZDLFVBQVU7Z0JBQ1ZDLE1BQU07Z0JBQ05DLFFBQVEsS0FBSyxLQUFLLEtBQUs7Z0JBQ3ZCQyxRQUFPakIsa0JBQXVCO1lBQ2hDO1lBRUEsT0FBTyxJQUFJUCxxREFBWUEsQ0FBQ2MsS0FBS0MsU0FBUyxDQUFDLGlCQUFrQjtnQkFBRVUsUUFBUTtZQUFJO1FBQ3pFLE9BQU87WUFDTCxPQUFPLElBQUl6QixxREFBWUEsQ0FBQ2MsS0FBS0MsU0FBUyxDQUFDLDhCQUErQjtnQkFBRVUsUUFBUTtZQUFJO1FBQ3RGO0lBRUYsRUFBRSxPQUFPQyxPQUFPO1FBQ2QsT0FBTyxJQUFJMUIscURBQVlBLENBQUNjLEtBQUtDLFNBQVMsQ0FBQyxvQkFBcUI7WUFBRVUsUUFBUTtRQUFJO0lBQzVFO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTW9oYW1hZFxcT25lRHJpdmVcXERlc2t0b3BcXFJ1aGFuX05leHQrYXNwXFxydWhhblxcYXBwXFxhcGlcXHBhc3N3b3JkXFxmb3Jnb3QtcGFzc3dvcmRcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgeyBlbWFpbCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hcGkvY2hhbmdlL1Jlc2V0UGFzc3dvcmRSZXF1ZXN0YCxcclxuICAgICAge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsIH0pLFxyXG4gICAgICB9XHJcbiAgICApO1xyXG5cclxuICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGRhdGEudG9rZW47XHJcbiAgICAgIGNvb2tpZXMoKS5zZXQoJ290cF90b2tlbicsIHRva2VuLCB7XHJcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgICAgc2FtZVNpdGU6ICdzdHJpY3QnLFxyXG4gICAgICAgIHBhdGg6ICcvJyxcclxuICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDcsIFxyXG4gICAgICAgIHNlY3VyZTpwcm9jZXNzLmVudi5OT0RFX0VOVj09PVwicHJvZHVjdGlvblwiXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoJ1JlcXVlc3QgU2VudCcgKSwgeyBzdGF0dXM6IDIwMCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KCdFcnJvciBTZW5kaW5nIHRoZSBSZXF1ZXN0JyApLCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoJ0ludmFsaWQgUmVxdWVzdCcgKSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvb2tpZXMiLCJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxIiwiZW1haWwiLCJqc29uIiwicmVzcG9uc2UiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImRhdGEiLCJ0b2tlbiIsInNldCIsImh0dHBPbmx5Iiwic2FtZVNpdGUiLCJwYXRoIiwibWF4QWdlIiwic2VjdXJlIiwic3RhdHVzIiwiZXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/password/forgot-password/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpassword%2Fforgot-password%2Froute&page=%2Fapi%2Fpassword%2Fforgot-password%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpassword%2Fforgot-password%2Froute.js&appDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpassword%2Fforgot-password%2Froute&page=%2Fapi%2Fpassword%2Fforgot-password%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpassword%2Fforgot-password%2Froute.js&appDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Mohamad_OneDrive_Desktop_Ruhan_Next_asp_ruhan_app_api_password_forgot_password_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/password/forgot-password/route.js */ \"(rsc)/./app/api/password/forgot-password/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/password/forgot-password/route\",\n        pathname: \"/api/password/forgot-password\",\n        filename: \"route\",\n        bundlePath: \"app/api/password/forgot-password/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Mohamad\\\\OneDrive\\\\Desktop\\\\Ruhan_Next+asp\\\\ruhan\\\\app\\\\api\\\\password\\\\forgot-password\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Mohamad_OneDrive_Desktop_Ruhan_Next_asp_ruhan_app_api_password_forgot_password_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwYXNzd29yZCUyRmZvcmdvdC1wYXNzd29yZCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcGFzc3dvcmQlMkZmb3Jnb3QtcGFzc3dvcmQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwYXNzd29yZCUyRmZvcmdvdC1wYXNzd29yZCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNNb2hhbWFkJTVDT25lRHJpdmUlNUNEZXNrdG9wJTVDUnVoYW5fTmV4dCUyQmFzcCU1Q3J1aGFuJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNNb2hhbWFkJTVDT25lRHJpdmUlNUNEZXNrdG9wJTVDUnVoYW5fTmV4dCUyQmFzcCU1Q3J1aGFuJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMyRDtBQUN4STtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcTW9oYW1hZFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXFJ1aGFuX05leHQrYXNwXFxcXHJ1aGFuXFxcXGFwcFxcXFxhcGlcXFxccGFzc3dvcmRcXFxcZm9yZ290LXBhc3N3b3JkXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Bhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXE1vaGFtYWRcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxSdWhhbl9OZXh0K2FzcFxcXFxydWhhblxcXFxhcHBcXFxcYXBpXFxcXHBhc3N3b3JkXFxcXGZvcmdvdC1wYXNzd29yZFxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpassword%2Fforgot-password%2Froute&page=%2Fapi%2Fpassword%2Fforgot-password%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpassword%2Fforgot-password%2Froute.js&appDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpassword%2Fforgot-password%2Froute&page=%2Fapi%2Fpassword%2Fforgot-password%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpassword%2Fforgot-password%2Froute.js&appDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();