import {useState, useEffect } from 'react';
import BlogList from './blogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'Lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'Lorem ipsum...', author: 'yousi', id: 2 },
        { title: 'Web dev top tips', body: 'Lorem ipsum...', author: 'mario', id: 3 },
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        console.log('delete func called')
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran')
    }, [name])

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            <p>{name}</p>
            <button onClick={() => setName('luigi')}>Change Name</button>
        </div>
     );
}
 
export default Home;