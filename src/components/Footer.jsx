import React, { lazy } from 'react'

const Footer = () => {
    
  return (
    <div className="bg-black h-[500px] text-white pt-[60px]">
    <table className="w-[50%] ms-[25%]">
      <tbody className="text-center">
        <tr>
          <td>
            <a href="#" className="text-white font-bold">About OLX</a>
            <ul className="text-sm text-gray-500 mt-2">
              <li><a href="#">Company Info</a></li>
              <li><a href="#">OLX Impact</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">OLX Blog</a></li>
            </ul>
          </td>
          <td>
            <a href="#" className="text-white font-bold">How it Works</a>
            <ul className="text-sm text-gray-500 mt-2">
              <li><a href="#">Buying on OLX</a></li>
              <li><a href="#">Selling on OLX</a></li>
              <li><a href="#">OLX Safety Center</a></li>
              <li><a href="#">Shipping and Delivery</a></li>
              <li><a href="#">Payment Options</a></li>
            </ul>
          </td>
          <td>
            <a href="#" className="text-white font-bold">Legal</a>
            <ul className="text-sm text-gray-500 mt-2">
              <li><a href="#">User Agreement</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Intellectual Property</a></li>
              <li><a href="#">Dispute Resolution</a></li>
            </ul>
          </td>
          <td>
            <a href="#" className="text-white font-bold">Support</a>
            <ul className="text-sm text-gray-500 mt-2">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Support</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">OLX Community Forum</a></li>
              <li><a href="#">Report a Problem</a></li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <a href="#" className="text-white font-bold">Sitemap</a>
            <ul className="text-sm text-gray-500 mt-2">
              <li><a href="#">Categories</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Sitemap</a></li>
              <li><a href="#">Popular Searches</a></li>
              <li><a href="#">OLX Policies</a></li>
            </ul>
          </td>
          <td>
            <a href="#" className="text-white font-bold">Social Media</a>
            <ul className="text-sm text-gray-500 mt-2">
              <li><a

href="#">Facebook</a></li>

              
<li><a

href="#">Twitter</a></li>

              
<li><a

href="#">Instagram</a></li>

              
<li><a

href="#">YouTube</a></li>

              
<li><a

href="#">LinkedIn</a></li>

            
</ul>
          </td>
          <td colspan="2" className="text-center">
            <p className="text-sm text-gray-500">© 2023 OLX All rights reserved.</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default Footer