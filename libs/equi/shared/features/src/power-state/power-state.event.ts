import { bind } from '@react-rxjs/core';
import {
  EnphaseBattery,
  EnphasePowerStatus,
  EnphaseSeries,
  getEnphaseSeries,
  getPowerStatus,
} from '@virtue-equi/equi-shared-data-access';
import { concatMap, from, map, pluck, scan, throttleTime, timer } from 'rxjs';
import { clock$ } from '../clock/clock.event';

const UPDATE_POWER_STATE_INTERVAL = 5000;
const initBatteryState: EnphasePowerStatus = {
  production: 100,
  consumption: 50,
  battery: { percent: 40, status: 'idle' },
};
export const [usePowerStatus, powerStatus$] = bind<EnphasePowerStatus>(
  timer(UPDATE_POWER_STATE_INTERVAL).pipe(
    concatMap(() =>
      from(getPowerStatus()).pipe(
        scan((acc, value) => {
          if (value === false) {
            return acc;
          }
          return value;
        }, initBatteryState)
      )
    )
  ),
  initBatteryState
);
export const [useBatteryStatus] = bind<EnphaseBattery>(
  powerStatus$.pipe(pluck('battery')),
  initBatteryState.battery
);
export const [usePowerProductionStatus] = bind<string>(
  powerStatus$.pipe(
    pluck('production'),
    map((value) => value.toFixed(2) + ' W')
  ),
  initBatteryState.production + ' W'
);
export const [usePowerConsumptionStatus] = bind<string>(
  powerStatus$.pipe(
    pluck('consumption'),
    map((value) => value.toFixed(2) + ' W')
  ),
  initBatteryState.consumption + ' W'
);

const initialEnphaseSeries: EnphaseSeries = {
  battery: Array(288).fill(0),
  consumption: Array(288).fill(0),
  production: Array(288).fill(0),
};
export const [useEnphaseSeries, enphaseSeries$] = bind<EnphaseSeries>(
  clock$.pipe(
    // Dont refesh the graph too fast, the max interval is 5 min
    throttleTime(5 * 60 * 1000),
    concatMap(() =>
      from(getEnphaseSeries()).pipe(
        scan((acc, value) => {
          if (value === false) {
            return acc;
          }

          const minConsumption = Math.min(...value.consumption);
          const minProduction = Math.min(...value.production);
          return {
            battery: value.battery.map((value) => value * 4),
            consumption: value.consumption.map(
              (value) => (value - minConsumption) / 3
            ),
            production: value.production.map(
              (value) => (value + minProduction) * 1.2
            ),
          };
        }, initialEnphaseSeries)
      )
    )
  ),
  initialEnphaseSeries
);
