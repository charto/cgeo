// This file is part of cgeo, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import { GeometryKind, registerType } from './Geometry';
import { GeometryCollection } from './GeometryCollection';
import { Curve, StringSpec } from './Curve';
import { MultiCurve } from './MultiCurve';

export class CompoundCurve extends Curve implements GeometryCollection<Curve> {

	constructor(childList: ( Curve | StringSpec )[] = []) {
		super();

		return(MultiCurve.prototype.init.call(this, childList));
	}

	addChild(child: Curve) { this.childList.push(child); }

	childList: Curve[] = [];

}

registerType(CompoundCurve, GeometryKind.compoundCurve);
