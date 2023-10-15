import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    // const [name, setName] = useState('Kenny')

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs)
    // }

    // const [blogs, setBlogs] = useState([
    //     { title: 'First react website', body: 'jsx template resembles HTML', author: 'Kenny', id: 1 },
    //     { title: 'Welcome react website', body: 'component as a function', author: 'Nicole', id: 2 },
    //     { title: 'Enjoy react website', body: 'reactive value by hook', author: 'Kenny', id: 3 },
    // ])

    // let name = 'mario';

    // const [name, setName] = useState('mario')
    // const [age, setAge] = useState(25)

    // const handleClick = (e) => {
    //     // console.log('hello ninjas', e)
    //     // name = 'luigi'
    //     // console.log(name)
    //     setName('luigi')
    //     setAge(30)
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target)
    // }

    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading.. </div>}
            { blogs && <BlogList blogs={blogs} title={"All Blogs!"} /> }
            {/* <button onClick={() => setName('Carol')}>change name</button>
            <p>{name}</p> */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Kenny')} title={"Kenny's blogs!"}  /> */}

            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> */}
        </div>
    );
}
 
export default Home;