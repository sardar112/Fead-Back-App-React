import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Card from '../../Shared/card/Card';

function AbputPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this project</h1>
        <p>This is the react app to leave feedback</p>
        <p>version: 1.0.1</p>
        <h3>Made By: M Saqib Raheem</h3>
        <h3>Designation: Software Engineer MEAN/MERN Stack Developer</h3>
        <p>
          <Link to='/'>
            <FaArrowLeft size={30} />
          </Link>
        </p>
      </div>
    </Card>
  );
}

export default AbputPage;
