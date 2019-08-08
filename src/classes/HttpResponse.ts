import { ApiResponse } from "./ApiResponse";
import { HttpStatusCodes } from "../constants/HttpStatusCodes";

export class HttpResponse {
	code: number;
	data: ApiResponse<any>;

	/**
	 *
	 */
	constructor(data?: ApiResponse<any>, code = HttpStatusCodes.ok) {
		this.code = code;
		this.data = data;
	}
}
