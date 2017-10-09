// This file is part of cgeo, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import { Geometry, GeometryKind, registerType } from './Geometry';
import { GeometryCollection } from './GeometryCollection';
import { Point } from './Point';

export class MultiPoint extends GeometryCollection<Point> {

	constructor(childList: Point[] | number[] = []) {
		super();

		this.init(childList);
	}

	init(childList: Point[] | number[] = []) {
		const count = childList.length;

		if(count && childList[0] instanceof Point) {
			this.childList = childList as Point[];
		} else {
			this.childList = [];
			for(let num = 0; num < count; num += 2) {
				this.addChild(new Point(
					childList[num] as number,
					childList[num + 1] as number
				));
			}
		}
	}

}

registerType(MultiPoint, GeometryKind.multiPoint);
