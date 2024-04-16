export interface PrinterPool {
    id: number;
    jobcard_number: string;
    model_number: string;
    operator_name: string;
    machine_name: string;
    work_status: string;
    job_result: string;
    reprint_status: string;
    time: Date;
}