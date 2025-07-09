import { getHealthStatus } from '../src/health';

describe('getHealthStatus', () => {
  test('returns "healthy" when health > 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
  });

  test('returns "wounded" when health is between 15 and 50 inclusive', () => {
    expect(getHealthStatus({ name: 'Воин', health: 50 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Лучник', health: 15 })).toBe('wounded');
    expect(getHealthStatus({ name: 'Лучник', health: 30 })).toBe('wounded');
  });

  test('returns "critical" when health < 15', () => {
    expect(getHealthStatus({ name: 'Разбойник', health: 14 })).toBe('critical');
    expect(getHealthStatus({ name: 'Разбойник', health: 0 })).toBe('critical');
  });
});