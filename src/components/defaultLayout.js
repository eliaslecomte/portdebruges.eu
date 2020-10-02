import React from "react"

import Header from '../components/header';
import Menu from '../components/menu';
import Footer from '../components/footer';

const styles = {
  menu: {
    margin: 'auto',
    maxWidth: '400px',
  },
};

export default ({ children }) => (
  <div>
    <Header />
    <div style={styles.menu}>
      <Menu />
    </div>
    <section id="main">
				<div class="inner">
          <section id="one" class="wrapper style1">
            <div class="content">
              {children}
            </div>
          </section>
        </div>
      </section>
    <Footer />
  </div>
)
