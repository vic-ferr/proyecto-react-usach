const Page = (props) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <button
          className="btn btn-info btn-md"
          onClick={() => props.setPage(props.page - 1)}
        >
          previous
        </button>
        <h3 className="text-white">Page {props.page}</h3>
        <button
          className="btn btn-info btn-md"
          onClick={() => props.setPage(props.page + 1)}
        >
          next
        </button>
      </div>
    </>
  );
};

export default Page;
