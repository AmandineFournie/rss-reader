import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'


const AboutPage = () => {
  return (
    <Layout pageTitle="Formulaire de contact">
<form method="post" action="https://getform.io/f/3e481368-9955-4420-ad26-193cee0d765e">
      <h1 className="text-3xl font-bold text-slate-300 py-5">
        Forumlaire de contact  
      </h1>
      <div class="min-h-screen bg-slate-700 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 max-w-xl sm:max-w-xl mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="relative px-10 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="pb-6 text-3xl font-semibold text-slate-700">Une question ?</h1>
            </div>
            <div class="divide-y divide-slate-200">
              <div class="py-3 text-base leading-6 space-y-2 text-gray-700 sm:text-lg sm:leading-7">
              <div class="relative">
                  <input autocomplete="off" id="name" name="name" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-slate-300 text-slate-500 focus:outline-none focus:borer-rose-600" placeholder="Votre nom" />
                  <label for="name" class=" absolute left-0 -top-2 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-2 peer-focus:text-gray-500 peer-focus:text-sm">Votre nom</label>
                </div>
                <div class="relative">
                  <input autocomplete="on" id="email" name="email" type="email" required="required" class="peer placeholder-transparent h-10 w-full border-b-2 border-slate-300 text-slate-500 focus:outline-none focus:borer-rose-600" placeholder="Votre mail" />
                  <label for="email" class="absolute left-0 -top-2 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-2 peer-focus:text-gray-500 peer-focus:text-sm">Votre mail</label>
                </div>
                <div class="relative">
                  <input autocomplete="off" id="subject" name="subject" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-slate-300 text-slate-500 focus:outline-none focus:borer-rose-600" placeholder="Sujet" />
                  <label for="subject" class="absolute left-0 -top-2 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-2 peer-focus:text-gray-500 peer-focus:text-sm">Sujet</label>
                </div>
                <div class="relative">
                  <input autocomplete="off" id="message" name="message" type="textarea" required="required" class="peer placeholder-transparent h-10 w-full border-b-2 border-slate-300 text-slate-500 focus:outline-none focus:borer-rose-600" placeholder="Votre message" />
                  <label for="message" class="absolute left-0 -top-2 text-gray-500 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-2 peer-focus:text-gray-500 peer-focus:text-sm">Votre message</label>
                </div>
                <div class="relative pt-5 pb-10">
                  <input autocomplete="off" id="consent" name="consent" type="checkbox" required="required" class="peer h-6 w-6 border-2 border-slate-300 text-slate-500 focus:outline-none focus:border-rose-600 hover:scale-105"  />
                  <span class="absolute left-8 text-gray-500 text-sm">En soumettant ce formulaire, j'autorise que les inforamtions saisies soient utilisées pour permettre de me recontacter (obligatoire)</span>
                </div>
                <div class="relative pt-10 pb-1"> 
                  <button class="bg-slate-500 text-slate-100 rounded-md px-6 py-1 hover:scale-105">Envoyer</button>
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
export const Head = () => <Seo title="Contact" />

export default AboutPage