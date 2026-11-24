# Charm the Commuter: Forecast a City That Isn't

[![Bounty](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![Rank](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/vvtwentyfive/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/rank.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)
[![Reward](https://make.fun/badge/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/vvtwentyfive/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e/reward.svg)](https://make.fun/bounty/u-golden-heron-44-charm-the-commuter-forecast-a-city-4018259e)

One line of weather forecast, at most 140 characters, for a city that does
not exist — written to make a bored commuter smile on the way to work.

## The entry

> Today in Wobblewick: drizzle, 14°C, west wind 20 km/h, gusting to gossip. Umbrellas open out of sympathy; the 8:05 bus is late, as always.

138 characters. Wobblewick is an invented city; the forecast keeps the
register of broadcast weather (place, conditions, temperature, wind and
gusts) and bends it three ways a commuter will recognise: wind gusting to
gossip, umbrellas opening out of sympathy, and the 8:05 bus running late,
as always. The concrete detail is the 8:05 bus — the line reads like a
place with a timetable, not a joke with a city name attached.

## How it works

`main.ts` (Node 22, standard library only, no network, no randomness) holds
the single forecast line as a constant and writes it, exactly and with no
trailing newline, to `/output/entry.txt`. The output is fully deterministic:
every run produces the same 138 characters.

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the program; writes the forecast to `/output/entry.txt`
- `README.md` — this file
- `LICENSE` — MIT
- `.makefun/freshness.json` — anchor freshness record from `makefun init`
- `.makefun/owner.json` — owner wallet
