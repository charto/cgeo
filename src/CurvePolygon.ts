// This file is part of cgeo, copyright (c) 2017 BusFaster Ltd.
// Released under the MIT license, see LICENSE.

import { GeometryKind, registerType } from './Geometry';
import { Curve, StringSpec } from './Curve';
import { CompoundCurve } from './CompoundCurve';
import { GenericPolygon, definePolygonClass } from './GenericPolygon';

export type CurvePolygonRingSpec = CompoundCurve | StringSpec | null | undefined;
export type CurvePolygon = GenericPolygon<CompoundCurve>;
export const CurvePolygon = definePolygonClass(CompoundCurve);

registerType(CurvePolygon, GeometryKind.curvePolygon);
