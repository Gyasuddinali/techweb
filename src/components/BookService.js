import { useState } from "react"

function BookService(){
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
    return(
        <div>
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
            </select>
<br></br>
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
        </div>
    )
}
export default BookService;