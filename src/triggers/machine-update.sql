DELIMITER $$

CREATE TRIGGER AFTER_MACHINE_UPDATE AFTER
    UPDATE ON machine_live_status FOR EACH ROW
BEGIN
    INSERT INTO trigger_events_log (tableName, actionType, newData, eventTime) 
    VALUES (
        'machine_live_status', 
        'UPDATE',
        CONCAT('Updated Machine: ', OLD.machine_id),
        NOW()
    );
END$$ 