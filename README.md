# Conversion Funnel & Revenue Intelligence System

**Capability:** Funnel Analytics | Revenue Leakage Modeling | Strategic Growth Modeling

---

## Project Overview
This project focuses on identifying conversion bottlenecks, quantifying revenue leakage, and recommending actionable growth strategies using funnel analytics for a large-scale e-commerce platform. By analyzing ~885K event-level records, I translated raw user behavior into a strategic decision-making framework.

**Analyst:** Chiranjeevi PK  
**Domain:** eCommerce / Growth Analytics  
**Tools:** SQL (SQLite), Excel, HTML/CSS/JS, Power BI  

---

## Business Problem Statement
The platform generates significant user traffic (~407k unique users) but faces a critical conversion efficiency gap. The primary objective is to:
1. Identify exactly where users drop off in the purchase journey.
2. Quantify the financial impact of these drop-offs (Revenue Leakage).
3. Provide data-driven recommendations to prioritize product and marketing interventions.

---

## Key Performance Indicators (KPIs)
*   **Total Reach:** 407,283 Unique Users
*   **Actual Revenue Recorded:** ₹5.12M
*   **Potential Revenue (at 100% Cart Conversion):** ₹58.09M
*   **Revenue Leakage:** ₹52.97M (8.8% Capture Efficiency)
*   **North Star Metric:** Overall Conversion Rate of **5.24%**

---

## Core Insights & Findings
*   **Discovery Gap:** **91% of drop-off** occurs at the *View → Add to Cart* stage. Initial engagement is the primary bottleneck, not the checkout process.
*   **High Intent Efficiency:** Once a user adds a product to the cart, the conversion rate jumps to **~57%**. 
*   **Leakage Pattern:** Majority of revenue loss occurs before purchase intent is even formed, suggesting issues with product visibility or discovery logic.
*   **Category Performance:** High-intent categories (Laptops, Monitors) have friction at checkout, while discovery categories (Vacuum, Juicer) lack initial interest.

---

## Analytical Approach & Methodology

### 1. Data Engineering & Processing
- Ingested **885k event records** into a structured SQLite environment.
- Cleaned and deduplicated user interactions to maintain a **User-Level Granularity**.

### 2. Funnel Modeling
Built a behavioral funnel using `DISTINCT USER` logic across three primary stages:
- **Awareness:** Product Viewed
- **Interest:** Added to Cart
- **Action:** Purchased

### 3. Revenue Leakage Modeling
Developed a financial impact model comparing **Actual Revenue** vs. **Potential Revenue** (Cart Value of dropped users), allowing us to assign a monetary value to funnel friction.

### 4. Strategic Segmentation
Created a **2x2 Decision Matrix** (Interest vs. Efficiency) to classify 10+ categories into:
- **Scale:** High Interest & High Efficiency (e.g., Videocards)
- **Fix Discovery:** Low Interest & High Efficiency
- **Fix Checkout:** High Interest & Low Efficiency
- **Deprioritize:** Low Interest & Low Efficiency

---

## Business Recommendations

| Strategy          | Action                                   | Target Categories    |
| :---------------- | :--------------------------------------- | :------------------- |
| **Scale**         | Aggressive ad spend & featured placement | Videocards, Printers |
| **Fix Discovery** | Dynamic pricing, better thumbnails, SEO  | Vacuum, Juicer       |
| **Fix Checkout**  | UI/UX audit, simplified shipping/payment  | Laptops, Monitors    |
| **Deprioritize**  | Reduce inventory/marketing overhead       | Clocks, Kettles      |

---

## Project Structure

```text
conversion-funnel-analysis/

├── data/               # Raw and processed datasets (CSV/SQLite)
├── sql/                # Sequential SQL logic (Base -> Rates -> Segments -> Revenue)
├── dashboards/         # Power BI templates & specialized dashboards
├── outputs/            # Detailed markdown reports for stakeholders
├── BRD/                # Business Requirements Documentation
├── FRD/                # Functional Requirements Documentation
├── index.html          # Interactive Dashboard (Live Homepage)
├── style.css           # Dashboard Styling
├── script.js           # Dashboard Logic
└── README.md           # Project Documentation
```

---

## Outcome & Impact
This project demonstrates the ability to transform raw data into a **Revenue Optimization Strategy**. By identifying that **91% of users leak at the awareness stage**, we can pivot the business focus from "Checkout Optimization" to "Product Discovery and Engagement," potentially recovering a portion of the **₹52.97M** lost revenue.

---