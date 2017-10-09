// This file is part of cgeo, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import { Geometry } from './Geometry';
import { GeometryCollection } from './GeometryCollection';
import { Curve } from './Curve';

export interface GenericPolygon<MemberType extends Curve> extends GeometryCollection<MemberType> {}

export function definePolygonClass<SpecType, MemberType extends Curve>(
	Member: { new(spec?: SpecType): MemberType }
): { new(spec?: ( MemberType | SpecType | null | undefined )[]): GenericPolygon<MemberType> } {

	type RingSpec = MemberType | SpecType | null | undefined;

	// GeometryCollection compatibility allows calling methods from MultiCurve.
	class GenericPolygon extends Geometry implements GeometryCollection<MemberType> {

		constructor(ringList: RingSpec[] = []) {
			super();

			this.init(ringList);
		}

		init(ringList: RingSpec[]) {
			const count = ringList.length;

			for(let num = 0; num < count; ++num) {
				const ring = ringList[num];

				if(ring instanceof Member) {
					this.childList[num] = ring;
				} else if(ring) {
					this.childList[num] = new Member(ring);
				}
			}
		}

		addChild(child: MemberType) { this.childList.push(child); }

		childList: ( MemberType | null | undefined )[] = [];

	}

	return(GenericPolygon);
}
