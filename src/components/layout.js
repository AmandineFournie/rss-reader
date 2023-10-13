import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  body,
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText, 
  siteTitle,
} from './layout.module.css'
import Navigation from './navigation';

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
  <div className={body}>
    <div className={container}>
      <Navigation/>
      <main>
        {children}
      </main>

    </div>
    <footer class=" static bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-around md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <a href="#"  class="text-base text-slate-700  hover:text-slate-500 sm:text-center dark:text-gray-slate font-semibold">L'Observatoire des Effractions Digitales 
        </a>
        
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="/mentionslegales" class="text-base text-slate-700 hover:text-slate-500 md:mr-6 font-semibold">Mentions Légales</a>
              </li>
              <li>
                  <p class="inline-block mr-4 min-h-[1em] w-0.5 self-stretch bg-slate-300 opacity-100 dark:opacity-50"></p>              
              </li>
              <li>
                  <a href="#" class="mr-4 text-base font-medium text-slate-500 hover:text-slate-700 md:mr-6">Light Mod</a>
              </li>
              <li>
                  <a href="#" class="mr-4 text-base font-medium text-slate-500 hover:text-slate-700 md:mr-6">Dark Mod</a>
              </li>

          </ul>
      </footer>
    </div>
    
  )
}

export default Layout