import React from 'react'

import { Link } from 'gatsby'

const styles = {
  menu: {
    marginBottom: '25px',
  },
};

export default () => <div style={styles.menu}>
  <Link to="/">Home</Link> <Link to="/about/">About</Link>
</div>
