
const blogLoaded = ( allBlog ) => {
  return {
      type: 'BLOG_LOADED',
      payload: allBlog
  };
};

const passAdd = ( pass ) => {
    return {
        type: 'PASS_ADD',
        payload: pass
    };
};

export {
    blogLoaded,
    passAdd
};
