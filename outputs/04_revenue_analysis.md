# Revenue Impact Analysis

## Objective
Estimate revenue generated vs potential revenue lost across funnel stages to quantify the financial impact of conversion bottlenecks.

---

## Key Metrics
*   **Actual Revenue**: ₹5,125,395.62
*   **Potential Revenue (View Stage)**: ₹52,972,074.01
*   **Potential Revenue (Cart Stage)**: ₹2,318,820.87

---

## Revenue Leakage
*   **Leakage from View Stage**: ₹52,972,074.01
*   **Leakage from Cart Stage**: ₹2,318,820.87

---

## Key Insight
*   **Primary Revenue Drain**: Over 95% of potential revenue loss occurs between the View and Cart stages, confirming the top-of-funnel interaction as the most critical failure point.
*   **High-Value Retention**: The cart-to-checkout stage displays high efficiency, with a significantly smaller leakage (₹2.3M) compared to the initial browse stage.

---

## Business Implication
*   **Investment Priority**: Redirect marketing and product engineering efforts toward the "Add to Cart" conversion lever.
*   **Revenue Growth**: Recovering even 10% of top-of-funnel leakage would double the current total revenue.
*   **Efficiency**: The checkout process is already high-performing; avoid over-investing in checkout optimization at this phase.

---

## Raw SQL Output (Revenue Impact)

```text
╭─────────────┬────────────────┬────────────────┬────────────────┬────────────────┬────────────────╮
│ total_users │ actual_revenue │ pot_from_views │ pot_from_carts │ leak_frm_views │ leak_frm_carts │
╞═════════════╪════════════════╪════════════════╪════════════════╪════════════════╪════════════════╡
│      407283 │     5125395.62 │    52972074.01 │     2318820.87 │    52972074.01 │     2318820.87 │
╰─────────────┴────────────────┴────────────────┴────────────────┴────────────────┴────────────────╯
```

---

## Note
Revenue estimation is purely based on the average purchase value of converted users applied as a proxy for non-purchaser potential.
