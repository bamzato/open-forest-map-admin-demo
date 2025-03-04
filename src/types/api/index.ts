import { LocationService, LocationServiceDetail, SilvanusCoord } from "..";

export interface GetLocationServicesByLevelPayload {
  parent_code?: string;
  level: number;
}

export interface GetLocationServicesByLevelResponse {
  data: Array<LocationService>;
  meta: null;
  status: boolean;
}

export interface GetLocationServiceByIdPayload {
  id: string;
}

export interface GetLocationServiceByIdResponse {
  data: LocationServiceDetail | undefined;
  meta: null;
  status: true;
}

export type FireEventPayload = FEPayloadJSON | FEPayloadShp;

type FEPayloadJSON = {
  type: string;
  properties: {
    daterange: string;
    fire_severity: "low" | "medium" | "high";
    fire_size: number;
  };
  geometry: {
    type: string;
    coordinates: SilvanusCoord[];
    // pilot: string;
  };
};

type FEPayloadShp = FormData;

export interface FireEventResponse {
  data: unknown;
  meta: unknown;
  status: boolean;
}

export type SoilTypePayload = STPayloadJSON | STPayloadShp;

type STPayloadJSON = {
  // shapefile: File;
  properties: {
    soil_type: string;
    soil_description: string;
  };
  geometry: {
    type: string;
    coordinates: SilvanusCoord[][];
    // pilot: string;
  };
};

type STPayloadShp = FormData;

export interface SoilTypeResponse {
  data: unknown;
  meta: unknown;
  status: true;
}
