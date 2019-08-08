import * as glob from "glob";
import * as path from "path";

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
