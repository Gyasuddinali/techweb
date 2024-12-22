
import image1 from '../image/imag1.webp'
import image2 from '../image/image2.webp'
import image3 from '../image/imag3.webp'
import 'bootstrap/dist/css/bootstrap.min.css'
import image4 from '../image/image4.png'
export default function WhyUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
           
            {/* <Button className="bg-[#00BCD4] hover:bg-[#00ACC1]">
              BOOK MY SERVICE
            </Button> */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Illustration */}
          <div className="relative float-start">
            <img 
              src= {image4}
              alt="Person working at desk illustration"
              className="w-full h-auto"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">Why Us</h2>
            <p className="text-gray-600">
              We provide world class services and products to meet the requirements of
              esteemed customers with service guarantee.
            </p>
            <div className="relative">
            <img 
              src= {image2}
              alt="Person working at desk illustration"
              className="w-full h-auto"
            />
          </div>
            {/* Features */}
            <div className="space-y-6">
              {/* Cost Effective Solution */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#00BCD4] p-3 rounded-lg">
                  {/* <Settings className="h-6 w-6 text-white" /> */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Cost effective Solution</h3>
                  <p className="text-gray-600 mt-1">
                    Our prices are reasonable and affordable and we are flexible as per customer requirements.
                  </p>
                  <div className="relative">
            <img 
              src= {image3}
              alt="Person working at desk illustration"
              className="w-full h-auto"
            />
          </div>
                </div>
              </div>

              {/* Complete Product Range */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#00BCD4] p-3 rounded-lg">
                  {/* <BookOpen className="h-6 w-6 text-white" /> */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Complete Product Range</h3>
                  <p className="text-gray-600 mt-1">
                    We have a variety of product range we aimed to one stop solution provider in IT service & Repair
                  </p>
                  <div className="relative">
            <img 
              src= {image1}
              alt="Person working at desk illustration"
              className="w-full h-auto"
            />
          </div>
                </div>
              </div>

              {/* Service Guarantee */}
              <div className="flex items-start space-x-4">
                <div className="bg-[#00BCD4] p-3 rounded-lg">
                  {/* <Shield className="h-6 w-6 text-white" /> */}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Service Guarantee</h3>
                  <p className="text-gray-600 mt-1">
                    We give service warranty on all our works and products and we do not compromise on quality & standards.
                  </p>
                </div>
              </div>
            </div>
{/* 
            <Button className="bg-[#00BCD4] hover:bg-[#00ACC1] mt-6">
              BOOK MY SERVICE
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

