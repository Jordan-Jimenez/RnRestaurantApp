export default function formatDollar(priceString: string) {
  return (parseFloat(priceString) / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}
