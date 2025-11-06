/**import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll be in touch soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-6 sm:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="rounded-xl"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="rounded-xl"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="rounded-xl resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-foreground">Phone</h3>
                <p className="text-muted-foreground">0792772743</p>
                <p className="text-muted-foreground">0796235395</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                <p className="text-muted-foreground">rwigambaaaron@gmail.com</p>
                <p className="text-muted-foreground">shxtsngxgs@gmail.com</p>
                <p className="text-muted-foreground">fuhadandme@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-foreground">Office</h3>
                <p className="text-muted-foreground">
                  Gasabo District<br />
                  Kibagabaga Sector<br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;**/

import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import toast, { Toaster } from "react-hot-toast"
import { Mail, Phone, MapPinned } from "lucide-react";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm(
        "service_hlqa3hg",  
        "template_40dpchd",  
        form.current,
        "khld3ySZShjGDy1ww"  
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!")
          form.current?.reset()
        },
        (error) => {
          console.error("Error:", error.text)
          toast.error("❌ Failed to send message. Please try again.")
        }
      )
  }

  return (
    <section id="contact" className="py-20 px-6 sm:px-8 bg-background">
    <div className="max-w-7xl mx-auto">
      

      <Toaster position="bottom-right" />

   
<div className=" text-center mb-12">
 <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
          Get in touch
        </h2>
         <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
       </div>
     <div className="grid md:grid-cols-2 gap-8">
      <form
        ref={form}
        onSubmit={sendEmail} 
        className="space-y-8"
      >
    
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={3}
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
        >
          Send Message
        </button>
      </form>

      <div className="space-y-12">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-foreground">Phone</h3>
                <p className="text-muted-foreground">0792772743</p>
                <p className="text-muted-foreground">0796235395</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-foreground">Email</h3>
                <p className="text-muted-foreground">rwigambaaaron@gmail.com</p>
                <p className="text-muted-foreground">shxtsngxgs@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-xl">
                <MapPinned className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-foreground">Office</h3>
                <p className="text-muted-foreground">
                  Gasabo District<br />
                  Kibagabaga Sector<br />
                </p>
              </div>
            </div>
          </div>
        </div>  
    </div>
    </section>
  )
}

export default Contact
