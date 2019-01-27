import moment from 'moment';

export default class News {
    constructor(item) {
        this.description = item.description;
        this.publishedAt = item.publishedAt;
        this.title = item.title;
        this.url = item.url;
        this.urlToImage = item.urlToImage;
    }

    buildBtn() {
        const anchor = document.createElement('a');
        anchor.textContent = 'Read';
        anchor.href = this.url;
        anchor.target = '_blank';

        return anchor;
    }

    buildImg() {
        const imgUrl = this.urlToImage ? this.urlToImage : 'https://vpodarok.ru/images/2018/no_photo.png';
        const img = document.createElement('img');
        img.setAttribute('src', imgUrl);

        return img;
    }

    buildFigcaption() {
        const figcaption = document.createElement('figcaption');
        const span = document.createElement('span');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const btn = this.buildBtn();
      
        span.textContent = moment(this.publishedAt.slice(0,10)).format('MMM Do YY');
        h2.textContent = this.title;
        p.textContent = this.description;
        figcaption.appendChild(span);
        figcaption.appendChild(h2);
        figcaption.appendChild(p);
        figcaption.appendChild(btn);

        return figcaption;
    }

    render() {
        const figure = document.createElement('figure');
        const img = this.buildImg();
        const figcaption = this.buildFigcaption();

        figure.appendChild(img);
        figure.appendChild(figcaption);

        return figure;
    }
}