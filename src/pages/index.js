import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import {useStaticQuery, graphql } from 'gatsby';
import * as styles from '../components/layout.module.css'; // Import the CSS module




const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFeedVeille(
        sort: { fields: isoDate, order: DESC },
        limit: 18
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

  return (
    <Layout pageTitle="Home Page">

      <h1 className="text-3xl font-bold text-slate-700 py-9">
        Revue de presse
      </h1>

      <section class="text-gray-600 body-font bg-white dark:bg-slate-800 rounded-2xl my-5">
    <div class="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center">
        <div
            class="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1
                class="text-2xl font-bold leading-9 tracking-tight mb-3 text-grey-700 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                Revue de presse 
            </h1>

            <p class="mb-8 md:pl-0  pl-2 pr-2 leading-relaxed dark:text-gray-300">
            L'exploration anxiogène des informations est parfois déconcertante dans notre monde en constante évolution. 
            <br/>
            <br/>
            Cette revue de presse propose un tour d'horizon de l'actualité française et internationale pour mettre en lumière les sujets suscitant des préoccupations, soulevant des risques et des défis auxquels nous pourrions bientôt être confrontés. 
            <br/>
            <br/>
            N'hésitez pas à prendre du recul et à relativiser les informations que vous y trouvez            </p>
            <div class="flex justify-center">
                <a href="#"
                    class="inline-flex text-white bg-slate-600 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg">Archives </a>
                <a href="#"
                    class="ml-4 inline-flex text-slate-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Light Mode</a>
            </div>
        </div>
        <div class="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
        </div>
    </div>
</section>

<h1 className="text-3xl font-bold text-slate-200 py-9"> Les 18 dernières informations selectionnées </h1>


  
      <div className="bg-slate-700">
        <ul className="pt-7 grid grid-cols-3 gap-8">
          
          {data.allFeedVeille.nodes.map((node) => (

        <li key={node.title} className="relative bg-gradient-to-r from-slate-500 to-slate-300 shadow-md p-7 rounded-2xl transform transition-transform duration-400 ease-in-out hover:-translate-y-1 hover:shadow-lg"  >
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
        
      <form method="post" action="https://getform.io/f/3e481368-9955-4420-ad26-193cee0d765e">
      <div class="min-h-screen bg-slate-700 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 max-w-xl sm:max-w-xl mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="relative px-10 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="pb-6 text-3xl font-semibold text-slate-800">Une question ?</h1>
            </div>
            <div class="divide-y divide-slate-200">
              <div class="py-3 text-base leading-6 space-y-2 text-gray-700 sm:text-lg sm:leading-7">
              <div class="relative">
                  <input autocomplete="off" id="name" name="name" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-slate-300 text-slate-500 focus:outline-none focus:borer-rose-600" placeholder="Votre nom" />
                  <label for="name" class="absolute left-0 -top-2 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-2 peer-focus:text-gray-500 peer-focus:text-sm">Votre nom</label>
                </div>
                <div class="relative">
                  <input autocomplete="on" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-slate-300 text-slate-500 focus:outline-none focus:borer-rose-600" placeholder="Votre mail" />
                  <label for="email" class="absolute left-0 -top-2 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-2 peer-focus:text-gray-500 peer-focus:text-sm">Votre mail</label>
                </div>
                <div class="relative">
                  <input autocomplete="off" id="subject" name="subject" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-slate-300 text-slate-500 focus:outline-none focus:borer-rose-600" placeholder="Sujet" />
                  <label for="email" class="absolute left-0 -top-2 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-2 peer-focus:text-gray-500 peer-focus:text-sm">Sujet</label>
                </div>
                <div class="relative">
                  <input autocomplete="off" id="message" name="message" type="textarea" class="peer placeholder-transparent h-10 w-full border-b-2 border-slate-300 text-slate-500 focus:outline-none focus:borer-rose-600" placeholder="Votre message" />
                  <label for="message" class="absolute left-0 -top-2 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-2 peer-focus:text-gray-500 peer-focus:text-sm">Votre message</label>
                </div>
                <div class="relative pt-5 pb-10">
                  <input autocomplete="off" id="consent" name="consent" type="checkbox" class="peer h-6 w-6 border-2 border-slate-300 text-slate-500 focus:outline-none focus:border-rose-600" />
                  <span class="absolute left-8 text-gray-500 text-sm">En soumettant ce formulaire, j'autorise que les informations saisies soient utilisées pour permettre de me recontacter (obligatoire)</span>
                </div>
                <div class="relative pt-10 pb-1"> 
                  <button class="bg-slate-500 text-white rounded-md px-6 py-1">Envoyer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </form>              

    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
