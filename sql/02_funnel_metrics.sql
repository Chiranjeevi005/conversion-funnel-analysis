-- ==========================================================
-- OBJECTIVE: Calculate conversion rates and drop-offs
-- DESCRIPTION: High-level metrics for dashboard reporting
--              aggregating from the user-level funnel base.
-- ==========================================================

-- 02_funnel_metrics.sql

SELECT
    COUNT(*) AS total_users,

    SUM(viewed) AS viewed_users,
    SUM(added_to_cart) AS cart_users,
    SUM(purchased) AS purchased_users,

    -- Conversion Rates (using * 1.0 to prevent integer division)
    ROUND(SUM(added_to_cart) * 1.0 / SUM(viewed), 4) AS view_to_cart_rate,
    ROUND(SUM(purchased) * 1.0 / SUM(added_to_cart), 4) AS cart_to_purchase_rate,
    ROUND(SUM(purchased) * 1.0 / SUM(viewed), 4) AS overall_conversion_rate,

    -- Drop-offs
    (SUM(viewed) - SUM(added_to_cart)) AS drop_view_to_cart,
    (SUM(added_to_cart) - SUM(purchased)) AS drop_cart_to_purchase

FROM user_funnel_base;
