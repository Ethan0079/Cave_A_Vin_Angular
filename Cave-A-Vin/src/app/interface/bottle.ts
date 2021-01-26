export interface Bottle {
    Id: number;
    Name : string;
    Date: string;
    Amount: number;
    PricePerBottle: number;
    Typevin: TypeVin;
    // Owner: number;
    OwnerId: number;
    // Cave: number;
    CaveId: number;
    ImageUrl: String;
}

export enum TypeVin{
    // Rouge 1,
    // Blanc = 2,
    // Rose = 3,
    // Champagne = 4
    Rouge,
    Blanc,
    Rose,
    Champagne
}
