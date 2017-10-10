// This file is part of cgeo, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import { Geometry, GeometryKind, registerType } from './Geometry';
import { GeometryCollection } from './GeometryCollection';
import { LineString } from './LineString';
import { Curve, StringSpec } from './Curve';

export type PolygonRingSpec = LineString | StringSpec | null | undefined;

// GeometryCollection compatibility allows calling methods from MultiCurve.
export class Polygon extends Geometry implements GeometryCollection<LineString | null | undefined> {

	constructor(ringList: PolygonRingSpec[] = []) {
		super();

		this.init(ringList);
	}

	init(ringList: PolygonRingSpec[]) {
		const count = ringList.length;

		for(let num = 0; num < count; ++num) {
			const ring = ringList[num];

			if(ring instanceof Curve) {
				this.childList[num] = ring;
			} else if(ring) {
				this.childList[num] = new LineString(ring);
			}
		}
	}

	addChild(child: LineString) { this.childList.push(child); }

	childList: ( LineString | null | undefined )[] = [];

}

registerType(Polygon, GeometryKind.polygon);
