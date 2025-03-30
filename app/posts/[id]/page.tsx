"use client";
import { useParams } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";

import { fetchSinglePosts } from "@/store/features/postsSlice";

import { useEffect } from "react";

import { RootState } from "@/store/Store";

const page = () => {

  const { id } = useParams();

  const { singlePost, status } = useSelector((state: RootState) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {

    if (id) {

      dispatch(fetchSinglePosts(Number(id)) as any);
      
    }
  }, [id]);

  return (
    <div className="flex justify-center">
      <div>
        {status === "loading" ? (
          <p>The data is loading</p>
        ) : (
           <div className="px-[3rem]">
            <table>
                <thead className="bg-blue-800 text-white text-sm">
                    <tr>
                        <td className="py-[0.2rem] px-[0.5rem] w-[80px]">USER ID</td>
                        <td className="py-[0.2rem] px-[0.5rem]">ID</td>
                        <td className="py-[0.2rem] px-[0.5rem]">TITLE</td>
                        <td className="py-[0.2rem] px-[0.5rem]">BODY</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-sm">
                        <td className="py-[0.2rem] px-[0.5rem] border-b border-neutral-300">{singlePost?.userId}</td>
                        <td className="py-[0.2rem] px-[0.5rem] border-b border-neutral-300">{singlePost?.id}</td>
                        <td className="py-[0.2rem] px-[0.5rem] border-b border-neutral-300">{singlePost?.title}</td>
                        <td className="py-[0.2rem] px-[0.5rem] border-b border-neutral-300">{singlePost?.body}</td>
                    </tr>
                </tbody>
            </table>
           </div>
        )}
      </div>
    </div>
  );
};

export default page;
