import { Pagination } from "react-bootstrap";

export default function Paginations({ page, setPage, length }) {
  const paginate = (pageIndex) => {
    setPage(pageIndex);
    window.scrollTo(0, 0);
  };

  return (
    <div className="d-flex justify-content-center my-5">
      <Pagination>
        {Array.from({ length: Math.ceil(length / 8) }).map((item, index) => {
          return (
            <Pagination.Item
              key={index}
              active={index + 1 === page ? true : false}
              className="mx-1"
              onClick={() => {
                paginate(index + 1);
              }}
            >
              {index + 1}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
}
