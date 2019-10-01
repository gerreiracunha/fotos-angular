export interface Photo {

    id: number;
    postDate: Date;
    url: string;
    description: string;
    allowComnents: boolean;
    likes: number;
    comments: number;
    userId: number;

}