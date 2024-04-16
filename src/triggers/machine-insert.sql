DELIMITER $$

CREATE TRIGGER AFTER_MACHINE_INSERT AFTER
    INSERT ON machine_live_status FOR EACH ROW
BEGIN
    INSERT INTO trigger_events_log (tableName, actionType, newData, eventTime) 
    VALUES (
        'machine_live_status', 
        'INSERT',
        CONCAT('New Machine: ', NEW.machine_id),
        NOW()
    );
END$$ 