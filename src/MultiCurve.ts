// This file is part of cgeo, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import { GeometryKind, registerType } from './Geometry';
import { GeometryCollection } from './GeometryCollection';
import { Curve, CurveSpec } from './Curve';
import { CompoundCurve } from './CompoundCurve';
import { LineString } from './LineString';

export interface MultiCurveSpec extends Array<number | MultiCurveSpec | Curve> {}

export function initCurves<Member extends Curve | null | undefined>(
	specList: (number | MultiCurveSpec | Curve | null | undefined)[],
	childList: Member[],
	allowNull?: boolean,
	allowCompound = true
) {
	const msg = 'Geometry cannot hold arbitrary curves';

	if(typeof(specList[0]) == 'number') {
		childList.push(new LineString(specList as CurveSpec) as Curve as Member);
		return;
	}

	for(let spec of specList) {
		if(spec instanceof Curve) {
			if(!(allowCompound || spec instanceof LineString)) throw(new Error(msg));
			childList.push(spec as Curve as Member);
		} else if(spec instanceof Array && typeof(spec[0]) == 'number') {
			childList.push(new LineString(spec as CurveSpec) as Curve as Member);
		} else if(spec) {
			if(!allowCompound) throw(new Error(msg));
			childList.push(new CompoundCurve(spec as MultiCurveSpec) as Curve as Member);
		} else if(allowNull) {
			childList.push(spec as any);
		}
        }
}

export class MultiCurve<Member extends Curve = Curve> extends GeometryCollection<Member> {

	constructor(childList: MultiCurveSpec = []) {
		super();

		initCurves(childList, this.childList);
	}

}

registerType(MultiCurve, GeometryKind.multiCurve);
