"use strict";
exports.__esModule = true;
var ApiResponsePagination = /** @class */ (function () {
    function ApiResponsePagination(dto) {
        if (dto === void 0) { dto = {}; }
        this.total = dto.total;
        this.count = dto.count;
        this.perPage = dto.perPage;
        this.currentPage = dto.currentPage;
        this.totalPages = dto.totalPages;
    }
    return ApiResponsePagination;
}());
exports.ApiResponsePagination = ApiResponsePagination;
