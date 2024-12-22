'use client'

import { useState } from 'react'
import { FaFax, FaPhone } from 'react-icons/fa6'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Laptop Repair Service',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Column - Book Appointment Form */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Book your appointment</h2>
          <p className="text-gray-600 mb-6">
            We have an awesome and responsive team to support its customers and potential clients.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            /><br></br>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            /><br></br>

            <input
              type="tel"
              name="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleChange}
              required
            /><br></br>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            >
              <option value="Laptop Repair Service">Laptop Repair Service</option>
              <option value="Computer Repair">Computer Repair</option>
              <option value="Mobile Repair">Mobile Repair</option>
            </select><br></br>

            <textarea
              name="message"
              placeholder="Your message here"
              value={formData.message}
              onChange={handleChange}
              rows={4}
            /><br></br>

            <button
              type="submit"
              className="w-full bg-[#00BCD4] hover:bg-[#00ACC1]"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right Column - Connect Us */}
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
              <a href="mailto:info@sdtechsolution.com" className="hover:text-[#00BCD4]">
                gyasu@gmail.com
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <global className="w-5 h-5 text-[#00BCD4]" />
              <a href="https://sdtechsolution.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00BCD4]">
                https://sdtechsolution.com/
              </a>
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
      </div>
    </div>
  )
}


