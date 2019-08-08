export class ApiResponsePagination {
	total: number;
	count: number;
	perPage: number;
	currentPage: number;
	totalPages: number;

	constructor(dto: Partial<ApiResponsePagination> = {}) {
		this.total = dto.total;
		this.count = dto.count;
		this.perPage = dto.perPage;
		this.currentPage = dto.currentPage;
		this.totalPages = dto.totalPages;
	}
}
