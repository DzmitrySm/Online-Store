import '../view/footer.css';

export class FooterViewComponent {
    private element: HTMLElement;

    constructor() {
        this.element = document.createElement('footer');
        this.renderHeader();
    }

    getElement(): HTMLElement {
        return this.element;
    }

    renderHeader(): void {
        this.element = document.createElement('footer');
        this.element.classList.add('footer');
        const divEl = document.createElement('div');
        divEl.classList.add('footer-logo');
        const linkEl = document.createElement('a');
        linkEl.href = 'https://rs.school/';
        linkEl.classList.add('link-school');
        const imgLogoSchool = document.createElement('img');
        imgLogoSchool.classList.add('img-school');
        imgLogoSchool.src = require('../../assets/rss-logo.svg');
        linkEl.append(imgLogoSchool);
        const ghLink = document.createElement('a');
        ghLink.href = 'https://github.com/DzmitrySm';
        ghLink.classList.add('gh-link');
        ghLink.textContent = 'github';
        const devYear = document.createElement('span');
        devYear.classList.add('dev-year-text');
        devYear.textContent = 'Copyright 2022';
        divEl.append(linkEl);
        this.element.append(divEl, ghLink, devYear);
    }
}
