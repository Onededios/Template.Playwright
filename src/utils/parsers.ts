import { delimiter } from 'path';

export function parseBool(value: string): boolean {
	if (/^(1|true)$/i.test(value)) return true;
	if (/^(0|false)$/i.test(value)) return false;
	throw new Error(`Invalid boolean: "${value}"`);
}

export function parseInt(value: string): number {
	if (!/^-?\d+$/.test(value)) throw new Error(`Invalid integer: "${value}"`);
	return Number(value);
}

export function parseFloat(value: string): number {
	if (!/^-?\d+(\.\d+)?$/.test(value)) throw new Error(`Invalid float: "${value}"`);
	return Number(value);
}

export function parseDate(value: string): Date {
	const ms = Date.parse(value);
	if (Number.isNaN(ms)) throw new Error(`Invalid date: "${value}"`);
	return new Date(ms);
}

export const parseJson = <T = unknown>(value: string): T => JSON.parse(value) as T;

export const parseCsv = (value: string, delimiter = ','): string[] => value.split(delimiter).map((s) => s.trim());

export const parseArray = <T>(value: string, itemParser: (raw: string) => T): T[] => parseCsv(value).map(itemParser);

export const parseString = (value: string): string => value;

export function parseEnum<T extends string>(value: string, allowed: readonly T[]): T {
	if (allowed.includes(value as T)) return value as T;
	throw new Error(`Invalid value "${value}", allowed: ${allowed.join(', ')}`);
}
