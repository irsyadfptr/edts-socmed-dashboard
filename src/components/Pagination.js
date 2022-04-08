import React from 'react'

function Pagination({postsPerPage, totalPosts, paginate, currentPage}) {
        const pageNumbers = [];
      
        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
          pageNumbers.push(i);
        }      
        return (
          <div className='py-2'>
            <div>
              <p className='text-sm text-gray-700'>
                Showing
                <span className='font-medium'>
                  {" "}
                  {currentPage * postsPerPage - 5}{" "}
                </span>
                to
                <span className='font-medium'> {currentPage * postsPerPage} </span>
                of
                <span className='font-medium'> {totalPosts} </span>
                results
              </p>
            </div>
            <nav className='block'>
              <ul className='flex pl-0 rounded list-none flex-wrap'>
                <li>
                  {pageNumbers.map((number, index) => (
                    <a key={index}
                      onClick={() => {
                        paginate(number);
                      }}
                      href='#'
                      className={
                        currentPage === number
                          ? "bg-blue border-red-300 text-red-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                          : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                      }
                    >
                      {number}
                    </a>
                  ))}
                </li>
              </ul>
            </nav>
          </div>
        );
}

export default Pagination

// const [posts, setPosts] = useState([]);
// const [loading, setLoading] = useState(false);
// const [currentPage, setCurrentPage] = useState(1);
// const [postsPerPage] = useState(10);

// useEffect(() => {
//   const fetchPosts = async () => {
//     setLoading(true);
//     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//     setPosts(res.data);
//     setLoading(false);
//   };

//   fetchPosts();
// }, []);

// // Get current posts
// const indexOfLastPost = currentPage * postsPerPage;
// const indexOfFirstPost = indexOfLastPost - postsPerPage;
// const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

// // Change page
// const paginate = (pageNumber) => setCurrentPage(pageNumber);

{/* <Posts posts={currentPosts} loading={loading} />
<Pagination
  postsPerPage={postsPerPage}
  totalPosts={posts.length}
  paginate={paginate}
  currentPage={currentPage}
/> */}