//nested Routes // our-domain.com/news/something-important
import { useRouter } from "next/router";
const SomethingImportant = () => {
  const router = useRouter();
  const newsId = router.query.newsId; //using the dynamic page name identifier to get the value from the URL
  return <h1>The {newsId} Page</h1>;
};

export default SomethingImportant;
