import React from "react";

const book_img =
  "https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png";
const book_img2 =
  "https://lh3.googleusercontent.com/proxy/5xBaZGJpBMGfCymMmrbvk2ug9B_eGNtGHmV71Gg4zyprwVTYSIv50uKGPk2heNyGveFVX4MhoyHutCOqZhTKNoYW4m8HITo";
class Header extends React.Component {
  render() {
    return (
      <div className="ui text menu">
        <div className="item">
          <img src={book_img2} alt="img2" />
          <h3 className="item">The Pointless Book Search</h3>
        </div>
        <div className="ui right item">
          <img src={book_img} alt="img" />
        </div>
      </div>
    );
  }
}

export default Header;
