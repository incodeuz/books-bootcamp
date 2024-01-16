import { useEffect, useState } from "react";
import SearchBox from "../../components/search-box";
import LoaderUI from "../../components/loader";
import useBooksApi from "../../service/api/books";
import BookCard from "../../components/card";

const Books = () => {
  const [data, setData]: any = useState([]);
  const [testData, setTestData]: any = useState([]);
  const { getAllBooks } = useBooksApi();
  useEffect(() => {
    getAllBooks().then((res) => {
      setData(res.data);
      setTestData(res.data);
    });
  }, []);

  let updatedList = [...data];
  const searchBooks = (val: any) => {
    updatedList = testData.filter(
      (book: any) =>
        book.title.toLowerCase().includes(val.toLowerCase()) ||
        book.author.first_name.toLowerCase().includes(val.toLowerCase()) ||
        book.author.last_name.toLowerCase().includes(val.toLowerCase()) ||
        book.description.toLowerCase().includes(val.toLowerCase())
    );

    setData(updatedList);
  };

  console.log(data);

  return (
    <div className="container-box relative">
      <h1 className="font-rotterburg text-[40px] text-center mt-[30px] text-[#c9ac8c]">
        Barcha Kitoblar
      </h1>
      <div className="mt-[60px]">
        <SearchBox searchFunc={searchBooks} />
      </div>
      <div className="flex flex-wrap align-center justify-center gap-[40px] mt-[50px]">
        {data.length > 0 ? (
          data?.map((kitob: any, index: number) => (
            <BookCard
              key={index}
              price={kitob?.price}
              book_cover={kitob?.book_cover}
              title={kitob?.title}
              pages={kitob?.pages}
              description={kitob?.description}
              year={kitob?.year}
              id={kitob?.id}
              name={`${kitob?.author?.first_name} ${kitob?.author?.last_name}`}
            />
          ))
        ) : (
          <LoaderUI />
        )}
      </div>
    </div>
  );
};

export default Books;
