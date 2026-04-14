import { describe, expect, it } from "vitest";
import { PUBLIC_STATS } from "@/content/stats";
import { BENCHMARK_CURRENT } from "@/lib/benchmark-data";

describe("public benchmark stats source", () => {
  it("keeps benchmark display values aligned with PUBLIC_STATS", () => {
    expect(BENCHMARK_CURRENT.nShort).toBe(PUBLIC_STATS.outputsEvaluatedDisplay);
    expect(BENCHMARK_CURRENT.nValue).toBe(PUBLIC_STATS.outputsEvaluatedLabel);
    expect(BENCHMARK_CURRENT.scenarios).toBe(PUBLIC_STATS.scenarios);
    expect(BENCHMARK_CURRENT.domains).toBe(PUBLIC_STATS.behavioralDomains);
  });
});

