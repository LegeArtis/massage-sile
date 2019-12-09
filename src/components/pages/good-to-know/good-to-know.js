import React, {Component, Fragment} from 'react';
import './good-to-know.css';
import BlogItem from "../blog-item/blog-item";
import Loader from "../../loader/loader";
import Pagination from "../pagination/pagination";
import OpenedArticle from "../opened-article/opened-article";
import { Route } from 'react-router-dom';
import { withBlogService } from "../../hoc/with-blog-service";
import { connect } from 'react-redux';
import {blogLoaded} from "../../../actions";

class GoodToKnow extends Component {
    state = {
      currentPage: 1,
      blogListReady: false,
    };

    componentDidMount() {
        const { underline, blogService, blogLoaded } = this.props;
        underline(true);
        blogService.getBlogs().then((data)=>{
            blogLoaded(data);
            this.setState({
                blogListReady: true
            });
        });
    }

    componentWillUnmount() {
        this.props.underline(false);
    }

    clickNext = ()=> {
        this.setState(({currentPage})=>{
            return { currentPage: currentPage + 1 }
        })
    };

    clickBack = ()=> {
        this.setState(({currentPage})=>{
            return { currentPage: currentPage - 1}
        })
    };

    clickGoTo = (e) => {
      this.setState({ currentPage: +e.target.id});
    };

    render() {
        const {currentPage, blogListReady} = this.state;
        const { blog } = this.props;

        if (!Array.isArray(blog)) {
            return ;
        }
        const currentBlogList = blog.slice(currentPage * 6 - 6, currentPage * 6)
            .map(({imgUrl, text, title, _id}, index) => {
            return <BlogItem openArticle={this.openArticle}
                             srcImg={imgUrl} text={text} index={index}
                             title={title} itemId={_id} key={_id} />;
        });

        return (
            <Fragment>
                <Route path='/good-to-know/:id' render={({match})=>{
                    return <OpenedArticle id={match.params.id}/>
                }}/>
                <div className='blog_list_block'>
                    <h3 className='blog_list_title'>Полезная информация о массаже и фитнесе</h3>
                    {!blogListReady && <Loader/>}
                    <div className='blog_list'>
                      { blogListReady && currentBlogList }
                    </div>

                    {blog.length > 6 &&
                    <Pagination currentPage={currentPage}
                                maxPages={Math.ceil(blog.length / 6)}
                                clickNext={this.clickNext}
                                clickBack={this.clickBack}
                                clickGoTo={this.clickGoTo} />
                    }
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ blog }) => {
    return { blog };
};

const mapDispatchToProps =  {
    blogLoaded
};

export default withBlogService()(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(GoodToKnow));
