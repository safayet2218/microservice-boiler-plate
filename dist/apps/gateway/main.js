/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/gateway/src/gateway.controller.ts":
/*!************************************************!*\
  !*** ./apps/gateway/src/gateway.controller.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var GatewayController_1;
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GatewayController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const shared_1 = __webpack_require__(/*! @app/shared */ "./libs/common/shared/src/index.ts");
let GatewayController = GatewayController_1 = class GatewayController {
    constructor(authClient, productsClient, ordersClient) {
        this.authClient = authClient;
        this.productsClient = productsClient;
        this.ordersClient = ordersClient;
        this.logger = new common_1.Logger(GatewayController_1.name);
    }
    register(data) {
        return this.authClient.send(shared_1.MessagePatterns.REGISTER, data);
    }
    login(data) {
        console.log(data);
        return this.authClient.send(shared_1.MessagePatterns.LOGIN, data);
    }
    getProducts() {
        return this.productsClient.send(shared_1.MessagePatterns.GET_PRODUCTS, {});
    }
    createProduct(data) {
        return this.productsClient.send(shared_1.MessagePatterns.CREATE_PRODUCT, data);
    }
    createOrder(data) {
        return this.ordersClient.send(shared_1.MessagePatterns.CREATE_ORDER, data);
    }
};
exports.GatewayController = GatewayController;
__decorate([
    (0, common_1.Post)('auth/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof shared_1.RegisterDto !== "undefined" && shared_1.RegisterDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('auth/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof shared_1.LoginDto !== "undefined" && shared_1.LoginDto) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('products'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Post)('products'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof shared_1.CreateProductDto !== "undefined" && shared_1.CreateProductDto) === "function" ? _f : Object]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Post)('orders'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof shared_1.CreateOrderDto !== "undefined" && shared_1.CreateOrderDto) === "function" ? _g : Object]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "createOrder", null);
exports.GatewayController = GatewayController = GatewayController_1 = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)(shared_1.ServiceNames.AUTH)),
    __param(1, (0, common_1.Inject)(shared_1.ServiceNames.PRODUCTS)),
    __param(2, (0, common_1.Inject)(shared_1.ServiceNames.ORDERS)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _b : Object, typeof (_c = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _c : Object])
], GatewayController);


/***/ }),

/***/ "./apps/gateway/src/gateway.module.ts":
/*!********************************************!*\
  !*** ./apps/gateway/src/gateway.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GatewayModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const gateway_controller_1 = __webpack_require__(/*! ./gateway.controller */ "./apps/gateway/src/gateway.controller.ts");
const gateway_service_1 = __webpack_require__(/*! ./gateway.service */ "./apps/gateway/src/gateway.service.ts");
const shared_1 = __webpack_require__(/*! @app/shared */ "./libs/common/shared/src/index.ts");
let GatewayModule = class GatewayModule {
};
exports.GatewayModule = GatewayModule;
exports.GatewayModule = GatewayModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            microservices_1.ClientsModule.registerAsync([
                {
                    name: shared_1.ServiceNames.AUTH,
                    imports: [config_1.ConfigModule],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('AUTH_HOST', 'localhost'),
                            port: configService.get('AUTH_PORT'),
                        },
                    }),
                    inject: [config_1.ConfigService],
                },
                {
                    name: shared_1.ServiceNames.PRODUCTS,
                    imports: [config_1.ConfigModule],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('PRODUCT_HOST', 'localhost'),
                            port: configService.get('PRODUCT_PORT'),
                        },
                    }),
                    inject: [config_1.ConfigService],
                },
                {
                    name: shared_1.ServiceNames.ORDERS,
                    imports: [config_1.ConfigModule],
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('ORDER_HOST', 'localhost'),
                            port: configService.get('ORDER_PORT'),
                        },
                    }),
                    inject: [config_1.ConfigService],
                },
            ]),
        ],
        controllers: [gateway_controller_1.GatewayController],
        providers: [gateway_service_1.GatewayService],
    })
], GatewayModule);


/***/ }),

/***/ "./apps/gateway/src/gateway.service.ts":
/*!*********************************************!*\
  !*** ./apps/gateway/src/gateway.service.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GatewayService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let GatewayService = class GatewayService {
    getHello() {
        return 'Hello World!';
    }
};
exports.GatewayService = GatewayService;
exports.GatewayService = GatewayService = __decorate([
    (0, common_1.Injectable)()
], GatewayService);


/***/ }),

/***/ "./apps/gateway/src/rpc-exception.filter.ts":
/*!**************************************************!*\
  !*** ./apps/gateway/src/rpc-exception.filter.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RpcExceptionFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let RpcExceptionFilter = class RpcExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            const res = exception.getResponse();
            message = typeof res === 'string' ? res : res.message || message;
        }
        else if (exception.status && exception.message) {
            status = exception.status;
            message = exception.message;
        }
        else if (exception.error && exception.error.status) {
            status = exception.error.status;
            message = exception.error.message || message;
        }
        response.status(status).json({
            statusCode: status,
            message: message,
            error: exception.name || 'Error',
        });
    }
};
exports.RpcExceptionFilter = RpcExceptionFilter;
exports.RpcExceptionFilter = RpcExceptionFilter = __decorate([
    (0, common_1.Catch)()
], RpcExceptionFilter);


/***/ }),

