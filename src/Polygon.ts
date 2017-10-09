// This file is part of cgeo, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import { GeometryKind, registerType } from './Geometry';
import { Curve, StringSpec } from './Curve';
import { LineString } from './LineString';
import { GenericPolygon, definePolygonClass } from './GenericPolygon';

export type PolygonRingSpec = LineString | StringSpec | null | undefined;
export type Polygon = GenericPolygon<LineString>;
export const Polygon = definePolygonClass(LineString);

registerType(Polygon, GeometryKind.polygon);
