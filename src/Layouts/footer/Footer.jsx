import PropTypes from 'prop-types';

function Footer({ bgColor, textColor }) {
  const footerStyles = {
    backgroundColor: bgColor,
    color: textColor,
    fontSize: '1.8rem',
  };

  return (
    <footer style={footerStyles}>
      <div className='container '>
        <h3>Copyright &copy; 2022 , Made By Sardar Saqib Raheem</h3>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};

Footer.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Footer;
