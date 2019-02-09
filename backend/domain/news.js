class News {
    constructor(id) {
        this.id = id;
        this.author;
        this.title;
        this.description;
        this.url;
        this.urlToImage;
        this.publishedAt;
        this.content;
        this.source;
    }

    addAuthor(author) {
        this.author = author;
        return this;
    }

    addTitle(title) {
        this.title = title;
        return this;
    }

    addDescription(description) {
        this.description = description;
        return this;
    }

    addUrl(url) {
        this.url = url;
        return url;
    }

    addUrlToImage(urlToImage) {
        this.urlToImage = urlToImage;
        return this;
    }

    addPublishDate(publishedAt) {
        this.publishedAt = publishedAt;
        return this;
    }

    addContent(content) {
        this.content = content;
        return this;
    }

    addSource(source) {
        this.source = source;
        return this;
    }
}

module.exports = News;