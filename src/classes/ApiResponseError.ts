export class ApiResponseError {
	property: string;
	message: string;

	constructor(dto: Partial<ApiResponseError> = {}) {
		this.property = dto.property;
		this.message = dto.message;
	}
}
