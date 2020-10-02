import { WindIndication } from './enums';

export const metersPerSecondToKnots = (metersPerSecond?: number) => {
  if (typeof metersPerSecond === 'number') {
    return Math.round(metersPerSecond * 1.943844);
  }

  return undefined;
}

export const giveWindIndication = (metersPerSecond?: number) => {
  if (typeof metersPerSecond === 'number') {
    if (metersPerSecond < 5) {
      return WindIndication.none;
    }
    if (metersPerSecond < 10) {
      return WindIndication.light;
    }
    if (metersPerSecond < 15) {
      return WindIndication.good;
    }
    if (metersPerSecond < 22) { 
      return WindIndication.strong;
    }
    return WindIndication.danger;
  }

  return WindIndication.none;
}
