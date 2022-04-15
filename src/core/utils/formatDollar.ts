export default function formatDollar(priceString?: number) {
  return ((priceString || 0) / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}
