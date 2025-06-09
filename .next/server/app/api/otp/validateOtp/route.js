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
exports.id = "app/api/otp/validateOtp/route";
exports.ids = ["app/api/otp/validateOtp/route"];
exports.modules = {

/***/ "(rsc)/./app/api/otp/validateOtp/route.js":
/*!******************************************!*\
  !*** ./app/api/otp/validateOtp/route.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/webapi/jwt/verify.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\n\nconst JWT_SECRET = process.env.JWT_SECRET;\nasync function POST(req) {\n    try {\n        const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n        const token = cookieStore.get('token');\n        const otp_token = cookieStore.get('otp_token');\n        const tok = token || otp_token || \"invalid\";\n        if (tok && tok != \"invalid\") {\n            const body = await req.json();\n            const otp = body.otp;\n            const date = body.date;\n            const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_2__.jwtVerify)(tok.value, new TextEncoder().encode(JWT_SECRET));\n            const email = payload['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'] || payload['email'] || null;\n            const resendRes = await fetch(`${\"http://localhost:5076\"}/api/otp/ValidateOtp`, {\n                method: \"POST\",\n                credentials: \"include\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    otp,\n                    date\n                })\n            });\n            if (resendRes.ok) return new Response(JSON.stringify(\"Request Sent\"), {\n                status: 200\n            });\n            const data = await resendRes.json();\n            return new Response(JSON.stringify(data), {\n                status: 400\n            });\n        }\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify('Invalid Request'), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL290cC92YWxpZGF0ZU90cC9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ1Y7QUFDTTtBQUV2QyxNQUFNRyxhQUFhQyxRQUFRQyxHQUFHLENBQUNGLFVBQVU7QUFFbEMsZUFBZUcsS0FBS0MsR0FBRztJQUMxQixJQUFJO1FBQ0EsTUFBTUMsY0FBYyxNQUFNTixxREFBT0E7UUFDakMsTUFBTU8sUUFBUUQsWUFBWUUsR0FBRyxDQUFDO1FBQzlCLE1BQU1DLFlBQVlILFlBQVlFLEdBQUcsQ0FBQztRQUNsQyxNQUFNRSxNQUFNSCxTQUFTRSxhQUFhO1FBQ2xDLElBQUlDLE9BQU9BLE9BQU8sV0FBVztZQUN6QixNQUFNQyxPQUFPLE1BQU1OLElBQUlPLElBQUk7WUFDM0IsTUFBTUMsTUFBTUYsS0FBS0UsR0FBRztZQUNwQixNQUFNQyxPQUFPSCxLQUFLRyxJQUFJO1lBQ3RCLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUcsTUFBTWhCLCtDQUFTQSxDQUFDVyxJQUFJTSxLQUFLLEVBQUUsSUFBSUMsY0FBY0MsTUFBTSxDQUFDakI7WUFDeEUsTUFBTWtCLFFBQVFKLE9BQU8sQ0FBQyxxRUFBcUUsSUFBSUEsT0FBTyxDQUFDLFFBQVEsSUFBSTtZQUNuSCxNQUFNSyxZQUFZLE1BQU1DLE1BQ3BCLEdBQUduQix1QkFBK0IsQ0FBQyxvQkFBb0IsQ0FBQyxFQUN4RDtnQkFDSXFCLFFBQVE7Z0JBQ1JDLGFBQWE7Z0JBQ2JDLFNBQVM7b0JBQUUsZ0JBQWdCO2dCQUFtQjtnQkFDOUNkLE1BQU1lLEtBQUtDLFNBQVMsQ0FBQztvQkFDakJSO29CQUNBTjtvQkFDQUM7Z0JBQ0o7WUFDSjtZQUVKLElBQUlNLFVBQVVRLEVBQUUsRUFDWixPQUFPLElBQUlDLFNBQVNILEtBQUtDLFNBQVMsQ0FBQyxpQkFBaUI7Z0JBQUVHLFFBQVE7WUFBSTtZQUN0RSxNQUFNQyxPQUFPLE1BQU1YLFVBQVVSLElBQUk7WUFDakMsT0FBTyxJQUFJaUIsU0FBU0gsS0FBS0MsU0FBUyxDQUFDSSxPQUFPO2dCQUFFRCxRQUFRO1lBQUk7UUFDNUQ7SUFHSixFQUFFLE9BQU9FLE9BQU87UUFDWixPQUFPLElBQUlsQyxxREFBWUEsQ0FBQzRCLEtBQUtDLFNBQVMsQ0FBQyxvQkFBb0I7WUFBRUcsUUFBUTtRQUFJO0lBQzdFO0FBQ0oiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTW9oYW1hZFxcT25lRHJpdmVcXERlc2t0b3BcXFJ1aGFuX05leHQrYXNwXFxydWhhblxcYXBwXFxhcGlcXG90cFxcdmFsaWRhdGVPdHBcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IHsgand0VmVyaWZ5IH0gZnJvbSAnam9zZSc7XHJcbmltcG9ydCB7IGNvb2tpZXMgfSBmcm9tICduZXh0L2hlYWRlcnMnO1xyXG5cclxuY29uc3QgSldUX1NFQ1JFVCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQ7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY29va2llU3RvcmUgPSBhd2FpdCBjb29raWVzKCk7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBjb29raWVTdG9yZS5nZXQoJ3Rva2VuJyk7XHJcbiAgICAgICAgY29uc3Qgb3RwX3Rva2VuID0gY29va2llU3RvcmUuZ2V0KCdvdHBfdG9rZW4nKTtcclxuICAgICAgICBjb25zdCB0b2sgPSB0b2tlbiB8fCBvdHBfdG9rZW4gfHwgXCJpbnZhbGlkXCI7XHJcbiAgICAgICAgaWYgKHRvayAmJiB0b2sgIT0gXCJpbnZhbGlkXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG90cCA9IGJvZHkub3RwO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gYm9keS5kYXRlO1xyXG4gICAgICAgICAgICBjb25zdCB7IHBheWxvYWQgfSA9IGF3YWl0IGp3dFZlcmlmeSh0b2sudmFsdWUsIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShKV1RfU0VDUkVUKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gcGF5bG9hZFsnaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzJ10gfHwgcGF5bG9hZFsnZW1haWwnXSB8fCBudWxsO1xyXG4gICAgICAgICAgICBjb25zdCByZXNlbmRSZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2FwaS9vdHAvVmFsaWRhdGVPdHBgLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdHAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKHJlc2VuZFJlcy5vaylcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoXCJSZXF1ZXN0IFNlbnRcIiksIHsgc3RhdHVzOiAyMDAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNlbmRSZXMuanNvbigpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpLCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShKU09OLnN0cmluZ2lmeSgnSW52YWxpZCBSZXF1ZXN0JyksIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsImp3dFZlcmlmeSIsImNvb2tpZXMiLCJKV1RfU0VDUkVUIiwicHJvY2VzcyIsImVudiIsIlBPU1QiLCJyZXEiLCJjb29raWVTdG9yZSIsInRva2VuIiwiZ2V0Iiwib3RwX3Rva2VuIiwidG9rIiwiYm9keSIsImpzb24iLCJvdHAiLCJkYXRlIiwicGF5bG9hZCIsInZhbHVlIiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJlbWFpbCIsInJlc2VuZFJlcyIsImZldGNoIiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIlJlc3BvbnNlIiwic3RhdHVzIiwiZGF0YSIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/otp/validateOtp/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fotp%2FvalidateOtp%2Froute&page=%2Fapi%2Fotp%2FvalidateOtp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fotp%2FvalidateOtp%2Froute.js&appDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fotp%2FvalidateOtp%2Froute&page=%2Fapi%2Fotp%2FvalidateOtp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fotp%2FvalidateOtp%2Froute.js&appDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Mohamad_OneDrive_Desktop_Ruhan_Next_asp_ruhan_app_api_otp_validateOtp_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/otp/validateOtp/route.js */ \"(rsc)/./app/api/otp/validateOtp/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/otp/validateOtp/route\",\n        pathname: \"/api/otp/validateOtp\",\n        filename: \"route\",\n        bundlePath: \"app/api/otp/validateOtp/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Mohamad\\\\OneDrive\\\\Desktop\\\\Ruhan_Next+asp\\\\ruhan\\\\app\\\\api\\\\otp\\\\validateOtp\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Mohamad_OneDrive_Desktop_Ruhan_Next_asp_ruhan_app_api_otp_validateOtp_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZvdHAlMkZ2YWxpZGF0ZU90cCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGb3RwJTJGdmFsaWRhdGVPdHAlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZvdHAlMkZ2YWxpZGF0ZU90cCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNNb2hhbWFkJTVDT25lRHJpdmUlNUNEZXNrdG9wJTVDUnVoYW5fTmV4dCUyQmFzcCU1Q3J1aGFuJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNNb2hhbWFkJTVDT25lRHJpdmUlNUNEZXNrdG9wJTVDUnVoYW5fTmV4dCUyQmFzcCU1Q3J1aGFuJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNrRDtBQUMvSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcTW9oYW1hZFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXFJ1aGFuX05leHQrYXNwXFxcXHJ1aGFuXFxcXGFwcFxcXFxhcGlcXFxcb3RwXFxcXHZhbGlkYXRlT3RwXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9vdHAvdmFsaWRhdGVPdHAvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9vdHAvdmFsaWRhdGVPdHBcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL290cC92YWxpZGF0ZU90cC9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXE1vaGFtYWRcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxSdWhhbl9OZXh0K2FzcFxcXFxydWhhblxcXFxhcHBcXFxcYXBpXFxcXG90cFxcXFx2YWxpZGF0ZU90cFxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fotp%2FvalidateOtp%2Froute&page=%2Fapi%2Fotp%2FvalidateOtp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fotp%2FvalidateOtp%2Froute.js&appDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fotp%2FvalidateOtp%2Froute&page=%2Fapi%2Fotp%2FvalidateOtp%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fotp%2FvalidateOtp%2Froute.js&appDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();