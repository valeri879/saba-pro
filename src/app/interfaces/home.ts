import { Blog } from "./blog";
import { Category } from "./category";
import { Review } from "./review";

export interface Home {
    categories: Category[];
    blogs: Blog[];
    lastBlogs: Blog[];
    reviews: Review[];
}
