DELIMITER $$

CREATE TRIGGER AFTER_MACHINE_DELETE AFTER
    DELETE ON machine_live_status FOR EACH ROW
BEGIN
    INSERT INTO trigger_events_log (tableName, actionType, originalData, eventTime) 
    VALUES (
        'machine_live_status', 
        'DELETE',
        CONCAT('Deleted Machine: ', OLD.machine_id),
        NOW()
    );
END$$ 