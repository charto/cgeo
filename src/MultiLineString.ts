// This file is part of cgeo, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import { Geometry, GeometryKind, registerType } from './Geometry';
import { GeometryCollection} from './GeometryCollection';
import { MultiCurve } from './MultiCurve';
import { LineString } from './LineString';

export class MultiLineString extends MultiCurve<LineString> {}

registerType(MultiLineString, GeometryKind.multiLineString);
