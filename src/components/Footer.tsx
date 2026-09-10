import { Mail, Phone, MapPin } from 'lucide-react';
export default function Footer() {
  return <footer className="border-t border-white/10 bg-[#061a33]">
    <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 text-sm text-gray-300 md:grid-cols-2">
      <div><p className="font-semibold text-white">Muhammad Asadullah</p><p>Software Engineering Graduate</p></div>
      <div className="space-y-2 md:text-right">
        <a className="flex items-center gap-2 md:justify-end" href="mailto:muhammadasadullah427@gmail.com"><Mail className="h-4 w-4" />muhammadasadullah427@gmail.com</a>
        <a className="flex items-center gap-2 md:justify-end" href="tel:+923235965261"><Phone className="h-4 w-4" />+92 323 5965261</a>
        <p className="flex items-center gap-2 md:justify-end"><MapPin className="h-4 w-4" />Chak 261 RB Udhowali, Dijkot, Faisalabad</p>
      </div>
    </div>
    <p className="border-t border-white/10 py-4 text-center text-xs text-gray-500">© {new Date().getFullYear()} Muhammad Asadullah. All rights reserved.</p>
  </footer>;
}
