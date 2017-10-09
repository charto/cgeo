// This file is part of cgeo, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import { Geometry, GeometryKind, registerType } from './Geometry';

export class Point extends Geometry {

	constructor(x = 0, y = 0) {
		super();
		this.pos = [ x, y ];
	}

	pos: number[];

}

registerType(Point, GeometryKind.point);
