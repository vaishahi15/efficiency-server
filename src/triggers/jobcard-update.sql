DELIMITER $$

CREATE TRIGGER AFTER_JOBCARD_UPDATE AFTER
    UPDATE ON jobcard_details FOR EACH ROW
BEGIN
    INSERT INTO trigger_events_log (tableName, actionType, newData, eventTime) 
    VALUES (
        'jobcard_details', 
        'UPDATE',
        CONCAT('Updated JobCard: ', OLD.jobcard_number), 
        NOW()
    );
END$$ 