import { HttpRequestType } from "../types";

export interface IRouteDefinition {
	path: string;
	action: string;
	requestType: HttpRequestType;
	authorize: boolean;
	allowAnonymous: boolean;
	users?: Array<string>;
	roles?: Array<string>;
}
