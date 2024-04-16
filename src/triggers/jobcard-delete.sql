DELIMITER $$

CREATE TRIGGER AFTER_JOBCARD_DELETE AFTER
    DELETE ON jobcard_details FOR EACH ROW
BEGIN
    INSERT INTO trigger_events_log (tableName, actionType, originalData, eventTime) 
    VALUES (
        'jobcard_details', 
        'DELETE',
        CONCAT('Deleted JobCard: ', OLD.jobcard_number),
        NOW()
    );
END$$