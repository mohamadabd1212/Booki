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
exports.id = "app/api/resetPassword/route";
exports.ids = ["app/api/resetPassword/route"];
exports.modules = {

/***/ "(rsc)/./app/api/resetPassword/route.js":
/*!****************************************!*\
  !*** ./app/api/resetPassword/route.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/webapi/jwt/verify.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\n\nconst JWT_SECRET = process.env.JWT_SECRET;\nasync function POST(req) {\n    try {\n        // NO await here:\n        const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n        const token = cookieStore.get('reset');\n        if (!token) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"No valid token found\"\n            }, {\n                status: 400\n            });\n        }\n        const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_2__.jwtVerify)(token.value, new TextEncoder().encode(JWT_SECRET));\n        console.log(payload);\n        const email = payload['email'] || null;\n        const resToken = payload['actort'];\n        console.log(email);\n        if (!email) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Email not found in token\"\n            }, {\n                status: 400\n            });\n        }\n        const body = await req.json();\n        const password = body.password;\n        console.log(password);\n        const res = await fetch(`${\"http://localhost:5076\"}/api/change/ResetPassword`, {\n            method: \"POST\",\n            credentials: \"include\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                email,\n                token: resToken,\n                password: password\n            })\n        });\n        if (res.ok) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: \"Password reset Successfully\"\n            }, {\n                status: 200\n            });\n        } else {\n            const errorText = await res.text();\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: `Password reset Successfully: ${errorText}`\n            }, {\n                status: res.status\n            });\n        }\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: 'Invalid token'\n        }, {\n            status: 403\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Jlc2V0UGFzc3dvcmQvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQUNWO0FBQ007QUFFdkMsTUFBTUcsYUFBYUMsUUFBUUMsR0FBRyxDQUFDRixVQUFVO0FBRWxDLGVBQWVHLEtBQUtDLEdBQUc7SUFDMUIsSUFBSTtRQUNBLGlCQUFpQjtRQUVqQixNQUFNQyxjQUFjTixxREFBT0E7UUFHM0IsTUFBTU8sUUFBUUQsWUFBWUUsR0FBRyxDQUFDO1FBRTlCLElBQUksQ0FBQ0QsT0FBTztZQUNSLE9BQU9ULHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBdUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQzlFO1FBRUEsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBRyxNQUFNYiwrQ0FBU0EsQ0FBQ1EsTUFBTU0sS0FBSyxFQUFFLElBQUlDLGNBQWNDLE1BQU0sQ0FBQ2Q7UUFDMUVlLFFBQVFDLEdBQUcsQ0FBQ0w7UUFDWixNQUFNTSxRQUFRTixPQUFPLENBQUMsUUFBUSxJQUFJO1FBQ2xDLE1BQU1PLFdBQVNQLE9BQU8sQ0FBQyxTQUFTO1FBQ2hDSSxRQUFRQyxHQUFHLENBQUNDO1FBRVosSUFBSSxDQUFDQSxPQUFPO1lBQ1IsT0FBT3BCLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBMkIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ2xGO1FBQ0EsTUFBTVMsT0FBTyxNQUFNZixJQUFJSSxJQUFJO1FBQzNCLE1BQU1ZLFdBQVdELEtBQUtDLFFBQVE7UUFDOUJMLFFBQVFDLEdBQUcsQ0FBQ0k7UUFDWixNQUFNQyxNQUFNLE1BQU1DLE1BQU0sR0FBR3JCLHVCQUErQixDQUFDLHlCQUF5QixDQUFDLEVBQUU7WUFDbkZ1QixRQUFRO1lBQ1JDLGFBQWE7WUFDYkMsU0FBUztnQkFBRSxnQkFBZ0I7WUFBbUI7WUFDOUNQLE1BQU1RLEtBQUtDLFNBQVMsQ0FBQztnQkFBRVg7Z0JBQU1YLE9BQU1ZO2dCQUFTRSxVQUFTQTtZQUFTO1FBQ2xFO1FBRUEsSUFBSUMsSUFBSVEsRUFBRSxFQUFFO1lBQ1IsT0FBT2hDLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7Z0JBQUVzQixTQUFTO1lBQThCLEdBQUc7Z0JBQUVwQixRQUFRO1lBQUk7UUFDdkYsT0FBTztZQUNILE1BQU1xQixZQUFZLE1BQU1WLElBQUlXLElBQUk7WUFDaEMsT0FBT25DLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7Z0JBQUVDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRXNCLFdBQVc7WUFBQyxHQUFHO2dCQUFFckIsUUFBUVcsSUFBSVgsTUFBTTtZQUFDO1FBQzFHO0lBQ0osRUFBRSxPQUFPRCxPQUFPO1FBQ1osT0FBT1oscURBQVlBLENBQUNXLElBQUksQ0FBQztZQUFFQyxPQUFPO1FBQWdCLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3ZFO0FBQ0oiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTW9oYW1hZFxcT25lRHJpdmVcXERlc2t0b3BcXFJ1aGFuX05leHQrYXNwXFxydWhhblxcYXBwXFxhcGlcXHJlc2V0UGFzc3dvcmRcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IHsgand0VmVyaWZ5IH0gZnJvbSAnam9zZSc7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnO1xyXG5cclxuY29uc3QgSldUX1NFQ1JFVCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQ7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8gTk8gYXdhaXQgaGVyZTpcclxuXHJcbiAgICAgICAgY29uc3QgY29va2llU3RvcmUgPSBjb29raWVzKCk7XHJcblxyXG5cclxuICAgICAgICBjb25zdCB0b2tlbiA9IGNvb2tpZVN0b3JlLmdldCgncmVzZXQnKTtcclxuXHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJObyB2YWxpZCB0b2tlbiBmb3VuZFwiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7IHBheWxvYWQgfSA9IGF3YWl0IGp3dFZlcmlmeSh0b2tlbi52YWx1ZSwgbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKEpXVF9TRUNSRVQpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwYXlsb2FkKVxyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gcGF5bG9hZFsnZW1haWwnXSB8fCBudWxsO1xyXG4gICAgICAgIGNvbnN0IHJlc1Rva2VuPXBheWxvYWRbJ2FjdG9ydCddXHJcbiAgICAgICAgY29uc29sZS5sb2coZW1haWwpXHJcblxyXG4gICAgICAgIGlmICghZW1haWwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiRW1haWwgbm90IGZvdW5kIGluIHRva2VuXCIgfSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBib2R5LnBhc3N3b3JkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhc3N3b3JkKVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2FwaS9jaGFuZ2UvUmVzZXRQYXNzd29yZGAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwsdG9rZW46cmVzVG9rZW4scGFzc3dvcmQ6cGFzc3dvcmQgfSksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJQYXNzd29yZCByZXNldCBTdWNjZXNzZnVsbHlcIiB9LCB7IHN0YXR1czogMjAwIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBgUGFzc3dvcmQgcmVzZXQgU3VjY2Vzc2Z1bGx5OiAke2Vycm9yVGV4dH1gIH0sIHsgc3RhdHVzOiByZXMuc3RhdHVzIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6ICdJbnZhbGlkIHRva2VuJyB9LCB7IHN0YXR1czogNDAzIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJqd3RWZXJpZnkiLCJjb29raWVzIiwiSldUX1NFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJQT1NUIiwicmVxIiwiY29va2llU3RvcmUiLCJ0b2tlbiIsImdldCIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsInBheWxvYWQiLCJ2YWx1ZSIsIlRleHRFbmNvZGVyIiwiZW5jb2RlIiwiY29uc29sZSIsImxvZyIsImVtYWlsIiwicmVzVG9rZW4iLCJib2R5IiwicGFzc3dvcmQiLCJyZXMiLCJmZXRjaCIsIk5FWFRfUFVCTElDX0FQSV9VUkwiLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJtZXNzYWdlIiwiZXJyb3JUZXh0IiwidGV4dCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/resetPassword/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FresetPassword%2Froute&page=%2Fapi%2FresetPassword%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FresetPassword%2Froute.js&appDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FresetPassword%2Froute&page=%2Fapi%2FresetPassword%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FresetPassword%2Froute.js&appDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Mohamad_OneDrive_Desktop_Ruhan_Next_asp_ruhan_app_api_resetPassword_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/resetPassword/route.js */ \"(rsc)/./app/api/resetPassword/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/resetPassword/route\",\n        pathname: \"/api/resetPassword\",\n        filename: \"route\",\n        bundlePath: \"app/api/resetPassword/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Mohamad\\\\OneDrive\\\\Desktop\\\\Ruhan_Next+asp\\\\ruhan\\\\app\\\\api\\\\resetPassword\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Mohamad_OneDrive_Desktop_Ruhan_Next_asp_ruhan_app_api_resetPassword_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyZXNldFBhc3N3b3JkJTJGcm91dGUmcGFnZT0lMkZhcGklMkZyZXNldFBhc3N3b3JkJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcmVzZXRQYXNzd29yZCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNNb2hhbWFkJTVDT25lRHJpdmUlNUNEZXNrdG9wJTVDUnVoYW5fTmV4dCUyQmFzcCU1Q3J1aGFuJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNNb2hhbWFkJTVDT25lRHJpdmUlNUNEZXNrdG9wJTVDUnVoYW5fTmV4dCUyQmFzcCU1Q3J1aGFuJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUMrQztBQUM1SDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcTW9oYW1hZFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXFJ1aGFuX05leHQrYXNwXFxcXHJ1aGFuXFxcXGFwcFxcXFxhcGlcXFxccmVzZXRQYXNzd29yZFxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvcmVzZXRQYXNzd29yZC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Jlc2V0UGFzc3dvcmRcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Jlc2V0UGFzc3dvcmQvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxNb2hhbWFkXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcUnVoYW5fTmV4dCthc3BcXFxccnVoYW5cXFxcYXBwXFxcXGFwaVxcXFxyZXNldFBhc3N3b3JkXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FresetPassword%2Froute&page=%2Fapi%2FresetPassword%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FresetPassword%2Froute.js&appDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FresetPassword%2Froute&page=%2Fapi%2FresetPassword%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FresetPassword%2Froute.js&appDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();