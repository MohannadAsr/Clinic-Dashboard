import { Form, InputGroup } from "react-bootstrap";

export default function Search({ setSearch }) {
  return (
    <div className="py-4 px-3">
      <InputGroup className=" w-100  my-4">
        <Form.Control
          placeholder="search for patients ..."
          aria-label="search"
          aria-describedby="basic-addon1"
          className="p-2 fs-5"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </InputGroup>
    </div>
  );
}
