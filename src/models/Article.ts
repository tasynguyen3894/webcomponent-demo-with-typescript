import { ArticleInterface } from './interfaces/ArticleInterface';

export class Article implements ArticleInterface {
    title: string;
    url: string;
    tags: string[];

    constructor(title: string, url: string, tags: string[] = []) {
        this.title = title;
        this.url = url;
        this.tags = tags;
    }
}