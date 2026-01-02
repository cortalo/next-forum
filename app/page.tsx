import Filter from "@/app/_components/Filter";
import Pagination from "@/app/_components/Pagination";
import PostItem from "@/app/_components/PostItem";

export default function Home() {
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

        <PostItem />
        <Pagination />
      </div>
    </div>
  );
}
