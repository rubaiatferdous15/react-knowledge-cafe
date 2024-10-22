import PropTypes from 'prop-types'
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id,title, cover, author,authorImage, postedDate, hashtags, readingTime} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4 space-y-4'>
                <div className='flex'>
                    <img className='w-14 mb-8' src={authorImage} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{postedDate}</p>
                    </div>
                </div>
                <div>
                    <span>{readingTime} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-2xl text-red-400'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key ={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(id,readingTime)} className='text-purple-600 font-bold underline'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead : PropTypes.func
}

export default Blog;