export interface LocationService {
  child_count: number;
  level: number;
  meta: {
    code: string;
    country_aff: string;
    iso: string;
    iso_aff: string;
    shape_area: number;
    shape_len: number;
  };
  name: number;
  parent_id?: number;
  regional_entity_id: number;
  type: string;
}

export interface LocationServiceDetail {
  geometry: {
    coordinates: [
      {
        geom: string;
        regional_area_id: number;
        regional_entity_id: number;
      }
    ];
    type: string;
  };
  properties: {
    meta: {
      code: string;
    };
    name: string;
    parent_id: number;
    regional_entity_id: number;
    type: string;
  };
  type: string;
}
