import { useEffect, useState } from "react";
import AuthorCard from "../../components/authorCard";
import SearchBox from "../../components/search-box";
import useAuthorsApi from "../../service/api/authors";
import LoaderUI from "../../components/loader";

const Authors = () => {
  const [data, setData]: any = useState([]);
  const [testData, setTestData]: any = useState([]);
  const { getAllAuthors } = useAuthorsApi();

  useEffect(() => {
    getAllAuthors().then((res) => {
      setData(res.data);
      setTestData(res.data);
    });
  }, []);

  let updatedList = [...data];
  const searchAuthors = (val: any) => {
    updatedList = testData.filter(
      (author: any) =>
        author.first_name.toLowerCase().includes(val.toLowerCase()) ||
        author.last_name.toLowerCase().includes(val.toLowerCase())
    );

    setData(updatedList);
  };
  return (
    <div className="container-box relative">
      <h1 className="font-rotterburg text-[40px] text-center mt-[30px] text-[#c9ac8c]">
        Barcha Adiblar
      </h1>
      <div className="mt-[60px]">
        <SearchBox searchFunc={searchAuthors} />
      </div>
      <div className="flex flex-wrap align-center justify-center gap-[40px] mt-[50px]">
        {data.length > 0 ? (
          data?.map((author: any) => (
            <AuthorCard
              id={author?.id}
              first_name={author?.first_name}
              last_name={author?.last_name}
              date_birth={author?.date_birth}
              date_death={author?.date_death}
              image={author?.image}
            />
          ))
        ) : (
          <LoaderUI />
        )}
      </div>
    </div>
  );
};

export default Authors;
