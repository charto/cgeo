// This file is part of cgeo, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

export { Geometry, GeometryKind } from './Geometry';
export { Point } from './Point';
export { LineString } from './LineString';
export { Polygon } from './Polygon';
export { MultiPoint } from './MultiPoint';
export { MultiLineString } from './MultiLineString';
export { MultiPolygon } from './MultiPolygon';
export { GeometryCollection } from './GeometryCollection';
export { CircularString } from './CircularString';
export { CompoundCurve } from './CompoundCurve';
export { CurvePolygon } from './CurvePolygon';
export { MultiCurve } from './MultiCurve';
export { MultiSurface } from './MultiSurface';
export { Curve } from './Curve';
export { Surface } from './Surface';

/** Decorator for mixing class prototype into superclass. */

export function mixin<Super>(Super?: new(...args: any[]) => Super) {
	function inner<Class>(Class: new(...args: any[]) => Class) {
		Super = Super || Object.getPrototypeOf(Class) as new(...args: any[]) => Super;

		for(let key of Object.keys(Class.prototype)) {
			Super.prototype[key] = Class.prototype[key];
		}
	}

	return(inner);
}

/** Decorator for defining a prototype property. */

export function proto(value: any) {
	function inner(Class: { [ key: string ]: any }, key: string) {
		Class[key] = value;
	}

	return(inner);
}
