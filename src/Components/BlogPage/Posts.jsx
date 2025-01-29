import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Clock,
  Facebook,
  GitHub,
  Linkedin,
  Twitter,
  Youtube,
} from "react-feather";

const Posts = () => {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const API_KEY = "AIzaSyCBNl_fgSX_2X1YYj1yrB6Peti2ijnUc-k"; // Replace with your actual API key
  const CHANNEL_ID = "UCzFPGCdxhXZEYm-b9SAZxpA"; 

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const channelResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
        );

        const uploadsPlaylistId =
          channelResponse.data.items[0].contentDetails.relatedPlaylists.uploads;

        const videosResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=10&key=${API_KEY}`
        );

        const videoData = videosResponse.data.items.map((video) => ({
          title: video.snippet.title,
          url: `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`,
          uploadDate: new Date(video.snippet.publishedAt).toDateString(),
          thumbnail: video.snippet.thumbnails.medium.url,
        }));

        setVideos(videoData);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, [API_KEY, CHANNEL_ID]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = videos.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(videos.length / postsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {currentPosts.map((video, index) => (
        <div className="card border border-0 my-5" key={index}>
          <div className="card-title mb-4">
            <h1 className="mb-3">{video.title}</h1>
            <p className="mx-2">
              <Clock /> {video.uploadDate}
            </p>
          </div>
          <a href={video.url} target="_blank" rel="noopener noreferrer">
            <img
              src={video.thumbnail}
              className="card-img-top"
              alt={video.title}
            />
          </a>
          <div className="card-footer bg-transparent border border-0">
            <div className="d-flex bg-transparent">
              <div className="mx-1 px-4 py-1 bg-primary">
                <Facebook
                  className="bg-light"
                  style={{ color: "#0765FE", borderRadius: "50%" }}
                />
              </div>
              <div className="mx-1 px-4 py-1 bg-dark">
                <Twitter className="text-light" />
              </div>
              <div className="mx-1 px-4 py-1 bg-primary">
                <Linkedin className="text-light" />
              </div>
              <div className="mx-1 px-4 py-1 bg-dark">
                <GitHub className="text-light" />
              </div>
              <div className="mx-1 px-4 py-1 bg-danger">
                <Youtube className="text-light" />
              </div>
            </div>
            <a href={video.url} target="_blank" rel="noopener noreferrer">
              <button
                type="button"
                className="btn btn-outline-danger w-25 mt-3"
              >
                Watch
              </button>
            </a>
          </div>
        </div>
      ))}

      <div className="pagination my-5 d-flex justify-content-center">
        <button
          className="btn btn-danger mx-2"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`btn btn-outline-danger mx-1 ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="btn btn-danger mx-2"
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Posts;
