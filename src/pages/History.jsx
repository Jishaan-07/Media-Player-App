import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteHistoryAPI, getAllHistoryAPI } from '../services/allAPI'; // Ensure this is correctly imported

const History = () => {
  const [allVideoHistory, setAllVideoHistory] = useState([]);

  useEffect(() => {
    getAllHistory();
  }, []);

  console.log(allVideoHistory);

  const getAllHistory = async () => {
    try {
      const history = await getAllHistoryAPI();
      console.log(history);
      if (history.status >= 200 && history.status < 300) {
        setAllVideoHistory(history.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const removeHistory = async(id)=>{
    try{
      await deleteHistoryAPI(id)
      getAllHistory()

    }catch(err){
      console.log(err);
      
    }
  }

  return (
    <div style={{ paddingTop: '100px' }}>
      <div className="container d-flex justify-content-between">
        <h3>Watch History</h3>
        <Link to="/home">Back to Home</Link>
      </div>
      <table className="container my-5 table">
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Time Stamp</th>
            <th>...</th>
          </tr>
        </thead>
        <tbody>
          {
          allVideoHistory?.length > 0 ? (
            allVideoHistory.map((videoDetails, index) => (
              <tr key={videoDetails?.id || index}>
                <td>{index+1}</td>
                <td>{videoDetails?.caption}</td>
                <td>
                  <a href={videoDetails?.youTubeLink} target="_blank" rel="noopener noreferrer">
                    {videoDetails?.youTubeLink}
                  </a>
                </td>
                <td>{videoDetails?.timeStamp}</td>
                <td>
                  <button onClick={()=>removeHistory(videoDetails?.id)} className="btn">
                    <i className="fa-solid fa-trash text-danger"></i>
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Nothing to show here!</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default History;