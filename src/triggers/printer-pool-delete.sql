DELIMITER $$

CREATE TRIGGER AFTER_PRINTER_POOL_DELETE AFTER
    DELETE ON printer_pool FOR EACH ROW
BEGIN
    INSERT INTO trigger_events_log (tableName, actionType, originalData, eventTime) 
    VALUES (
        'printer_pool', 
        'DELETE',
        CONCAT('Deleted Printer Pool: ', OLD.id),
        NOW()
    );
END$$ 