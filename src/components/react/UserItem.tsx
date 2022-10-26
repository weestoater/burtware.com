import React from "react";

function UserItem(props: any) {

  const user = props;

  return (
    <>
      <div className="user col-sm-12 mb-3">
        <img src={user.item.picture.large} alt="" className="picture" />
        <p className="name">
          <span className="badge bg-info text-black me-2">{user.item.nat}</span>{" "}
          {user.item.name.title} {user.item.name.first} {user.item.name.last}
        </p>
        <address className="address">
          {user.item.location.street.number} {user.item.location.street.name}{" "}
          <br />
          {user.item.location.city}
          <br />
          {user.item.location.state}, {user.item.location.country}
          <br />
          {user.item.location.postcode}
        </address>
        <p className="contact">
          <i className="bi bi-phone" aria-hidden="true" />{" "}
          <a href={`tel:${user.item.cell}`}>{user.item.cell}</a>
          <br />
          <i className="bi bi-telephone" aria-hidden="true" />{" "}
          <a href={`tel:${user.item.phone}`}>{user.item.phone}</a>
          <br />
          <i className="bi bi-envelope" aria-hidden="true" />{" "}
          <a href={`mailto:${user.item.email}`}>{user.item.email}</a>
        </p>
      </div>
    </>
  );
}

export default UserItem;
