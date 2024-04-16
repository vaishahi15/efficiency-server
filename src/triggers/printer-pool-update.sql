DELIMITER $$

CREATE TRIGGER AFTER_PRINTER_POOL_UPDATE AFTER
    UPDATE ON printer_pool FOR EACH ROW
BEGIN
    INSERT INTO trigger_events_log (tableName, actionType, newData, eventTime) 
    VALUES (
        'printer_pool', 
        'UPDATE',
        CONCAT('Updated Printer Pool: ', OLD.id),
        NOW()
    );
END$$ 