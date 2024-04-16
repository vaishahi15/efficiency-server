DELIMITER $$

CREATE TRIGGER AFTER_JOBCARD_INSERT AFTER
    INSERT ON jobcard_details FOR EACH ROW
BEGIN
    INSERT INTO trigger_events_log (tableName, actionType, newData, eventTime) 
    VALUES (
        'jobcard_details', 
        'INSERT',
        CONCAT('New JobCard: ', NEW.jobcard_number),
        NOW()
    );
END$$ 