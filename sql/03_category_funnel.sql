-- 03_category_funnel_fixed.sql
WITH category_user_events AS (
    SELECT category_code,
        user_id,
        MAX(
            CASE
                WHEN event_type = 'view' THEN 1
                ELSE 0
            END
        ) AS viewed,
        MAX(
            CASE
                WHEN event_type = 'cart' THEN 1
                ELSE 0
            END
        ) AS added_to_cart,
        MAX(
            CASE
                WHEN event_type = 'purchase' THEN 1
                ELSE 0
            END
        ) AS purchased
    FROM events
    WHERE category_code IS NOT NULL
    GROUP BY category_code,
        user_id
),
category_metrics AS (
    SELECT category_code,
        COUNT(DISTINCT user_id) AS total_users,
        SUM(viewed) AS viewed_users,
        SUM(added_to_cart) AS cart_users,
        SUM(purchased) AS purchased_users,
        -- Conversion metrics
        ROUND(SUM(added_to_cart) * 1.0 / SUM(viewed), 4) AS view_to_cart_rate,
        ROUND(SUM(purchased) * 1.0 / SUM(added_to_cart), 4) AS cart_to_purchase_rate,
        ROUND(SUM(purchased) * 1.0 / SUM(viewed), 4) AS overall_conversion_rate
    FROM category_user_events
    GROUP BY category_code
)
SELECT *
FROM category_metrics
WHERE viewed_users > 1000 -- stronger filter
ORDER BY overall_conversion_rate DESC,
    view_to_cart_rate DESC;