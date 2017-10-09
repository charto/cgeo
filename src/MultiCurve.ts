// This file is part of cgeo, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import { GeometryKind, registerType } from './Geometry';
import { GeometryCollection } from './GeometryCollection';
import { Curve, StringSpec } from './Curve';
import { LineString } from './LineString';

export class MultiCurve<Member extends Curve = Curve> extends GeometryCollection<Member> {

	constructor(childList: ( Member | StringSpec )[] = []) {
		super();

		this.init(childList);
	}

	init(childList: ( Member | StringSpec)[]) {
		for(let child of childList) {
			if(child instanceof Curve) {
				this.childList.push(child as Member);
			} else {
				this.childList.push(new LineString(child) as Curve as Member);
			}
		}
	}

}

registerType(MultiCurve, GeometryKind.multiCurve);
