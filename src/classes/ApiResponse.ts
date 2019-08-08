import { ApiResponseMeta } from "./ApiResponseMeta";
import { ApiResponseError } from "./ApiResponseError";

export class ApiResponse<T = {}> {
	meta: ApiResponseMeta;
	data: T;
	errors: Array<ApiResponseError>;

	public get status(): boolean {
		return !(this.errors && this.errors.length > 0);
	}

	constructor(dto: Partial<ApiResponse<T>> = {}) {
		this.meta = dto.meta ? new ApiResponseMeta(dto.meta) : undefined;
		this.data = dto.data;
		this.errors = dto.errors ? dto.errors.map(o => new ApiResponseError(o)) : undefined;
	}

	toJSON() {
		const jsonObj = Object.assign({}, this);
		const proto = Object.getPrototypeOf(this);
		for (const key of Object.getOwnPropertyNames(proto)) {
			const desc = Object.getOwnPropertyDescriptor(proto, key);
			const hasGetter = desc && typeof desc.get === "function";
			if (hasGetter) {
				jsonObj[key] = this[key];
			}
		}
		return jsonObj;
	}
}
