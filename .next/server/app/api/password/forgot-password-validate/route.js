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
exports.id = "app/api/password/forgot-password-validate/route";
exports.ids = ["app/api/password/forgot-password-validate/route"];
exports.modules = {

/***/ "(rsc)/./app/api/password/forgot-password-validate/route.js":
/*!************************************************************!*\
  !*** ./app/api/password/forgot-password-validate/route.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/webapi/jwt/verify.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\n\nconst JWT_SECRET = process.env.JWT_SECRET || \"\";\nasync function GET() {\n    try {\n        const cookieStore = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n        const otpToken = cookieStore.get(\"otp_token\");\n        const { payload } = await (0,jose__WEBPACK_IMPORTED_MODULE_2__.jwtVerify)(otpToken.value, new TextEncoder().encode(JWT_SECRET));\n        const email = payload[\"email\"] || null;\n        const apiResponse = await fetch(`${\"http://localhost:5076\"}/api/change/ValidateResetPasswordRequest`, {\n            method: \"POST\",\n            credentials: \"include\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                email\n            })\n        });\n        if (!apiResponse.ok) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify(\"Error Sending the Request\"), {\n                status: 400\n            });\n        }\n        const data = await apiResponse.json();\n        const token = data.token;\n        const response = new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify(\"Request Sent\"), {\n            status: 200\n        });\n        response.cookies.delete(\"otp_token\", {\n            path: \"/\"\n        });\n        response.cookies.set(\"reset\", token, {\n            httpOnly: true,\n            sameSite: \"strict\",\n            path: \"/\",\n            maxAge: 60 * 2,\n            secure: \"development\" === \"production\"\n        });\n        return response;\n    } catch (error) {\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify(\"Invalid Request\"), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3Bhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC12YWxpZGF0ZS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ1Y7QUFDTTtBQUV2QyxNQUFNRyxhQUFhQyxRQUFRQyxHQUFHLENBQUNGLFVBQVUsSUFBSTtBQUV0QyxlQUFlRztJQUNwQixJQUFJO1FBQ0YsTUFBTUMsY0FBY0wscURBQU9BO1FBQzNCLE1BQU1NLFdBQVdELFlBQVlFLEdBQUcsQ0FBQztRQUNqQyxNQUFNLEVBQUVDLE9BQU8sRUFBRSxHQUFHLE1BQU1ULCtDQUFTQSxDQUNqQ08sU0FBU0csS0FBSyxFQUNkLElBQUlDLGNBQWNDLE1BQU0sQ0FBQ1Y7UUFFM0IsTUFBTVcsUUFBT0osT0FBTyxDQUFDLFFBQVEsSUFDM0I7UUFDRixNQUFNSyxjQUFjLE1BQU1DLE1BQ3hCLEdBQUdaLHVCQUErQixDQUFDLHdDQUF3QyxDQUFDLEVBQzVFO1lBQ0VjLFFBQVE7WUFDUkMsYUFBYTtZQUNiQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVUO1lBQU07UUFDL0I7UUFHRixJQUFJLENBQUNDLFlBQVlTLEVBQUUsRUFBRTtZQUNuQixPQUFPLElBQUl4QixxREFBWUEsQ0FBQ3NCLEtBQUtDLFNBQVMsQ0FBQyw4QkFBK0I7Z0JBQUVFLFFBQVE7WUFBSTtRQUN0RjtRQUVBLE1BQU1DLE9BQU8sTUFBTVgsWUFBWVksSUFBSTtRQUNuQyxNQUFNQyxRQUFRRixLQUFLRSxLQUFLO1FBR3hCLE1BQU1DLFdBQVcsSUFBSTdCLHFEQUFZQSxDQUFDc0IsS0FBS0MsU0FBUyxDQUFDLGlCQUMvQztZQUFFRSxRQUFRO1FBQUk7UUFHaEJJLFNBQVMzQixPQUFPLENBQUM0QixNQUFNLENBQUMsYUFBYTtZQUFFQyxNQUFNO1FBQUk7UUFFakRGLFNBQVMzQixPQUFPLENBQUM4QixHQUFHLENBQUMsU0FBU0osT0FBTztZQUNuQ0ssVUFBVTtZQUNWQyxVQUFVO1lBQ1ZILE1BQU07WUFDTkksUUFBUSxLQUFLO1lBQ2JDLFFBQVFoQyxrQkFBeUI7UUFDbkM7UUFFQSxPQUFPeUI7SUFDVCxFQUFFLE9BQU9RLE9BQU87UUFDZCxPQUFPLElBQUlyQyxxREFBWUEsQ0FBQ3NCLEtBQUtDLFNBQVMsQ0FBQyxvQkFDckM7WUFBRUUsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTW9oYW1hZFxcT25lRHJpdmVcXERlc2t0b3BcXFJ1aGFuX05leHQrYXNwXFxydWhhblxcYXBwXFxhcGlcXHBhc3N3b3JkXFxmb3Jnb3QtcGFzc3dvcmQtdmFsaWRhdGVcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgeyBqd3RWZXJpZnkgfSBmcm9tIFwiam9zZVwiO1xyXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xyXG5cclxuY29uc3QgSldUX1NFQ1JFVCA9IHByb2Nlc3MuZW52LkpXVF9TRUNSRVQgfHwgXCJcIjtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNvb2tpZVN0b3JlID0gY29va2llcygpO1xyXG4gICAgY29uc3Qgb3RwVG9rZW4gPSBjb29raWVTdG9yZS5nZXQoXCJvdHBfdG9rZW5cIik7XHJcbiAgICBjb25zdCB7IHBheWxvYWQgfSA9IGF3YWl0IGp3dFZlcmlmeShcclxuICAgICAgb3RwVG9rZW4udmFsdWUsXHJcbiAgICAgIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShKV1RfU0VDUkVUKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGVtYWlsID1wYXlsb2FkW1wiZW1haWxcIl0gfHxcclxuICAgICAgbnVsbDtcclxuICAgIGNvbnN0IGFwaVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkx9L2FwaS9jaGFuZ2UvVmFsaWRhdGVSZXNldFBhc3N3b3JkUmVxdWVzdGAsXHJcbiAgICAgIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWwgfSksXHJcbiAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgaWYgKCFhcGlSZXNwb25zZS5vaykge1xyXG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShKU09OLnN0cmluZ2lmeShcIkVycm9yIFNlbmRpbmcgdGhlIFJlcXVlc3RcIiApLCB7IHN0YXR1czogNDAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhcGlSZXNwb25zZS5qc29uKCk7XHJcbiAgICBjb25zdCB0b2tlbiA9IGRhdGEudG9rZW47XHJcblxyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlID0gbmV3IE5leHRSZXNwb25zZShKU09OLnN0cmluZ2lmeShcIlJlcXVlc3QgU2VudFwiICksXHJcbiAgICAgIHsgc3RhdHVzOiAyMDAgfVxyXG4gICAgKTtcclxuXHJcbiAgICByZXNwb25zZS5jb29raWVzLmRlbGV0ZShcIm90cF90b2tlblwiLCB7IHBhdGg6IFwiL1wiIH0pO1xyXG5cclxuICAgIHJlc3BvbnNlLmNvb2tpZXMuc2V0KFwicmVzZXRcIiwgdG9rZW4sIHtcclxuICAgICAgaHR0cE9ubHk6IHRydWUsXHJcbiAgICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxyXG4gICAgICBwYXRoOiBcIi9cIixcclxuICAgICAgbWF4QWdlOiA2MCAqIDIsIC8vIDIgbWludXRlc1xyXG4gICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoXCJJbnZhbGlkIFJlcXVlc3RcIiApLFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJqd3RWZXJpZnkiLCJjb29raWVzIiwiSldUX1NFQ1JFVCIsInByb2Nlc3MiLCJlbnYiLCJHRVQiLCJjb29raWVTdG9yZSIsIm90cFRva2VuIiwiZ2V0IiwicGF5bG9hZCIsInZhbHVlIiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJlbWFpbCIsImFwaVJlc3BvbnNlIiwiZmV0Y2giLCJORVhUX1BVQkxJQ19BUElfVVJMIiwibWV0aG9kIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsInN0YXR1cyIsImRhdGEiLCJqc29uIiwidG9rZW4iLCJyZXNwb25zZSIsImRlbGV0ZSIsInBhdGgiLCJzZXQiLCJodHRwT25seSIsInNhbWVTaXRlIiwibWF4QWdlIiwic2VjdXJlIiwiZXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/password/forgot-password-validate/route.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpassword%2Fforgot-password-validate%2Froute&page=%2Fapi%2Fpassword%2Fforgot-password-validate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpassword%2Fforgot-password-validate%2Froute.js&appDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpassword%2Fforgot-password-validate%2Froute&page=%2Fapi%2Fpassword%2Fforgot-password-validate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpassword%2Fforgot-password-validate%2Froute.js&appDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Mohamad_OneDrive_Desktop_Ruhan_Next_asp_ruhan_app_api_password_forgot_password_validate_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/password/forgot-password-validate/route.js */ \"(rsc)/./app/api/password/forgot-password-validate/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/password/forgot-password-validate/route\",\n        pathname: \"/api/password/forgot-password-validate\",\n        filename: \"route\",\n        bundlePath: \"app/api/password/forgot-password-validate/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Mohamad\\\\OneDrive\\\\Desktop\\\\Ruhan_Next+asp\\\\ruhan\\\\app\\\\api\\\\password\\\\forgot-password-validate\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Mohamad_OneDrive_Desktop_Ruhan_Next_asp_ruhan_app_api_password_forgot_password_validate_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwYXNzd29yZCUyRmZvcmdvdC1wYXNzd29yZC12YWxpZGF0ZSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcGFzc3dvcmQlMkZmb3Jnb3QtcGFzc3dvcmQtdmFsaWRhdGUlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwYXNzd29yZCUyRmZvcmdvdC1wYXNzd29yZC12YWxpZGF0ZSUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNNb2hhbWFkJTVDT25lRHJpdmUlNUNEZXNrdG9wJTVDUnVoYW5fTmV4dCUyQmFzcCU1Q3J1aGFuJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNNb2hhbWFkJTVDT25lRHJpdmUlNUNEZXNrdG9wJTVDUnVoYW5fTmV4dCUyQmFzcCU1Q3J1aGFuJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUNvRTtBQUNqSjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcTW9oYW1hZFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXFJ1aGFuX05leHQrYXNwXFxcXHJ1aGFuXFxcXGFwcFxcXFxhcGlcXFxccGFzc3dvcmRcXFxcZm9yZ290LXBhc3N3b3JkLXZhbGlkYXRlXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQtdmFsaWRhdGUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQtdmFsaWRhdGVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Bhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC12YWxpZGF0ZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXE1vaGFtYWRcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxSdWhhbl9OZXh0K2FzcFxcXFxydWhhblxcXFxhcHBcXFxcYXBpXFxcXHBhc3N3b3JkXFxcXGZvcmdvdC1wYXNzd29yZC12YWxpZGF0ZVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpassword%2Fforgot-password-validate%2Froute&page=%2Fapi%2Fpassword%2Fforgot-password-validate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpassword%2Fforgot-password-validate%2Froute.js&appDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fpassword%2Fforgot-password-validate%2Froute&page=%2Fapi%2Fpassword%2Fforgot-password-validate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fpassword%2Fforgot-password-validate%2Froute.js&appDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CMohamad%5COneDrive%5CDesktop%5CRuhan_Next%2Basp%5Cruhan&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();