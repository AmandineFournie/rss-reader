import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import {useStaticQuery, graphql } from 'gatsby';
import * as styles from '../components/layout.module.css'; // Import the CSS module

const ArchivePage = () => {
    const data = useStaticQuery(graphql`
      query MyQueryArchive {
        allFeedVeille
        (
          sort: { fields: isoDate, order: DESC },
          limit: 900
        ) {
          nodes {
            title
            creator
            pubDate
            contentSnippet
            link
            enclosure {
              length
              type
              url
            }
          }
        }
      }
    `);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 30;
    const [itemsForCurrentPage, setItemsForCurrentPage] = useState(data.allFeedVeille.nodes.slice(0, itemsPerPage)); // Initial load
  
    const loadMoreItems = () => {
      const newPage = currentPage + 1;
      const startIndex = newPage * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const moreItems = data.allFeedVeille.nodes.slice(startIndex, endIndex);
      setCurrentPage(newPage);
      setItemsForCurrentPage((prevItems) => [...prevItems, ...moreItems]);
    };
  
    useEffect(() => {
      const handleScroll = () => {
        const { innerHeight, scrollY } = window;
        const bodyHeight = document.body.offsetHeight;
  
        if (
          innerHeight + scrollY >= bodyHeight - 200 &&
          currentPage * itemsPerPage < data.allFeedVeille.nodes.length
        ) {
          loadMoreItems();
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [currentPage]);
    
      
      
      

    return (
        <Layout pageTitle="Home Page">
    
          <h1 className="text-3xl font-bold text-slate-700 py-9">
            Archives
          </h1>
          <div className="bg-slate-700">
            <ul className="pt-7 grid grid-cols-3 gap-8">
              
        {itemsForCurrentPage.map((node) => (
    
            <li key={node.title} className="relative bg-gradient-to-r from-slate-500 to-slate-300 shadow-md p-7 rounded-3xl transform transition-transform duration-400 ease-in-out hover:-translate-y-1 hover:shadow-lg"  >
            <a href={node.link}>
              <div className="absolute inset-0 bg-white border border-slate-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-0 sm:rounded-3xl" style={{ zIndex: -10 }}></div>
              <h3 className="text-l font-semibold text-slate-700 pb-3">{node.title}</h3>
              <div>
                    {node.enclosure && node.enclosure.type && node.enclosure.url ? (
                      node.enclosure.type.startsWith('image/') ? (
                        <img src={node.enclosure.url} alt={node.title} className={styles.containimage}/>
                      ) : (
                        <p>Unsupported media type: {node.enclosure.type}</p>
                      )
                    ) : (
                      <p className="text-slate-600">No image available</p>
                    )}              
                   </div>
                  <div>
                  <p className="text-sm text-slate-800 py-3">
                    {node.contentSnippet.length > 330
                      ? node.contentSnippet.substring(0, 330) + '...'
                      : node.contentSnippet}
                  </p>              
                  </div>
                </a>
                </li>
              ))}
            </ul>
          </div>


          <div class="pt-24 px-16">
        <blockquote class="inline-block bg-gradient-to-r from-slate-200  to-slate-400 bg-clip-text text-xl italic text-right text-transparent">
          <p>"Ce que l'on pense, on le devient. Ce que l'on ressent, on l'attire. Ce que l'on imagine, on le crée"</p>
          <p class="text-lg">Bouddha</p>
        </blockquote>
      </div>   

        </Layout>
    );
};
export const Head = () => <Seo title="Archives" />


export default ArchivePage
  