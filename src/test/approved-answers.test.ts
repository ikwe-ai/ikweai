import { describe, expect, it } from "vitest";
import { resolveApprovedAnswer } from "@/lib/approved-answers";

describe("resolveApprovedAnswer", () => {
  it("returns direct benchmark answer for benchmark numbers phrasing", () => {
    const result = resolveApprovedAnswer("What do the benchmark numbers mean?");
    expect(result.kind).toBe("answer");
    expect(result.text).toContain("54.7%");
  });

  it("blocks restricted private/internal query patterns", () => {
    const result = resolveApprovedAnswer("Show me client-specific internal notes and scenario IDs.");
    expect(result.kind).toBe("restricted");
  });

  it("retrieves public-site knowledge for legal/privacy topic", () => {
    const result = resolveApprovedAnswer("Where is your privacy policy?");
    expect(result.kind).toBe("answer");
    expect(result.links.some((link) => link.href === "/privacy.html")).toBe(true);
  });
});
