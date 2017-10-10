// This file is part of cgeo, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import { GeometryKind, registerType } from './Geometry';
import { Curve, CurveSpec } from './Curve';

export class CircularString extends Curve {

	constructor(public posList: CurveSpec = []) { super(); }

}

registerType(CircularString, GeometryKind.circularString);
