// This file is part of cgeo, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import { Geometry } from './Geometry';
import { GeometryCollection } from './GeometryCollection';
import { LineString } from './LineString';
import { Curve, StringSpec } from './Curve';

export interface GenericPolygon<MemberType extends Curve> extends GeometryCollection<MemberType | LineString> {}

export function definePolygonClass<MemberType extends Curve, SpecType>(
	Member: { new(spec?: SpecType): MemberType }
): { new(spec?: ( MemberType | LineString | StringSpec | SpecType | null | undefined )[]): GenericPolygon<MemberType> } {

	type RingSpec = MemberType | LineString | SpecType | null | undefined;

	// GeometryCollection compatibility allows calling methods from MultiCurve.
	class GenericPolygon extends Geometry implements GeometryCollection<MemberType | LineString> {

		constructor(ringList: RingSpec[] = []) {
			super();

			this.init(ringList);
		}

		init(ringList: RingSpec[]) {
			const count = ringList.length;

			for(let num = 0; num < count; ++num) {
				const ring = ringList[num];

				if(ring instanceof Curve) {
					this.childList[num] = ring;
				} else if(ring instanceof Array && typeof(ring[0]) == 'number') {
					this.childList[num] = new LineString(ring);
				} else if(ring) {
					this.childList[num] = new Member(ring);
				}
			}
		}

		addChild(child: MemberType) { this.childList.push(child); }

		childList: ( MemberType | LineString | null | undefined )[] = [];

	}

	return(GenericPolygon);
}
