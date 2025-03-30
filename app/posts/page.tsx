"use client";

import React, { useEffect } from "react";

import { fetchPosts } from "@/store/features/postsSlice";

import { useSelector, useDispatch } from "react-redux";

import { RootState } from "@/store/Store";

import { useRouter } from "next/navigation";

const Posts = () => {
  const router = useRouter();

  const handleOpenSinglePost = (id: number) => {
    router.push(`/posts/${id}`);
  };

  const dispatch = useDispatch();

  const { posts, status, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts() as any);
  }, [dispatch]);

  return (
    <div className="w-full flex flex-col justify-center ">
      <div>
        <h3 className="text-5xl font-semibold text-center">POSTS</h3>
      </div>
      <div>
        {status === "loading" ? (
          <p>The data is still loading...</p>
        ) : (
          <div className="px-[3rem]">
            <div>
              <table className="border-collapse">
                <thead className="bg-blue-800 text-white text-sm">
                  <tr>
                    <td className="py-[0.2rem] px-[0.5rem] w-[80px]">
                      USER ID
                    </td>
                    <td className="py-[0.2rem] px-[0.5rem]">ID</td>
                    <td className="py-[0.2rem] px-[0.5rem]">TITLE</td>
                    <td className="py-[0.2rem] px-[0.5rem]">BODY</td>
                    <td className="py-[0.2rem] px-[0.5rem]"></td>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => {
                    return (
                      <tr className="text-sm" key={post.id}>
                        <td className="py-[0.2rem] px-[0.5rem] border-b border-neutral-300">
                          {post.userId}
                        </td>
                        <td className="py-[0.2rem] px-[0.5rem] border-b border-neutral-300">
                          {post.id}
                        </td>
                        <td className="py-[0.2rem] px-[0.5rem] border-b border-neutral-300">
                          {post.title}
                        </td>
                        <td className="py-[0.2rem] px-[0.5rem] border-b border-neutral-300">
                          {post.body}
                        </td>
                        <td className="py-[0.2rem] px-[0.5rem] border-b border-neutral-300">
                          <button
                            className="px-[1rem] py-[0.3rem] bg-rose-500 rounded-[30px] text-white cursor-pointer"
                            onClick={() => {
                              handleOpenSinglePost(post.id);
                            }}
                          >
                            see post
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
