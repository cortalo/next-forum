import Filter from "@/app/_components/Filter";
import Pagination from "@/app/_components/Pagination";
import PostItem from "@/app/_components/PostItem";
import { getDiscussPosts } from "@/lib/discussPosts";

export default async function Home() {
  const discussPosts = await getDiscussPosts();

  return (
    <div className="main">
      <div className="container">
        <div className="position-relative">
          <Filter />
          <button
            type="button"
            className="btn btn-primary btn-sm position-absolute rt-0"
            data-toggle="modal"
            data-target="#publishModal"
          >
            publish
          </button>
        </div>
        {/* pop up window for publish */}

        <ul className="list-unstyled">
          {discussPosts.map((post) => (
            <PostItem post={post} key={post.id} />
          ))}
        </ul>
        <Pagination />
      </div>
    </div>
  );
}
