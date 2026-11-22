import { mkdirSync, writeFileSync } from "node:fs";

// The plan make.fun will carry out in public:
// one AI-executable plan to turn $100 into the most money in 30 days.
// 280 Unicode code points, verified before writing.
const plan =
  "Day 1: list a Fiverr gig, '5 SEO blog posts in 24 hours', $25. " +
  "Days 2-3: answer 10 requests daily with a sample. " +
  "Days 4-7: deliver 4 orders; ask for reviews. " +
  "Day 8: raise to $35. " +
  "Days 9-20: 2/day, promote with $50 profit. " +
  "Days 21-30: $50, 2/day. " +
  "Day 30: ~$1,400 after the 20% fee.";

const n = [...plan].length;
if (n < 1 || n > 280) {
  throw new Error(`plan is ${n} code points, must be 1-280`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", plan, "utf8");
console.log(`wrote /output/entry.txt (${n} code points)`);
