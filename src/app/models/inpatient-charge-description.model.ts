/**
 * Describes the object for inpatient hospital charge data.
 */
export class InpatientChargeDescription {
    constructor(
        public hospital: string,
        public address: string,
        public avgCharges: string,
        public avgPayments: string,
        public avgMedicarePayments: string
    ) { }
}
