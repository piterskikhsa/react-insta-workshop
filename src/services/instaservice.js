export default class InstaService {
    constructor(){
        this._apiBase = 'http://localhost:3000/'
    }

    getResource = async (url) => {
        const result = await fetch(`${this._apiBase}${url}`);
        
        if (!result.ok){
            throw new Error(`Coild not fetch ${url}, received ${result.status}`)
        }
        return result.json();
    }

    getAllPosts = async () => {
        const result = await this.getResource('posts/');
        return result;
    }
    
    getAllAuthors = async () => {
        const result = await this.getResource('posts/');
        return result;
    }

    getAllPhotos = async () => {
        const result = await this.getResource('posts/');
        return result.map(this._transformPosts);
    }

    _transformPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt,
            id: post.id
        }
    }

}