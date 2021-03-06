import React from 'react';
import AccountsUI from '../AccountsUI.jsx';

export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header>
      <h2>Peri</h2>

      <nav>
        <a href="/">Applicants</a>
        <a href="/about">About</a>
        <AccountsUI />
      </nav>
    </header>
    {content}
  </div>
)
