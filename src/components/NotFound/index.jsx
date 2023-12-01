export default function index() {
  function getImgUrl(name) {
    return new URL(`${name}`, import.meta.url).href;
  }
  return (
    <div className="main-section">
      <div className=" my-5 d-flex align-items-center justify-content-center flex-column ">
        <img
          src={getImgUrl('/Teeth.png')}
          className="img-fluid my-3"
          width={350}
        />
        <h1 className="text-primary">PAGE NOT FOUND 404</h1>
        <p className="text-muted fs-2 text-center">
          We cannot find the page you are looking for
        </p>
      </div>
    </div>
  );
}
