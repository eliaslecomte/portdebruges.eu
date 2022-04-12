const mixins = {
  rowColours: (index: number) => (index % 2 === 0 ? 'bg-gray-100' : 'bg-white'),
  windTextColours: {
    boring: 'text-green-200',
    safe: 'text-green-400',
    awesome: 'text-green-600',
    tricky: 'text-red-300',
    danger: 'text-red-600',
  },
  funColours: {
    boring: 'border-green-200',
    safe: 'border-green-400',
    awesome: 'border-green-600',
    tricky: 'border-red-300',
    danger: 'border-red-600',
  },
  windFunColour: (direction: number) => {
    if (direction > 238 || direction < 58) {
      return 'green-600';
    } else if (direction > 233 || direction < 63) {
      return 'red-300';
    }

    return 'red-600';
  },
};

export default mixins;
