import "reflect-metadata";
import * as glob from "glob";
import * as path from "path";
import { ROUTES_METADATA_KEY, PREFIX_AUTH_METADATA_KEY } from "../constants";
import { HttpRequestType } from "../types";
import { IRouteDefinition } from "../interfaces/IRouteDefinition";

export const loadTsClassesFromDirectory = (dir: string): Array<any> => {
	const searchPattern = "/**/*.ts";
	const filesPath = glob.sync(path.normalize(`${dir}${searchPattern}`));
	const files = filesPath.map(o => require(path.resolve(o)));
	const classes = files.map(o => Object.keys(o).map(p => o[p])).reduce((collection, item) => [...collection, ...item], []);
	return classes;
};

export const isEmail = (text: string): boolean => {
	const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(text);
};

export const initializeRoutesMetadata = (target: Object) => {
	if (!Reflect.hasMetadata(ROUTES_METADATA_KEY, target)) {
		Reflect.defineMetadata(ROUTES_METADATA_KEY, [], target);
	}
};

export const updateRoutesMetadata = (requestType: HttpRequestType, path: string, target: Object, propertyName: string) => {
	initializeRoutesMetadata(target);

	const routes = Reflect.getMetadata(ROUTES_METADATA_KEY, target) as Array<IRouteDefinition>;
	const prefixAuth = Reflect.getMetadata(PREFIX_AUTH_METADATA_KEY, target) as boolean;
	const index = routes.findIndex(o => o.action === propertyName);
	const payload = {
		path,
		requestType,
		action: propertyName
	} as IRouteDefinition;

	if (!!prefixAuth) {
		payload.authorize = true;
	}

	if (index < 0) {
		routes.push(payload);
	} else {
		routes[index] = Object.assign(routes[index], payload);
	}

	Reflect.defineMetadata(ROUTES_METADATA_KEY, routes, target);
};
