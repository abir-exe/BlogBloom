import { useEffect, useState } from "react";
// import MUIDataTable from 'mui-datatables';


const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/featuredblogs")
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
    <h2>FeaturedBlogs</h2>
    <div>
    {/* <MUIDataTable
      title={'Data Table'}
      data={data}
      columns={columns}
      options={options}
    /> */}
    </div>
  </div>;
};

export default FeaturedBlogs;
