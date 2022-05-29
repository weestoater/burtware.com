import React from 'react';

import moment from "moment";

export default function Footer() {
    const thisYear = moment().format("YYYY");
    return (
        <footer className="footer">
          <p>&copy; {thisYear} &middot; Content on this site is licensed under  <a href="http://creativecommons.org">Creative Commons Attribution 4.0 International license</a>.</p>
        </footer>
    );
}