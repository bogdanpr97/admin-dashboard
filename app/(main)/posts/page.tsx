import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";
import PostsTable from "@/components/posts/PostsTable";

function PostsPage() {
  return (
    <section>
      <BackButton text="Go Back" link="/" />
      <PostsTable />
      <PostsPagination />
    </section>
  );
}

export default PostsPage;
