# Jira Tickets — Funnel Analytics Project

---

## TICKET 1 — Data Ingestion Setup

**Title:** Load e-commerce dataset into SQLite database

**Description:**
Import raw CSV data into SQLite database for analysis. Ensure user_id is stored as text to avoid data loss.

**Task Type:** Data Engineering

**Status:** Done

**Acceptance Criteria:**

* Data loaded into `events` table
* Row count matches source file
* user_id stored correctly (no scientific notation)

---

## TICKET 2 — User Funnel Base Table

**Title:** Create user-level funnel table

**Description:**
Build a table that tracks whether each user has viewed, added to cart, and purchased.

**Task Type:** Data Analysis

**Status:** Done

**Acceptance Criteria:**

* Table `user_funnel_base` created
* One row per user
* Columns: viewed, added_to_cart, purchased

---

## TICKET 3 — Funnel Metrics Calculation

**Title:** Calculate conversion and drop-off rates

**Description:**
Compute funnel conversion rates and drop-offs using SQL.

**Task Type:** Data Analysis

**Status:** Done

**Acceptance Criteria:**

* View → Cart rate calculated
* Cart → Purchase rate calculated
* Drop-offs identified

---

## TICKET 4 — Category-Level Analysis

**Title:** Analyze funnel performance by category

**Description:**
Segment funnel by product category to identify high and low performing categories.

**Task Type:** Data Analysis

**Status:** Done

**Acceptance Criteria:**

* Category-level funnel created
* Top and bottom categories identified
* Insights documented

---

## TICKET 5 — Revenue Impact Analysis

**Title:** Estimate revenue loss across funnel

**Description:**
Calculate actual revenue and estimate potential revenue loss due to drop-offs.

**Task Type:** Business Analysis

**Status:** Done

**Acceptance Criteria:**

* Actual revenue calculated
* Revenue leakage estimated
* Business insights derived

---

## TICKET 6 — Business Recommendations

**Title:** Provide optimization recommendations

**Description:**
Based on analysis, suggest improvements to increase conversion and revenue.

**Task Type:** Business Analysis

**Status:** Done

**Acceptance Criteria:**

* Key problem identified (low add-to-cart rate)
* Recommendations provided
* Focus areas defined

---
