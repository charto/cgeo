// This file is part of cgeo, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import { Geometry, GeometryKind, registerType } from './Geometry';
import { GeometryCollection} from './GeometryCollection';
import { CurveSpec } from './Curve';
import { MultiCurve, initCurves } from './MultiCurve';
import { LineString } from './LineString';

export type MultiLineStringSpec = (number | CurveSpec | LineString)[];

export class MultiLineString extends MultiCurve<LineString> {

	constructor(childList: MultiLineStringSpec = []) {
		super();

		initCurves(childList, this.childList, false, false);
	}

}

registerType(MultiLineString, GeometryKind.multiLineString);
