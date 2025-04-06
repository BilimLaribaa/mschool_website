export default function Breadcrumbs({title, description}) {
  return (
    <div>
     <div className="breadcrumb-area">
  <div
    className="breadcrumb-top default-overlay bg-img pt-100 pb-95"
    style={{ backgroundImage: "url(assets/img/bg/breadcrumb-bg.jpg)" }}
  >
    <div className="container">
      <h2>{title}</h2>
      <p>
        {description}
      </p>
    </div>
  </div>
  <div className="breadcrumb-bottom">
    <div className="container">
      <ul>
        <li>
          <a href="/">Home</a>{" "}
          <span>
            <i className="fa fa-angle-double-right" /> {title}
          </span>
        </li>
      </ul>
    </div>
  </div>
</div>
    </div>
  );
}
