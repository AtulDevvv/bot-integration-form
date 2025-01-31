import { useState } from "react";
import { dummyScrapedData } from "../data/data";

const SetupOrganization = ({ onNext }) => {
    const [companyName, setCompanyName] = useState("");
    const [websiteUrl, setWebsiteUrl] = useState("");
    const [description, setDescription] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onNext();
    };
  
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-500 to-gray-400 bg-clip-text via-white text-transparent">Setup Organization</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-[60%] p-2 border rounded shadow-md text-white/90 text-sm shadow-blue-500 focus:border  border-blue-500"
            required
          />
          <input
            type="url"
            placeholder="Company Website URL"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
           className="w-[60%] text-white/90 text-sm p-2 border rounded shadow-md shadow-blue-500 focus:border  border-blue-500"
            required
          />
          <textarea
            placeholder="Company Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-[80%] text-white/90 text-sm p-2 border rounded shadow-md shadow-blue-500 focus:border  border-blue-500"
            rows="4"
            required
          />
          <button type="submit" className="w-[50%] p-2 shadow-md shadow-black/45 bg-black/50 text-sm hover:bg-black/70 transition ease-in-out 2s text-white rounded">
            Next
          </button>
        </form>
        <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-500 to-black bg-clip-text via-white text-transparent">
  Scraping Progress
</h3>
          {dummyScrapedData.map((page, index) => (
            <div key={index} className="p-4 border rounded mb-2 border-gray-400">
              <p className="text-sm text-gray-300">
                <strong className=" bg-gradient-to-r from-gray-500 to-gray-600 bg-clip-text via-white text-transparent">URL:</strong> {page.url}
              </p>
              <p className="text-sm text-gray-300 font-semibold" >
                <strong className=" bg-gradient-to-r from-gray-500 to-gray-600 bg-clip-text via-white text-transparent">Status:</strong> {page.status}
              </p>
              {page.chunks.length > 0 && (
               <details className="group">
               <summary className="transition ease-in-out duration-2000 bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text via-white text-transparent text-md font-semibold cursor-pointer">
                 View Scraped Data
               </summary>
               <ul className="transition-all duration-5000 ease-in-out overflow-hidden max-h-0 group-open:max-h-[500px]">
                 {page.chunks.map((chunk, i) => (
                   <li className="text-sm text-white/70 " key={i} >{chunk}</li>
                 ))}
               </ul>
             </details>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
export default SetupOrganization  