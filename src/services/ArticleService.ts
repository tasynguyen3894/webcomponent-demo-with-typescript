import { Article } from '../models/Article';
import articleData from '../data/articles';
import { ArticleServiceInterface } from './ArticleServiceInterface';

export class ArticleService implements ArticleServiceInterface {
    getArticle(keyword: string = ''): Article[] {
        let articles: Article[] = [];
        for (let i = 0; i < articleData.aricles.length; i++) {
            if ( keyword === '' || articleData.aricles[i].title.toLocaleLowerCase().indexOf(keyword) > -1 ) {
                articles.push(new Article(articleData.aricles[i].title, articleData.aricles[i].url, articleData.aricles[i].tags));
            }
        }
        return articles;
    }
}