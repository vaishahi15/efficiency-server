export interface JobCardDetails {
    id: number;
    jobcard_number: string;
    model_number: string;
    job_qty?: number;
    job_time?: number;
    approved_qty?: number;
    rejection_qty?: number;
    rework_qty?: number;
    remaining_qty?: number;
    jobcard_status: string;
    time: Date;
    no_of_persons?: number;
    parent_jobcard_no?: string;
    rework_card_flag?: string;
    dept?: string;
    pending_qty?: number;
    creation_time: Date;
}