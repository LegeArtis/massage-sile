import React from 'react';
import { BlogServiceConsumer } from '../blogs-service-context/blogs-service-context';

const withBlogService = () => (Wrapped)=>{

    return (props) => {
        return (
            <BlogServiceConsumer>
                {
                    (blogService) => {
                        return (
                            <Wrapped {...props} blogService={blogService} />
                        );
                    }
                }
            </BlogServiceConsumer>
        );
    }
};

export {
    withBlogService
};
