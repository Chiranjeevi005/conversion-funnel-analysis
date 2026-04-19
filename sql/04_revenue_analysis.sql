-- ==========================================================
-- OBJECTIVE: Revenue Impact Analysis (Refined)
-- DESCRIPTION: Calculates actual vs potential revenue for non-purchasers.
-- ==========================================================

WITH user_revenue AS (
    SELECT user_id,
        MAX(CASE WHEN event_type = 'view' THEN 1 ELSE 0 END) AS viewed,
        MAX(CASE WHEN event_type = 'cart' THEN 1 ELSE 0 END) AS added_to_cart,
        MAX(CASE WHEN event_type = 'purchase' THEN 1 ELSE 0 END) AS purchased,
        SUM(CASE WHEN event_type = 'purchase' THEN price ELSE 0 END) AS revenue
    FROM events
    GROUP BY user_id
),
avg_order_value AS (
    SELECT AVG(price) AS avg_price
    FROM events
    WHERE event_type = 'purchase'
)
SELECT 
    COUNT(*) AS total_users,
    ROUND(SUM(revenue), 2) AS actual_revenue,
    
    -- Only non-purchasers should contribute to potential and leakage
    ROUND(SUM(CASE WHEN purchased = 0 AND viewed = 1 THEN avg_price ELSE 0 END), 2) AS potential_from_views,
    ROUND(SUM(CASE WHEN purchased = 0 AND added_to_cart = 1 THEN avg_price ELSE 0 END), 2) AS potential_from_carts,
    
    ROUND(SUM(CASE WHEN purchased = 0 AND viewed = 1 THEN avg_price ELSE 0 END), 2) AS leakage_from_views,
    ROUND(SUM(CASE WHEN purchased = 0 AND added_to_cart = 1 THEN avg_price ELSE 0 END), 2) AS leakage_from_carts
    
FROM user_revenue, avg_order_value;