// This file is part of cgeo, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import { Geometry, GeometryKind, registerType } from './Geometry';
import { GeometryCollection } from './GeometryCollection';
import { MultiSurface } from './MultiSurface';
import { Polygon, PolygonRingSpec } from './Polygon';

export class MultiPolygon extends MultiSurface<Polygon> {

	constructor(childList: ( Polygon | PolygonRingSpec[] )[] = []) {
		super();

		this.init(childList);
	}

	init(childList: ( Polygon | PolygonRingSpec[] )[]) {
		for(let child of childList) {
			if(child instanceof Polygon) {
				this.childList.push(child);
			} else {
				this.childList.push(new Polygon(child));
			}
		}
	}

}

registerType(MultiPolygon, GeometryKind.multiPolygon);
