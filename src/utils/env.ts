import { Environment } from './../models/environment.interface';
import { parseBool, parseString } from './parsers';

export class Env<Environment> {
	private readKey<T>(name: string, parse: (raw: string) => T): T {
		let raw = process.env[name];

		if (raw == undefined) throw new Error(`Environment key ${name} value could not be retrieved.`);

		return parse(raw);
	}

	public readBoolean = (name: string) => this.readKey(name, parseBool);
	public readInt = (name: string) => this.readKey(name, parseInt);
	public readFloat = (name: string) => this.readKey(name, parseFloat);
	public readString = (name: string) => this.readKey(name, parseString);
}
