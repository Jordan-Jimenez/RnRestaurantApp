export default function formatDollar(priceString?: number, short?: boolean) {
  return ((priceString || 0) / 100)
    .toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    })
    .replace('.00', short ? '' : '.00');
}
