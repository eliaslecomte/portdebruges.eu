export function findImageSrc(imageName: string) {
  switch (imageName) {
    case '01d':
      return 'sunny.svg';
    case '01n':
      return 'sunny-at-night.svg';
    case '02d':
      return 'partly-cloudy.svg';
    case '02n':
      return 'partly-cloudy-at-night.svg';
    case '03d':
    case '04d':
      return 'overcast.svg';
    case '03n':
    case '04n':
      return 'overcast-at-night.svg';
    case '09d':
      return 'overcast-and-rain.svg';
    case '09n':
      return 'overcast-and-rain-at-night.svg';
    case '10d':
      return 'partly-cloudy-and-rain.svg';
    case '10n':
      return 'partly-cloudy-and-rain-at-night.svg';
    case '11d':
      return 'lightning.svg';
    case '11n':
      return 'lightning-at-night.svg';
    case '13d':
      return 'snow.svg';
    case '13n':
      return 'snow-at-night.svg';
    case '50d':
      return 'mist.svg';
    case '50n':
      return 'mist-at-night.svg';
    default: 
      return 'sunny.svg';
  }
}
