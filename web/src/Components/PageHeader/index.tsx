import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

// define type format of object

interface PageHeaderProps {
   title: string;
   // not required example, need to include a ? after prop name
   // title?: string;
}

// in typescript we call this (<Interface>) as a generics, can be interpreted as parameters 
const PageHeader: React.FC<PageHeaderProps> = (props) => {
   return (
      <header className="page-header">
         <div className="top-bar-container">
            <Link to="/">
               <img src={backIcon} alt="Voltar" />
            </Link>
            <img src={logoImg} alt="Proffy" />
         </div>

         <div className="header-content">
            <strong>{props.title}</strong>
            {props.children}
         </div>

      </header>
   )
}

export default PageHeader;