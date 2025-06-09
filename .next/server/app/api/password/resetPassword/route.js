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
exports.id = "app/api/password/resetPassword/route";
exports.ids = ["app/api/password/resetPassword/route"];
exports.modules = {

/***/ "(rsc)/./app/api/password/resetPassword/route.js":
/*!*************************************************!*\
  !*** ./app/api/password/resetPassword/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/webapi/jwt/verify.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\n\nconst JWT_SECRET = process.env.JWT_SECRET;\nasync function POST(req) {\n    try {\n        const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n        const token = cookieStore.get('reset');\n        const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_2__.jwtVerify)(token.value, new TextEncoder().encode(JWT_SECRET));\n        const email = payload['email'] || null;\n        const resToken = payload['actort'];\n        const body = await req.json();\n        const password = body.password;\n        const res = await fetch(`${\"http://localhost:5076\"}/api/change/ResetPassword`, {\n            method: \"POST\",\n            credentials: \"include\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                email,\n                token: resToken,\n                password: password\n            })\n        });\n        if (res.ok) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify(\"Request Sent\"), {\n                status: 200\n            });\n        } else {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify(\"Error Sending the Request\"), {\n                status: 400\n            });\n        }\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify('Invalid Request'), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Bhc3N3b3JkL3Jlc2V0UGFzc3dvcmQvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQUNWO0FBQ007QUFFdkMsTUFBTUcsYUFBYUMsUUFBUUMsR0FBRyxDQUFDRixVQUFVO0FBRWxDLGVBQWVHLEtBQUtDLEdBQUc7SUFDMUIsSUFBSTtRQUNBLE1BQU1DLGNBQWNOLHFEQUFPQTtRQUMzQixNQUFNTyxRQUFRRCxZQUFZRSxHQUFHLENBQUM7UUFDOUIsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBRyxNQUFNViwrQ0FBU0EsQ0FBQ1EsTUFBTUcsS0FBSyxFQUFFLElBQUlDLGNBQWNDLE1BQU0sQ0FBQ1g7UUFDMUUsTUFBTVksUUFBUUosT0FBTyxDQUFDLFFBQVEsSUFBSTtRQUNsQyxNQUFNSyxXQUFTTCxPQUFPLENBQUMsU0FBUztRQUNoQyxNQUFNTSxPQUFPLE1BQU1WLElBQUlXLElBQUk7UUFDM0IsTUFBTUMsV0FBV0YsS0FBS0UsUUFBUTtRQUM5QixNQUFNQyxNQUFNLE1BQU1DLE1BQU0sR0FBR2pCLHVCQUErQixDQUFDLHlCQUF5QixDQUFDLEVBQUU7WUFDbkZtQixRQUFRO1lBQ1JDLGFBQWE7WUFDYkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7WUFDOUNSLE1BQU1TLEtBQUtDLFNBQVMsQ0FBQztnQkFBRVo7Z0JBQU1OLE9BQU1PO2dCQUFTRyxVQUFTQTtZQUFTO1FBQ2xFO1FBQ0EsSUFBSUMsSUFBSVEsRUFBRSxFQUFFO1lBQ1IsT0FBTyxJQUFJNUIscURBQVlBLENBQUMwQixLQUFLQyxTQUFTLENBQUMsaUJBQWtCO2dCQUFFRSxRQUFRO1lBQUk7UUFDM0UsT0FBTztZQUNILE9BQU8sSUFBSTdCLHFEQUFZQSxDQUFDMEIsS0FBS0MsU0FBUyxDQUFDLDhCQUE4QjtnQkFBRUUsUUFBUTtZQUFJO1FBQ3ZGO0lBQ0osRUFBRSxPQUFPQyxPQUFPO1FBQ1osT0FBTyxJQUFJOUIscURBQVlBLENBQUMwQixLQUFLQyxTQUFTLENBQUMsb0JBQXFCO1lBQUVFLFFBQVE7UUFBSTtJQUM5RTtBQUNKIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXE1vaGFtYWRcXE9uZURyaXZlXFxEZXNrdG9wXFxSdWhhbl9OZXh0K2FzcFxccnVoYW5cXGFwcFxcYXBpXFxwYXNzd29yZFxccmVzZXRQYXNzd29yZFxccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBqd3RWZXJpZnkgfSBmcm9tICdqb3NlJztcclxuaW1wb3J0IHsgY29va2llcyB9IGZyb20gJ25leHQvaGVhZGVycyc7XHJcblxyXG5jb25zdCBKV1RfU0VDUkVUID0gcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBjb29raWVTdG9yZSA9IGNvb2tpZXMoKTtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGNvb2tpZVN0b3JlLmdldCgncmVzZXQnKTtcclxuICAgICAgICBjb25zdCB7IHBheWxvYWQgfSA9IGF3YWl0IGp3dFZlcmlmeSh0b2tlbi52YWx1ZSwgbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKEpXVF9TRUNSRVQpKTtcclxuICAgICAgICBjb25zdCBlbWFpbCA9IHBheWxvYWRbJ2VtYWlsJ10gfHwgbnVsbDtcclxuICAgICAgICBjb25zdCByZXNUb2tlbj1wYXlsb2FkWydhY3RvcnQnXVxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gYm9keS5wYXNzd29yZDtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hcGkvY2hhbmdlL1Jlc2V0UGFzc3dvcmRgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcclxuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLHRva2VuOnJlc1Rva2VuLHBhc3N3b3JkOnBhc3N3b3JkIH0pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoXCJSZXF1ZXN0IFNlbnRcIiApLCB7IHN0YXR1czogMjAwIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KFwiRXJyb3IgU2VuZGluZyB0aGUgUmVxdWVzdFwiKSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KCdJbnZhbGlkIFJlcXVlc3QnICksIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImp3dFZlcmlmeSIsImNvb2tpZXMiLCJKV1RfU0VDUkVUIiwicHJvY2VzcyIsImVudiIsIlBPU1QiLCJyZXEiLCJjb29raWVTdG9yZSIsInRva2VuIiwiZ2V0IiwicGF5bG9hZCIsInZhbHVlIiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJlbWFpbCIsInJlc1Rva2VuIiwiYm9keSIsImpzb24iLCJwYXNzd29yZCIsInJlcyIsImZldGNoIiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsInN0YXR1cyIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/password/resetPassword/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpassword%2FresetPassword%2Froute&page=%2Fapi%2Fpassword%2FresetPassword%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpassword%2FresetPassword%2Froute.js&appDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpassword%2FresetPassword%2Froute&page=%2Fapi%2Fpassword%2FresetPassword%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpassword%2FresetPassword%2Froute.js&appDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Mohamad_OneDrive_Desktop_Ruhan_Next_asp_ruhan_app_api_password_resetPassword_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/password/resetPassword/route.js */ \"(rsc)/./app/api/password/resetPassword/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/password/resetPassword/route\",\n        pathname: \"/api/password/resetPassword\",\n        filename: \"route\",\n        bundlePath: \"app/api/password/resetPassword/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Mohamad\\\\OneDrive\\\\Desktop\\\\Ruhan_Next+asp\\\\ruhan\\\\app\\\\api\\\\password\\\\resetPassword\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Mohamad_OneDrive_Desktop_Ruhan_Next_asp_ruhan_app_api_password_resetPassword_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwYXNzd29yZCUyRnJlc2V0UGFzc3dvcmQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnBhc3N3b3JkJTJGcmVzZXRQYXNzd29yZCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnBhc3N3b3JkJTJGcmVzZXRQYXNzd29yZCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNNb2hhbWFkJTVDT25lRHJpdmUlNUNEZXNrdG9wJTVDUnVoYW5fTmV4dCUyQmFzcCU1Q3J1aGFuJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNNb2hhbWFkJTVDT25lRHJpdmUlNUNEZXNrdG9wJTVDUnVoYW5fTmV4dCUyQmFzcCU1Q3J1aGFuJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUN5RDtBQUN0STtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcTW9oYW1hZFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXFJ1aGFuX05leHQrYXNwXFxcXHJ1aGFuXFxcXGFwcFxcXFxhcGlcXFxccGFzc3dvcmRcXFxccmVzZXRQYXNzd29yZFxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcGFzc3dvcmQvcmVzZXRQYXNzd29yZC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Bhc3N3b3JkL3Jlc2V0UGFzc3dvcmRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Bhc3N3b3JkL3Jlc2V0UGFzc3dvcmQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxNb2hhbWFkXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcUnVoYW5fTmV4dCthc3BcXFxccnVoYW5cXFxcYXBwXFxcXGFwaVxcXFxwYXNzd29yZFxcXFxyZXNldFBhc3N3b3JkXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpassword%2FresetPassword%2Froute&page=%2Fapi%2Fpassword%2FresetPassword%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpassword%2FresetPassword%2Froute.js&appDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpassword%2FresetPassword%2Froute&page=%2Fapi%2Fpassword%2FresetPassword%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpassword%2FresetPassword%2Froute.js&appDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();