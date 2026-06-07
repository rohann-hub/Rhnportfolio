import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Linkedin, Mail, MapPin, Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { projectId, publicAnonKey } from "/utils/supabase/info";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-7cbd2c8a/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Transmission successful!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Transmission error:", error);
      toast.error("Failed to transmit. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="space-y-16">
      <div className="flex flex-col md:flex-row items-end gap-4">
        <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none">
          Connect
        </h2>
        <div className="flex-1 h-2 bg-black mb-2" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="space-y-6">
            <p className="text-3xl font-black uppercase tracking-tighter leading-none">
              Ready for the <span className="bg-[#FFE500] px-2">Next Phase?</span>
            </p>
            <p className="text-xl font-bold leading-tight">
              I am currently open to high-impact roles, collaborations, and research opportunities.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-6 p-6 border-4 border-black group hover:bg-[#FFE500] transition-colors">
              <div className="bg-black p-3 text-white">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest opacity-60">Location</p>
                <p className="text-xl font-black uppercase">Agartala, India</p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 border-4 border-black group hover:bg-[#FFE500] transition-colors">
              <div className="bg-black p-3 text-white">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-widest opacity-60">Direct Line</p>
                <p className="text-xl font-black uppercase">rupjit001@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => window.open('https://www.linkedin.com/in/rupjitshil', '_blank')}
              className="flex-1 border-4 border-black p-4 font-black uppercase text-sm flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all"
            >
              LinkedIn <Linkedin size={18} />
            </button>
            <button 
              onClick={() => window.location.href = 'mailto:rupjit001@gmail.com'}
              className="flex-1 border-4 border-black p-4 font-black uppercase text-sm flex items-center justify-center gap-2 hover:bg-[#FFE500] transition-all"
            >
              Email <Mail size={18} />
            </button>
          </div>
        </div>

        <div className="bg-white border-4 border-black p-10 shadow-[12px_12px_0_0_#000]">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs font-black uppercase tracking-widest">Name</Label>
              <Input 
                id="name" 
                placeholder="YOUR NAME" 
                className="border-b-4 border-t-0 border-x-0 border-black rounded-none h-14 text-lg font-bold placeholder:text-gray-300 focus:ring-0 focus:border-[#FFE500] px-0 bg-transparent"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest">Return Address</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="EMAIL@EXAMPLE.COM" 
                className="border-b-4 border-t-0 border-x-0 border-black rounded-none h-14 text-lg font-bold placeholder:text-gray-300 focus:ring-0 focus:border-[#FFE500] px-0 bg-transparent"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-xs font-black uppercase tracking-widest">Message</Label>
              <Textarea 
                id="message" 
                placeholder="WHAT'S ON YOUR MIND?" 
                className="border-b-4 border-t-0 border-x-0 border-black rounded-none min-h-[120px] text-lg font-bold placeholder:text-gray-300 focus:ring-0 focus:border-[#FFE500] px-0 resize-none bg-transparent"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white p-6 font-black uppercase tracking-[0.2em] text-lg hover:bg-[#FFE500] hover:text-black transition-all disabled:opacity-50"
            >
              {isSubmitting ? "TRANSMITTING..." : "TRANSMIT DATA"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

