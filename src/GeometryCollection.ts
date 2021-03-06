// This file is part of cgeo, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import { Geometry, GeometryKind, registerType } from './Geometry';

export class GeometryCollection<Member extends (Geometry | null | undefined) = Geometry> extends Geometry {

	constructor(childList?: Member[]) {
		super();

		for(let child of (childList || [])) this.addChild(child);
	}

	addChild(child: Member) {
		if(child) {
			if(child.hasZ()) this.flagZ = true;
			if(child.hasM()) this.flagM = true;
		}
		this.childList.push(child);
	}

	childList: Member[] = [];

	hasZ() { return(this.flagZ == true); }
	hasM() { return(this.flagM == true); }

	flagZ?: boolean;
	flagM?: boolean;

}

registerType(GeometryCollection, GeometryKind.geometryCollection);
