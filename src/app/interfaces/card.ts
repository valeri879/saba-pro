export interface Card {
    id: string | number;
    title: string;
    descr: string;
    img: string;
    isPublished: boolean;
    insertDate: Date;
    price: number;
}
