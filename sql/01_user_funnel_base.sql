-- 01_user_funnel_base.sql
DROP TABLE IF EXISTS user_funnel_base;
CREATE TABLE user_funnel_base AS
SELECT user_id,
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
WHERE user_id IS NOT NULL
GROUP BY user_id;
-- Validation
SELECT COUNT(*) AS total_users,
    SUM(viewed) AS viewed_users,
    SUM(added_to_cart) AS cart_users,
    SUM(purchased) AS purchased_users
FROM user_funnel_base;