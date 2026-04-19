# Functional Requirement Document (FRD)

## Funnel Analytics & Conversion Optimization Framework

---

## 1. Objective

To build a system that tracks user movement across funnel stages, identifies where users drop off, and provides insights to improve conversion.

---

## 2. Data Requirements

The system will use an e-commerce events dataset with the following key fields:

* user_id → unique user
* event_type → (view, cart, purchase)
* event_time → timestamp
* product_id → product interaction
* category → product category (if available)

---

## 3. Funnel Definition

The funnel stages are defined as:

Visit → Product View → Add to Cart → Purchase

Each stage represents a step in the user journey.

---

## 4. Functional Requirements

The system should:

1. Track number of users at each funnel stage
2. Calculate conversion rate between stages
3. Identify drop-off at each step
4. Segment users based on:

   * device / source (if available)
   * product category
5. Estimate potential revenue loss due to drop-offs

---

## 5. Output Requirements

The system should generate:

* Funnel table (users at each stage)
* Conversion rates (%)
* Drop-off rates (%)
* Segment-wise performance
* Revenue impact summary

---

## 6. Tools & Implementation

* SQL → core analysis
* Excel → validation and quick summaries
* Power BI / HTML → visualization dashboard

---

## 7. Assumptions

* Each user follows a sequential funnel path
* Event data is accurate and complete
* One purchase event represents successful conversion

---

## 8. Constraints

* No real-time data processing
* No tracking implementation (only analysis)
* Limited to available dataset fields

---

## Final Note

> This system focuses on identifying where conversion fails and providing clear, data-driven insights to improve business performance.
