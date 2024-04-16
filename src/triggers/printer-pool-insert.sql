DELIMITER $$

CREATE TRIGGER AFTER_PRINTER_POOL_INSERT AFTER
    INSERT ON printer_pool FOR EACH ROW
BEGIN
    INSERT INTO trigger_events_log (tableName, actionType, newData, eventTime) 
    VALUES (
        'printer_pool', 
        'INSERT',
        CONCAT('New Printer Pool Data: ', NEW.id),
        NOW()
    );
END$$ 