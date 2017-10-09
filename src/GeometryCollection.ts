// This file is part of cgeo, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import { Geometry, GeometryKind, registerType } from './Geometry';

export class GeometryCollection<Member extends Geometry = Geometry> extends Geometry {

	constructor(public childList: (Member | null | undefined)[] = []) { super(); }

	addChild(child: Member) { this.childList.push(child); }

}

registerType(GeometryCollection, GeometryKind.geometryCollection);
