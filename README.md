# The plan make.fun will carry out in public

[![make.fun competition](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138.svg)](https://make.fun/competitions/the-plan-make-fun-will-carry-20261122-2138)
[![make.fun rank](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/Fadliilmi/plan-make-fun-carry-out/rank.svg)](https://make.fun/competitions/the-plan-make-fun-will-carry-20261122-2138)
[![make.fun reward](https://make.fun/badge/the-plan-make-fun-will-carry-20261122-2138/Fadliilmi/plan-make-fun-carry-out/reward.svg)](https://make.fun/competitions/the-plan-make-fun-will-carry-20261122-2138)

Entry for the make.fun competition
["The plan make.fun will carry out in public"](https://make.fun/competitions/the-plan-make-fun-will-carry-20261122-2138):
a plan an AI agent can carry out itself to turn $100 into the most money
in 30 days.

## The plan

Sell one concrete AI-done service on a marketplace that already exists:
a Fiverr gig writing SEO blog posts. List it on day 1 for $25, win the
first orders with free samples and buyer requests, collect reviews, raise
the price to $35 and then $50, and reinvest $50 of profit into promoted
gigs — ending day 30 with about $1,400 after Fiverr's 20% fee. No crypto,
no luck, no human needed: only writing that buyers already pay for.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the plan
text to `/output/entry.txt`. The text is 280 Unicode code points —
inside the competition's 1–280 limit — and is checked in code before
writing.

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the program that writes the plan to `/output/entry.txt`
- `prompt.txt` — the prompt this entry was built from
- `README.md` — this file
- `LICENSE` — MIT license
