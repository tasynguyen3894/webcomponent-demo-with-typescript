import { Article } from '../models/Article';

export interface ArticleServiceInterface {
    getArticle(keyword: string): Article[];
}