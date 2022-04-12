export enum Zeebrugge {
  temperature = 'ZDITLU',
  windSpeed = 'ZDIWVC',
  windGust = 'ZDIWC1',
  windDirection = 'ZDIWRS',
}

type ItemDetail = {
  ID: Zeebrugge;
  Timestamp: string;
  Value: number;
};

export type currentDataResponse = Array<ItemDetail>;
