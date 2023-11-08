//<-------------------Please Read This ------------------>
// I tried so many times to use react data tables but there were problems when i tried to import the components sme thing happend for all the data table components. I installed them(you can check package file, i tried using but the server crashed ASAP)

import { useEffect, useState } from "react";
import FeaturedRow from "./FeaturedRow";
// import MUIDataTable from 'mui-datatables';


const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://blog-bloom-server-mu.vercel.app/featuredblogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs.length);

//   const columns = [
//     {
//       name: 'id',
//       label: 'Serial ID',
//     },
//     {
//       name: 'title',
//       label: 'Title',
//     },
//     {
//       name: 'col3',
//       label: 'Column 3',
//     },
//     {
//       name: 'col4',
//       label: 'Column 4',
//     },
//   ];
//   const data = [
//     ['1', 'Title 1', 'Data3-1', 'Data4-1'],
//     ['2', 'Title 2', 'Data3-2', 'Data4-2'],
//   ]

//   const options = {
//     filter: false,
//     search: false,
//     print: false,
//     download: false,
//   };



  return <div>
    
    <div className="my-10">
    {/* <MUIDataTable
      title={'Data Table'}
      data={data}
      columns={columns}
      options={options}
    /> */}
    </div>
    <div>
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        
        <th>Owner Image</th>
        <th>Blog Title</th>
        <th>Category</th>
        <th>Blog Owner</th>
       
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      
      {
        blogs.map(blog => <FeaturedRow key={blog._id} blog={blog}></FeaturedRow>)
      }
      
    </tbody>
    
    
  </table>
</div>
    </div>
  </div>;
};

export default FeaturedBlogs;
