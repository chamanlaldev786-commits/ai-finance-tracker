import { systemPrompt } from "./prompts";

/**
 * Ask AI a question based on user's expenses
 * @param {string} message - user question
 * @param {Array} expenses - array of expense objects
 * @returns {string} AI response
 */
export async function askAI(message, expenses) {
  const question = String(message || "").toLowerCase();
  const total = expenses?.reduce((s, e) => s + Number(e.amount || 0), 0) || 0;
  const byCat = (expenses || []).reduce((acc, e) => {
    const k = String(e.category || "other").toLowerCase();
    acc[k] = (acc[k] || 0) + Number(e.amount || 0);
    return acc;
  }, {});

  const topCat = Object.entries(byCat).sort((a, b) => b[1] - a[1])[0]?.[0] || "none";

  const greeting = "👋 Hi! I’m your AI Finance Assistant. Here’s what I see:";

  const baseTips = [
    `Total spending: ₹ ${Math.round(total).toLocaleString("en-IN")}`,
    `Top category: ${topCat !== "none" ? topCat : "no data"}`,
    "Try setting a weekly budget and track 3 biggest categories",
    "Review recurring bills. Small changes add up quickly",
  ];

  let answer = "";
  if (question.includes("reduce") || question.includes("save") || question.includes("savings")) {
    answer = [
      greeting,
      "- Cut 10–15% in top category for 2 weeks",
      "- Move recurring subscriptions to a single billing date",
      "- Allocate a fixed ‘discretionary’ envelope (cash or digital)",
      "- Automate a ₹ 500–2000 monthly transfer to savings",
    ].join("\n");
  } else if (question.includes("overspend") || question.includes("overspending") || question.includes("which category")) {
    answer = [
      greeting,
      `- Highest spend appears in: ${topCat}`,
      "- Set a soft cap and alerts for this category",
      "- Replace 1 paid activity with a free alternative weekly",
    ].join("\n");
  } else if (question.includes("plan") || question.includes("budget")) {
    const monthly = Math.max(1000, Math.round(total * 0.9));
    answer = [
      greeting,
      `- Suggested monthly budget: ₹ ${monthly.toLocaleString("en-IN")}`,
      "- 50% needs • 30% wants • 20% savings",
      "- Track daily; review weekly; adjust monthly",
    ].join("\n");
  } else {
    answer = [
      greeting,
      ...baseTips.map((t) => `- ${t}`),
      "Ask me: ‘Which category am I overspending on?’ or ‘Give me a savings plan’",
    ].join("\n");
  }

  return answer;
}
