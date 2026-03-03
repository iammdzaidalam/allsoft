import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-[100vh] -z-10 flex flex-col justify-between px-6 md:px-12 pt-20 pb-8 bg-[#f4f4f0]">
      {/* Top Columns */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-8 w-full max-w-7xl mx-auto">
        {/* Col 1 */}
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="text-xs md:text-sm font-mono text-gray-500 mb-1 md:mb-2">( Quick Links )</div>
          <a href="#" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">FAQ's</a>
          <a href="#" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">Terms & Conditions</a>
          <a href="#" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">Privacy Policy</a>
          <a href="#" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">Legal Disclaimer</a>
          <a href="#" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">Refund Policy</a>
        </div>
        {/* Col 2 */}
        <div className="flex flex-col gap-4 md:gap-6">
          <div className="text-xs md:text-sm font-mono text-gray-500 mb-1 md:mb-2">( Socials )</div>
          <a href="#" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">Facebook</a>
          <a href="#" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">Twitter</a>
          <a href="#" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">LinkedIn</a>
          <a href="#" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">Instagram</a>
        </div>
        {/* Col 3 */}
        <div className="flex flex-col gap-4 md:gap-6 col-span-2 md:col-span-1 mt-4 md:mt-0">
          <div className="text-xs md:text-sm font-mono text-gray-500 mb-1 md:mb-2">( Contact )</div>
          <a href="mailto:info@allsoft.co" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">info@allsoft.co</a>
          <a href="tel:18008917995" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">1800 891 7995</a>
          <a href="tel:+919303852900" className="text-xl md:text-4xl font-medium text-[#141414] hover:text-[#6b46ff] transition-colors">+91 93038 52900</a>
          <p className="text-xs md:text-base text-gray-600 mt-2 md:mt-4 max-w-xs">
            Allsoft Consulting Private Limited,<br />
            Office 408, Fourth Floor, Magneto Offizo,<br />
            G E Road Raipur, Chhattisgarh, INDIA.
          </p>
        </div>
      </div>

      {/* Bottom Huge Text */}
      <div className="w-full mt-auto pt-10 flex flex-col relative">
        <div className="flex justify-between items-end mb-2 px-2">
        </div>
        <h1 className="text-[16vw] font-bold tracking-tighter leading-[0.8] text-[#141414] text-center w-full whitespace-nowrap">
          allsoft<span className="text-[6vw] align-top">®</span>
        </h1>
      </div>
          <div className="text-sm font-medium text-gray-500 text-center">
            © 2025 allsoft®. All rights reserved.
          </div>
    </footer>
  );
};
