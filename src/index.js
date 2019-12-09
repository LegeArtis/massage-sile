import 'react-app-polyfill/ie11';
import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/pages/app/app";
import BlogService from "./services/blog-service";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import { BlogServiceProvider} from "./components/blogs-service-context/blogs-service-context";
import {Provider} from "react-redux";
import store from "./store";

const blogService = new BlogService();

ReactDOM.render(
    <Provider store={store} >
        <ErrorBoundry>
            <BlogServiceProvider value={blogService}>
                <App />
            </BlogServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);
