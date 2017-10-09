// This file is part of cgeo, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import { Geometry, GeometryKind, registerType } from './Geometry';

export class GeometryCollection<Member extends (Geometry | null | undefined) = Geometry> extends Geometry {

	constructor(public childList: Member[] = []) { super(); }

	addChild(child: Member) { this.childList.push(child); }

}

registerType(GeometryCollection, GeometryKind.geometryCollection);
