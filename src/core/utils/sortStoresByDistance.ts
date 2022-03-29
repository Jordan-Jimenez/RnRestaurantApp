import Store from '../../stores/Store';

export default function sortByDistance(stores?: Store[]) {
  if (!stores) {
    return;
  }

  const locationsWithDistance = stores.filter(l => l.distanceFromUserDevice);

  const locationsWithoutDistance = stores.filter(
    l => !l.distanceFromUserDevice,
  );

  const locationsWithDistanceSorted = locationsWithDistance.sort(
    (a, b) => a.distanceFromUserDevice! - b.distanceFromUserDevice!,
  );

  return [...locationsWithDistanceSorted, ...locationsWithoutDistance];
}
