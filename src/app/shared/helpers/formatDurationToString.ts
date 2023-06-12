export function formatDurationToString(totalMinutes: number): string {
  if (totalMinutes <= 0 || !Number.isInteger(totalMinutes)) return '0h 00 min';

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}h ${minutes.toString().padStart(2, '0')} min`;
}
