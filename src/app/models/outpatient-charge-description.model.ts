/**
 * Describes the object for outpatient hospital charge data.
 */
export class OutpatientChargeDescription {
    constructor(
        public hospital: string,
        public address: string,
        public avgCharges: string,
        public avgPayments: string
    ) { }
}
