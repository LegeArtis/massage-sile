
export default class BlogService {
    url = 'https://massage-fitball.kiev.ua';
    // url = 'http://localhost:8888';

    sendMail(data) {
        return  fetch(`${this.url}/send-mail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
    }

    editPriceList(data) {
        return fetch(`${this.url}/editPriceList`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
    }

    editPassword(data) {
        return fetch(`${this.url}/editPassword`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
    }

    getPriceList() {
        return fetch(`${this.url}/getPriceList`)
            .then(value => value.json());
    }

    getBlogs() {
        return fetch(`${this.url}/allBlog`)
            .then((value) => value.json());
    }

    addBlog({ formData, pass }) {
        return fetch(`${this.url}/add-blogImg/${pass}`, {
            method: 'POST',
            headers: {
                'encType': 'multipart/form-data'
            },
            body: formData
        });
    }

    addBlogDesk(body) {
        return fetch(`${this.url}/add-blogDescription`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        });
    }

    removeBlog(body) {
        return fetch(`${this.url}/remove`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        });
    }

    checkPassword(pass) {
        return fetch(`${this.url}/check`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ pass })
        })
    }
}
