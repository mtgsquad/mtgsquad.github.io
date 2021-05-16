const main = document.getElementById('main');

const content = document.getElementById('content');
const title = document.getElementById('title');

const submitBtn = document.getElementById('submit');

submitBtn.onclick(()=>{
    const newArticle = main.createElement('article');
    const heading = newArticle.createElement('h2');
    const content = newArticle.createElement('p');

    heading.innerHTML(title);
    content.innerHTML(content);
})