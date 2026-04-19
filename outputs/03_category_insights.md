# Category Funnel Analysis (Corrected)

## Objective

Evaluate category-level performance using full-funnel conversion (View → Purchase).

---

## Top Performing Categories (Scale)

1. **computers.peripherals.camera**
2. **computers.components.videocards**
3. **computers.ebooks**
4. **computers.components.power_supply**
5. **computers.peripherals.printer**

**Insight:**
Technology-driven categories show strong intent and balanced funnel performance.

---

## Opportunity Categories (Fix Entry Funnel)

1. **appliances.environment.vacuum**
2. **appliances.kitchen.kettle**

**Insight:**
High cart → purchase rates but weak view → cart conversion.
Users are willing to buy but not engaging early.

---

## Low Performing Categories (Deprioritize / Fix)

1. **appliances.kitchen.juicer**
2. **appliances.kitchen.coffee_machine**
3. **electronics.clocks**

**Insight:**
Extremely low overall conversion indicates poor demand or weak product-market fit.

---

## Key Takeaways

*   Overall conversion is the most reliable performance metric
*   High cart → purchase alone is misleading
*   Entry funnel (view → cart) is the biggest driver of growth

---

## Business Recommendations

*   Scale high-performing tech categories
*   Improve product discovery and pricing for opportunity categories
*   Avoid investing in low-conversion categories with minimal ROI

---

## Raw SQL Metrics (Balanced Output)

```text
╭───────────────────────────────────┬──────────────┬────────────┬──────────┬──────────┬──────────┬──────────╮
│ category_code                     │ viewed_users │ cart_users │ purch_us │ v_to_c_rt│ c_to_p_rt│ over_conv│
╞═══════════════════════════════════╪══════════════╪════════════╪══════════╪══════════╪══════════╪══════════╡
│ computers.peripherals.camera      │         2070 │        479 │      328 │   0.2314 │   0.6848 │   0.1585 │
│ computers.components.videocards   │        29033 │       7942 │     3980 │   0.2736 │   0.5011 │   0.1371 │
│ computers.ebooks                  │         1553 │        221 │      132 │   0.1423 │   0.5973 │   0.0850 │
│ computers.components.power_supply │         3605 │        544 │      296 │   0.1509 │   0.5441 │   0.0821 │
│ computers.peripherals.printer     │        19732 │       2379 │     1519 │   0.1206 │   0.6385 │   0.0770 │
├───────────────────────────────────┼──────────────┼────────────┼──────────┼──────────┼──────────┼──────────┤
│ appliances.environment.vacuum     │         3838 │        263 │      194 │   0.0685 │   0.7376 │   0.0505 │
│ appliances.kitchen.kettle         │         1379 │         56 │       40 │   0.0406 │   0.7143 │   0.0290 │
├───────────────────────────────────┼──────────────┼────────────┼──────────┼──────────┼──────────┼──────────┤
│ appliances.kitchen.coffee_machine │         2272 │         43 │       16 │   0.0189 │   0.3721 │   0.0070 │
│ electronics.clocks                │         2480 │         49 │       21 │   0.0198 │   0.4286 │   0.0085 │
│ appliances.kitchen.juicer         │         1355 │          6 │        2 │   0.0044 │   0.3333 │   0.0015 │
╰───────────────────────────────────┴──────────────┴────────────┴──────────┴──────────┴──────────┴──────────╯
```
