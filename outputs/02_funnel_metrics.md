# Funnel Metrics (SQL Output)

## Conversion Rates
Across the identified user journey, the following conversion milestones were achieved:

| Funnel Stage Movement | Conversion Rate |
| :--- | :--- |
| **View → Cart** | 9.08% |
| **Cart → Purchase** | 57.66% |
| **Overall Conversion** | 5.24% |

---

## Drop-off Analysis
Quantifying the leakage points in the conversion funnel:

*   **View → Cart Drop:** 369,911 users
*   **Cart → Purchase Drop:** 15,648 users

---

## Key Insights
1.  **Stage-One Friction:** A major drop occurs at the **View → Cart** stage. Only ~9% of users proceed to add items to their cart after viewing products.
2.  **High Purchase Intent:** Once users commit to adding an item to the cart, the conversion to purchase is remarkably strong at **57.66%**.
3.  **Identified Bottleneck:** The primary funnel bottleneck exists during early-stage product interaction, rather than during the checkout process.

---

## Business Recommendations
*   **Top-of-Funnel Focus:** Prioritize improvements in **product page visibility, clearer pricing models, and stronger trust signals** to encourage the initial add-to-cart action.
*   **Shift Optimization Efforts:** Direct the majority of optimization resources toward increasing the **add-to-cart rate** instead of marginal checkout flow improvements.

---

## Raw SQL Output (Metrics)

```text
╭────────┬────────┬────────┬────────┬────────┬────────┬────────┬────────┬────────╮
│total_us│viewed_u│cart_use│purch_us│v2c_rate│c2p_rate│ov_conv_│v2c_drop│c2p_drop│
│  ers   │  sers  │   rs   │  ers   │        │        │  rate  │        │        │
╞════════╪════════╪════════╪════════╪════════╪════════╪════════╪════════╪════════╡
│  407283│  406863│   36952│   21304│  0.0908│  0.5765│  0.0524│  369911│   15648│
╰────────┴────────┴────────┴────────┴────────┴────────┴────────┴────────┴────────╯
```
