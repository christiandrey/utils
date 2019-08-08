import { ApiResponsePagination } from "./ApiResponsePagination";

export class ApiResponseMeta {
	pagination: ApiResponsePagination;

	constructor(dto: Partial<ApiResponseMeta> = {}) {
		this.pagination = dto.pagination ? new ApiResponsePagination(dto.pagination) : undefined;
	}
}
