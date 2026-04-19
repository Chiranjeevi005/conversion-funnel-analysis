# User Funnel Summary (SQL Analysis)

## Objective

Analyze user movement across funnel stages (View → Cart → Purchase) using user-level aggregation.

---

## Funnel Metrics

| Stage         | Users   |
| ------------- | ------- |
| Total Users   | 407,283 |
| Viewed        | 406,863 |
| Added to Cart | 36,952  |
| Purchased     | 21,304  |

---

## Conversion Rates

* **View → Cart:** 9.08%
* **Cart → Purchase:** 57.66%
* **Overall Conversion (View → Purchase):** 5.24%

---

## Drop-off Analysis

* Users lost from View → Cart: **369,911**
* Users lost from Cart → Purchase: **15,648**

---

## Key Insights

1. **Major Drop-off at View Stage**
   Only ~9% of users add products to cart, indicating weak product engagement or intent.

2. **Strong Purchase Intent After Cart**
   ~58% of users who add to cart complete purchase, suggesting checkout flow is relatively effective.

3. **Primary Bottleneck = View → Cart**
   Most revenue loss occurs before users show buying intent.

---

## Business Implication

* Focus on improving **product page experience, pricing, and trust signals**
* Optimize **top-of-funnel conversion**, not checkout

---

## Raw SQL Output (Validation)

```text
╭─────────────┬──────────────┬────────────┬─────────────────╮
│ total_users │ viewed_users │ cart_users │ purchased_users │
╞═════════════╪══════════════╪════════════╪═════════════════╡
│      407283 │       406863 │      36952 │           21304 │
╰─────────────┴──────────────┴────────────┴─────────────────╯
```