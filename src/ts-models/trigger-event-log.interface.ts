export interface TriggerEventLog {
    id: number;
    tableName: string;
    actionType: string;
    originalData: string | null;
    newData: string | null;
    eventTime: Date;
}