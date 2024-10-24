import {
    Facebook,
    Instagram,
    Linkedin,
    LucideIcon,
    Twitter,
    Youtube
} from 'lucide-react';
import React from 'react';

interface SocialLink {
  icon: LucideIcon;
  label: string;
  href: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Footer: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const socialLinks: SocialLink[] = [
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com' },
    { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://www.twitter.com' }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      // Add your form submission logic here
      console.log('Form submitted:', formData);
      // Reset form after submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <footer className="bg-gray-100 py-8 flex flex-col items-center border-t border-gray-300">
      <div className="flex flex-col md:flex-row justify-between w-full max-w-6xl px-6">
        <div className="flex-1 p-4">
          <h3 className="text-black font-bold text-lg mb-4">Contact Us</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              required
              className="p-2 border border-gray-300 rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-300"
            >
              Send
            </button>
          </form>
        </div>

        <div className="flex-1 p-4">
          <h3 className="text-black font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex flex-col gap-4">
            {socialLinks.map((social) => (
              <div key={social.label} className="flex items-center gap-2">
                <a
                  href={social.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  <social.icon size={24} />
                </a>
                <span className="text-gray-700">{social.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 text-sm text-gray-800">
        <p>Your Almanet Professional Services © {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;