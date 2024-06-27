import React, { useEffect, useState } from "react";
import { useSidebar } from "../../context/SidebarContext";
import { useParams } from "react-router";
import GRise1111 from "../../assets/img/GRise1111.png";
import InforProduct from "../../atom/InforProduct.jsx/InforProduct";
import Review from "../../atom/Review/Review";
import Comment from "../../atom/Comments/Comment";
import GetAllWatchbyId from "../../api/GetAllWatchbyId";

export default function ProductDetail() {
  const { setShowSidebar } = useSidebar();
  const { id } = useParams();
  const [watchData, setWatchData] = useState(null);

  useEffect(() => {
    setShowSidebar(false); // Hide the sidebar
    return () => {
      setShowSidebar(true); // Show the sidebar when leaving the component
    };
  }, [setShowSidebar]);

  useEffect(() => {
    const fetchWatchData = async () => {
      try {
        const data = await GetAllWatchbyId(id);
        setWatchData(data);
      } catch (error) {
        console.error("Error fetching watch data:", error);
      }
    };

    fetchWatchData();
  }, [id]);
console.log(watchData);
  return (
    <div>
      <div className="flex justify-center w-full mb-5">
        <div className="w-full mt-3 flex flex-col lg:grid lg:grid-cols-12 lg:w-full">
          <div className="z-0 col-span-6 lg:!mb-0 h-full lg:h-auto w-full flex justify-center">
            <div className="w-full top-0 max-w-xs lg:max-w-none lg:w-[546px]">
              <div className="sticky top-0">
                <img
                  className="object-cover w-full h-full rounded-md"
                  src={`http://localhost:8080/upload/${watchData?.image}`}
                  alt="Watch"
                />
              </div>
            </div>
          </div>
          <InforProduct watch={watchData} />
        </div>
      </div>
      <div className="m-5">
        <Review showComment={watchData?.comments} />
        {watchData?.comments.length === 0 && <Comment />}
      </div>
    </div>
  );
}
