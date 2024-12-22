import React from 'react';
import '../App.css';
import img1 from '../image/Laptop.jpg'
import { FaFax, FaPhone } from 'react-icons/fa6'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
function Hero() {

  const [currentSlide, setCurrentSlide] = useState(0)

  const services = [
    {
      title: 'Laptop Repair at Home',
      image: 'img1',
      price: null
    },
    {
      title: 'AMC Services In Noida',
      image: '/placeholder.svg?height=400&width=600',
      price: '1495'
    },
    {
      title: 'Corporate Services',
      image: '/placeholder.svg?height=400&width=600',
      price: null
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }




  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-content">
          <span className="company-name">GA TECH SOLUTION</span>
          <h1>GA Tech Solution Computer AMC Services | Laptop Repair siwan</h1>
          <h2>One-Stop Solution To All Your IT Needs</h2>
          <p>
            In today's digital age, a seamless and uninterrupted computing experience is crucial. 
            Understanding this need, we offer comprehensive Annual Maintenance Contract (AMC) 
            services and reliable at-home computer repair services at home in Siwan.
          </p>
          <div className="amc-service">
            <h3>Annual Maintenance Contract (AMC) Service:</h3>
            <p>
              Our AMC services ensure that your computer systems run smoothly throughout the year. 
              We provide regular maintenance and support to prevent any technical issues.
            </p>

            Computer Repair Service at Home: For those urgent repairs and technical issues, our at-home 
            computer repair service in Noida is just a call away. We understand the inconvenience of carrying 
            your device to a repair shop, so we bring our expertise right to your doorstep. Whether it’s virus
             removal, hardware replacement, system upgrades, or troubleshooting, our skilled professionals handle
              all types of computer problems with ease and efficiency. Our commitment to customer satisfaction and 
              quality service makes us a trusted choice for AMC and computer repair services in Noida. Contact us today
               to ensure your computer systems are always in top-notch condition and receive quick, reliable repairs at the comfort of your home.



          </div>
          <h2>What Types Of Problems Can Occur With Your Laptop/Desktop:</h2>
   <h5>Laptop Window Installation Services |
  Battery sorting replacement or issue
 | Mother board repair service |
  | Laptop Power button is not working |
   Replacement of any keyboard or key sticks
     | Window 7, window 8, window10, & MAC installation 
     | Screen damaged repair service | Outlook setup | 
     Hard Disk failure | Overheating problem facing your PC
      | Cooling fan require to be replaced | Networking service 
      | Server creation | Hinj is need and broken to be diagnosed
       | Laptop/Desktop not turns on
</h5>
 
        </div>
        <div className="hero-image">
          <img src={img1} alt="Tech support illustration" />
        </div>
      </div>



      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">
            Choose from the wide range of services that suits your need
          </p>
        </div>

        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${services.length * 100}%`
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="w-full px-4"
                  style={{ flex: `0 0 ${100 / services.length}%` }}
                >
                  <div className="relative overflow-hidden group">
                    <div className="relative h-[300px]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40">
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-2xl font-bold mb-2">
                            {service.title}
                          </h3>
                          {service.price && (
                            <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                              Starting Price @{service.price}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {services.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>






      <div className="faq-item">
                <p>Where can I find reliable laptop repair services in Noida?</p>
              </div>
              <div className="faq-item">
                <p>What types of laptop repair services are offered in Noida?</p>
              </div>
              <div className="faq-item">
                <p>How long does it take to repair a laptop in Noida?</p>
              </div>
              <div className="faq-item">
                <p>What are the average costs for laptop repair in Noida?</p>
              </div>
              <div className="faq-item">
                <p>What types of computer repair services are available in Noida Sector 18?</p>
              </div>
              <div className="faq-item">
                <p>How long does it take to repair a computer in Noida Sector 18?</p>
              </div>
              <div className="faq-item">
                <p>Do computer repair shops in Noida Sector 18 offer on-site repair services?</p>
              </div>
              <div className="faq-item">
                <p>How can I find reliable computer repair services in Noida?</p>
              </div>
              <div className="faq-item">
                <p>What are the typical turnaround times for computer repairs in Noida?</p>
              </div>



   <div>
          <h2 className="text-3xl font-bold mb-6">Connect us</h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-start space-x-3">
              {/* <MapPin className="w-5 h-5 text-[#00BCD4] mt-1" /> */}
              <p>Ali Complex, Siwan, Bihar</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <FaPhone className="w-5 h-5 text-[#00BCD4]" />
              <p>(+91)9199234436, 06154-123456</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <FaFax className="w-5 h-5 text-[#00BCD4]" />
              <a href="mailto:gyasu@gmail.com" className="hover:text-[#00BCD4]">
                gyasu@gmail.com
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <global className="w-5 h-5 text-[#00BCD4]" />
              {/* <a href="https://sdtechsolution.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00BCD4]">
                https://sdtechsolution.com/
              </a> */}
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="w-full h-[300px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0157767611336!2d77.32562931508876!3d28.570074982445475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzEyLjMiTiA3N8KwMTknMzguMyJF!5e0!3m2!1sen!2sin!4v1629789876543!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

    </section>
  );
}

export default Hero;

