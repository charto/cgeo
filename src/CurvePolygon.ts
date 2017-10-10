// This file is part of cgeo, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import { Geometry, GeometryKind, registerType } from './Geometry';
import { GeometryCollection } from './GeometryCollection';
import { LineString } from './LineString';
import { Curve, StringSpec } from './Curve';
import { CompoundCurve, CompoundCurveSpec } from './CompoundCurve';

export type CurvePolygonRingSpec = Curve | CompoundCurveSpec | StringSpec | null | undefined;

// GeometryCollection compatibility allows calling methods from MultiCurve.
export class CurvePolygon extends Geometry implements GeometryCollection<Curve | null | undefined> {

	constructor(ringList: CurvePolygonRingSpec[] = []) {
		super();

		this.init(ringList);
	}

	init(ringList: CurvePolygonRingSpec[]) {
		const count = ringList.length;

		for(let num = 0; num < count; ++num) {
			const ring = ringList[num];

			if(ring instanceof Curve) {
				this.childList[num] = ring;
			} else if(ring instanceof Array && typeof(ring[0]) == 'number') {
				this.childList[num] = new LineString(ring as StringSpec);
			} else if(ring) {
				this.childList[num] = new CompoundCurve(ring as CompoundCurveSpec);
			}
		}
	}

	addChild(child: Curve) { this.childList.push(child); }

	childList: ( Curve | null | undefined )[] = [];

}

registerType(CurvePolygon, GeometryKind.curvePolygon);
