
export const formatTime = (timestamp: number) => {
  const datetime = new Date(timestamp);
  return `${datetime.getHours().toLocaleString(undefined, { minimumIntegerDigits: 2 })}:${datetime.getMinutes().toLocaleString(undefined, { minimumIntegerDigits: 2 })}`;
}
