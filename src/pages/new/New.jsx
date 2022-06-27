import './new.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const New = ({title}) => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="komugisha" />
              </div>
              <div className="formInput">
                <label htmlFor="email">Email </label>
                <input type="email" placeholder="komugisha@gmail.com" />
              </div>
              <div className="formInput">
                <label htmlFor="email">Email </label>
                <input type="text" placeholder="+256 78929929 " />
              </div>
              <div className="formInput">
                <label htmlFor="email">Password </label>
                <input type="password" placeholder="" />
              </div>
              <div className="formInput">
                <label htmlFor="email">Address </label>
                <input type="password" placeholder="Muyega" />
              </div>
              <div className="formInput">
                <label htmlFor="email">Address </label>
                <input type="password" placeholder="Muyega" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New