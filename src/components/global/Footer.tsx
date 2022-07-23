import React from 'react';

import moment from "moment";

export default function Footer() {
    const thisYear = moment().format("YYYY");
    return (
        <footer className="footer">
          <div className="row">    
            <div className="col-sm-4">
              <a href="https://www.linkedin.com/in/ianburrett/" target="_blank" className="me-4">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://twitter.com/burtware" target="_blank">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
            <div className="col-sm-8">
              <p>&copy; 2016 - {thisYear} &middot; Content on this site is licensed under  <a href="http://creativecommons.org">Creative Commons Attribution 4.0 International license</a>.</p>
            </div>
          </div>
        </footer>
    );
}