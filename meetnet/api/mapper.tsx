import { giveWindIndication, metersPerSecondToKnots } from '../../core/converters';
import type { currentDataResponse } from '../types/api';
import { Zeebrugge } from '../types/api';

export function formatData(data: currentDataResponse) {
  const windSpeedData = data.filter((item) => item.ID === Zeebrugge.windSpeed)[0];
  const windSpeed = windSpeedData.Value;
  const windGusts = data.filter((item) => item.ID === Zeebrugge.windGust)[0].Value;

  return {
    measurementTaken: new Date(windSpeedData.Timestamp),
    temperature: data.filter((item) => item.ID === Zeebrugge.temperature)[0].Value,
    windSpeed: {
      metersPerSecond: windSpeed,
      knots: metersPerSecondToKnots(windSpeed),
      strength: giveWindIndication(windSpeed)
    },
    windGusts: {
      metersPerSecond: windGusts,
      knots: metersPerSecondToKnots(windGusts),
      strength: giveWindIndication(windGusts)
    },
    windDirection: data.filter((item) => item.ID === Zeebrugge.windDirection)[0].Value
  };
}