/***/ "./apps/gateway/src/transform.interceptor.ts":
/*!***************************************************!*\
  !*** ./apps/gateway/src/transform.interceptor.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TransformInterceptor = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
let TransformInterceptor = class TransformInterceptor {
    intercept(context, next) {
        const response = context.switchToHttp().getResponse();
        const statusCode = response.statusCode || common_1.HttpStatus.OK;
        return next.handle().pipe((0, operators_1.map)((data) => ({
            statusCode: statusCode,
            message: 'Request successful',
            data: data,
        })));
    }
};
exports.TransformInterceptor = TransformInterceptor;
exports.TransformInterceptor = TransformInterceptor = __decorate([
    (0, common_1.Injectable)()
], TransformInterceptor);


/***/ }),

/***/ "./libs/common/shared/src/common/shared.module.ts":
/*!********************************************************!*\
  !*** ./libs/common/shared/src/common/shared.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const shared_service_1 = __webpack_require__(/*! ./shared.service */ "./libs/common/shared/src/common/shared.service.ts");
let SharedModule = class SharedModule {
};
exports.SharedModule = SharedModule;
exports.SharedModule = SharedModule = __decorate([
    (0, common_1.Module)({
        providers: [shared_service_1.SharedService],
        exports: [shared_service_1.SharedService],
    })
], SharedModule);


/***/ }),

/***/ "./libs/common/shared/src/common/shared.service.ts":
/*!*********************************************************!*\
  !*** ./libs/common/shared/src/common/shared.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let SharedService = class SharedService {
};
exports.SharedService = SharedService;
exports.SharedService = SharedService = __decorate([
    (0, common_1.Injectable)()
], SharedService);


/***/ }),

/***/ "./libs/common/shared/src/constants.ts":
/*!*********************************************!*\
  !*** ./libs/common/shared/src/constants.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagePatterns = exports.EventPatterns = exports.ServiceNames = void 0;
var ServiceNames;
(function (ServiceNames) {
    ServiceNames["AUTH"] = "AUTH_SERVICE";
    ServiceNames["PRODUCTS"] = "PRODUCT_SERVICE";
    ServiceNames["ORDERS"] = "ORDER_SERVICE";
})(ServiceNames || (exports.ServiceNames = ServiceNames = {}));
var EventPatterns;
(function (EventPatterns) {
    EventPatterns["ORDER_CREATED"] = "order_created";
    EventPatterns["PRODUCT_STOCK_UPDATED"] = "product_stock_updated";
})(EventPatterns || (exports.EventPatterns = EventPatterns = {}));
var MessagePatterns;
(function (MessagePatterns) {
    MessagePatterns["LOGIN"] = "login";
    MessagePatterns["REGISTER"] = "register";
    MessagePatterns["VALIDATE_USER"] = "validate_user";
    MessagePatterns["GET_PRODUCTS"] = "get_products";
    MessagePatterns["CREATE_PRODUCT"] = "create_product";
    MessagePatterns["CREATE_ORDER"] = "create_order";
})(MessagePatterns || (exports.MessagePatterns = MessagePatterns = {}));


/***/ }),

/***/ "./libs/common/shared/src/dtos.ts":
/*!****************************************!*\
  !*** ./libs/common/shared/src/dtos.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateProductDto = exports.CreateOrderDto = exports.LoginDto = exports.RegisterDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RegisterDto {
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "name", void 0);
class LoginDto {
}
exports.LoginDto = LoginDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
class CreateOrderDto {
}
exports.CreateOrderDto = CreateOrderDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "userId", void 0);
class CreateProductDto {
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "stock", void 0);


/***/ }),

/***/ "./libs/common/shared/src/index.ts":
/*!*****************************************!*\
  !*** ./libs/common/shared/src/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SharedService = exports.SharedModule = void 0;
__exportStar(__webpack_require__(/*! ./constants */ "./libs/common/shared/src/constants.ts"), exports);
__exportStar(__webpack_require__(/*! ./dtos */ "./libs/common/shared/src/dtos.ts"), exports);
var shared_module_1 = __webpack_require__(/*! ./common/shared.module */ "./libs/common/shared/src/common/shared.module.ts");
Object.defineProperty(exports, "SharedModule", ({ enumerable: true, get: function () { return shared_module_1.SharedModule; } }));
var shared_service_1 = __webpack_require__(/*! ./common/shared.service */ "./libs/common/shared/src/common/shared.service.ts");
Object.defineProperty(exports, "SharedService", ({ enumerable: true, get: function () { return shared_service_1.SharedService; } }));


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************************!*\
  !*** ./apps/gateway/src/main.ts ***!
  \**********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const gateway_module_1 = __webpack_require__(/*! ./gateway.module */ "./apps/gateway/src/gateway.module.ts");
const rpc_exception_filter_1 = __webpack_require__(/*! ./rpc-exception.filter */ "./apps/gateway/src/rpc-exception.filter.ts");
const transform_interceptor_1 = __webpack_require__(/*! ./transform.interceptor */ "./apps/gateway/src/transform.interceptor.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
async function bootstrap() {
    const logger = new common_1.Logger('Gateway');
    const app = await core_1.NestFactory.create(gateway_module_1.GatewayModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new rpc_exception_filter_1.RpcExceptionFilter());
    app.useGlobalInterceptors(new transform_interceptor_1.TransformInterceptor());
    const port = process.env.GATEWAY_PORT || 3000;
    await app.listen(port);
    logger.log(`API Gateway is running on http://localhost:${port}`);
}
bootstrap();

})();

/******/ })()
;