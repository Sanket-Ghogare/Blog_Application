
import { Chart } from "react-google-charts";
import { API } from "../../services/api";
import { useEffect, useState } from 'react';


export const data = [
  ["Year", "Users", "Posts", "Comments"],
 
  ["2022", 3, 4, 5],
  ["2023", 8, 9, 14],
];

export const options = {
  chart: {
    title: "Application Performance",
    subtitle: "Users, Posts, and Comments: 2022-2023",
  },
};

export default function Calendercharts() {
  const [totalUser, setTotalUsers] = useState([]);
  const [totalComments, setTotalComments] = useState([]);
  const [totalPost, setTotalPost] = useState([]);

  useEffect(() => {
    const username =[];
    const fetchUser = async () => {
        let response = await API.getUser({ category:  '' });
        // console.log('fuser-data', response.data);
        // if (response.isSuccess) {
        //     setTotalUsers(response.data.length);
        //     console.log('data-len',response.data.length)
        // }

      //   for(let i =0; i<response.data.length;i++)
      //   {
      //    username.push(response.data.length[i].username)
      //   }
      //   console.log(username);
      // setTotalUsers(username);
    }
    fetchUser();
    // console.log('fuser', users);
}, [])

useEffect(() => {
  const fetchUsers = async () => {
      let response = await API.getUsers({ category:  '' });
      // console.log('fuser-data', response.data);
      if (response.isSuccess) {
          setTotalPost(response.data.length);
          console.log('data-len',response.data.length)
      }
  }
  fetchUsers();
  // console.log('fuser', users);
}, [])

useEffect(() => {
    const fetchComment = async () => {
        let response = await API.getComment({ category:  '' });
        // console.log('fuser-data', response.data);
        if (response.isSuccess) {
            setTotalComments(response.data.length);
            console.log('data-len',response.data.length)
        }
    }
    fetchComment();
    // console.log('fuser', users);
}, [])

  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
      // series={[
      //  {
      //   name:"year",
      //   data:"2022-2023",
      //  },
      // ]}

      // option={{
      //   name:"Users",
      //   usercount:"totalUser",

        
      // }}
    />
  );
}
